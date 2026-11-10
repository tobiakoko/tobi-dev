# Build plan: tobiakoko.com

Four phases. Each ends with a pull request and a gate. Tick tasks as you finish them. **Ask** marks a stop for the owner.

Starting point: `main` is the old dark template site (noindex, fake contact form, broken résumé link). Pull request #4 (`redesign/editorial-system-seo`) prerenders every route, fixes search metadata and headers, and introduces the editorial design. It's unmerged. Phase 1 finishes it.

---

## Phase 1: Finish and merge PR #4 (branch `redesign/editorial-system-seo`)

Goal: a live site with no wrong facts, no placeholders and correct search metadata. Visual refinement comes in Phase 2.

- [x] **1.0** Check out `redesign/editorial-system-seo`, rebase on `main`, and add `CLAUDE.md` and `docs/build/*` in a `docs:` commit.
- [x] **1.1** Rename routes: `/projects` → `/work`, `/projects/:slug` → `/work/:slug`. Add permanent redirects for the old paths in `vercel.json`. Update the prerender list, sitemap, header and links. *Done when:* `/projects/afromerica` redirects 308 to `/work/afromerica`, and the sitemap lists only `/work` URLs.
- [x] **1.2** Header labels: **Work, About, Contact** (replacing "Portfolio" and "Studio"). Remove the Résumé button from the header.
- [x] **1.3** Projects data: delete Ask Kumuyi; set every project's title, year, stack, location, role and outcome from `CONTENT.md` §6; order them per §6. *Done when:* each stack matches §6 exactly, and the sitemap has 11 URLs (4 pages + 7 projects).
- [x] **1.4** Remove every `HatchPlaceholder` from public pages. Cards and project pages are text-only until Phase 3 adds real screenshots. Delete the component when it's unused.
- [x] **1.5** Copy: replace Home, About and Contact text with the `CONTENT.md` §2.2, §4.1–4.2 and §5 copy (first person). Leave the other About sections for Phase 2.
- [x] **1.6** Résumé: removed from the site by the owner's decision; experience, education and certifications live on About instead (2.10). *Done when:* no link on the site returns 404.
- [x] **1.7** ESLint: replace `eslint.config.js` with the flat config below, set `"lint": "eslint ."`, and change `meta({}: Route.MetaArgs)` to `meta()` in the route files. *Done when:* `npm run lint` exits 0.

  ```js
  import js from '@eslint/js';
  import globals from 'globals';
  import tseslint from 'typescript-eslint';
  import react from 'eslint-plugin-react';
  import prettier from 'eslint-config-prettier/flat';

  export default tseslint.config(
    { ignores: ['build', '.react-router', 'node_modules'] },
    js.configs.recommended,
    tseslint.configs.recommended,
    react.configs.flat.recommended,
    react.configs.flat['jsx-runtime'],
    {
      languageOptions: { globals: globals.browser },
      settings: { react: { version: 'detect' } },
    },
    prettier,
  );
  ```

- [x] **1.8** Dependencies and config: `npm audit fix` (no `--force`); move `terser` to `devDependencies` or remove it if the build doesn't need it; remove `gh-pages` and its script; fix "webiste" in `package.json`; delete `public/_headers` and `public/_redirects` (Vercel ignores them; headers live in `vercel.json`). *Done when:* `npm audit` shows 0 critical; the build passes from a clean `npm ci`.
- [x] **1.9** Add a global `prefers-reduced-motion: reduce` guard to `app.css` that removes transitions and smooth scrolling.
- [x] **1.10** `Person` JSON-LD: `jobTitle` "Software Engineer"; keep both names; `knowsAbout` from the stacks in `CONTENT.md` §6.
- [ ] **1.11** Check the Vercel preview: every route returns 200 with its own title and canonical; an unknown URL shows the 404 inside the layout; the theme toggle works without a flash; the link preview shows correctly in LinkedIn Post Inspector.
- [ ] **1.12 Ask:** owner reviews the preview and approves the merge.
- [ ] **1.13** After merge: owner verifies `tobiakoko.com` in Google Search Console and submits `https://tobiakoko.com/sitemap.xml`.

**Gate 1:** typecheck, lint and build pass; no placeholders, no 404 links, no wrong facts; merged to `main`.

---

## Phase 2: Structure and design (branch `portfolio/phase-2-structure`)

Goal: the minimalist, spacious design from `DESIGN-SYSTEM.md`, the four-section structure, and case study pages driven by markdown.

- [x] **2.0 Ask:** owner picks the headline from `CONTENT.md` §2.1 (default A).
- [x] **2.1** Tokens: update `app.css` to the color tokens in `DESIGN-SYSTEM.md` (light unchanged, dark becomes neutral). Add `@fontsource-variable/inter` and the type scale as utilities or `@theme` values.
- [x] **2.2** Contrast: measure every text/background pair in both themes; record the ratios in `DESIGN-SYSTEM.md`; adjust any that fail.
- [x] **2.3** Layout primitives: `Container` (wide), `Prose`, `LabelRail` (label column + content), `Section` (section gap). Skip link to `<main>`.
- [x] **2.4** `Header` and `Footer` per `DESIGN-SYSTEM.md`, including the mobile panel with focus return and Escape.
- [x] **2.5** Content loader: `content/work/<slug>.md` with front matter per `CASE-STUDY-TEMPLATE.md`; `app/data/work.ts` parses with `gray-matter`, renders markdown with `marked` at build time, validates required fields and fails the build on a missing field or cover file. Migrate the six projects' current text into these files. Prerender list and sitemap read from the loader.
- [x] **2.6** Components: `WorkRow`, `DisciplineTag`, `CaseStudyHeader`, `MetaGrid`, `Stats`, `Figure`, `FigurePair`, `ResultsTable`, `Callout`, `NextProject`, `TextLinks`.
- [x] **2.7** Home per `DESIGN-SYSTEM.md` and `CONTENT.md` §2: hero, Selected work, How I work, availability.
- [x] **2.8** Work index per §3.
- [x] **2.9** Case study page per `CASE-STUDY-TEMPLATE.md`, using the label rail. Sections with no content yet are hidden, not shown empty.
- [x] **2.10** About per §4 in the label rail: Bio, How I work, Present, Past, Origins, Education, Certifications, Community, closing line. Hide `TODO(content)` items.
- [x] **2.11** Contact per §5.
- [x] **2.12** 404 per `DESIGN-SYSTEM.md`.
- [x] **2.13** Check every page at 320, 375, 768 and 1280 px in both themes; no horizontal scroll; keyboard walk-through of header, menu, toggle and links.

**Gate 2:** every page matches `DESIGN-SYSTEM.md`; copy matches `CONTENT.md`; axe shows 0 violations on every page (manual run is fine until Phase 4).

---

## Phase 3: Case studies (branch `portfolio/phase-3-case-studies`)

Goal: full case studies with real screenshots, diagrams and measured results.

- [x] **3.0 Ask:** owner confirms which clients have given permission to be named and shown (`CONTENT.md` §7). Don't publish screenshots of a client without it.
- [x] **3.1** Screenshots: the owner has supplied a capture kit in `tools/capture-kit/` (Playwright + sharp, `projects.json` lists every page) and a first set of images in `public/work/`. Wire it up as `npm run screenshots` ("node tools/capture-kit/capture.mjs"), keeping its sizes. Then make `cover` required in `work.server.ts` (it's optional during Phase 2). *Done 5 Nov 2026:* `npm run screenshots` and `npm run images` (half-width `-1x` copies for srcset, and `og.jpg` link previews). `cover` stays optional until the LED wall and OseiPrempeh have usable covers. Original task text, for reference: `scripts/screenshots.ts` (Playwright): for each project, capture the pages listed in `CONTENT.md` at 1440×900 and 390×844, `deviceScaleFactor: 2`, WebP quality 80, into `public/work/<slug>/`. Add `npm run screenshots`. Mask any personal data with Playwright's `mask` option.
- [x] **3.2** Diagrams: Lewisville and Afromerica already exist as hand-drawn SVG in light and dark (`public/work/<slug>/architecture-{light,dark}.svg`, source `tools/draw-diagrams.py`). The `Figure` component shows the one that matches the theme. *Done 5 Nov 2026:* the LED wall port map was added to `tools/draw-diagrams.py`; Mermaid wasn't needed. For other projects, Mermaid: render each case study's ` ```mermaid ` block to `public/work/<slug>/architecture.svg` at build time with `@mermaid-js/mermaid-cli`, styled to the tokens; ship the SVG only.
- [ ] **3.3** Write **Lewisville** (*written 5 Nov 2026; before/after pairs still to add*) from `CONTENT.md` §6.1. Before/after figures from the owner's Phase 4 captures (`docs/build/redesign-before/screens` and `redesign-after/screens` in the Lewisville repo, local only). **Ask** the owner to supply them.
- [x] **3.4** Write **Afromerica** from §6.2 (needs permission from 3.0).
- [x] **3.5** Write **DLBC Tampa** from §6.3.
- [x] **3.5a** Write **LED wall** from §6.7. (*Done 5 Nov 2026: port map, five-layer diagram, issues log, cover and six photos. The self-test "after" photo is still to come; the working wall stands in.*) Redraw its two diagrams (the five-layer configuration stack and the final port map) as SVG to the design tokens. Use only photos the owner supplies, with no congregation faces.
- [x] **3.6** Write **Portfolio** from §6.6.
- [ ] **3.7** **Ron's Body Shop** and **OseiPrempeh:** (*Ron's short version with screenshots done 5 Nov 2026; OseiPrempeh waits on the firm.*) write only after the client fixes in "Outside this repo" below are done and the owner supplies the results. Until then their pages show the short version with screenshots.
- [x] **3.8** Per-project link-preview image (1200×630) generated from the cover at build time; `og:image` per case study.
- [x] **3.9** Run Lighthouse (mobile) on each live project site and record the scores in `CONTENT.md`.

**Gate 3:** every case study has every template section filled or hidden with `TODO(content)`; every number traces to `CONTENT.md`; every image has real alt text.

---

## Phase R: Warm Editorial redesign (branch `redesign/warm-editorial`)

Goal: apply the Warm Editorial system (`DESIGN-SYSTEM.md`) to the existing app, following `REDESIGN-IMPLEMENTATION.md` section by section. Same architecture: SPA mode with prerendering, `meta()` per route, markdown case studies. Phase 4 runs after this phase, on the new design.

- [ ] **R.0 Ask:** (*7 Nov 2026: (a) received as `docs/build/prototype.html`; (b) taken from the prototype into `CONTENT.md` §2–5; (c) still to come.*) The owner supplies (a) the static prototype HTML (the pixel reference the redesign docs point to; it isn't in the repo), (b) the approved copy the docs reference but don't quote (About subheading and longer bio, service descriptions, page leads, the Contact callout quote), and (c) the hero photo with its photographer's name. Each new line goes into `CONTENT.md` before it goes on a page.
- [x] **R.1** Foundation (§2–6): install Manrope and DM Sans, remove Inter; warm light palette and the new tokens; headings in Manrope 500; 11px eyebrows; acid `::selection`; square form controls; 1320 px wide container. Contrast ratios are in `DESIGN-SYSTEM.md`.
- [x] **R.2** Data (§13–14): `proposition` required in `WorkMeta` and validated in `work.server.ts` (*the seven lines are in the content files and `CONTENT.md` §6, 7 Nov 2026*); hero, proof strip, services and capabilities copy in `CONTENT.md` and `app/data/*`. (*Done 7 Nov 2026: `app/data/home.ts`, `app/data/contact.ts`.*)
- [x] **R.3** Header and Footer (§7). (*Done 7 Nov 2026: brand with teal period, underline-grow nav, round toggle, Menu/Close drawer below 1000 px; footer CTA band and three-column bottom bar, dark in both themes.*)
- [x] **R.4** Home (§8) with `ProjectCard` (§9), `ProofStrip`, `SectionHeading`, `ServiceGrid`; hero photo placeholder and `TODO(content)` until R.0 (c). (*Done 7 Nov 2026; the photo and credit switch on from `HERO_PHOTO` in `app/data/home.ts`.*)
- [x] **R.5** Work index and case study page (§9–10): `PageHeader`, `CaseFacts`, `CaseSection`, `ProjectPagination`. (*Done 7 Nov 2026. The markdown `##` sections render as case sections with their existing headings; the outcome line and stats form the Overview; timeline, team, location and links stay in the facts row so nothing is lost. OseiPrempeh's card is text-only until it has a cover.*)
- [x] **R.6** About (§11): `Rail`, `Capabilities`, `Timeline`, `TwoColDivided`, `AboutCtaBand`. (*Done 7 Nov 2026. Rail labels are H2s styled as eyebrows and role titles H3s, for a clean heading outline. The teal band stays the darker teal in dark mode so white text passes contrast. The DLBC ICT role shows without bullets, as before, until its TODO is resolved.*)
- [x] **R.7** Contact (§12): `DirectList`, `ContactForm` (mailto, no fake success), `CalloutQuote`. (*Done 7 Nov 2026. The draft is composed in `app/data/contact.ts`. Without JavaScript the form falls back to the browser's own mailto handling, so the CSP's `form-action` now allows `mailto:`. The 404 page moved to the new styles, and the old Layout, MetaGrid and TextLinks components are gone.*)
- [x] **R.8** Tests and acceptance (§16–18): every page at 320, 375, 768 and 1280 px in both themes, hero on one screen at 390 px, axe 0 serious or critical with the drawer open, guards against blue, Inter and lorem. (*Done 7 Nov 2026: `npm run test:e2e`, 68 Playwright tests against the prerendered build served with the `vercel.json` headers. The doc's "unit" checks run in Playwright too, so no new test framework was needed. One acceptance item stays open: the case study spine headings.*)

**Gate R:** the §18 acceptance list in `REDESIGN-IMPLEMENTATION.md` is ticked; typecheck, lint and build pass; copy matches `CONTENT.md`.

---

## Phase 4: Quality and launch polish (branch `portfolio/phase-4-polish`)

- [ ] **4.1** (*Mostly covered by R.8; still to add: the `/projects/*` redirect check, which needs Vercel's routing.*) Playwright + `@axe-core/playwright`: every page returns 200, has one H1, its own title and canonical, 0 serious or critical axe violations, and no horizontal scroll at 320 px. Test the mobile menu by keyboard and the theme toggle. Unknown URLs return the 404 page. `/projects/*` redirects to `/work/*`.
- [ ] **4.2** GitHub Actions on pull requests: `npm ci`, typecheck, lint, build, Playwright, and Lighthouse CI (mobile) with the budgets in `DESIGN-SYSTEM.md`. Fail the PR if any fails.
- [x] **4.3** (*10 Nov 2026*) README: what the site is, stack, decisions, Lighthouse scores, how to run, a screenshot.
- [ ] **4.4** Final pass: spell-check every page; check every external link; confirm copy matches `CONTENT.md`.

**Gate 4:** CI green; Lighthouse budgets met on every page.

---

## Outside this repo (owner, with each client's OK)

These feed the Ron's Body Shop and OseiPrempeh case studies. Record before/after numbers for each.

- **Ron's Body Shop:** wire the contact and newsletter forms to Formspree or Resend with real error states; replace the six design-tool images with the shop's photos; compress the videos and photos; add a pause control and reduced-motion handling to the hero video; fix the README.
- **OseiPrempeh:** fix "Counselot" in the page title; confirm or remove the statistics and testimonials with the firm; prerender instead of the SPA shell; fix the `start` script; replace the template README.
- **Afromerica:** move the fix notes into `docs/`; timing-safe signature check; tests for scoring and the webhook; make CI fail on errors.
- **DLBC Tampa:** fix the home Events cards showing "NaN" and "Invalid Date" (weekly events like "Every Sunday" are passed to `new Date()` in `EventsSection.tsx`; show the day for weekly events); README for Sanity and Formspree; remove `WEBSITE-PREVIEW.html`; one host config; prune unused packages.
