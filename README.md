# AutoAdvisor Agent — Marketing Site

Next.js 14 (App Router) landing page for [autoadvisoragent.com](https://autoadvisoragent.com).

## Local development

```bash
npm install
cp .env.example .env.local   # fill in BREVO_USER + BREVO_API_KEY
npm run dev
```

Open http://localhost:3000.

## Environment variables

| Name            | Description                                |
| --------------- | ------------------------------------------ |
| `BREVO_USER`    | Brevo account email (SMTP login)           |
| `BREVO_API_KEY` | Brevo SMTP master password / API key       |

## Deploy (Vercel)

1. Import this repo into Vercel.
2. Add `BREVO_USER` and `BREVO_API_KEY` under Project Settings → Environment Variables (Production + Preview).
3. Set the production domain to `autoadvisoragent.com`.

## Logo

Drop a `logo.png` into `/public`. The Navbar/Footer fall back to the wordmark if the file is missing.
