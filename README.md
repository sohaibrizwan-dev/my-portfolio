# Sohaib Rizwan — Frontend Developer Portfolio

A personal portfolio and landing site built with Vite, React, TypeScript and Tailwind CSS. It showcases projects, services, and includes a contact form wired to a Supabase Edge Function to send emails via Resend.

## Table of contents

- About
- Live demo
- Features
- Tech stack
- Project structure
- Getting started
  - Prerequisites
  - Install & run (local)
  - Environment variables
- Deploying
- Contributing
- License
- Contact

## About

This repository contains a modern, responsive portfolio website implemented using a component-driven approach. It's intended to present your work, highlight services, and let visitors contact you via a contact form that sends email through a Supabase Edge Function and the Resend email API.

Author: Sohaib Rizwan — Frontend Developer

## Live demo

Add a link to your live site here (e.g. Vercel/Netlify/Cloudflare):

`https://your-domain-or-deployment-url.example`

## Features

- Component-driven React + TypeScript UI
- Responsive layout with Tailwind CSS
- Accessible UI primitives (Radix UI based components)
- Contact form that posts to a Supabase Edge Function (email sending through Resend)
- Client-side Supabase integration (auth / database ready)
- Vite fast dev server and optimized production build

## Tech stack

- React + TypeScript
- Vite
- Tailwind CSS
- Radix UI primitives
- Supabase (client + Edge Function)
- Resend (email provider used by the Edge Function)
- ESLint + TypeScript for linting and types

## Project structure (high level)

- `src/` — application source
  - `components/` — UI components and pages
  - `integrations/supabase/` — Supabase client and types
  - `hooks/` — custom hooks
  - `pages/` — top level pages
- `supabase/functions/sendEmail/` — Edge Function used to forward contact form submissions to Resend
- `public/` — static assets
- `package.json` — scripts and dependencies

Key files:
- `src/integrations/supabase/client.ts` — uses `import.meta.env.VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`
- `supabase/functions/sendEmail/index.ts` — expects `RESEND_API_KEY` and `MY_EMAIL` on the function environment

## Getting started

### Prerequisites

- Node.js (>= 18) or Bun
- A Supabase project (for the contact/email functionality)
- A Resend API key if you want the built-in email sending

### Install & run (local)

This project includes scripts in `package.json`. Examples below use both Bun and npm — use whichever matches your environment.

Using Bun:

```powershell
bun install
bun dev
```

Using npm:

```powershell
npm install; npm run dev
```

Available scripts (from `package.json`):

- `dev` — start Vite dev server
- `build` — build production assets
- `build:dev` — build with the development mode
- `preview` — preview the production build locally
- `lint` — run ESLint

### Environment variables

Create a `.env` file in the project root (do not commit secrets). At minimum, to run client features and the contact form you should set:

```env
VITE_SUPABASE_URL="https://your-project.supabase.co"
VITE_SUPABASE_ANON_KEY="your-public-anon-key"
```

Notes about the Supabase Edge Function used to send email:

- The Edge Function (`supabase/functions/sendEmail`) expects two environment variables configured in your Supabase project (these are server-side values and should NOT be stored in the client `.env`):

  - `RESEND_API_KEY` — your Resend API key (server secret)
  - `MY_EMAIL` — the receiving email address for contact messages

When testing locally, use the Supabase CLI or dashboard to set the function environment variables and test in the Supabase environment.

## Running the Supabase function (notes)

The function lives in `supabase/functions/sendEmail/index.ts`. It:

- accepts POST requests with JSON `{ name, email, message }`
- validates the payload
- uses `RESEND_API_KEY` and `MY_EMAIL` to call the Resend API and send an email

To deploy this function, follow Supabase's documentation for Edge Functions (or use the Supabase CLI):

- Configure `RESEND_API_KEY` and `MY_EMAIL` in your Supabase project settings (Secrets / Environment)
- Deploy the function via the Supabase CLI or dashboard

## Deploying the frontend

Common options:

- Vercel — recommended for Vite + React projects. Link your repo and set the same `VITE_` env vars in the Vercel dashboard.
- Netlify — also works well, configure build command (`npm run build`) and publish directory (`dist`).

When deploying, remember to set the client `VITE_SUPABASE_*` variables in your host's environment variables.

## Contributing

If you want to make improvements:

1. Fork the repo
2. Create a feature branch
3. Add or update tests where appropriate
4. Open a PR with a clear description

Please run linting and type checks before opening a PR:

```powershell
npm run lint
```

## License

This project is available under the MIT License. Update the license if you prefer a different one.

## Contact

Sohaib Rizwan — Frontend Developer

- Contact form on the site (sends email via Supabase function)
- Add an email or social links here if you want them publicly visible, or keep the contact form active.

---

If you'd like, I can:

- add a live demo URL and screenshots to the README
- add a small CONTRIBUTING.md and a GitHub Actions workflow for linting on push
- create a `.env.example` file with the VITE vars (non-secret placeholders)

Tell me which of the above you'd like next and I will implement it.