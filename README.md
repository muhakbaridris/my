# Muh. Akbar Idris — Academic Portfolio

A production-ready academic website built with Next.js 15, TypeScript, Tailwind CSS, Framer Motion, shadcn-style UI primitives, and Lucide icons.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Production

```bash
npm run build
npm start
```

The repository deploys directly to Vercel without additional configuration.

## Content

- Publications: `data/publications.json`
- Research projects: `data/research.ts`
- Blog posts: `content/blog/*.md`
- Contact endpoint: `app/api/contact/route.ts`
- Admin dashboard: `/admin`

The contact route validates and acknowledges submissions. Connect the handler to an email provider or database before collecting production messages.

## Admin dashboard and automatic deployment

The admin dashboard can add publications and blog posts by committing them directly to GitHub. A connected Vercel project then deploys the update automatically.

Add these Environment Variables in Vercel:

```text
ADMIN_USERNAME=your-admin-username
ADMIN_PASSWORD=your-strong-password
ADMIN_SECRET=a-long-random-secret
GITHUB_REPO=github-username/repository-name
GITHUB_TOKEN=a-fine-grained-github-token
```

The GitHub token requires **Contents: Read and write** access for this repository only. Never commit `.env.local` or a GitHub token to the repository.

Google Scholar does not provide a stable public API and automated scraping is commonly blocked. Use the admin dashboard to add verified DOI metadata instead.

## Deployment

1. Upload the source files to a GitHub repository. Do not upload `node_modules`, `.next`, `work`, `tmp`, or `.env.local`.
2. Import the repository at [vercel.com](https://vercel.com).
3. Add the environment variables above in Vercel project settings.
4. Deploy. Future admin updates will create GitHub commits and trigger Vercel deployments.
