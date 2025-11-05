# Sohaib Rizwan — Frontend Developer Portfolio

A modern portfolio and landing site built using **Vite**, **React 18**, **TypeScript**, and **Tailwind CSS**.  
Includes a contact form powered by **Supabase Edge Functions** and **Resend** for secure email delivery.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-green.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3-purple.svg)](https://tailwindcss.com/)

## 🚀 Live Demo

You can view the live project here: [https://your-production-link-here.com](https://your-production-link-here.com)

<details>
<summary>📹 Demo Video (Click to Expand)</summary>

*(Insert a short GIF or video embed here for interactivity – e.g., upload a demo animation to GitHub and link it:)*  
![Portfolio Demo](demo.gif)  
*Smooth scrolling, form submission, and dark mode toggle in action.*

</details>

## 🧠 Overview

This project highlights modern frontend engineering principles with a focus on:

- **Performance & accessibility**
- **Clean, scalable component architecture**
- **Beautiful UI with smooth UX interactions**
- **Secure form submission workflow**

## ✨ Features

<details>
<summary>Click to see detailed features</summary>

| Feature | Description |
|---------|-------------|
| ⚡ **Fast Dev Environment** | Vite + React + TypeScript for lightning-fast builds and hot reloads. |
| 🎨 **Styling** | Tailwind CSS + optional Framer Motion for animations (e.g., hover effects, transitions). |
| 📩 **Contact Form** | Supabase Edge Function + Resend for spam-proof email delivery with validation. |
| ♻️ **Architecture** | Reusable components + modular structure for easy maintenance. |
| 📱 **Design** | Fully responsive across devices (mobile-first approach). |
| 🔍 **SEO** | Optimized metadata, Open Graph tags, and sitemap-ready. |
| 🌙 **UI** | Optional dark-mode support with CSS variables and localStorage persistence. |
| 🚀 **Deployment** | Pre-configured for Vercel/Netlify with CI/CD hooks. |

</details>

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Vite, Tailwind CSS, Framer Motion (optional)
- **Backend / Email**: Supabase Edge Functions (Node + TS), Resend API
- **Deployment**: Vercel / Netlify

## 📂 Project Structure

```
my-portfolio/
├─ public/
│  ├─ images/
│  └─ favicon.ico
├─ src/
│  ├─ components/
│  │  ├─ ui/          # Reusable UI elements (Button, Card, etc.)
│  │  └─ layout/      # Header, Footer, etc.
│  ├─ hooks/          # Custom hooks (useForm, useTheme)
│  ├─ pages/          # Page components (Home, About, Contact)
│  ├─ lib/            # Utilities (supabase client, validation)
│  ├─ index.css       # Global styles
│  └─ main.tsx        # Entry point
├─ supabase/
│  └─ functions/
│     └─ sendEmail/   # Edge function for emails
├─ .env.example
├─ package.json
└─ README.md
```

## ⚙️ Getting Started

<details>
<summary>Step-by-step setup (Click to Expand)</summary>

### 1️⃣ Clone Repo

```bash
git clone https://github.com/sohaibrizwan-dev/my-portfolio.git
cd my-portfolio
```

### 2️⃣ Install Packages

```bash
npm install
```

### 3️⃣ Environment Setup

Create a `.env` file from `.env.example` and add your keys:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

*Pro Tip: Get free keys from [Supabase](https://supabase.com) and [Resend](https://resend.com).*

### 4️⃣ Run Dev Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view it in your browser. The page will reload if you make edits.

### 5️⃣ Build Production Bundle

```bash
npm run build
```

Builds the app for production to the `dist` folder. For deployment:

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag `dist` to Netlify dashboard.

</details>

## 🧾 Email Function — Supabase Edge

- **Endpoint**: `/functions/v1/send-email`
- **Backend Code**: `supabase/functions/sendEmail/index.ts`
- **Example Payload**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hi Sohaib! Great portfolio 😊"
}
```

*Test it interactively: Use tools like Postman or the Supabase dashboard to invoke the function.*

## 👤 Author

**Sohaib Rizwan**  
Frontend Developer | Full-Stack Aspirant | AI & Cybersecurity Learner

- Portfolio: [https://your-production-link-here.com](https://your-production-link-here.com)
- GitHub: [https://github.com/sohaibrizwan-dev](https://github.com/sohaibrizwan-dev)
- LinkedIn: [https://linkedin.com/in/sohaibrizwan-dev](https://linkedin.com/in/sohaibrizwan-dev)
- Email: [your.personal.email@example.com](mailto:your.personal.email@example.com)

## 📄 License

Licensed under the [MIT License](LICENSE).  
See the [LICENSE](LICENSE) file for details.

---

*⭐ Star this repo if it helps you! Contributions welcome via pull requests.*  
*Built with ❤️ using modern web tools.*