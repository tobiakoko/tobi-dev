# CLAUDE.md: tobiakoko.com

You are building the personal portfolio of **Daniel "Tobi" Akoko**, a software engineer in Dallas, Texas. The site has to work for several kinds of reader at once: engineering hiring managers, business and systems analyst hiring managers, implementation and solutions teams, project and PMO leads, and prospective freelance clients. It does that through one honest story and deep case studies, not by claiming to be everything.

Read this file at the start of every session, then the document for the area you're about to touch.

## Read these first

| File | Use it for |
| --- | --- |
| `docs/build/BUILD-PLAN.md` | What to build, in what order, and when each phase is done. **Start here.** |
| `docs/build/CONTENT.md` | Every word on the site: headline, bio, About, education, case study content, contact. Source of truth for copy and facts. |
| `docs/build/DESIGN-SYSTEM.md` | Tokens, type, spacing, layout, components, motion and accessibility rules. |
| `docs/build/CASE-STUDY-TEMPLATE.md` | The file format and section order for every `/work/:slug` page. |

When documents disagree: `CONTENT.md` wins for words and facts, `DESIGN-SYSTEM.md` for visuals, `BUILD-PLAN.md` for scope and order. If it's still unclear, ask.

## Who the site is for

A recruiter or hiring manager who gives the site about 30 seconds, then opens one case study if the first screen earns it. They need to find, without scrolling far: who Daniel is, what he does, proof that he has done it, and how to reach him. A freelance client needs the same, plus what working with him looks like.

The site has four sections only: **Home, Work (with a case study page per project), About, Contact.** There's no blog, no photos of Daniel and no headshot. Project screenshots and diagrams are the only imagery.

## Rules you must not break

1. **Never invent facts.** No made-up metrics, dates, employers, job titles, clients, quotes, testimonials, awards, certifications, links or screenshots. If something is missing, leave a `TODO(content):` comment, hide the element, and add it to "Still missing" in `CONTENT.md`. Never ship lorem ipsum, placeholder images or `#` links.
2. **Numbers come only from `CONTENT.md`.** Every figure in a case study is listed there with its source (a pull request, a metrics doc, a measurement). If a number isn't there, it doesn't go on the site.
3. **Stacks must match the code.** A project's stack lists only what that project's `package.json` or code actually uses. `CONTENT.md` has the checked list.
4. **One source for every fact.** Name, title, location, email, links, availability and the résumé path live in `app/data/site.ts`. Project metadata lives in the project's content file. No component hard-codes them.
5. **First person, plain words.** Copy says "I", not "Daniel". No "exceptional", "sophisticated", "enterprise-grade", "seamless", "passionate" or "cutting-edge". Short sentences.
6. **Client privacy.** No client staff names, member or customer data, voter emails or phone numbers in screenshots or text. Blur or crop them. Don't name a client or quote one unless `CONTENT.md` says permission was given.
7. **Accessibility is required: WCAG 2.2 AA.** Keyboard access everywhere, visible focus, nothing on hover only, `prefers-reduced-motion` respected, real alt text, contrast from the design tokens only.
8. **No secrets in the repo.** `.env*` stays untracked.
9. **Ask before** adding a dependency (pre-approved: `@fontsource-variable/inter`, `gray-matter`, `marked`, `@mermaid-js/mermaid-cli` as a dev dependency, `@axe-core/playwright` and `@playwright/test` as dev dependencies), changing the domain, DNS or hosting, or removing a public URL without a redirect.

## Stack

- React Router v7 in SPA mode with **prerendering** (`ssr: false`, `prerender` in `react-router.config.ts`). Every public route ships real HTML.
- React 19, TypeScript (strict), Vite, Tailwind CSS v4. Tokens are CSS custom properties on `:root` and `[data-theme='dark']`, re-exported with `@theme inline` so the theme can switch at runtime.
- Case studies are markdown files in `content/work/<slug>.md`, read at build time.
- Vercel hosting and Vercel Analytics. Security headers live only in `vercel.json`.
- Playwright with `@axe-core/playwright` for page checks; Lighthouse CI in GitHub Actions.

## Commands

```bash
npm run dev          # local site
npm run typecheck    # react-router typegen && tsc
npm run lint         # eslint .
npm run build        # prerendered build in build/client, plus sitemap.xml
npm run test:e2e     # Playwright + axe (added in Phase 4)
npm run screenshots  # refresh project screenshots (added in Phase 3)
```

Before every commit: `npm run typecheck && npm run lint && npm run build`.

## Repo map

- `app/root.tsx`: document shell, theme script, `Person` JSON-LD
- `app/routes.ts`: Home, Work, Work detail, About, Contact
- `app/routes/*.tsx`: route modules; each exports `meta()` built with `pageMeta()`
- `app/data/site.ts`: personal facts and `pageMeta()`
- `app/data/work.ts`: loads and types `content/work/*.md`
- `app/components/`: Header, Footer, ThemeToggle and the components in `DESIGN-SYSTEM.md`
- `content/work/`: one markdown file per case study
- `public/work/<slug>/`: screenshots and diagrams for that case study
- `public/resume.pdf`: the résumé
- `react-router.config.ts`: prerender list and sitemap, both built from the same route list

## How to work

- Follow `BUILD-PLAN.md` phase by phase. Phase 1 continues on the existing branch `redesign/editorial-system-seo` (pull request #4). After that, use one branch and one pull request per phase (`portfolio/phase-2-structure`, `portfolio/phase-3-case-studies`, `portfolio/phase-4-polish`). Never push to `main`.
- Small commits with conventional messages (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`, `test:`).
- Define TypeScript types before building a component that uses new data.
- Check every page you change at 375 px, 768 px and 1280 px, in light and dark themes.
- When a task is done, tick it in `BUILD-PLAN.md`. When information is missing, add it to "Still missing" in `CONTENT.md` and keep going with the element hidden.
- Stop and ask at the checkpoints marked **Ask** in the plan.

## Definition of done (every task)

- Typecheck, lint and build pass.
- Copy matches `CONTENT.md` word for word; nothing invented; every gap is a `TODO(content):`.
- Keyboard operable, focus visible, labeled controls, token colors only, no horizontal scroll at 320 px.
- Prerendered HTML for the page contains its main text, its own title, description and canonical URL.
