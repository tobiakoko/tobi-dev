# Portfolio capture kit

Takes the portfolio screenshots and Lighthouse scores from the **live** sites. Run it on your own computer (the session that made this kit couldn't reach the live sites).

## One-time setup

You need Node.js 20 or newer.

```bash
cd capture-kit
npm install
npm run setup        # downloads the Chromium browser Playwright uses
```

## Screenshots

```bash
npm run shots                          # every project
node capture.mjs afromerica            # one project
node capture.mjs lewisville --base http://localhost:3000   # a local build instead of the live site
```

Each page is captured at **1440 × 900 (desktop)** and **390 × 844 (phone)**, both at **2× pixel density**, and saved as **WebP** (quality 82) in `out/<project>/`:

- `<page>-desktop.webp` and `<page>-phone.webp`: the first screen
- `<page>-desktop-full.webp`: the whole page (only where `"full": true`), capped at 8,000 px tall

The script turns on reduced motion (so carousels and animations hold still), scrolls through each page once so lazy images load, and waits for the network to go quiet before each shot.

**Pages** are listed in `projects.json`. For Afromerica, the event, leaderboard and artist pages are found automatically from the first matching link on the home page; to pick a specific event, replace the `"discover"` entry with a `"path"`, e.g. `{ "name": "event", "path": "/events/grand-finale", "full": true }`.

**Privacy:** to hide personal data (voter names, emails, phone numbers) add CSS selectors to the project's `"mask"` list; Playwright paints over those elements. Check every image before publishing anyway.

## Lighthouse

```bash
npm run lighthouse                     # every project
node lighthouse.mjs lewisville         # one project
```

Runs Lighthouse 12 three times per page, on mobile and desktop, keeps the median, and writes `out/lighthouse/scores.md`: a table to paste into `CONTENT.md`. Close other heavy apps while it runs; scores drop on a busy machine.

## Where the files go in tobi-dev

Copy what you'll use into `public/work/<slug>/` in the portfolio repo, and name the main desktop shot `cover.webp`. Delete anything with personal data you didn't mask.
