import { Code, Database, Bot, Gauge, Palette, Workflow } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Frontend Development",
      description: "React, TypeScript, Next.js, and Tailwind CSS. Building performant, scalable web applications.",
      tags: ["React", "TypeScript", "Tailwind"],
      color: "from-primary to-primary-glow"
    },
    {
      icon: Database,
      title: "Headless WordPress",
      description: "Custom WordPress solutions with REST API, GraphQL, and modern frontend frameworks.",
      tags: ["WordPress", "WooCommerce", "REST API"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Bot,
      title: "AI Agent Development",
      description: "Building intelligent automation workflows with n8n, Flowise, and LangChain integrations.",
      tags: ["AI", "n8n", "LangChain"],
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Gauge,
      title: "Performance Optimization",
      description: "Lighthouse scores 95+, Core Web Vitals optimization, and speed enhancements.",
      tags: ["SEO", "Core Web Vitals", "Speed"],
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: Palette,
      title: "UX Motion Design",
      description: "Creating delightful user experiences with GSAP, Framer Motion, and microinteractions.",
      tags: ["GSAP", "Animations", "UX"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Workflow,
      title: "No-Code Automation",
      description: "Building powerful workflows with Zapier, Make.com, and custom integrations.",
      tags: ["Zapier", "Automation", "APIs"],
      color: "from-indigo-500 to-violet-500"
    }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card to-background" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Services</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What I <span className="text-gradient">Offer</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack expertise from concept to deployment. Let's build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="group relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/20"
              >
                {/* Gradient Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                
                {/* Floating Orb */}
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-all duration-500" />

                <div className="relative">
                  {/* Icon */}
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.color} mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium rounded-full bg-muted/50 text-muted-foreground border border-border group-hover:border-primary/30 transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.color} opacity-20 blur-xl`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
