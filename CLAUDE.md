# CLAUDE.md: tobiakoko.com

You are building the personal portfolio of **Daniel "Tobi" Akoko**, a software engineer in Dallas, Texas. The site has to work for several kinds of reader at once: engineering hiring managers, business and systems analyst hiring managers, implementation and solutions teams, project and PMO leads, and prospective freelance clients. It does that through one honest story and deep case studies, not by claiming to be everything.

The site is being given a **"Warm Editorial" redesign**: warm paper, big Manrope headlines, a 12-column grid, image-led project cards, and one editorial hero photo. It is a visual and content refresh **on the existing app** — the architecture does not change.

Read this file at the start of every session, then the document for the area you're about to touch.

## Read these first

| File | Use it for |
| --- | --- |
| `docs/build/BUILD-PLAN.md` | What to build, in what order, and when each phase is done. **Start here.** |
| `docs/build/REDESIGN-IMPLEMENTATION.md` | How to apply the Warm Editorial redesign to this app, page by page, with the port from the static prototype. |
| `docs/build/CONTENT.md` | Every word on the site. Source of truth for copy and facts. |
| `docs/build/DESIGN-SYSTEM.md` | Tokens, fonts, type scale, layout, components, motion, accessibility. Now the Warm Editorial system. |
| `docs/build/CASE-STUDY-TEMPLATE.md` | The file format and section order for every `/work/:slug` page. |

When documents disagree: `CONTENT.md` wins for words and facts, `DESIGN-SYSTEM.md` for visuals, `BUILD-PLAN.md` for scope and order. If it's still unclear, ask.

## Who the site is for

A recruiter or hiring manager who gives the site about 30 seconds, then opens one case study if the first screen earns it. They need to find, without scrolling far: who Daniel is, what he does, proof that he has done it, and how to reach him. A freelance client needs the same, plus what working with him looks like.

The site has four sections only: **Home, Work (with a case study page per project), About, Contact.** There's no blog and no headshot. **Imagery is real project screenshots and diagrams, plus one editorial photo of Dallas in the home hero. No photos of Daniel.**

## Rules you must not break

1. **Never invent facts.** No made-up metrics, dates, employers, job titles, clients, quotes, testimonials, awards, certifications, links, screenshots **or photographer credits**. If something is missing, leave a `TODO(content):` comment, hide the element, and add it to "Still missing" in `CONTENT.md`. Never ship lorem ipsum, placeholder images or `#` links.
2. **Numbers come only from `CONTENT.md`.** Every figure in a case study is listed there with its source. If a number isn't there, it doesn't go on the site.
3. **Stacks must match the code.** A project's stack lists only what that project's `package.json` or code actually uses. `CONTENT.md` has the checked list.
4. **One source for every fact.** Name, title, location, email, links and availability live in `app/data/site.ts`. Project metadata (including each project's one-line `proposition`) lives in the project's content file. No component hard-codes them.
5. **First person, plain words.** Copy says "I", not "Daniel". No "exceptional", "sophisticated", "enterprise-grade", "seamless", "passionate" or "cutting-edge". Short sentences.
6. **Client privacy.** No client staff names, member or customer data, voter emails or phone numbers in screenshots or text. Blur or crop them. Don't name or quote a client unless `CONTENT.md` says permission was given.
7. **Imagery.** Project media is real screenshots and diagrams only. The home hero is the one editorial photo. It shows no credit line (Daniel's decision, 10 Nov 2026); its source is recorded in `CONTENT.md` §2.2.
8. **Teal only; acid is a highlight.** `--accent` (teal) is the single interactive colour — **no blue anywhere** (the mock-ups' `#213cff` is dropped; the brand period and the About CTA band use teal). `--acid` is only ever a highlight behind ink-black text (`::selection`, `<mark>`); it is never text and never sits behind white.
9. **Accessibility is required: WCAG 2.2 AA.** Keyboard access everywhere, visible focus, nothing on hover only, `prefers-reduced-motion` respected, real alt text, contrast from the design tokens only. Eyebrows are 11px (the one sub-14px exception); everything else ≥14px.
10. **No secrets in the repo.** `.env*` stays untracked.
11. **Ask before** adding a dependency (pre-approved: `@fontsource-variable/manrope`, `@fontsource-variable/dm-sans`, `gray-matter`, `marked`, `@mermaid-js/mermaid-cli` as a dev dependency, `@axe-core/playwright` and `@playwright/test` as dev dependencies), changing the domain, DNS or hosting, or removing a public URL without a redirect.

## Stack

- React Router v7 in **SPA mode with prerendering** (`ssr: false`, `prerender` in `react-router.config.ts`). Every public route ships real HTML; each route keeps its `meta()` export. **The redesign keeps this** — do not switch to a client-only `RouterProvider`/`usePageMeta` setup even though the source prototype uses one.
- React 19, TypeScript (strict), Vite, Tailwind CSS v4. Tokens are CSS custom properties on `:root` and `[data-theme='dark']`, re-exported with `@theme inline` so the theme switches at runtime.
- **Fonts:** self-hosted **Manrope Variable** (display/headings) and **DM Sans Variable** (body) via `@fontsource-variable`, `font-display: swap`, `font-src 'self'`. (Inter is removed.)
- Case studies are markdown files in `content/work/<slug>.md`, read at build time.
- Vercel hosting and Vercel Analytics. Security headers live only in `vercel.json`.
- Playwright with `@axe-core/playwright` for page checks; Lighthouse CI in GitHub Actions.

## Commands

```bash
npm run dev          # local site
npm run typecheck    # react-router typegen && tsc
npm run lint         # eslint .
npm run build        # prerendered build in build/client, plus sitemap.xml
npm run test:e2e     # Playwright + axe
npm run screenshots  # refresh project screenshots
```

Before every commit: `npm run typecheck && npm run lint && npm run build`.

## Repo map

- `app/root.tsx`: document shell, theme script, `Person` JSON-LD, font preload
- `app/routes.ts`: Home, Work, Work detail, About, Contact
- `app/routes/*.tsx`: route modules; each exports `meta()` built with `pageMeta()`
- `app/data/site.ts`: personal facts and `pageMeta()`
- `app/data/work.ts`: types for `content/work/*.md` (safe for the browser); includes the required `proposition` one-liner
- `app/data/work.server.ts`: reads and validates `content/work/*.md` at build time; used only in loaders and `react-router.config.ts`
- `app/app.css`: tokens (`:root` / `[data-theme='dark']` / `@theme inline`), `@font-face`, component layer
- `app/components/`: Header, Footer, ThemeToggle and the components in `DESIGN-SYSTEM.md`
- `content/work/`: one markdown file per case study
- `public/work/<slug>/`: screenshots and diagrams for that case study
- `react-router.config.ts`: prerender list and sitemap, both built from the same route list

## How to work

- Follow `BUILD-PLAN.md` phase by phase. The redesign runs on `redesign/warm-editorial`; one branch and one pull request per phase after that. Never push to `main`.
- Small commits with conventional messages (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`).
- Define TypeScript types before building a component that uses new data.
- Check every page you change at 375 px, 768 px and 1280 px, in **light and dark themes**, and confirm the hero fits one screen at 390 px.
- When a task is done, tick it in `BUILD-PLAN.md`. When information is missing, add it to "Still missing" in `CONTENT.md` and keep going with the element hidden.
- Stop and ask at the checkpoints marked **Ask** in the plan, and whenever rules 1, 7 or 11 apply.

## Definition of done (every task)

- Typecheck, lint and build pass; new behavior has a test.
- Copy matches `CONTENT.md` word for word; nothing invented; every gap is a `TODO(content):`.
- Keyboard operable, focus visible, labeled controls, token colors only (teal accent, acid only as a highlight, no blue, no Inter), no horizontal scroll at 320 px.
- Works in light and dark; prerendered HTML for the page contains its main text, its own title, description and canonical URL.
