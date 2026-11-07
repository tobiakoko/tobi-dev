# Design system: tobiakoko.com — Warm Editorial

**Direction: warm, editorial, confident.** Big serif-grade sans headlines on warm
paper, square corners, a 12-column grid, and real images doing real work. The
quiet-minimalist text-row system (PR #4) is retired; this replaces it. Light and
dark themes, teal accent, one acid-lime highlight.

> Supersedes the previous "quiet, minimalist, spacious" version of this file. The
> theming mechanism (CSS custom properties on `:root` / `[data-theme='dark']`
> re-exported with `@theme inline`) is kept. The palette **values**, type, layout
> and components below are new. The prototype (one static HTML file) and
> `docs/build/REDESIGN-IMPLEMENTATION.md` are the companion references; where a
> pixel detail isn't written here, take it from the prototype.

## Principles

1. **Editorial, not a dashboard.** Pages read like a well-set magazine spread:
   generous headings, numbered eyebrows, hairline rules, orderly asymmetry.
2. **One accent, one highlight.** Teal (`--accent`) is the only interactive colour.
   Acid-lime (`--acid`) is a highlight *only* — never text, only ever behind ink.
3. **Images earn their place.** Project cards and case studies use real screenshots
   and diagrams. The home hero carries one credited editorial photo of Dallas. No
   photos of Daniel.
4. **Square and spacious.** `border-radius: 0` everywhere except pills (nav,
   capabilities, buttons). Space separates sections; rules separate rows.
5. **Motion is restraint.** Hover/focus transitions ≤200 ms; one guarded 500 ms
   card-image zoom. Nothing autoplays. `prefers-reduced-motion` is honoured.

## Color tokens

Define on `:root` and `[data-theme='dark']`, re-export with `@theme inline`. Use
only these. **The dark palette and the teal accent are unchanged from PR #4; only
the light palette warms up, plus new tokens.**

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#f2f0e9` | `#111110` | Page background (warm paper) |
| `--bg-alt` | `#fbfaf6` | `#1a1a18` | Cards, figure frames, inputs, table header (the lighter surface) |
| `--ink` | `#171714` | `#ededea` | Text, headings, primary links |
| `--muted` | `#5c5b55` | `#a3a39c` | Secondary text, eyebrows, captions |
| `--line` | `#cbc8bd` | `#2a2a27` | Hairline rules, dividers, figure borders |
| `--accent` | `oklch(0.48 0.1 195)` | `oklch(0.82 0.1 185)` | Links, focus ring, availability dot, brand period, CTA band. **Unchanged.** |
| `--acid` | `#d9ff54` | `#d9ff54` | Highlight only (`::selection`, `<mark>`). Never text. |
| `--on-acid` | `#171714` | `#171714` | Text colour when sitting on acid (both themes) |
| `--inverse-bg` | `#1a1a16` | `#f2f0e9` | Proof strip (inverts per theme so it stays legible) |
| `--inverse-text` | `#fbfaf6` | `#171714` | Text on the inverse band |
| `--inverse-line` | `rgb(251 250 246 / .22)` | `rgb(23 23 20 / .18)` | Dividers on the inverse band |
| `--band` | `oklch(0.48 0.1 195)` | `oklch(0.48 0.1 195)` | About CTA band fill (= teal). Same dark teal in both themes, as in the prototype: white text on the dark-theme teal would be about 1.6:1. |

Footer is always dark: `--footer-bg #1a1a16`, `--footer-line #3d3d38`,
`--footer-ink #fbfaf6` in both themes.

### Color rules

- **No blue.** The source mock-ups used an electric blue (`#213cff`); it is dropped.
  The brand period and the About CTA band use `--accent` (teal).
- **Acid is a highlighter.** Only ever a background behind ink-black text. In dark
  mode, selected text flips to `--on-acid` (ink), never white. Acid is never a text
  colour and never sits behind white text.
- `::selection { background: var(--acid); color: var(--on-acid); }`
- Only these tokens. No raw hex in components. No dark mode is dropped.

### Contrast (WCAG 2.x relative luminance; teal from oklch ≈ `#006e6f` light / `#70d9cc` dark)

Light re-measured 7 Nov 2026 for the new paper; dark unchanged from PR #4. Every
pair passes; body and `--muted` need 4.5, the focus ring 3, white-on-band 4.5.

| Pair | Light | Dark | Needs |
| --- | --- | --- | --- |
| `--ink` on `--bg` | 15.75 | 16.11 | 4.5 |
| `--ink` on `--bg-alt` | 17.20 | 14.86 | 4.5 |
| `--muted` on `--bg` | 5.97 | 7.45 | 4.5 |
| `--muted` on `--bg-alt` | 6.52 | 6.87 | 4.5 |
| `--accent` on `--bg` (link, focus ring) | 5.32 | 11.28 | 4.5 / 3 |
| `--accent` on `--bg-alt` | 5.81 | 10.40 | 4.5 / 3 |
| white on `--band` (teal CTA band) | 6.07 | 6.07 | 4.5 |
| `--on-acid` on `--acid` (selection) | 15.72 | 15.72 | 4.5 |
| `--inverse-text` on `--inverse-bg` (proof strip) | 16.71 | 16.11 | 4.5 |

## Typography

Two families, both self-hosted (`@fontsource-variable`, `font-display: swap`):

- **Manrope Variable** — display and all headings. Weight **500**,
  `letter-spacing: -0.045em`, `line-height: 1.02` as the base; per-role sizes below.
- **DM Sans Variable** — body, intros, labels, forms. Fallbacks:
  `ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`.

Minimum body 17px. Eyebrows are the only sub-14px type (11px, deliberate, to match
the editorial system).

| Role | Font / weight | Size | Tracking |
| --- | --- | --- | --- |
| Hero H1 | Manrope 500 | `clamp(54px, 7.8vw, 118px)` | -0.045em |
| Page title H1 | Manrope 500 | `clamp(72px, 12vw, 170px)` | -0.045em |
| Case-study H1 | Manrope 500 | `clamp(58px, 8vw, 120px)` | -0.045em |
| Section H2 | Manrope 500 | `clamp(44px, 6vw, 82px)` | -0.045em |
| Footer CTA H2 | Manrope 500 | `clamp(47px, 8vw, 110px)` | -0.045em |
| Case-section H2 | Manrope 500 | `clamp(29px, 3.3vw, 44px)` | -0.045em |
| Card / role H3 | Manrope 500 | `clamp(26–27px, 3vw, 44px)` | -0.045em |
| Service H3 | Manrope 500 | `clamp(21px, 2.6vw, 30px)` | -0.045em |
| Lead / summary | DM Sans 400 | `clamp(18–19px, 2vw, 24–25px)` | 0 |
| Body | DM Sans 400 | 17–18px / 1.55–1.6 | 0 |
| Small, captions | DM Sans 400 | 13–15px | 0 |
| Eyebrow | DM Sans 600, uppercase | 11px / 1.2 | 0.14em |

Phone minimums: the Hero, Page title and Case-study H1 floors drop to 36px below ~600px, so the longest heading word ("Entertainment", "requirements") fits at 320px without sideways scrolling (WCAG 1.4.10). From ~600px up the sizes match the table.

Rules: headlines `text-wrap: balance`; prose measure ~65ch; `tabular-nums` in meta,
facts and results tables; prose links `--ink` underlined, hover `--accent`.

## Layout

- **Wide container:** 1200px of content with 24px gutters (`.shell`, max-width 1248px), centred. (Narrowed from 1320px on 7 Nov 2026 to suit the hero photo.)
- **Prose column:** `max-width: 40rem`; case-study body `max-width: 1040px`.
- **Grid:** 1 column on phones → a 12-column editorial grid on desktop. Key
  breakpoints: ~1000px (nav → drawer), ~860px (page-header stacks), ~760px (cards /
  rails / timelines stack), 640px (proof strip and caption stack).
- **Section rhythm:** `padding-block` ~130px desktop / clamp down on phones; a 1px
  `--line` top rule between content sections.
- **Band order:** warm paper throughout; **at most one dark band per page.** Home:
  the proof strip (inverse) + the footer. About: the teal CTA band + footer.
- Square corners everywhere; pills (`border-radius:999px`) only for nav, buttons and
  capability chips. Tap targets ≥44px; phones are `tel:`/map links.

## Shape

| Token | Value |
| --- | --- |
| Corners | `0` (pills `999px`) |
| Card/figure border | 1px `--line` |
| Image scrim (card) | bottom gradient to `rgb(10 14 16 / .55)` |
| Hero photo filter | `saturate(.72) contrast(1.06)` |

## Components

Build these; don't add others unless the plan does.

| Component | Spec |
| --- | --- |
| `Header` | Brand `Tobi Akoko.` (period in `--accent`) left; nav Work/About/Contact (13px, `--muted`, current page teal) with an **underline-grow hover** and `aria-current`, grouped on the right with the theme toggle and a **text "Menu"/"Close"** mobile button. 74px tall (72px on phones), bottom rule on scroll. Drawer: large links, current page inked, others muted; Esc closes, focus returns. Keep the Radix/`aria-expanded` behaviour. |
| `Footer` | Always dark. **CTA band:** eyebrow "Start a conversation", H2 "Have a role or project in mind?", one `Let's talk ↗` link. **Bottom bar** (3 cols): name/role stacked · Email/LinkedIn/GitHub · right-aligned `© {year}` + the GA/Vercel disclaimer (smaller, extra top margin, verbatim from `CONTENT.md`). |
| `Eyebrow` | 11px bold uppercase `--muted`. Often numbered (`01 / Work`) or two-part (`Contact` / `Dallas, Texas`). A `<p>`/`<span>`, never a heading. |
| `Button` | Square. `primary` = `--ink` fill, `--bg` text, inverts on hover. Hero CTA `View selected work ↓`. Links use `↗`. |
| `ProofStrip` | Full-width inverse band; 3 cells (14px) with 1px `--inverse-line` left dividers (34px pad); theme-aware; stacks ≤640px. |
| `SectionHeading` | Flex row, align-end: left = numbered eyebrow + H2 (`clamp(44,6vw,82)`); right = a lead (`max 310px`, `--muted`) or an `All work ↗` link. |
| `ProjectCard` | One link to `/work/:slug`. Media (4/3, `object-cover`, hover `scale(1.05)`+saturate under reduced-motion-OK; bottom scrim) with **number (bottom-left) + year (bottom-right)** overlaid, white 11px. Body grid `1fr auto`: left = `NN / 07` index, H3 title, one-line `proposition`, `Read case study ↗`; right = year + disciplines (joined ` · `), right-aligned 11px uppercase. On `/work`, add a 1px `--line` top border per card. Even cards offset down 72px on desktop (stagger). |
| `ServiceGrid` | How-I-can-help: 3 columns, 1px `--ink` top border, 1px `--line` column dividers, each item **bottom-aligned** (number top; title/desc/proof pushed down, `min-height ~330px`) for the stagger. |
| `PageHeader` | Grid `1.4fr / 0.6fr`, align-end, 1px `--line` bottom rule. Full-width eyebrow, H1 (`clamp(72,12vw,170)`), lead/subheading in the right column. |
| `CaseFacts` | `dl`, 3 cols `0.5/1.2/1.3`: `Year | Work | Tools`, each `dt` 11px uppercase + `dd` 13px; 1px top rule; stacks on phones. |
| `CaseSection` | `1fr/2fr`: H2 left, prose right (`#3f3f3a` light / `#c9c9c2` dark, 18px), 1px top rule, 70px block padding. Figures/tables/panels sit in the right column beside their text. |
| `ProjectPagination` | 2 cols: Previous (left) / Next (right), each a tall link with a small label + project name (Manrope 500 `clamp(22,3vw,38)`) and an arrow. |
| `Rail` | About label/content grid `0.8fr / 2.2fr`, 1px top rule. |
| `Capabilities` | **Pills:** `border-radius:999px`, 1px `--line`, `--bg-alt` fill, 14px. |
| `Timeline` | Past: `0.8/2.2`. Left = dates + location (11–12px uppercase). Right = role H2 → org (`--muted`) → bullets. First item no top rule. |
| `TwoColDivided` | Certifications + Community side by side with a 1px `--line` vertical divider; each a ruled list. |
| `AboutCtaBand` | Full-width **teal** band, white text: "Want to work together?" + `Email me ↗` / `See my work ↗`. |
| `ContactForm` | Underlined fields + placeholders: Name, Email, `What's this about?` (select: Full-time role / Freelance project / Other — plain), Message. Header: `Message` eyebrow + "About a minute". Submit `Open email draft ↗`. Composes a `mailto:` (subject `[Portfolio enquiry] {what's-this-about} from {name}`); **no fake success state**; email visible as fallback. |
| `DirectList` | Contact ruled rows: label left, value right (LinkedIn/GitHub get `↗`). |
| `CalloutQuote` | Standout pull-quote, 3px teal left rule, `--bg-alt` fill, Manrope 500. |
| `Figure` / `FigurePair` / `ResultsTable` / `Callout` | As before: screenshots/diagrams on `--bg-alt`, 1px `--line`, sharp corners, captions in small `--muted`; before/after pairs; tabular results table; "What I'd do next" callout. |
| `ThemeToggle` | Keep PR #4's toggle + pre-paint script; round, accessible name stating the action. |

## Pages

- **Home (`/`):** Hero → Proof strip → Selected work → How I can help → Availability
  → Footer. Hero: eyebrow, H1, intro, `View selected work ↓` + About/Contact; right
  a credited editorial Dallas photo with the two-span caption and the micro-colophon
  (`Editorial photo by {photographer} on Unsplash`, 11px, opacity .4). Hero fits one
  screen (`min-height: calc(100svh - 74px)`); the eyebrow sits in the copy column
  above the H1 (line-height 0.93, max 720px wide), the intro is up to 22px and 600px
  wide, the CTA button is 46px tall with 14px text, and the photo column is 300px
  wide with the photo up to 620px tall, aligned to the bottom; the two caption items
  sit left-aligned with a 48px gap; at 390px the name, headline and CTA show
  without scrolling.
- **Work (`/work`):** PageHeader (`Projects` / `01–NN`), all projects as staggered
  ProjectCards with boundary lines.
- **Case study (`/work/:slug`):** `CASE-STUDY-TEMPLATE.md` + the editorial spine
  (Why this mattered · What I needed to solve · How I approached it · What I
  delivered · Result & handoff). Technical depth (architecture, results table,
  Lighthouse/CWV) lives inside those sections. Unknown slug → real 404.
- **About (`/about`):** eyebrow "The person behind the work"; Rails for Bio,
  Capabilities (pills), Present; Past (Timeline); Origins; Education (ruled,
  "Year to be confirmed" where unknown); Certifications + Community (TwoColDivided);
  the teal CTA band.
- **Contact (`/contact`):** eyebrow `Contact` / `Dallas, Texas`, H1 "Let's talk";
  DirectList + ContactForm; CalloutQuote.
- **404:** inside the layout; title, one sentence, links to Home and Work.

## Motion

- Hover/focus only, ≤200 ms, plus the guarded card-image zoom (`scale(1.04–1.05)`,
  500 ms) under `prefers-reduced-motion: no-preference`.
- No page transitions, scroll reveals, parallax or loaders. Global reduced-motion
  guard removes transitions and smooth scrolling.

## Accessibility (WCAG 2.2 AA)

- One H1 per page; headings in order; eyebrows are not headings.
- Focus ring 2–3px `--accent` with offset, visible on paper, the inverse band and the
  teal band. Skip link first.
- Contrast only from the pairings above. Acid only behind ink; white only on the teal
  band (large-and-up text, 6.07:1). Eyebrows 11px is the single sub-14px exception.
- Real alt text ("Lewisville Visit page on a phone…"), diagrams described in prose.
- Mobile menu: focus trap, Esc, visible close, closes on route change.
- axe in Playwright on every page, **both themes**, drawer open: zero serious/critical.

## Performance budgets

- Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100.
- First-load JS ≤ 90 kB gzipped. Prerendered HTML per route carries its own text,
  title, description, canonical.
- Two self-hosted font files (Manrope + DM Sans, Latin subset), both subset/preloaded;
  body font preloaded. Hero photo WebP ≤ 250 kB, eager; screenshots `srcset` 1×/2×,
  ≤ 250 kB, lazy below the fold.
