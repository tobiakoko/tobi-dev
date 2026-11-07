# Portfolio redesign — Claude Code implementation guide

Apply the **"Warm Editorial"** redesign to the existing `tobiakoko.com` site
(`tobiakoko/tobi-dev`). This is a **visual + content refresh on the current
React Router 7 SSR app** — not a rewrite. The approved visual source of truth is
the static prototype (one self-contained HTML file) that accompanies this doc;
when a pixel-level detail isn't written here, take it from the prototype.

Work in order. Each phase ends green (`npm run typecheck && npm run lint && npm run build`).

---

## 0. What this is and isn't

**Keep (do not replace):**
- React Router 7 **framework mode / SSR**, file routes, loaders, `meta()` exports.
- Build-time Markdown case studies (`content/work/*.md` → `work.server.ts`).
- Self-hosted fonts (`font-src 'self'`), Vercel + GA analytics, sitemap/robots, JSON-LD.
- The single-source-of-fact rule: facts live in `app/data/*`, never hard-coded in components.

**Change:** design tokens, fonts, type scale, layout and every page's components +
the specific copy listed in §11. The prototype is a client-only SPA (`usePageMeta`,
`heroImage` import, `RouterProvider`) — **do not adopt that structure.** Port its
*look and markup* into the SSR app: SPA `usePageMeta(...)` → route `meta()`; SPA
`<img src={heroImage}>` → a real asset import rendered server-side; `projects.ts`
data → the existing `work.server.ts` + front-matter.

## 1. Rules (don't break)

1. **Never invent facts.** No metrics, dates, photographer names, or client quotes
   that aren't in `app/data/*`, `content/work/*.md`, or this doc. Missing fact →
   placeholder + `TODO(content):` comment.
2. **Real screenshots only** for project media. The **hero image is the one allowed
   editorial/stock photo**, clearly credited. Until the real file arrives, ship the
   CSS placeholder and `TODO(content): hero photo + real photographer credit`.
3. **Teal is the only accent. No blue anywhere** (`#213cff` from the mock-ups is
   dropped). The brand period and the About CTA band use `--accent` (teal).
4. **Acid-lime (`--acid`) is a highlight only** — it is never text and never a fill
   behind white text. It only ever sits behind ink-black text (`::selection`, and
   any deliberate `<mark>`). Selected text flips to ink in both themes.
5. **WCAG 2.2 AA.** Keyboard everywhere, visible focus, `prefers-reduced-motion`
   respected, contrast from the tokens only. Minimum text 11px (eyebrows); everything
   else ≥14px. (Eyebrows are 11px to match the redesign — this is deliberate.)
6. **Honest contact form:** composes a `mailto:`, never shows a fake "sent" state,
   always shows the email address as a fallback.

## 2. Branch & dependencies

```bash
git checkout -b redesign/warm-editorial
npm i @fontsource-variable/manrope @fontsource-variable/dm-sans
npm uninstall @fontsource-variable/inter   # after all Inter references are gone
```

## 3. Fonts (`app/app.css` + `app/root.tsx`)

Self-host both, same mechanism as the current Inter block. After install, confirm
the exact filenames in `node_modules/@fontsource-variable/<family>/files/` and wire
them up (names below are the Fontsource convention):

```css
/* app/app.css — replace the Inter @font-face with these two */
@font-face {
  font-family: 'Manrope Variable';
  font-style: normal; font-display: swap; font-weight: 200 800;
  src: url('../node_modules/@fontsource-variable/manrope/files/manrope-latin-wght-normal.woff2') format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}
@font-face {
  font-family: 'DM Sans Variable';
  font-style: normal; font-display: swap; font-weight: 100 1000;
  src: url('../node_modules/@fontsource-variable/dm-sans/files/dm-sans-latin-wght-normal.woff2') format('woff2-variations');
  unicode-range: U+0000-00FF,U+0131,U+0152-0153,U+02BB-02BC,U+02C6,U+02DA,U+02DC,U+2000-206F,U+2074,U+20AC,U+2122,U+2191,U+2193,U+2212,U+2215,U+FEFF,U+FFFD;
}
```

In `app/root.tsx`, swap the Inter `<link rel="preload" as="font">` for a preload of
`dm-sans-latin-wght-normal.woff2` (body font = first paint). Manrope can load without
preload or get its own preload if the hero headline shifts.

## 4. Design tokens (`app/app.css`)

The current **dark** tokens are already the approved dark values — leave them. Only
the **light** palette changes (to warm paper) plus new tokens. **Accent (teal) is
unchanged in both themes.** Keep the existing `:root` / `[data-theme='dark']` +
`@theme inline` structure.

```css
:root {
  --bg:      #f2f0e9;  /* paper (was #faf9f6) */
  --bg-alt:  #fbfaf6;  /* surface: cards, figure frames, inputs (was #f1efe9) */
  --ink:     #171714;  /* (was #1c1c1a) */
  --muted:   #5c5b55;  /* soft ink (was #6d6d66) */
  --line:    #cbc8bd;  /* (was #e3e1d9) */
  --accent:  oklch(0.48 0.1 195);  /* teal — UNCHANGED */
  /* new: */
  --acid:    #d9ff54;  /* highlight only */
  --on-acid: #171714;  /* selected-text colour, both themes */
  --inverse-bg: #1a1a16; --inverse-text: #fbfaf6; --inverse-line: rgb(251 250 246 / .22);
  --footer-bg: #1a1a16; --footer-line: #3d3d38; --footer-ink: #fbfaf6;
  --band: oklch(0.48 0.1 195);  /* About CTA band = teal */
}
[data-theme='dark'] {
  --bg:#111110; --bg-alt:#1a1a18; --ink:#ededea; --muted:#a3a39c; --line:#2a2a27;
  --accent:oklch(0.82 0.1 185); /* unchanged */
  --acid:#d9ff54; --on-acid:#171714;
  --inverse-bg:#f2f0e9; --inverse-text:#171714; --inverse-line:rgb(23 23 20 / .18);
  --band:oklch(0.82 0.1 185);
}
```

In `@theme inline`, add the new color exports and the fonts:

```css
@theme inline {
  /* existing bg/bg-alt/ink/muted/line/accent exports stay */
  --color-acid: var(--acid);
  --color-surface: var(--bg-alt);     /* optional alias */
  --font-sans: 'DM Sans Variable', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif;
  --font-display: 'Manrope Variable', ui-sans-serif, system-ui, sans-serif;
  --container-wide: 1320px;           /* was 70rem/1120px */
}
```

Then add `::selection { background: var(--acid); color: var(--on-acid); }` and set
`border-radius: 0` globally on `button, input, select, textarea` (square corners).

## 5. Type scale

Base headings: **Manrope 500, `letter-spacing: -0.045em`, `line-height: 1.02`**
(update the base `h1–h4` rule — the current 350/400 weights become 500). Body: DM
Sans. Apply per-component sizes via component classes (values below, from the
prototype). Minimum body 17px.

| Role | Font / weight | Size | Where |
| --- | --- | --- | --- |
| Hero H1 | Manrope 500 | `clamp(54px, 7.8vw, 118px)` | home hero |
| Page title H1 | Manrope 500 | `clamp(72px, 12vw, 170px)` | Work / About / Contact / project detail (`clamp(58px,8vw,120px)`) |
| Section H2 | Manrope 500 | `clamp(44px, 6vw, 82px)` | Selected work, How I can help |
| Case section H2 | Manrope 500 | `clamp(29px, 3.3vw, 44px)` | project-detail spine |
| Card / role / pagination H3 | Manrope 500 | `clamp(27px, 3.1vw, 44px)` / `clamp(26px,3vw,38px)` | project cards, timeline |
| Service H3 | Manrope 500 | `clamp(21px, 2.6vw, 30px)` | How I can help |
| Lead / summary | DM Sans 400 | `clamp(18–19px, 2vw, 24–25px)` | hero intro, page lead |
| Eyebrow | DM Sans 600, uppercase | 11px, `ls 0.14em` | all |
| Body | DM Sans 400 | 17–18px | prose |

## 6. Layout

- Container `1320px`, `width: min(100% - 40px, 1320px)` centred (≈20px gutters).
  Keep the safe-area-aware padding already in the app if present.
- Remove the global `overflow-x: hidden` if it's still there; fix any real overflow.
- Band rhythm per page; **at most one inverse/navy band + hero + footer.** Home gets
  the proof strip (inverse) and the footer; nothing else dark.

## 7. Shared components

### Header (`components/layout/Header.tsx`)
- Brand: **`Tobi Akoko.`** with the trailing period in `--accent` (teal). Take the
  name from `site.ts` (`ALT_NAME`), wrap the period in a `<span>`.
- Nav (Work / About / Contact): animated **underline-grow on hover** (left→right),
  keep `aria-current="page"`; active link in `--accent`.
- Right: theme toggle (round, keep existing) + mobile menu button that shows the
  **text "Menu" / "Close"** (not an icon), 1px `--line` border.
- Sticky, 78px tall (min 72 on phones); bottom rule appears on scroll.
- Mobile drawer (keep the current Radix/`aria-expanded` behavior and tests): large
  links, **current page inked, others muted**, closes on navigate + Esc.

### Footer (`components/layout/Footer.tsx`)
- **CTA band** (dark): eyebrow "Start a conversation", H2 "Have a role or project in
  mind?" (`clamp(47px,8vw,110px)`), then one underlined `Let's talk ↗` link to
  `/contact`. (No buttons.)
- **Bottom bar** (3 cols, `1.4fr 1fr auto`): left = `Daniel (Tobi) Akoko` /
  `Software Engineer · Dallas, Texas` stacked; middle = Email / LinkedIn / GitHub;
  right (right-aligned) = `© {year} {FULL_NAME}` + the **GA/Vercel disclaimer**
  (smaller, extra top margin) — keep the existing disclaimer text + link verbatim
  (Google Analytics terms). Footer stays dark in both themes; links from `site.ts`.

## 8. Home (`app/routes/home.tsx` + `components/sections/home/*`)

Order: **Hero → Proof strip → Selected work → How I can help → Availability → Footer.**

1. **Hero** — two-column grid `minmax(0,1.45fr) / minmax(300px,0.55fr)`,
   `min-height: calc(100svh - 78px)`, `padding-block: 80px`. Left: eyebrow
   `Daniel (Tobi) Akoko · Dallas, Texas`, H1, intro, actions (primary dark
   **`View selected work ↓`** anchoring to `#selected-work`, then About/Contact text
   links). Right: `figure.hero-visual` — the image fills `height: min(64vh, 680px)`,
   `object-fit: cover`, `filter: saturate(.72) contrast(1.06)`; below it a
   `figcaption` with two uppercase 11px spans (`Based in Dallas` /
   `Working across software + systems`) and, **beneath that, the micro-colophon**:
   `Editorial photo by [photographer] on Unsplash`, left-aligned, 11px, opacity .4,
   ~26px top margin. Image = CSS placeholder + `TODO(content)` for now.
2. **Proof strip** — full-width inverse band, inner `.shell`, 3 cells
   (`Full-stack product delivery` · `Payments and real-time systems` ·
   `IT & AV leadership since 2018`), 14px, `p + p` has a 1px `--inverse-line` left
   divider + 34px left padding; stacks to 1 col ≤640px. Theme-aware (dark in light
   mode, light in dark mode).
3. **Selected work** — section-heading (eyebrow `01 / Work`, H2 `Selected work`,
   right `All work ↗`). `featured` projects (Lewisville, Afromerica, LED wall,
   Tampa) in a 2-col grid; **even cards offset down 72px on desktop** (stagger). Use
   `<ProjectCard featured>` (§9).
4. **How I can help** — section-heading (eyebrow `02 / Capabilities`, H2
   `How I can help`, right lead `From the first constraint to a handover people can
   use.`). A 3-col `.service` grid, 1px `--ink` top border, 1px `--line` dividers
   between columns, each item **bottom-aligned** (number at top; title+desc+proof
   pushed to the bottom via `margin-top:auto`, `min-height ~330px`) so unequal title
   lengths create the stagger. **Order and proof links (your content change, not the
   mock-up's):**
   1. `01 Systems analysis & implementation` → proof link to `/work/led-wall`
   2. `02 Software engineering` → `/work/afromerica`
   3. `03 Delivery & handover` → `/work/lewisville`
   Each proof link: `{project title} ↗`.
5. **Availability** — keep the component; bordered `--bg-alt` panel, teal dot,
   sentence, email link.

## 9. ProjectCard (`components/WorkRow.tsx` → restyle/replace)

One card = one link to `/work/{slug}`. Structure:
- `.project-media` (aspect 4/3, `object-cover`, hover `scale(1.05)` + saturate under
  `prefers-reduced-motion: no-preference`; bottom scrim). Overlay **number**
  (bottom-left) and **year** (bottom-right), white, 11px uppercase.
- Body grid `minmax(0,1fr) auto`: left = `NN / 07` index, H3 title, one-line
  **proposition** (summary), `Read case study ↗`; right = meta (year + disciplines
  joined by ` · `), right-aligned, 11px uppercase. Stacks on phones.
- Disciplines come from front-matter (unchanged): Lewisville = Engineering · Analysis
  · Implementation · Delivery; Afromerica = Engineering · Implementation; etc.

**Work index (`/work`)**: page header (eyebrow row `Projects` / `01–07`, H1 `Work`,
lead), then all 7 cards with the stagger **and a 1px `--line` top border per card**
(the "boundary lines").

## 10. Project detail (`app/routes/work-detail.tsx`)

- `await params` (this is already fixed in the app — keep it). Unknown slug →
  `notFound()` (real 404). No placeholder sermon/data.
- **Header:** back link `← Work`; `case-title-grid` (1.4/0.6) with a `Case study NN`
  eyebrow + H1 (`clamp(58px,8vw,120px)`) left, the one-line proposition
  (`case-summary`) right. Then **`case-facts`**: a 3-col `dl` (`0.5/1.2/1.3`)
  `Year | Work | Tools`, each `dt` 11px uppercase + `dd` 13px, 1px top border; stacks
  on phones. Large cover (`aspect 16/8.5`).
- **Body** (`max-width 1040`, centred): `case-intro` (1fr/3fr: `Overview` eyebrow +
  intro), then the **editorial spine** as `case-section`s (1fr/2fr, H2 left, prose
  right, 1px top border, `padding-block:70px`): *Why this work mattered · What I
  needed to solve · How I approached it · What I delivered · Result & handoff.*
  **Technical depth lives here** — architecture figure (your light/dark SVG) under
  "How I approached it", the results table under "What I delivered", the Lighthouse/
  CWV note under "Result & handoff". Keep the honest "Case study details in progress"
  panel where facts are missing. These map to the existing Markdown `##` sections in
  `content/work/*.md`; render those sections into this layout.
- **Pagination:** `project-pagination` (2 cols): Previous (left) / Next (right), each
  a tall link with a small label + the project name in Manrope 500 `clamp(22,3vw,38)`
  and an arrow.

## 11. About (`app/routes/about.tsx`)

- **Page header:** eyebrow **"The person behind the work"**, H1 `About`
  (`clamp(72px,12vw,170px)`), subheading in the right column (the approved "I came to
  software through engineering, hospitality…" line).
- Sections as label/content **rails** (`0.8fr / 2.2fr`): **Bio** (approved longer
  bio), **Capabilities** (as **rounded pills** — `border-radius:999px`, 1px `--line`,
  `--bg-alt` fill, 14px), **Present**.
- **Past** = timeline (`0.8/2.2`): left = **dates + location** (uppercase 12px);
  right = **role H2 → org (muted) → bullets**. Newest first; hospitality stays
  anonymous.
- **Origins** (approved text) — change "church events" to **"my church's events"**.
- **Education** = ruled rows; show **"Year to be confirmed"** for the two unknown
  dates. **Certifications** and **Community** = two columns side-by-side with a 1px
  vertical divider, each a ruled list.
- **CTA band** (full-width, **teal**, white text): "Want to work together?" +
  `Email me ↗` / `See my work ↗`. (White on teal ≈ 5.8:1 — AA for large text.)

## 12. Contact (`app/routes/contact.tsx`)

- **Page header:** eyebrow row `Contact` / `Dallas, Texas`, H1 **`Let's talk`**
  (`clamp(72px,12vw,170px)`), right column lead ("Tell me about the role, project or
  problem you're working through." + the response-time sentence).
- **Two columns** (`0.78fr / 1.22fr`): left = **`Direct`** eyebrow + ruled rows
  (Email / LinkedIn ↗ / GitHub ↗ / Location), label left + value right. Right =
  **`Message`** eyebrow + "About a minute" (top-right), then the form.
- **Form** (new client component; progressive enhancement, SSR-rendered shell):
  underlined fields with placeholders — **Name** ("Your name"), **Email**
  ("you@example.com"), **"What's this about?"** `<select>` (Full-time role /
  Freelance project / **Other** — plain option, no conditional field for now),
  **Message** ("A little context about what you need…"), honest note
  ("Sending opens your email app with this message filled in. Nothing is submitted in
  the browser."), submit **`Open email draft ↗`**.
- **mailto logic:** build a safely-encoded
  `mailto:${EMAIL}?subject=...&body=...` from `site.ts` `EMAIL`. Subject:
  `[Portfolio enquiry] {what's-this-about} from {name}`. Body: name, reply-to email,
  type, message. Do **not** render a success state. Keep the email address visible.
- Below the form, the closing **callout quote** (standout pull-quote, teal left rule).

## 13. Content & data changes (summary)

Put copy in `app/data/*` / front-matter, not components (single-source rule).

| Item | New value |
| --- | --- |
| Hero H1 | "I engineer software and systems people can rely on." |
| Hero intro | "I'm a Dallas based software developer. I plan, build, test and support web products, payment flows, content platforms and live systems for churches, events and small businesses." |
| Proof strip | Full-stack product delivery · Payments and real-time systems · IT & AV leadership since 2018 |
| How I can help | 3 services (order + copy in §8), each with a proof link |
| Project propositions | the one-liners per project (already in the prototype; add as a required `proposition` field) |
| About subheading | "I came to software through engineering, hospitality and hands-on systems work…" |
| About bio | the longer approved bio (prototype About § Bio) |
| Capabilities | Full-stack engineering · Front-end development · Systems analysis · Implementation · Payments · IT & AV systems · Documentation & handover |
| Origins | "…music and media for **my church's events**." |
| Contact H1 | "Let's talk" |

## 14. Data model (`app/data/work.ts`)

Add a required one-liner to `WorkMeta` and populate it in every `content/work/*.md`:

```ts
/** One-line proposition shown on Home, Work and the detail intro. Factual, no metrics. */
proposition: string;
```

(Propositions are in the prototype / earlier approval. `disciplines`, `year`,
`role`, `stack`, `stats`, `cover` already exist. The service-section proof links
reference slugs `led-wall`, `afromerica`, `lewisville`.)

## 15. SEO / meta / JSON-LD

Unchanged mechanism. Keep `pageMeta()` per route (SSR), the Church→Person JSON-LD
helper, OG image, titles. The hero image gets real alt text when the photo lands;
until then the placeholder has empty `alt` (decorative) and a `TODO(content)`.

## 16. Accessibility & contrast

- Teal `--accent` on `--bg`/`--bg-alt`: ≥5.2:1 light, ≥10:1 dark (already recorded).
  Re-record in `docs/build/DESIGN-SYSTEM.md` after the value swap.
- Acid only behind ink text (`::selection` flips to `--on-acid`). Never acid text.
- White on the teal band ≈ 5.8:1 (AA large) — band text is large only.
- Focus rings visible on paper, inverse and the teal band. `prefers-reduced-motion`
  disables the card zoom and the hover transitions.
- Eyebrows 11px is intentional (matches the redesign); everything else ≥14px.

## 17. Tests

- Unit: Header (brand period, Menu/Close toggle, drawer active state, hover underline),
  ProjectCard (overlays, index, proposition, meta), contact form (mailto composition,
  no success state, each enquiry type incl. "Other"), footer (disclaimer present).
- E2E + `@axe-core/playwright` on every page, **both themes** and drawer open: zero
  serious/critical. Keyboard walk-through per page. No horizontal scroll at 320px.
- Guards: a test that fails if `#213cff`/`blue`, `Inter`, or `lorem` reappear in
  `app/` or `components/`; a test that no un-credited hero photo ships.

## 18. Acceptance (Gate)

- [x] Home order: hero → proof strip → selected work → how I can help → availability.
- [x] Brand `Tobi Akoko.` with teal period; mobile button toggles Menu/Close; drawer
      marks the current page.
- [x] Hero fits one screen at 390px (name, Sunday-less: headline + CTA visible);
      micro-colophon placed under the caption; placeholder + `TODO(content)`.
      (*The credit line stays hidden until the photographer's name is known, rather
      than show "[photographer]".*)
- [x] Selected work / Work: staggered cards, number+year overlay, `NN / 07`,
      `Read case study ↗`, real disciplines; Work page has per-card boundary lines.
- [x] How I can help: `02 / Capabilities`, right lead, bottom-aligned stagger, your
      order + proof links.
- [ ] Project detail: `Case study NN`, `Year · Work · Tools` row, editorial spine
      with architecture + results table + CWV note, prev/next pagination; unknown
      slug → 404. (*7 Nov 2026: everything but the spine headings is done. The
      case study sections still use their existing markdown headings (Context, The
      problem, Architecture…); renaming them to the five spine headings is a copy
      change across seven files, waiting on the owner.*)
- [x] About: "The person behind the work", pill capabilities, timeline
      (dates/location → role/org/bullets), Origins "my church's events",
      Certifications + Community side-by-side, teal CTA band.
- [x] Contact: `Let's talk`, `Direct` ruled rows, `Message` form with placeholders +
      "What's this about?" (Other plain), `Open email draft ↗`, callout quote;
      mailto correct; no fake success.
- [x] Footer: "Have a role or project in mind?" + `Let's talk ↗`; 3-col bottom bar
      with the right-aligned GA disclaimer.
- [x] No blue, no Inter, no invented facts. Self-hosted Manrope + DM Sans
      (`font-src 'self'`). Light + dark both clean. `typecheck/lint/build/test` green.

## Open `TODO(content)`
- Hero photo + **real photographer** credit (placeholder until supplied).
- Conditional "What's this about?" free-text when **Other** is selected — spec'd but
  **not** building now (owner deferred).
