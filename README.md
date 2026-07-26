# JL Autoparts

Single-page static site for JL Autoparts, a motorcycle & scooter helmet, glove,
and auto spare parts shop in Satdobato, Lalitpur, Nepal.

Built with **Next.js 16 (static export) + Tailwind CSS v4**. The deployed
artifact is plain HTML/CSS/JS, with no server, no database, and no runtime.

## Before going live

All business data lives in **one file**: [`lib/site.ts`](lib/site.ts).
Replace every value marked `PLACEHOLDER`:

| Field | What to put |
| --- | --- |
| `rawPhone` | Shop phone, e.g. `+977 9812345678` |
| `whatsappNumber` | Same number, digits only, country code first, no `+`, e.g. `9779812345678` |
| `mapsQuery` | Exact Google Business listing name, or a Plus Code |
| `url` | Final deployed domain |

Also check `hours` / `hoursNote` and, if the shop is open Saturdays, update
`openingHoursSpecification` in [`app/layout.tsx`](app/layout.tsx) to match.

Everything else, including the WhatsApp deep link, `tel:` link, footer links,
map embed, and the `LocalBusiness` structured data Google reads, derives from
those values.

### Optional: real photos

The hero uses a CSS gradient so the site ships with zero image weight. To swap
in a storefront photo, drop `hero.webp` into `public/` and follow the comment in
[`app/components/Hero.tsx`](app/components/Hero.tsx). A real shop photo is the
single highest-value addition to this page.

## Develop

```bash
pnpm install
pnpm dev        # http://localhost:3000
```

## Build

```bash
pnpm build      # outputs static site to ./out
```

## Deploy

| Host | Build command | Output directory |
| --- | --- | --- |
| Cloudflare Pages | `pnpm build` | `out` |
| Netlify | `pnpm build` | `out` |
| Vercel | `pnpm build` | `out` |

Set the package manager to **pnpm** in the host's build settings so the
lockfile is honoured.

> The footer year is baked in at build time. Rebuild once a year, or whenever
> content changes.
