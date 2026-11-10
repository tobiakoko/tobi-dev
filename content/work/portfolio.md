---
slug: portfolio
title: This portfolio
outcome: Made my own site indexable and rebuilt it as a quiet, fast, prerendered portfolio.
proposition: A content-first portfolio designed to make the work, process and range clear.
# Header, overview and the "in progress" note only, until Daniel confirms the full case study.
inProgress: true
order: 7
year: '2025–2026'
role: Designer and developer
timeline: 2025 – 2026
stack: ['React Router 7 (prerendered)', React 19, TypeScript, Tailwind CSS 4, Vercel]
disciplines: [Engineering]
links:
  live: https://tobiakoko.com
  code: https://github.com/tobiakoko/tobi-dev
cover:
  src: /work/portfolio/cover.webp
  alt: 'This portfolio''s home page on desktop: the headline "I engineer software and systems people can rely on." beside a photo of the Dallas skyline, with links to selected work, About and Contact'
---

## The problem

Search engines saw almost nothing of my own site:

- The prerendered home page held 92 characters of body text.
- A site-wide canonical told search engines every page was the home page.

## My role

### Engineering

- Prerendered every route, so each page ships its own text, title and canonical URL.
- Added both of my names to the structured data.
- Cut `app/` from 106 to 71 files and runtime dependencies from 11 to 7.

## Outcome

Home page body text in the prerendered HTML went from 92 to 1,416 characters.

| Page  | Form    | Performance | Accessibility | Best practices | SEO |
| ----- | ------- | ----------- | ------------- | -------------- | --- |
| Home  | Mobile  | 99          | 100           | 100            | 100 |
| Home  | Desktop | 100         | 100           | 100            | 100 |
| About | Mobile  | 100         | 100           | 100            | 100 |
| About | Desktop | 100         | 100           | 100            | 100 |

Lighthouse 12, median of 3 runs, measured on 5 November 2026.

<div data-pair>

![This portfolio's About page on desktop: the About heading and subheading, then the Bio in a label rail](/work/portfolio/about-desktop.webp 'About on desktop: each section in a label rail.')
![This portfolio's home page on a phone: the headline and introduction with links to Work, About and Email](/work/portfolio/home-phone.webp 'Home on a phone.')

</div>
