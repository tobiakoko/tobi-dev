# tobi-dev

Personal portfolio for Daniel Akoko — full stack software engineer, Dallas, Texas.

**Live site:** [www.tobiakoko.com](https://www.tobiakoko.com)

An editorial, light-first portfolio with a warm paper ground, flat surfaces, and
300-weight display type. Ships light and dark palettes with a header toggle.

---

## Stack

| | |
|---|---|
| Framework | [React Router v7](https://reactrouter.com) in **SPA mode** (`ssr: false`) |
| Language | TypeScript (strict) |
| Styling | Tailwind CSS v4 — CSS-first, no `tailwind.config.js` |
| Build | Vite 5 |
| Analytics | `@vercel/analytics` |

Fonts are a pure system stack (`Helvetica Neue`/Arial), so there are no
webfont requests. There is no icon library or component library — the handful
of icons are inline SVG.

## Getting started

Requires Node 20+.

```bash
npm install
npm run dev          # http://localhost:5173
```

### Scripts

| Script | What it does |
|---|---|
| `npm run dev` | Vite dev server with HMR |
| `npm run build` | Production build to `build/client` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | `react-router typegen && tsc` — the primary correctness gate |
| `npm run format` | Prettier over the repo |

`npm run typecheck` is the check that matters; there are no tests.

## Project structure

```
app/
├── app.css              # Design tokens + base/component layers (all global CSS)
├── root.tsx             # HTML shell, theme bootstrap script, ErrorBoundary
├── routes.ts            # Route table
├── routes/
│   ├── layout.tsx       # Header + <Outlet/> + Footer
│   ├── home.tsx         # Hero, Selected work
│   ├── work.tsx         # Work index
│   ├── work-detail.tsx  # /work/:slug
│   ├── about.tsx        # Label rail: bio, past, education, ...
│   ├── contact.tsx      # Static contact list (no form)
│   └── not-found.tsx    # Catch-all 404 inside the layout
├── components/          # Header, Footer, ThemeToggle, Layout primitives,
│                        # WorkRow, CaseStudyHeader, MetaGrid, Stats, Figure, ...
└── data/
    ├── site.ts          # Name, title, email, location, links, pageMeta()
    ├── work.ts          # Case study types (safe for the browser)
    └── work.server.ts   # Reads + validates content/work/*.md at build time
content/work/            # One markdown file per case study
```

### Routes

`/` · `/work` · `/work/:slug` · `/about` · `/contact`

The old `/projects` and `/projects/:slug` URLs redirect permanently (308) to
`/work` in [vercel.json](vercel.json).

## Editing content

Every word and fact comes from [docs/build/CONTENT.md](docs/build/CONTENT.md).
In code, it lives in two places:

- **[content/work/](content/work/)** — one markdown file per case study, in the
  format of [docs/build/CASE-STUDY-TEMPLATE.md](docs/build/CASE-STUDY-TEMPLATE.md).
  Adding a file creates its page, adds it to Work and the sitemap, and wires the
  "Next project" link. `featured` puts it on Home. The build fails on a missing
  field, a missing image, raw HTML, or a stat that isn't in `CONTENT.md`.
- **[app/data/site.ts](app/data/site.ts)** — name, title, email, location,
  links, availability and booking link. A `null` link hides
  every place it would appear.

Page prose (hero, About) is inline in its route file.

## Theming

Colors are plain custom properties on `:root` and `[data-theme='dark']` in
[app/app.css](app/app.css), re-exported to Tailwind through `@theme inline`.

That indirection is deliberate: a bare `@theme` block inlines token values at
build time, which would freeze the palette and break runtime switching.
`@theme inline` makes the generated utilities emit `var(--ink)` instead, so
`bg-bg` / `text-ink` / `border-line` follow the toggle.

To change a color, edit the two token blocks — nothing else references a hex.

A blocking script in `root.tsx` applies the stored theme before first paint;
without it, dark-mode visitors get a white flash on every load. Tailwind's
`dark:` variant is wired to the same attribute via `@custom-variant`.

## Deployment

Deploys to **Vercel** at the apex domain `tobiakoko.com` (`www` redirects there
via [vercel.json](vercel.json)).

The build emits static files to `build/client` — **there is no server bundle**,
so `react-router-serve` does not apply.

### Prerendering (why the site is indexable)

`ssr: false` alone ships an empty shell: no `<title>`, no content, nothing for a
crawler that doesn't run JavaScript. [react-router.config.ts](react-router.config.ts)
therefore sets `prerender`, which emits real HTML for all ten routes at build
time while keeping client-side navigation.

The route list is derived from `content/work`, so **adding a case study
automatically adds its page to both the prerender list and the sitemap** — the
`buildEnd` hook generates `sitemap.xml` from the same array. Nothing to keep in
sync by hand.

SEO tags (title, description, canonical, OpenGraph, Twitter) come from
`pageMeta()` in [app/data/site.ts](app/data/site.ts); the `Person` structured
data lives in [app/root.tsx](app/root.tsx). Note that **canonicals must be
per-route** — a canonical in root's `links()` would apply site-wide and tell
Google every page is the homepage.

Security headers are defined in two places, and which one applies depends on
the host:

- **[public/_headers](public/_headers)** — Netlify / Cloudflare Pages
- **[vercel.json](vercel.json)** — Vercel

> **GitHub Pages cannot set custom headers.** Deploying there means none of the
> CSP, HSTS, or frame-protection headers take effect; you'd need Cloudflare in
> front to get them.

`script-src` uses `'unsafe-inline'` because React Router's SPA build emits
inline hydration scripts whose content changes every build, making a hash-based
policy unmaintainable and nonces impossible without a server.

### Docker

Builds the SPA and serves it from nginx as a non-root user (uid 101):

```bash
docker build -t tobi-dev .
docker run -p 8080:8080 tobi-dev
```

Config lives in [nginx.conf](nginx.conf), which mirrors the header set above and
provides the SPA fallback.

## Known gaps

- **No imagery yet.** Cards and project pages are text-only until real
  screenshots are added (see `docs/build/BUILD-PLAN.md`, Phase 3).

---

Built with ❤️ and lots of Coffee using React Router, TypeScript, Tailwind CSS & Docker.
