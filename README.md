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
│   ├── home.tsx         # Hero, Selected Work, Studio teaser
│   ├── projects.tsx     # Index with category filter
│   ├── project-detail.tsx  # /projects/:slug
│   ├── about.tsx        # "Studio" — bio, credentials, pull quote
│   └── contact.tsx      # Static contact panel (no form)
├── components/
│   ├── Header.tsx  Footer.tsx  ThemeToggle.tsx
│   ├── ProjectCard.tsx     # `featured` (home) and `index` (projects) variants
│   └── HatchPlaceholder.tsx
└── data/
    ├── projects.ts      # All project content
    └── site.ts          # Email, location, social URLs
```

### Routes

`/` · `/projects` · `/projects/:slug` · `/about` · `/contact`

## Editing content

Nearly all copy lives in two files:

- **[app/data/projects.ts](app/data/projects.ts)** — one object per project. Adding an entry
  automatically creates its detail page, adds it to the index and filters, and
  wires prev/next pagination. `slug` becomes the URL; `cat` must be one of
  `fullstack` | `web` | `ai`.
- **[app/data/site.ts](app/data/site.ts)** — email, location, GitHub/LinkedIn URLs.

Page prose (hero, bio, pull quote) is inline in its route file.

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

The route list is derived from `projects.ts`, so **adding a project
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

- **`public/resume.pdf` does not exist.** The Résumé button in the header links
  to it and currently 404s — add the file or remove the button.
- **Imagery is placeholder.** Headshots and project screenshots render as
  diagonal-hatch stand-ins via `HatchPlaceholder`. Replacing them is a
  component swap, not a layout change.
- **ESLint config is broken** (`Plugin "@typescript-eslint" not found`) despite
  the plugins being installed. Use `npm run typecheck` meanwhile.

---

Built with ❤️ and lots of Coffee using React Router, TypeScript, Tailwind CSS & Docker.
