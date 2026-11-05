---
slug: lewisville
title: Deeper Life Bible Church Lewisville
outcome: I built a church website, audited it a year later, then rebuilt it in four gated phases.
order: 1
featured: true
year: '2025–2026'
role: Sole developer, analyst and project lead
team: Solo, with the pastor and church staff
timeline: Nov 2025 – Nov 2026
stack:
  [
    Next.js 16,
    React 19,
    TypeScript,
    Sanity 6,
    Tailwind CSS 4,
    Resend,
    Upstash,
    Jest,
    Playwright,
    Vercel,
  ]
disciplines: [Engineering, Analysis, Implementation, Delivery]
links:
  # Switch to https://deeperlifelewisville.org when the domain moves.
  live: https://dclm-lewisville.vercel.app/
  code: https://github.com/tobiakoko/dclm-lewisville
cover:
  src: /work/lewisville/cover.webp
  alt: 'Lewisville home page on desktop: the headline "God still changes lives." over a congregation photo, with the Sunday worship time, the address and a livestream link in a bar below'
stats:
  - { value: '109 → 333', label: 'unit tests' }
  - { value: '13 → 0', label: 'wrong facts in the home page HTML' }
  - { value: '360', label: 'browser test runs with accessibility checks' }
---

## Context

Deeper Life Bible Church Lewisville is a local congregation of an international church. Most first-time visitors find it on a phone and need to know, within seconds, when and where it meets and what to expect.

## The problem

I built the first version in November 2025 and kept adding to it. A year later I audited it and found it wasn't trustworthy:

- The home page HTML had the wrong phone number once, a non-existent domain 8 times, a placeholder street address twice and a placeholder phone number twice. The correct number appeared 0 times.
- Made-up sermon URLs returned 200 and made-up ministry URLs returned 500.
- The contact API reported success when email wasn't configured.
- 135 end-to-end runs passed, but 16 conditional guards meant many checked nothing.
- 65 dependency advisories, 3 of them critical. About 50 unreachable files.

## My role

### Engineering

- Rebuilt every page on Next.js 16 with cached static pages.
- Designed a contact API whose outcomes map to status codes (200, 400, 403, 429, 502, 503).
- Wrote a signed revalidation webhook.
- Built the design system and components.

### Analysis

- Ran discovery with the pastor and staff.
- Wrote a 100-item requirements checklist.
- Reconciled conflicting facts from many sources into one approved content document.
- Wrote acceptance gates for each phase.

### Implementation

- Modelled content in Sanity (6 fixed pages, 7 lists) and wrote a seed script.
- Connected email, YouTube, maps and consent-based analytics.
- Wrote a staff runbook and a 30-minute training plan.

### Delivery

- Planned the rebuild as four phases, each a pull request with an owner sign-off gate.

## Process

### Build (Nov 2025 – Feb 2026)

First version on Next.js, Sanity and Resend, then iteration.

### Harden (Aug 2026)

Rate limiting, origin checks, a signed webhook, a strict CSP, and CI that fails on high-severity advisories.

### Audit (2 Nov 2026)

A recorded baseline of checks, status codes, facts and tests.

### Rebuild (2–3 Nov 2026)

Phase 1 trust fixes (PR #16), Phase 2 design system and pages (#17), Phase 3 CMS and handover (#18), Phase 4 visual redesign (#20).

I wrote the plan, content source, design system and acceptance gates, used Claude Code to implement against them, and reviewed every pull request.

<div data-pair>

![Lewisville Visit page on desktop: "We'd love to meet you this Sunday." with when, where and how long beside a photo of the service](/work/lewisville/visit-desktop.webp 'Visit page on desktop: time, address and length of the service before anything else.')
![Lewisville Visit page on a phone, showing Sundays at 9:30 AM, the address and "About 2½ hours" above the fold](/work/lewisville/visit-phone.webp 'The same page on a phone.')

</div>

## Architecture

![Architecture: visitors load cached Next.js pages on Vercel that read content from Sanity; publishing in Sanity triggers a signed webhook that refreshes only the changed pages; forms go through a rate-limited contact API to Resend; sermons come from the YouTube feed.](/work/lewisville/architecture-light.svg 'How the site is put together.')

Visitors load cached static pages from Next.js 16 on Vercel, which read content from Sanity (6 singletons, 7 lists). When staff publish in Sanity, a signed webhook calls `/api/revalidate`, which refreshes only the changed content. `/api/contact` sends messages through Resend, with Upstash rate limiting. Sermons come from the YouTube feed, plus a cached `/api/live` check. Google Analytics loads only after consent. CI on Node 22 and 24 runs typecheck, lint, Jest and Playwright with axe.

## Key decisions

### Chose a fixed content model over a page builder

The church's doctrines and pastor's welcome must stay word for word, so editors change content, not layout. An earlier page-builder branch was rejected.

### Chose one source for every fact over per-page copy

A test fails if an old phone number or domain comes back, and the same code can serve other branches.

### Chose honest failure over silent fallbacks

A form that can't send says so and shows the phone number. A CMS error shows an error, never stale placeholder content.

![Lewisville Sermons page on desktop with a notice: "We couldn't load the latest videos right now. Watch on our YouTube channel instead."](/work/lewisville/sermons-desktop.webp 'When the video feed can’t be reached, the Sermons page says so and points to YouTube.')

### Chose the public YouTube feed over the YouTube API

No API key to manage or leak.

## Outcome

| Measure                       | Before (2 Nov 2026)                           | After (3 Nov 2026)                       |
| ----------------------------- | --------------------------------------------- | ---------------------------------------- |
| Unit tests                    | 109 (12% line coverage)                       | 333                                      |
| End-to-end runs               | 135, 16 silent skips, no accessibility checks | 360 across 5 browsers, axe on every page |
| Lint warnings                 | 56                                            | 0                                        |
| Dependency advisories         | 65 (3 critical)                               | 48, none critical (after Phase 1)        |
| Wrong facts in home page HTML | 13                                            | 0                                        |
| Made-up sermon URL            | 200                                           | 404                                      |
| Content updates               | Code changes                                  | Sanity Studio, refreshed on publish      |

Sources: the recorded baseline and pull requests #16–#20.

<!-- TODO(content): Lighthouse and Core Web Vitals after deploy; final npm audit count. -->
<!-- TODO(content): before/after figure pairs from the Phase 4 captures (redesign-before/ and redesign-after/), and a Studio editing screen. -->

## Reflection

> **What I'd do next:** measure Core Web Vitals on real phones, and add calendar export for events once the church approves it. And next time, audit before adding features, not a year later.
