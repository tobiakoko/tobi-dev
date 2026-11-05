# Portfolio assets for tobi-dev

Supplied by Daniel on 5 Nov 2026. Images are in `public/work/<slug>/`, the capture kit in `tools/capture-kit/` and the diagram source in `tools/draw-diagrams.py`. The OseiPrempeh shots are held in `assets/public/work/oseiprempeh/` (git-ignored, not deployed) until the firm approves its statistics and testimonial.

## What's here

| Folder | Contents | Source |
| --- | --- | --- |
| `public/work/lewisville/` | 8 pages × desktop + phone, 3 full-page shots, `cover.webp`, architecture diagram (light and dark SVG) | Production build of `dclm-lewisville` `main` (commit 18ec2e1) with its seed content, which is the same content the live site was seeded with |
| `public/work/afromerica/` | Architecture diagram (light and dark SVG) | Drawn from the repo. **Screenshots: run the capture kit against the live site** (see below) |
| `public/work/dlbc-tampa/` | 7 pages × desktop + phone, `cover.webp` | Production build of `dlbc-template` `main` |
| `public/work/rons-body-shop/` | Home desktop + phone, `cover.webp` | Production build of `RonsBodyShop` `main` |
| `public/work/oseiprempeh/` | Home desktop + phone + full page, `cover.webp` | Production build of `D-Law` `main` |
| `public/work/led-wall/` | `cover.webp` and 7 photos (each with a `-1x` copy), port map and configuration-layers diagrams (light and dark SVG), `og.jpg` | Daniel's photos, 2 Sep – 3 Oct 2026. Full-resolution originals and the source fact sheet are in `assets/originals/led-wall/` (git-ignored, local only) |
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
<img class="theme-light" src="/work/lewisville/architecture-light.svg" alt="…" width="1600" height="980">
<img class="theme-dark"  src="/work/lewisville/architecture-dark.svg"  alt="…" width="1600" height="980">
```

```css
[data-theme='dark'] .theme-light, :root:not([data-theme='dark']) .theme-dark { display: none; }
```

Alt text for Lewisville: "Architecture: visitors load cached Next.js pages on Vercel that read content from Sanity; publishing in Sanity triggers a signed webhook that refreshes only the changed pages; forms go through a rate-limited contact API to Resend; sermons come from the YouTube feed."

Alt text for Afromerica: "Architecture: fans, judges and admins use a Next.js app on Vercel; API routes read and write Supabase Postgres, whose scoring functions feed a live leaderboard through Realtime; Paystack sends signed payment webhooks; Resend sends one-time codes and confirmations."
