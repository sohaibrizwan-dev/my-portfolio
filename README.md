# 🌐 Sohaib Rizwan — Frontend Developer Portfolio

A modern personal portfolio and landing site built with Vite, React (v18), TypeScript, and Tailwind CSS. It showcases projects, skills, and a contact form backed by a Supabase Edge Function and Resend for secure email delivery.

---

## 🚀 Live demo

Replace with your production URL:

[https://your-deployed-site.vercel.app](https://your-deployed-site.vercel.app)

---

## 🧠 About

This portfolio demonstrates frontend development work with an emphasis on performance, accessibility, and modern design patterns. The codebase is modular and ready to extend.

---

## ✨ Features

- Vite + React + TypeScript development stack
- Tailwind CSS for utility-first styling
- Contact form using a Supabase Edge Function + Resend for email delivery
- Reusable components and a clean folder structure
- Fully responsive layout
- SEO-friendly markup and metadata

---

## 🛠️ Tech stack

- React 18 (see `package.json`)
- TypeScript
- Vite
- Tailwind CSS
- Framer Motion (optional)

---

## 📂 Project structure

Minimal overview:

```
my-portfolio/
├─ public/
├─ src/
│  ├─ components/
│  ├─ hooks/
│  ├─ pages/
│  ├─ lib/
│  ├─ index.css
│  └─ main.tsx
├─ supabase/
├─ .env.example
├─ package.json
└─ README.md
```

---

## ⚙️ Getting started

1. Clone

```powershell
git clone https://github.com/sohaibrizwan-dev/my-portfolio.git
cd my-portfolio
```

2. Install

```powershell
npm install
```

3. Create `.env` from `.env.example` and set Resend / Supabase keys

4. Run

```powershell
npm run dev
```

---

## 🧾 Supabase Edge Function

Endpoint (example): `/functions/v1/send-email`

Request example:

```json
{
  "name": "Jane",
  "email": "jane@example.com",
  "message": "Hi Sohaib!"
}
```

---

## 👤 Author

Sohaib Rizwan — Frontend Developer

- GitHub: https://github.com/sohaibrizwan-dev
- LinkedIn: https://linkedin.com/in/sohaibrizwan-dev

---

## License

MIT
# 🌐 Sohaib Rizwan — Frontend Developer Portfolio

A modern personal portfolio and landing site built with Vite, React, TypeScript, and Tailwind CSS. It showcases projects, skills, and a contact form backed by a Supabase Edge Function and Resend for secure email delivery.

---

## 🚀 Live demo

View the deployed site (replace with your production URL):

[https://your-deployed-site.vercel.app](https://your-deployed-site.vercel.app)

---

## 🧠 About

This portfolio demonstrates frontend development work with an emphasis on performance, accessibility, and modern design patterns. The codebase is modular and ready to extend.

---

## ✨ Features

- Blazing-fast dev experience with Vite + React + TypeScript
- Tailwind CSS for utility-first styling
- Contact form using a Supabase Edge Function + Resend for email delivery
- Reusable components and a clean folder structure
- Fully responsive layout
- SEO-friendly markup and meta tags
- Dark mode support (if enabled)
- Ready for deployment on Vercel or Netlify

---

## 🛠️ Tech stack

**Frontend**

- React 18 (see `package.json`) — UI
- TypeScript — types and tooling
- Vite — bundler and dev server
- Tailwind CSS — styling
- Framer Motion — optional animations

**Backend / API**

- Supabase Edge Function (Node.js + TypeScript)
- Resend (email delivery)

**Deployment**

- Vercel / Netlify
- Optional: GitHub Actions for CI/CD

---

## 📂 Project structure (overview)

my-portfolio/

- public/ — static assets
- src/
  - components/ — UI components
  - hooks/ — custom hooks
  - pages/ — top-level pages / sections
  - lib/ — utilities and API helpers
  - index.css — Tailwind entry
  - main.tsx — app entry
- supabase/ — edge function(s)
- .env.example — example environment variables
- package.json
- README.md

---

## ⚙️ Getting started

1. Clone the repo

```powershell
git clone https://github.com/sohaibrizwan-dev/my-portfolio.git
cd my-portfolio
```

2. Install dependencies

```powershell
npm install
```

3. Create environment variables

Copy `.env.example` to `.env` and set values:

```text
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

4. Run the dev server

```powershell
npm run dev
```

5. Build for production

```powershell
npm run build
```

---

## 🧾 Supabase Edge Function — Email sender

# 🌐 Sohaib Rizwan — Frontend Developer Portfolio

A modern personal portfolio and landing site built with Vite, React, TypeScript, and Tailwind CSS. It showcases projects, skills, and a contact form backed by a Supabase Edge Function and Resend for secure email delivery.

---

## 🚀 Live demo

View the deployed site (replace with your production URL):

[https://your-deployed-site.vercel.app](https://your-deployed-site.vercel.app)

---

## 🧠 About

This portfolio demonstrates frontend development work with an emphasis on performance, accessibility, and modern design patterns. The codebase is modular and ready to extend.

---

## ✨ Features

- Blazing-fast dev experience with Vite + React + TypeScript
- Tailwind CSS for utility-first styling
- Contact form using a Supabase Edge Function + Resend for email delivery
- Reusable components and a clean folder structure
- Fully responsive layout
- SEO-friendly markup and meta tags
- Dark mode support (if enabled)
- Ready for deployment on Vercel or Netlify

---

## 🛠️ Tech stack

**Frontend**

- React 18 (see `package.json`) — UI
- TypeScript — types and tooling
- Vite — bundler and dev server
- Tailwind CSS — styling
- Framer Motion — optional animations

**Backend / API**

- Supabase Edge Function (Node.js + TypeScript)
- Resend (email delivery)

**Deployment**

- Vercel / Netlify
- Optional: GitHub Actions for CI/CD

---

## 📂 Project structure (overview)

my-portfolio/

- public/ — static assets
- src/
  - components/ — UI components
  - hooks/ — custom hooks
  - pages/ — top-level pages / sections
  - lib/ — utilities and API helpers
  - index.css — Tailwind entry
  - main.tsx — app entry
- supabase/ — edge function(s)
- .env.example — example environment variables
- package.json
- README.md

---

## ⚙️ Getting started

1. Clone the repo

```powershell
git clone https://github.com/sohaibrizwan-dev/my-portfolio.git
cd my-portfolio
```

2. Install dependencies

```powershell
npm install
```

3. Create environment variables

Copy `.env.example` to `.env` and set values:

```text
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
RESEND_API_KEY=your_resend_api_key
```

4. Run the dev server

```powershell
npm run dev
```

5. Build for production

```powershell
npm run build
```

---

## 🧾 Supabase Edge Function — Email sender

The repository includes a Supabase Edge Function that handles contact form submissions and sends emails via Resend.

Endpoint (local / deployed):

```
/functions/v1/send-email
```

Request example (JSON):

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hey Sohaib! I loved your portfolio."
}
```

Check `supabase/functions/sendEmail/index.ts` for implementation details and required env vars.

---

## 👤 Author

Sohaib Rizwan — Frontend Developer | Full-Stack Learner | AI & Cybersecurity Enthusiast

- Portfolio: https://your-deployed-site.vercel.app
- GitHub: https://github.com/sohaibrizwan-dev
- LinkedIn: https://linkedin.com/in/sohaibrizwan-dev
- Contact: your.email@example.com

---

## 📄 License

This project is licensed under the MIT License. See the `LICENSE` file for details (or add one if missing).
3. Create environment variables
