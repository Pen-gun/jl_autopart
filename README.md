# JL Autoparts

JL Autoparts is a single-page marketing site for a motorcycle and scooter helmet,
glove, and auto spare parts shop in Satdobato, Lalitpur, Nepal.

It is built with Next.js 16, React 19, and Tailwind CSS v4, and is configured as a
fully static export. The deployed output is plain HTML, CSS, and JavaScript with no
server runtime or database.

## What This Repo Contains

- A lightweight storefront homepage with hero, about, contact, and footer sections
- Static metadata and structured data for search engines and local business listings
- Centralized business content in one file so contact details are easy to update
- Docker and Nginx assets for serving the exported site if needed

## Quick Start

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000 after the dev server starts.

## Available Scripts

- `pnpm dev` starts the Next.js development server
- `pnpm build` creates the static production export in `out/`
- `pnpm start` runs the production Next.js server for non-export workflows
- `pnpm lint` runs ESLint

## Project Structure

- `app/` application routes, layout, global styles, and page sections
- `app/components/` page sections and shared UI pieces used by the homepage
- `lib/site.ts` single source of truth for business details, links, and map URLs
- `public/` static assets such as logos or a storefront photo
- `nginx/` and `nginx.conf` deployment configuration for static hosting

## Content To Update

Most business-specific content lives in [`lib/site.ts`](lib/site.ts). Update that file
first when the shop name, phone number, hours, map location, or domain changes.

Check these values before going live:

| Field | What to put |
| --- | --- |
| `rawPhone` | Shop phone number, for example `+977 9812345678` |
| `whatsappNumber` | Same number with digits only, country code first, no `+` |
| `mapsQuery` | Exact Google Business listing name or a Plus Code |
| `url` | Final deployed domain |

If the shop hours change, update `hours` and `hoursNote` in [`lib/site.ts`](lib/site.ts)
and keep the opening hours in [`app/layout.tsx`](app/layout.tsx) aligned.

The site derives its WhatsApp link, phone link, map link, footer links, and
structured data from those values, so updating one file keeps the rest consistent.

## Optional Photo Upgrade

The hero currently uses a CSS gradient so the site ships without a large image.
To use a real storefront photo, add `hero.webp` to `public/` and follow the note in
[`app/components/Hero.tsx`](app/components/Hero.tsx).

## Build And Deploy

```bash
pnpm build
```

The production export is written to `out/`. That directory can be deployed to any
static host, including Cloudflare Pages, Netlify, and Vercel.

Recommended host settings:

| Host | Build command | Output directory |
| --- | --- | --- |
| Cloudflare Pages | `pnpm build` | `out` |
| Netlify | `pnpm build` | `out` |
| Vercel | `pnpm build` | `out` |

Use `pnpm` on the host so the lockfile is respected.

## Notes

- The footer year is rendered at build time, so rebuild once a year or whenever content changes.
- The site is configured for static export in [`next.config.ts`](next.config.ts).
- Metadata and local-business schema live in [`app/layout.tsx`](app/layout.tsx).
