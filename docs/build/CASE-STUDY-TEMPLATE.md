# Case study template

Every project page at `/work/:slug` is built from `content/work/<slug>.md`. The words and numbers for each project are in `CONTENT.md`; this file defines the format and the section order.

The structure borrows the depth of a design case study (context, impact, solution, outcome, then a step-by-step process) and adds what engineering and analyst readers look for: a role breakdown, architecture, decisions, measured results and a reflection.

## File format

```markdown
---
slug: lewisville
title: Deeper Life Bible Church Lewisville
outcome: I built a church website, audited it, then rebuilt it in four gated phases.
order: 1
featured: true
year: "2025–2026"
role: Sole developer, analyst and project lead
team: Solo, with the pastor and church staff
timeline: Nov 2025 – Nov 2026
stack: [Next.js 16, React 19, TypeScript, Sanity 6, Tailwind CSS 4, Resend, Upstash, Jest, Playwright, Vercel]
disciplines: [Engineering, Analysis, Implementation, Delivery]
links:
  live: https://…        # omit if not live
  code: https://github.com/tobiakoko/…   # omit if private
cover:
  src: /work/lewisville/cover.webp
  alt: Lewisville home page on desktop, with the service times bar under the photo hero
  width: 2880
  height: 1800
stats:
  - { value: "109 → 333", label: "unit tests" }
  - { value: "13 → 0", label: "wrong facts in the home page HTML" }
---

## Context
…
```

Types live in `app/data/work.ts`. The loader validates front matter at build time and **fails the build** if a required field is missing, a `cover` file doesn't exist, or a `stats` entry isn't also listed in `CONTENT.md` (check by exact string).

Required fields: `slug`, `title`, `outcome`, `order`, `year`, `role`, `timeline`, `stack`, `disciplines`, `cover`. Optional: `featured`, `team`, `location`, `links`, `stats`, `stackLabel` (the `MetaGrid` label for `stack`; default "Stack", use "Tools and hardware" for non-software projects).

**Until Phase 3:** `cover` is optional (no screenshots exist yet) and is validated only when present; `outcome` is optional for Ron's Body Shop, whose outcome is a `TODO(content)`. Task 3.1 makes `cover` required again.

## Section order

Use `##` for these headings, in this order. Skip a section only where `CONTENT.md` says so. In the page they render in the label rail: the heading as the label on the left, the content on the right.

| # | Heading | What goes in it | Length |
| --- | --- | --- | --- |
| — | Header | Title, outcome line, `MetaGrid` (Role, Timeline, Team, Stack, Disciplines, Links), then the cover `Figure` and `Stats` | — |
| 1 | **Context** | Who the client is and what they needed | 60–100 words |
| 2 | **The problem** | What was wrong or missing, and who it hurt. Concrete examples | 60–120 words, or a short list |
| 3 | **My role** | What Daniel did, grouped under the project's disciplines: `### Engineering`, `### Analysis`, `### Implementation`, `### Delivery`. 2–4 bullets each. This is what lets each kind of reader find their part | 4–14 bullets |
| 4 | **Process** | Subsections in time order (`### Discovery`, `### Audit`, `### Plan`, `### Build`, `### Test`, `### Handover`, as relevant). 40–80 words each, with a `Figure` where it helps | 3–6 subsections |
| 5 | **Architecture** | Diagram (Mermaid source rendered at build time, or committed SVG) plus a paragraph that describes it in words | Diagram + 60–100 words |
| 6 | **Key decisions** | 2–4 decisions. Each: `### Chose X over Y`, then why in 2–3 sentences | 2–4 subsections |
| 6a | **Issues log** (optional) | A Symptom / Root cause / Fix table, for diagnosis-heavy projects | Table, up to 10 rows |
| 7 | **Outcome** | `ResultsTable` (Measure / Before / After) and `FigurePair`s. Only numbers from `CONTENT.md` | Table + 2–4 pairs |
| 8 | **Reflection** | What Daniel would do next or differently, in a `Callout` | 40–80 words |
| — | Footer | `NextProject` | — |

## Markdown conventions

- Figures: `![alt text](/work/<slug>/file.webp "Caption")`. The renderer turns an image with a title into a `Figure`. Two figures on consecutive lines inside `<div data-pair>` become a `FigurePair`.
- Tables become `ResultsTable` when the header row is `Measure | Before | After`.
- Mermaid: a fenced ` ```mermaid ` block is rendered to SVG at build time with `@mermaid-js/mermaid-cli` and saved to `public/work/<slug>/architecture.svg`. Ship the SVG, not the Mermaid runtime. Diagrams come in two files, `architecture-light.svg` and `architecture-dark.svg`; the page shows the one that matches the current theme.
- Callout: a blockquote that starts with `**What I'd do next**`.
- No raw HTML other than `<div data-pair>`, and `<!-- TODO(content): … -->` comments, which render as nothing.

## Screenshots

- Captured with `npm run screenshots` (Playwright): desktop 1440×900 and phone 390×844, `deviceScaleFactor: 2`, WebP quality 80.
- File names: `cover.webp`, `<page>-desktop.webp`, `<page>-phone.webp`, `before-<page>-*.webp`, `after-<page>-*.webp`.
- "Before" images come from an earlier commit run locally, the owner's saved screenshots, or the Wayback Machine. Note the source in `CONTENT.md`.
- Crop or blur any personal data before committing.

## Writing rules

- First person, past tense for what happened ("I found…", "I rebuilt…").
- Lead each section with its point. No throat-clearing.
- Name the tool when it matters, but explain the why, not the tool.
- Every claim is either visible in a figure, listed in `CONTENT.md`, or linked to code.
