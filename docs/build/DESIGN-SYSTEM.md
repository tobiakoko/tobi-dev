# Design system: tobiakoko.com

**Direction: quiet, minimalist, spacious.** The work is the visual. Text does the talking, and whitespace sets the pace. No photos of Daniel, no decorative illustrations, no gradients, no scroll animations. The only images are project screenshots and architecture diagrams.

This builds on the editorial system in pull request #4 (paper background, light display type, sharp corners, light and dark themes). Keep its theming mechanism; change the values and components below.

## Principles

1. **One idea per screen.** The home page's first screen holds the name, the headline, two sentences and four links. Nothing else.
2. **Space is the layout.** Sections are separated by space, not boxes or rules. Use hairline rules only to separate rows in a list or a meta grid.
3. **Text first.** Lists of work are text rows. Images appear on case study pages, at full width, with captions.
4. **Few sizes, few colors.** Five type sizes, one accent, two greys.
5. **Nothing moves on its own.** Only hover and focus changes, 150 ms.

## Color tokens

Define on `:root` and `[data-theme='dark']`, re-export with `@theme inline` (as PR #4 does). Use only these.

| Token | Light | Dark | Use |
| --- | --- | --- | --- |
| `--bg` | `#faf9f6` | `#111110` | Page background |
| `--bg-alt` | `#f1efe9` | `#1a1a18` | Behind screenshots, code blocks, the results table header |
| `--ink` | `#1c1c1a` | `#ededea` | Text, headings, primary links |
| `--muted` | `#6d6d66` | `#a3a39c` | Secondary text, labels, captions |
| `--line` | `#e3e1d9` | `#2a2a27` | Hairline rules and figure borders |
| `--accent` | `oklch(0.48 0.1 195)` | `oklch(0.82 0.1 185)` | Link hover, focus ring, the availability dot. Nothing else |

The dark theme is neutral near-black, replacing PR #4's navy, so screenshots look the same in both themes.

**Contrast check (task 2.2):** measure every text/background pair in both themes and record the ratios in this file. Body text and `--muted` text must reach 4.5:1; the focus ring must reach 3:1 against `--bg`. If a value fails, darken or lighten it and record the new value.

Measured 3 November 2026 (WCAG 2.x relative luminance; accents converted from oklch to sRGB: light ≈ `#006e6f`, dark ≈ `#70d9cc`). Every pair passes; no values changed.

| Pair | Light | Dark | Needs |
| --- | --- | --- | --- |
| `--ink` on `--bg` | 16.21 | 16.11 | 4.5 |
| `--ink` on `--bg-alt` | 14.84 | 14.86 | 4.5 |
| `--muted` on `--bg` | 4.95 | 7.45 | 4.5 |
| `--muted` on `--bg-alt` | 4.53 | 6.87 | 4.5 |
| `--accent` on `--bg` (link hover, focus ring) | 5.75 | 11.28 | 4.5 text / 3 ring |
| `--accent` on `--bg-alt` | 5.26 | 10.40 | 4.5 text / 3 ring |

`--muted` on `--bg-alt` in light is the tightest pair (4.53). Don't put `--muted` text on anything lighter than `--bg-alt`, and don't lighten `--muted`.

## Typography

One family: **Inter Variable**, self-hosted with `@fontsource-variable/inter` (pre-approved), `font-display: swap`. Fallback: `ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif`. Mono for meta values and code: `ui-monospace, SFMono-Regular, Menlo, monospace`.

| Role | Size | Line height | Weight | Tracking |
| --- | --- | --- | --- | --- |
| Display (home headline) | `clamp(2.5rem, 2rem + 3.5vw, 4.5rem)` | 1.05 | 350 | -0.025em |
| Page title (H1 elsewhere) | `clamp(2.25rem, 1.75rem + 2.5vw, 3.5rem)` | 1.1 | 350 | -0.02em |
| Section heading (H2) | `1.75rem` | 1.25 | 400 | -0.01em |
| Subheading (H3) | `1.25rem` | 1.4 | 500 | 0 |
| Body | `1.125rem` (18 px) | 1.7 | 400 | 0 |
| Small, captions | `0.9375rem` (15 px) | 1.6 | 400 | 0 |
| Label | `0.75rem` (12 px), uppercase | 1.4 | 500 | 0.14em |

Rules:

- Body text never below 16 px on mobile. Never use weight 300 or lighter below 32 px.
- Prose measure: 65 characters (about `40rem`). Headlines: `max-width: 18ch`, `text-wrap: balance`.
- Numbers in results tables and meta grids use `font-variant-numeric: tabular-nums`.
- Links in prose: `--ink`, underlined (`text-underline-offset: 0.2em`, 1 px), hover turns `--accent`.

## Spacing and layout

Base unit 4 px. Use Tailwind's scale; these are the named rhythms:

| Name | Mobile | Desktop | Use |
| --- | --- | --- | --- |
| Page gutter | 24 px | 48 px | Left and right padding |
| Section gap | 96 px | 160 px | Between major sections |
| Block gap | 48 px | 72 px | Between blocks inside a section |
| Stack | 16 px | 24 px | Between paragraphs and list items |

Widths:

- **Wide container:** `max-width: 70rem` (1120 px), centered.
- **Prose column:** `max-width: 40rem`.
- **Label rail (desktop ≥ 1024 px):** a two-column grid inside the wide container, `grid-template-columns: 14rem 1fr` with a 4rem gap. The section label sits in the left column (sticky is fine), the content in the right. On smaller screens the label stacks above the content. Case studies and About use this; it gives the quiet, spacious, document-like feel.

The home page's first screen is at least `min-height: 70svh` with content aligned to the bottom third, so the headline sits in generous space.

## Components

Build these and nothing else unless the plan adds one.

| Component | Spec |
| --- | --- |
| `Header` | Name wordmark ("Daniel Akoko") left; **Work, About, Contact** and the theme toggle right. 72 px tall, no border until the page scrolls, then a `--line` bottom rule. Mobile: a `<button aria-expanded aria-controls>` opens a full-width panel; Escape closes it and focus returns to the button. |
| `Footer` | One row on desktop: email, GitHub, LinkedIn, and "© {current year} Daniel Akoko". Small size, `--muted`. Section gap above. |
| `SectionLabel` | Label style, `--muted`. Used in the label rail. |
| `WorkRow` | One project as a row: title (H3 size), one-line outcome (body, `--muted`), then year and discipline tags in label style. Whole row is one link to `/work/:slug`. A `--line` rule between rows. Hover: title underlines and turns `--accent`. No image. |
| `DisciplineTag` | Text label from a fixed set: **Engineering, Analysis, Implementation, Delivery**. Plain text separated by " · ", not pills. |
| `CaseStudyHeader` | Back link "← Work"; title (page title size); one-line outcome (H2 size, `--muted`, max 2 lines); `MetaGrid`. |
| `MetaGrid` | Up to 6 label/value pairs in a grid (2 columns mobile, 3–6 desktop): Role, Timeline, Team, Stack, Disciplines, Links. Hairline rule above and below. |
| `Stats` | 2–4 key results in a row: large number (H2 size, tabular), small label below. Only numbers from `CONTENT.md`. |
| `Figure` | Screenshot or diagram at full wide-container width (or prose width for diagrams), on `--bg-alt` with 24–48 px padding, 1 px `--line` border, sharp corners. Caption below in small `--muted`. Always `width`, `height`, `alt`, `loading="lazy"` except the first image. |
| `FigurePair` | Two `Figure`s side by side on desktop (desktop + phone, or before + after), stacked on mobile, each with its own caption. Before/after captions start with "Before:" and "After:". No slider. |
| `ResultsTable` | Measure / Before / After table, tabular numbers, `--bg-alt` header row, hairline rows. Scrolls horizontally inside its own container on narrow screens, never the page. |
| `Callout` | For "What I'd do next": left `--line` border, small padding, body size. |
| `NextProject` | Full-width link at the end of a case study: label "Next project", title in H2 size. Wraps to the first project after the last. |
| `TextLinks` | A row of plain underlined text links separated by spaces (home hero, contact). |
| `ThemeToggle` | Keep PR #4's toggle and pre-paint script. Icon button with an accessible name that states the action ("Switch to dark theme"). |

## Pages

**Home (`/`)**

1. Hero: label "Daniel (Tobi) Akoko · Dallas, Texas"; display headline (chosen in `CONTENT.md`); two-sentence intro; `TextLinks`: Work, About, Email.
2. "Selected work": 4 `WorkRow`s, then a "All work →" link.
3. "How I work": four short items in a 2×2 grid (1 column on mobile), one per discipline (Engineering, Analysis, Implementation, Delivery). Each is a bold three-word line, one sentence, and one link to the case study that proves it.
4. Availability line with the accent dot, then email and the booking link.

**Work (`/work`)**: page title, one sentence, then every `WorkRow`. Optional filter by discipline (plain text buttons with `aria-pressed`), only if it adds clarity with six or more projects.

**Case study (`/work/:slug`)**: see `CASE-STUDY-TEMPLATE.md`. Uses the label rail.

**About (`/about`)**: label rail. Sections in order: Bio, How I work (three principles), Present, Past, Origins, Education, Certifications, Community, then a contact line. No photo.

**Contact (`/contact`)**: page title, one sentence on what you're open to and response time, then a `MetaGrid`-style list: Email, Book a call, LinkedIn, GitHub, Location.

**404**: inside the layout; title "Page not found", one sentence, links to Home and Work.

## Motion

- Hover and focus transitions only: color and underline, 150 ms ease-out.
- No page transitions, scroll reveals, parallax, marquees or loaders.
- Wrap any transition in `@media (prefers-reduced-motion: no-preference)`, and add a global reduced-motion guard that removes transitions and smooth scrolling.

## Accessibility

- WCAG 2.2 AA. One H1 per page; headings in order.
- Focus ring: 2 px `--accent` outline with 3 px offset on every interactive element. Never remove it.
- Skip link to `<main>` as the first focusable element.
- Every image has alt text that says what the screenshot shows ("Lewisville Visit page on a phone, showing service times above the fold"), not "screenshot".
- Diagrams also have a text description in the page (the architecture paragraph).
- Touch targets at least 24×24 px; nav links at least 44 px tall on mobile.
- No horizontal scroll at 320 px.

## Performance budgets

- Lighthouse mobile: Performance ≥ 95, Accessibility 100, Best Practices ≥ 95, SEO 100 on every page.
- JavaScript on first load ≤ 90 kB gzipped.
- Screenshots: WebP (AVIF optional), served at 1× and 2× with `srcset`; largest file ≤ 250 kB.
- One font file (Inter Variable, Latin subset).
