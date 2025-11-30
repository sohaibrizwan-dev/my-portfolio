// Supabase Edge Function: contact
// Handles contact form submissions and sends emails via Resend
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactFormData {
    name: string;
    email: string;
    message: string;
}

serve(async (req) => {
    // Handle CORS preflight requests
    if (req.method === "OPTIONS") {
        return new Response(null, { headers: corsHeaders });
    }

    try {
        // Parse request body
        const { name, email, message }: ContactFormData = await req.json();

        // Validate input
        if (!name || !email || !message) {
            return new Response(
                JSON.stringify({
                    error: "Missing required fields",
                    details: "Name, email, and message are all required"
                }),
                {
                    status: 400,
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                }
            );
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return new Response(
                JSON.stringify({
                    error: "Invalid email format",
                    details: "Please provide a valid email address"
                }),
                {
                    status: 400,
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                }
            );
        }

        // Get environment variables
        const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
        const MY_EMAIL = Deno.env.get("MY_EMAIL");

        if (!RESEND_API_KEY || !MY_EMAIL) {
            console.error("Missing environment variables:", {
                hasResendKey: !!RESEND_API_KEY,
                hasMyEmail: !!MY_EMAIL
            });
            return new Response(
                JSON.stringify({ error: "Server configuration error" }),
                {
                    status: 500,
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                }
            );
        }

        // Sanitize HTML to prevent XSS attacks
        const sanitize = (str: string): string =>
            str.replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;")
                .replace(/\n/g, "<br>");

        // Build modern, minimal HTML email template
        const htmlTemplate = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Message</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; background-color: #f5f5f5;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 40px 20px;">
              <table role="presentation" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                
                <!-- Header -->
                <tr>
                  <td style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px 30px; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600; letter-spacing: -0.5px;">
                      💬 New Contact Message
                    </h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px 30px;">
                    
                    <!-- Name Field -->
                    <div style="margin-bottom: 24px;">
                      <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #667eea;">
                        Name
                      </p>
                      <p style="margin: 0; font-size: 16px; color: #1a1a1a; line-height: 1.5;">
                        ${sanitize(name)}
                      </p>
                    </div>
                    
                    <!-- Email Field -->
                    <div style="margin-bottom: 24px;">
                      <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #667eea;">
                        Email
                      </p>
                      <p style="margin: 0; font-size: 16px; line-height: 1.5;">
                        <a href="mailto:${email}" style="color: #667eea; text-decoration: none;">
                          ${sanitize(email)}
                        </a>
                      </p>
                    </div>
                    
                    <!-- Message Field -->
                    <div style="margin-bottom: 0;">
                      <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #667eea;">
                        Message
                      </p>
                      <div style="background-color: #f8f9fa; border-left: 4px solid #667eea; padding: 20px; border-radius: 4px;">
                        <p style="margin: 0; font-size: 16px; color: #1a1a1a; line-height: 1.6;">
                          ${sanitize(message)}
                        </p>
                      </div>
                    </div>
                    
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="background-color: #f8f9fa; padding: 24px 30px; text-align: center; border-top: 1px solid #e9ecef;">
                    <p style="margin: 0; font-size: 13px; color: #6c757d; line-height: 1.5;">
                      This message was sent via your portfolio contact form
                    </p>
                  </td>
                </tr>
                
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `;

        // Prepare email payload for Resend
        const emailPayload = {
            from: "My Website <onboarding@resend.dev>",
            to: [MY_EMAIL],
            reply_to: email,
            subject: `New Contact Form Message from ${name}`,
            html: htmlTemplate,
        };

        // Send email via Resend API
        const response = await fetch("https://api.resend.com/emails", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${RESEND_API_KEY}`,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(emailPayload),
        });

        const data = await response.json();

        if (!response.ok) {
            console.error("Resend API error:", {
                status: response.status,
                data
            });
            return new Response(
                JSON.stringify({
                    error: "Failed to send email",
                    details: data
                }),
                {
                    status: response.status,
                    headers: { ...corsHeaders, "Content-Type": "application/json" }
                }
            );
        }

        console.log("Email sent successfully:", {
            messageId: data.id,
            from: name,
            email
        });

        return new Response(
            JSON.stringify({
                success: true,
                messageId: data.id,
                message: "Email sent successfully"
            }),
            {
                status: 200,
                headers: { ...corsHeaders, "Content-Type": "application/json" }
            }
        );

    } catch (error) {
        console.error("Server error:", error);
        return new Response(
            JSON.stringify({
                error: "Internal server error",
                details: error instanceof Error ? error.message : "Unknown error"
            }),
            {
                status: 500,
                headers: { ...corsHeaders, "Content-Type": "application/json" }
            }
        );
    }
});
