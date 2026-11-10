# Portfolio assets for tobi-dev

Supplied by Daniel on 5 Nov 2026. Images are in `public/work/<slug>/`, the capture kit in `tools/capture-kit/` and the diagram source in `tools/draw-diagrams.py`. OseiPrempeh was approved for publishing on 10 Nov 2026; its cover (recaptured from the live site) and card are in `public/work/oseiprempeh/`.

## What's here

`public/` holds only what the site shows. Updated 9 Nov 2026: screenshots no page used were moved to `assets/public/work/<slug>/` (git-ignored, local only); move one back into `public/work/<slug>/` when a case study references it.

| Folder | Contents | Source |
| --- | --- | --- |
| `public/` | `favicon.ico` (the one site icon, linked from `app/root.tsx`), `og.png` (default link preview; source `assets/og.svg`), `robots.txt`, `sitemap.css` | — |
| `app/assets/` | `hero-dallas-640.webp` and `hero-dallas-1280.webp`, imported by `app/data/home.ts` so Vite fingerprints them | Made from `assets/public/hero-image.webp` (10 Nov 2026) |
| `public/work/<slug>/` | Each project's `cover.webp`, its `card.webp` composite where set, the figures its markdown uses (each with a `-1x` copy), light and dark diagrams, `og.jpg` where made | See below |
| `public/work/lewisville/` | Cover, card, visit (desktop and phone), sermons (desktop), architecture diagram, `og.jpg` | Production build of `dclm-lewisville` `main` (commit 18ec2e1) with its seed content |
| `public/work/afromerica/` | Cover, card, artists and event (desktop), leaderboard (desktop and phone), architecture diagram, `og.jpg` | Live site, capture kit |
| `public/work/dlbc-tampa/` | Cover, contact (desktop and phone), gallery (phone), `og.jpg` | Production build of `dlbc-template` `main` |
| `public/work/rons-body-shop/` | Cover, card, home (desktop and phone), `og.jpg` | Production build of `RonsBodyShop` `main` |
| `public/work/led-wall/` | Cover, photos, port map and configuration-layers diagrams, `og.jpg` | Daniel's photos, 2 Sep – 3 Oct 2026 |
| `public/work/portfolio/` | Cover, about (desktop), home (phone), `og.jpg` | This site |
| `assets/public/` (local) | Hero photo original; unused captures for every project; the older OseiPrempeh shots (superseded by the 10 Nov cover) | — |
| `assets/originals/led-wall/` (local) | Full-resolution photos and the source fact sheet | — |
| `assets/og.svg` | Source for `public/og.png` | — |
| `tools/capture-kit/` | Screenshot and Lighthouse scripts for the live sites | — |
| `tools/draw-diagrams.py` | Source for the two diagrams (`python3 draw-diagrams.py <out-dir>`) | — |

All screenshots: 1440 × 900 desktop and 390 × 844 phone, at 2× pixel density, WebP quality 82, reduced motion on.

## Read before publishing

- **Lewisville `sermons-*`:** the capture machine had no internet, so the page shows its honest "We couldn't load the latest videos right now" state. That's useful as a figure for the "Fail honestly" decision; recapture from the live site for the normal view.
- **DLBC Tampa:** the full home page was left out. Its Events cards show **"NaN"** and "Invalid Date": `UPCOMING_EVENTS` in `src/utils/data.ts` has dates like "Every Sunday", and `EventsSection.tsx` passes them to `new Date()`. That's a code bug, so the live site likely shows it too. Fix it (show the day name for weekly events) before capturing the full page.
- **Ron's Body Shop:** the full page was left out. Its story and gallery images load from a design tool's host (`lh3.googleusercontent.com/aida-public`), which the capture machine couldn't reach, and they aren't the shop's own photos anyway. Recapture after the planned fixes.
- **OseiPrempeh:** the shots show the firm's statistics ("20+ Years", "1000+ Cases Won", cases handled per practice area) and a named testimonial. Don't publish them until the firm approves (`CONTENT.md` §7).
- **Afromerica:** run `node capture.mjs afromerica` from `tools/capture-kit`, then check every shot for voter names, emails or phone numbers before committing.

## Diagrams in the page

Show the light or dark SVG to match the site's theme, e.g. render both and hide one with CSS:

```html
<img class="theme-light" src="/work/lewisville/architecture-light.svg" alt="…" width="720" height="1180">
<img class="theme-dark"  src="/work/lewisville/architecture-dark.svg"  alt="…" width="720" height="1180">
```

```css
[data-theme='dark'] .theme-light, :root:not([data-theme='dark']) .theme-dark { display: none; }
```

Alt text for Lewisville: "Architecture: visitors load cached Next.js pages on Vercel that read content from Sanity; publishing in Sanity triggers a signed webhook that refreshes only the changed pages; forms go through a rate-limited contact API to Resend; sermons come from the YouTube feed."

Alt text for Afromerica: "Architecture: fans, judges and admins use a Next.js app on Vercel; API routes read and write Supabase Postgres, whose scoring functions feed a live leaderboard through Realtime; Paystack sends signed payment webhooks; Resend sends one-time codes and confirmations."
