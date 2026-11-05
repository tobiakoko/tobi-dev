---
slug: dlbc-tampa
title: Deeper Life Bible Church Tampa
outcome: An audit-driven pass that cut the entry bundle by 87% and made every form actually deliver.
order: 4
featured: true
year: '2025–2026'
role: Sole developer
timeline: Dec 2025 – Aug 2026
stack:
  [Vite, React 18, React Router 6, TypeScript, Tailwind CSS 4, Sanity, Framer Motion, Formspree]
disciplines: [Engineering, Analysis, Implementation]
links:
  live: https://www.dlbctampa.org/
  code: https://github.com/tobiakoko/dlbc-template
cover:
  src: /work/dlbc-tampa/cover.webp
  alt: 'DLBC Tampa home page on desktop: "You''re Welcome Here" over a photo of two members, inviting visitors to join this Sunday at 9:00 AM'
stats:
  - { value: '−87%', label: 'entry JavaScript' }
  - { value: '−79%', label: 'image payload' }
  - { value: '2.2:1 → 5.5:1', label: 'button contrast' }
---

## Context

The Tampa congregation's site, with sermons, events, ministries, a gallery and an embedded Sanity Studio at `/studio`.

## The problem

Every visitor downloaded the whole Sanity Studio, a 5,336 kB entry chunk. Photos totalled about 21 MB. The contact, prayer and newsletter forms showed success without sending. Service times were wrong, and there were invented statistics, fabricated gallery dates and stock photos.

## My role

### Engineering

- Lazy-loaded the Studio route.
- Compressed images and added lazy loading.
- Fixed keyboard access to the menus.

### Analysis

- Audited the funnel from landing to Sunday attendance and found the visit form was a dead end.

### Implementation

- Connected the forms to Formspree with real error states.
- Replaced placeholder content with the church's real data.

<!-- TODO(content): Process and Architecture sections; CONTENT.md §6.3 has no material for them yet. -->

## Key decisions

### Chose React.lazy on one route over a rewrite

One static import caused the 5 MB chunk.

### Chose an honest gallery

I removed invented dates rather than guess them.

![DLBC Tampa photo gallery on a phone: "Showing 11 photos" above a grid of photos of members](/work/dlbc-tampa/gallery-phone.webp 'The gallery shows the church’s own photos, with no invented dates.')

## Outcome

| Measure                 | Before                      | After                              |
| ----------------------- | --------------------------- | ---------------------------------- |
| Entry JavaScript        | 5,336 kB (1,627 kB gzipped) | 359 kB (113.6 kB gzipped)          |
| Image payload           | ~21 MB                      | ~4.4 MB                            |
| Forms                   | Simulated success           | Real submissions with error states |
| Sunday service time     | Wrong                       | Sunday 9:00 AM                     |
| Call-to-action contrast | 2.2:1                       | 5.5:1                              |
| Nav dropdowns           | Hover only                  | Keyboard and Escape                |

Sources: the project's metrics document and the August 2026 commits.

<div data-pair>

![DLBC Tampa contact page on desktop: "Get in Touch" with the church's address in Temple Terrace, phone number with office hours, and email](/work/dlbc-tampa/contact-desktop.webp 'Contact page on desktop.')
![DLBC Tampa contact page on a phone](/work/dlbc-tampa/contact-phone.webp 'The same page on a phone.')

</div>

## Reflection

> **What I'd do next:** the audit approach here became the systematic one I used on [Lewisville](/work/lewisville).
