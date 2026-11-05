# Content: tobiakoko.com

Every word and fact on the site comes from this file. Copy it exactly. Where it says `TODO(content):`, hide the element and leave the comment; don't fill the gap yourself.

Facts about the projects were checked against each repository on 3 November 2026. Each number lists its source.

---

## 1. Site facts (`app/data/site.ts`)

| Key | Value |
| --- | --- |
| Full name | Daniel Akoko |
| Also known as | Tobi Akoko |
| Display name | Daniel (Tobi) Akoko |
| Title | Software Engineer |
| Location | Dallas, Texas |
| Email | enquiries@tobiakoko.com |
| GitHub | https://github.com/tobiakoko |
| LinkedIn | https://www.linkedin.com/in/daniel-akoko/ (confirmed by Daniel, 5 Nov 2026) |
| Booking link | `TODO(content): optional. A scheduling page (Cal.com or Calendly, both free) where a visitor picks a 20-minute slot from Daniel's calendar. Hide every "Book a call" link until it exists; email alone is fine` |
| Site URL | https://tobiakoko.com |
| Availability | Open to full-time roles and freelance projects |

No résumé on the site (Daniel's decision, 3 Nov 2026): experience, education and certifications live on About instead.

---

## 2. Home

### 2.1 Headline

**Chosen: A** (Daniel, 3 November 2026).

General headlines (work for every career track):

| | Headline | Why it works |
| --- | --- | --- |
| **A (default)** | **From requirements to release.** | Names the whole span: analysis, building, delivery. Four words. |
| B | I build software people can trust. | Ties to the audit story: correct facts, honest errors. |
| C | Clear plans. Working software. | Speaks to analysts and project leads as much as engineers. |
| D | I find what's broken, then fix it. | Leads with the audit and rebuild, your most distinctive work. |
| E | Software that's right, not just running. | Quality-first; good for QA and analyst roles. |

Track-specific headlines (for a later version, or if Daniel narrows his search):

| Track | Headline |
| --- | --- |
| Software engineering | Full-stack web apps, built to last. |
| Business and systems analysis | Requirements first. Then the code. |
| Implementation and solutions | I launch software teams can run themselves. |
| Project delivery / PMO | Phased plans. Honest status. Shipped. |
| Data | Many sources. One source of truth. |

### 2.2 Hero

- Label: **Daniel (Tobi) Akoko · Dallas, Texas**
- Headline: from 2.1
- Intro (two sentences):

  > I'm a software engineer who plans, builds, tests and hands over web software for churches and small businesses. My work runs from paid voting and live leaderboards to content systems that staff update themselves.

- Links: **Work** · **About** · **Email**

### 2.3 Selected work

Heading: **Selected work**. Show the four `featured` projects in `order`: Lewisville, Afromerica, the Lewisville LED wall, DLBC Tampa. The LED wall shows range beyond web code: diagnosis, systems design and hardware configuration. Then the link **All work →**.

### 2.4 How I work

Heading: **How I work**

| Discipline | Line | Sentence | Proof link |
| --- | --- | --- | --- |
| Engineering | **Build it properly.** | Typed APIs, real tests and pages that load fast, in Next.js, React, TypeScript and Postgres. | Afromerica |
| Analysis | **Get the facts right.** | I start with discovery and an audit, then write requirements with acceptance criteria someone can check. | Lewisville |
| Implementation | **Hand it over.** | Content systems, integrations, a runbook and training, so non-technical staff can run what I build. | Lewisville |
| Delivery | **Ship in phases.** | Small, gated releases with a clear status and a sign-off at each step. | Lewisville |

### 2.5 Availability

> ● Open to full-time roles and freelance projects. **enquiries@tobiakoko.com** · **Book a call**

(Hide "Book a call" until the booking link exists.)

### 2.6 Meta

- Title: `Daniel (Tobi) Akoko · Software Engineer in Dallas`
- Description: `Daniel (Tobi) Akoko is a software engineer in Dallas who plans, builds, tests and hands over web software for churches and small businesses.`

---

## 3. Work index

- Title: **Work**
- Intro: `Projects I've planned, built and supported, each with a full case study.`
- Meta title: `Work · Daniel (Tobi) Akoko`
- Meta description: `Case studies from Daniel Akoko: church websites, a live-voting competition platform, and small-business sites, with architecture and measured results.`

---

## 4. About

Meta title: `About · Daniel (Tobi) Akoko`. Meta description: `Daniel (Tobi) Akoko is a software engineer in Dallas with a background in computer science, electrical engineering and years of client-facing work.`

### 4.1 Heading

- H1: **About**
- Subheading: **I build software that tells the truth: correct facts, honest error messages, and a handover the client can actually run.**

### 4.2 Bio (label: Bio)

> I'm Daniel Akoko, and most people call me Tobi. I'm a software engineer in Dallas, Texas. I build web software for churches and small businesses, and I care most about the parts people only notice when they break: the facts on the page, the error messages, the tests and the handover.
>
> My path here wasn't a straight line. I studied electrical engineering, then criminology, then computer science, and I worked in hospitality, where I learned to stay calm under pressure and look after people. For years I've also run sound, media and livestreaming at my church. All of it shows up in how I work: I listen first, I plan in steps, and I don't call something done until it works for the person using it.

### 4.3 How I work (label: How I work)

Three principles, each a bold line and one sentence:

1. **Get the facts right.** Every fact lives in one place, and a test fails if a wrong one comes back.
2. **Fail honestly.** A form that can't send says so, and shows another way to reach a person.
3. **Leave it runnable.** Documentation, a runbook and training mean the client never depends on me to change a service time.

### 4.4 Present (label: Present)

> I build websites and digital services for churches and small businesses, and I'm studying for an MBA at Western Governors University (expected June 2027). I'm open to full-time roles in software engineering, business and systems analysis, implementation, and project delivery.

### 4.5 Past (label: Past)

A list, newest first. Each item: role, organisation, location, dates, then 2–4 bullets. Roles and dates are from Daniel (5 Nov 2026). Bullets are Daniel's, edited where the code shows something different; edits are noted in the comments under each role and must not be reverted without checking the repo.

**Senior Full-Stack Developer** · Afromerica Entertainment · Remote · Aug 2025 – Dec 2025

- Built a competition and events platform in React, TypeScript and Next.js, from the database and APIs to the admin dashboard.
- Delivered paid voting with a live leaderboard, an event management dashboard and ticket checkout with Paystack.
- Built REST APIs on PostgreSQL (Supabase) with signed, idempotent payment webhooks and real-time updates.

<!-- Edits from Daniel's draft: "Stripe" changed to Paystack (the repo uses Paystack, lib/paystack/*; no Stripe code). "Serving thousands of concurrent users" and "<200 ms API response times (75% improvement)" are removed until Daniel has a measurement to cite (Vercel Analytics, Supabase logs or Sentry). TODO(content): add them back only with a source. "Service-oriented architecture" removed: the backend is Next.js API routes on Supabase. -->

**Software Engineer (Full-Stack)** · DLBC ICT · Dallas, TX · Nov 2024 – Sep 2025

- Built web applications in React, TypeScript, Node.js, Tailwind CSS and shadcn/ui for church donation platforms.
- Turned Figma wireframes into accessible components (WCAG 2.1), working with stakeholders and designers on feedback.
- Integrated Stripe payments with error boundaries, fallback UI and clear error handling.
- Improved server-side rendering and search performance, and pushed for refactors that made the code easier to maintain.

<!-- TODO(content): none of the repositories reviewed (dlbc-template, dclm-lewisville) contain Stripe or a donation platform, and the Nov 2024 – Sep 2025 dates come before the earliest commits in those repos (Dec 2025 and Nov 2025). Before publishing, Daniel links the donation project (repo or live URL) or a case study, or rewrites these bullets to match work that can be shown. -->

**IT & AV Systems Lead** · Deeper Life Bible Church · Tampa, FL and Dallas, TX · 2018 – present

- Run IT across two church locations: workstations, networks and Wi-Fi, printers, and hardware and software troubleshooting.
- Designed and installed the AV and livestream system (cameras, audio mixers, microphones, monitors and streaming encoders) for weekly services broadcast online. See the LED wall case study.
- Lead and train a volunteer electronics team, with standard operating procedures and documentation.
- Maintain the church website and its security, and keep network diagrams, equipment inventories, troubleshooting guides, backups and account policies up to date.

**Freelance Web Developer** · Self-employed · Remote · 2025 – present

- Websites for a Tampa law practice and a Torrance, California collision-repair shop (see Work).

**Hospitality** · Dallas, TX · `TODO(content): years` · Guest-facing service in high-volume restaurants. (Daniel's decision: don't name the employers.)

<!-- TODO(content): employment type for each role (full-time, contract, part-time, volunteer). Recruiters and background checks verify titles and dates, so the type should match what an employer reference would say. -->

### 4.6 Origins (label: Origins)

> I started in electrical engineering at the Community College of Baltimore County, moved into criminology at the University of South Florida, and found my way to computer science at Western Governors University. Music has been a constant: I direct choirs and help run music and media for church events.

### 4.7 Education (label: Education)

| Degree | School | Year |
| --- | --- | --- |
| Master of Business Administration (in progress) | Western Governors University | Jun 2026 – Jun 2027 (expected) |
| B.S. Computer Science | Western Governors University | Apr 2023 – Sep 2024 |
| B.G.S. Criminology | University of South Florida | `TODO(content)` |
| A.S. Electrical Engineering | Community College of Baltimore County | `TODO(content)` |

### 4.8 Certifications (label: Certifications)

- ITIL Foundation
- LPI Linux Essentials

`TODO(content): years earned.`

### 4.9 Community (label: Community)

- Media production, choir direction and digital streaming, Deeper Life Bible Church
- DLYA fundraising team

### 4.10 Closing line

> Want to work together? **Email me** or **see my work**.

---

## 5. Contact

- H1: **Let's talk**
- Line: `I'm open to full-time roles and freelance projects. Email is best, and I reply within two business days.`
- List: Email · Book a call (hide until set) · LinkedIn · GitHub · Location: Dallas, Texas
- Meta title: `Contact · Daniel (Tobi) Akoko`
- Meta description: `Contact Daniel (Tobi) Akoko, a software engineer in Dallas, about full-time roles or freelance web projects.`

---

## 6. Case studies

Order and front matter. `featured: true` for the first four.

| order | slug | title | year | disciplines |
| --- | --- | --- | --- | --- |
| 1 | `lewisville` | Deeper Life Bible Church Lewisville | 2025–2026 | Engineering, Analysis, Implementation, Delivery |
| 2 | `afromerica` | Afromerica Entertainment | 2025 | Engineering, Implementation |
| 3 | `led-wall` | Extending a church LED wall | 2026 | Analysis, Implementation, Delivery |
| 4 | `dlbc-tampa` | Deeper Life Bible Church Tampa | 2025–2026 | Engineering, Analysis, Implementation |
| 5 | `rons-body-shop` | Ron's Body Shop | 2025–2026 | Engineering, Implementation |
| 6 | `oseiprempeh` | OseiPrempeh Law Firm | 2025 | Engineering |
| 7 | `portfolio` | This portfolio | 2025–2026 | Engineering |

Section numbers below don't follow display order; `order` decides it. The LED wall is §6.7.

Ask Kumuyi AI is **not** included (deployment is down).

### 6.1 Deeper Life Bible Church Lewisville

**Front matter**

- outcome: `I built a church website, audited it a year later, then rebuilt it in four gated phases.`
- role: `Sole developer, analyst and project lead`
- team: `Solo, with the pastor and church staff`
- timeline: `Nov 2025 – Nov 2026`
- stack: Next.js 16, React 19, TypeScript, Sanity 6, Tailwind CSS 4, Resend, Upstash, Jest, Playwright, Vercel
- links: live `https://dclm-lewisville.vercel.app/` (switch to `https://deeperlifelewisville.org` when the domain moves); code `https://github.com/tobiakoko/dclm-lewisville`
- stats: `109 → 333` unit tests · `13 → 0` wrong facts in the home page HTML · `360` browser test runs with accessibility checks
- Permission: given by the pastor (5 Nov 2026) to name leaders and show photos from the site.

**Context.** Deeper Life Bible Church Lewisville is a local congregation of an international church. Most first-time visitors find it on a phone and need to know, within seconds, when and where it meets and what to expect.

**The problem.** I built the first version in November 2025 and kept adding to it. A year later I audited it and found it wasn't trustworthy (source: `docs/build/BASELINE.md`):

- The home page HTML had the wrong phone number once, a non-existent domain 8 times, a placeholder street address twice and a placeholder phone number twice. The correct number appeared 0 times.
- Made-up sermon URLs returned 200 and made-up ministry URLs returned 500.
- The contact API reported success when email wasn't configured.
- 135 end-to-end runs passed, but 16 conditional guards meant many checked nothing.
- 65 dependency advisories, 3 of them critical. About 50 unreachable files.

**My role.**

- Engineering: rebuilt every page on Next.js 16 with cached static pages; designed a contact API whose outcomes map to status codes (200, 400, 403, 429, 502, 503); wrote a signed revalidation webhook; built the design system and components.
- Analysis: ran discovery with the pastor and staff; wrote a 100-item requirements checklist; reconciled conflicting facts from many sources into one approved content document; wrote acceptance gates for each phase.
- Implementation: modelled content in Sanity (6 fixed pages, 7 lists), wrote a seed script, connected email, YouTube, maps and consent-based analytics, and wrote a staff runbook and a 30-minute training plan.
- Delivery: planned the rebuild as four phases, each a pull request with an owner sign-off gate.

**Process.**

- *Build (Nov 2025 – Feb 2026):* first version on Next.js, Sanity and Resend, then iteration.
- *Harden (Aug 2026):* rate limiting, origin checks, a signed webhook, a strict CSP, CI that fails on high-severity advisories.
- *Audit (2 Nov 2026):* a recorded baseline of checks, status codes, facts and tests.
- *Rebuild (2–3 Nov 2026):* Phase 1 trust fixes (PR #16), Phase 2 design system and pages (#17), Phase 3 CMS and handover (#18), Phase 4 visual redesign (#20).

**Architecture.** Diagram: Visitor → Vercel (Next.js 16, cached static pages) → reads Sanity (6 singletons, 7 lists). Sanity → signed webhook → `/api/revalidate` → refreshes only the changed content. `/api/contact` → Resend, with Upstash rate limiting. Sermons from the YouTube feed plus a cached `/api/live` check. Google Analytics only after consent. CI on Node 22 and 24 runs typecheck, lint, Jest and Playwright with axe.

**Key decisions.**

- *Chose a fixed content model over a page builder:* the church's doctrines and pastor's welcome must stay word for word, so editors change content, not layout. (An earlier page-builder branch was rejected.)
- *Chose one source for every fact over per-page copy:* a test fails if an old phone number or domain comes back, and the same code can serve other branches.
- *Chose honest failure over silent fallbacks:* a form that can't send says so and shows the phone number; a CMS error shows an error, never stale placeholder content.
- *Chose the public YouTube feed over the YouTube API:* no API key to manage or leak.

**Outcome.** (sources: `BASELINE.md`, PRs #16–#20)

| Measure | Before (2 Nov 2026) | After (3 Nov 2026) |
| --- | --- | --- |
| Unit tests | 109 (12% line coverage) | 333 |
| End-to-end runs | 135, 16 silent skips, no accessibility checks | 360 across 5 browsers, axe on every page |
| Lint warnings | 56 | 0 |
| Dependency advisories | 65 (3 critical) | 48, none critical (after Phase 1) |
| Wrong facts in home page HTML | 13 | 0 |
| Made-up sermon URL | 200 | 404 |
| Content updates | Code changes | Sanity Studio, refreshed on publish |

`TODO(content): Lighthouse and Core Web Vitals after deploy; final npm audit count.`

Figures: `public/work/lewisville/` (supplied 5 Nov 2026): cover and home, visit, about, ministries, events, contact and give at desktop and phone; full-page home, visit and contact; `architecture-light.svg` and `architecture-dark.svg`. The `sermons-*` shots show the honest "couldn't load videos" state; use them only as the figure for the "honest failure" decision. Still wanted: the Phase 4 before captures (owner, local only) and a Studio editing screen.

**Reflection.** `What I'd do next:` measure Core Web Vitals on real phones, and add calendar export for events once the church approves it. And next time, audit before adding features, not a year later.

**AI note (one line in Process → Rebuild):** `I wrote the plan, content source, design system and acceptance gates, used Claude Code to implement against them, and reviewed every pull request.`

### 6.2 Afromerica Entertainment

**Front matter**

- outcome: `A talent-competition platform with paid voting, ticketing and a live judged finale, with scoring computed in the database.`
- role: `Sole developer`
- timeline: `Oct – Dec 2025`
- stack: Next.js 16, React 19, TypeScript, Supabase (Postgres, Auth, Realtime), Paystack, Resend, Sentry, Tailwind CSS 4, Vercel
- links: live `https://www.afromericaent.com/`; code `https://github.com/tobiakoko/afromerica-ent` (link it only after the repo clean-up in BUILD-PLAN "Outside this repo": root fix notes moved, `.backup` file removed)
- stats (system facts until the client supplies figures): `60 / 40` judges / audience weighting in stages 1–3 · `23` API routes · `10 min` one-time-code expiry. `TODO(content): replace with votes cast, tickets sold or peak voters if the client shares them`
- Permission: given by the client (5 Nov 2026) to name them and use screenshots. Still blur voter names, emails and phone numbers.

**Context.** Afromerica Entertainment runs a music talent competition with public events, artist profiles, ticket sales and fan voting, ending in a live grand finale.

**The problem.** The competition needed paid votes and tickets that couldn't be double-counted, a way to stop vote stuffing, and a scoring system that combined judges and audience, with rules that could change between stages.

**My role.**

- Engineering: 23 API routes; Paystack checkout and a signed, idempotent webhook; email one-time codes; a scoring engine in Postgres functions; a live leaderboard with Supabase Realtime.
- Implementation: admin dashboard for events, artists, tickets, votes and the finale; email templates with React Email and Resend; error monitoring with Sentry.

**Process.** Database and auth with row-level security → public pages → booking and payments → voting → admin dashboard → the finale system, built and adjusted in the last week of December 2025 as the rules changed.

**Architecture.** Next.js 16 on Vercel; Supabase Postgres (11 core tables plus finale migrations, row-level security), Auth and Realtime; Paystack for payments with a webhook into `webhook_logs`; Resend for one-time codes and confirmations; Sentry.

**Key decisions.**

- *Chose scoring in Postgres functions over app code:* one place computes every stage's weighted score, so the leaderboard, admin panel and winners screen always agree.
- *Chose idempotent webhooks:* each Paystack event is logged and checked against the vote or ticket before it's applied, so retries can't double-count.
- *Chose email one-time codes for voters:* 6 digits, 10-minute expiry, per-email limits.

**Figures.** `public/work/afromerica/architecture-light.svg` and `-dark.svg` (supplied). Screenshots: `TODO(content): run tools/capture-kit against the live site`.

**Outcome.** Scoring: stages 1–3 weighted judges 60% and online votes 40%; stage 4 was 100% judges. In-house votes were removed and online voting codes disabled during the final week. Figures: event page, vote flow with the code step, checkout, live leaderboard, judge scoring screen, admin finale panel, winners screen. Blur all voter data.

**Reflection.** `What I'd do next:` add automated tests for the scoring function and the webhook, compare signatures with a timing-safe check, and move the fix notes out of the repo root.

### 6.3 Deeper Life Bible Church Tampa

**Front matter**

- outcome: `An audit-driven pass that cut the entry bundle by 87% and made every form actually deliver.`
- role: `Sole developer`
- timeline: `Dec 2025 – Aug 2026`
- stack: Vite, React 18, React Router 6, TypeScript, Tailwind CSS 4, Sanity, Framer Motion, Formspree
- links: live `https://www.dlbctampa.org/`; code `https://github.com/tobiakoko/dlbc-template`
- stats: `−87%` entry JavaScript · `−79%` image payload · `2.2:1 → 5.5:1` button contrast
- Note: Daniel is upgrading this site. Write about the current version; add "A new version is in progress" at the end when it starts.

**Context.** The Tampa congregation's site, with sermons, events, ministries, a gallery and an embedded Sanity Studio at `/studio`.

**The problem** (source: `docs/METRICS.md` and the August 2026 commits): every visitor downloaded the whole Sanity Studio (a 5,336 kB entry chunk); photos totalled about 21 MB; the contact, prayer and newsletter forms showed success without sending; service times were wrong; and there were invented statistics, fabricated gallery dates and stock photos.

**My role.**

- Engineering: lazy-loaded the Studio route, compressed images, added lazy loading, fixed keyboard access to the menus.
- Analysis: audited the funnel from landing to Sunday attendance and found the visit form was a dead end.
- Implementation: connected the forms to Formspree with real error states; replaced placeholder content with the church's real data.

**Key decisions.** *Chose `React.lazy` on one route over a rewrite:* one static import caused the 5 MB chunk. *Chose an honest gallery:* removed invented dates rather than guess them.

**Outcome.**

| Measure | Before | After |
| --- | --- | --- |
| Entry JavaScript | 5,336 kB (1,627 kB gzipped) | 359 kB (113.6 kB gzipped) |
| Image payload | ~21 MB | ~4.4 MB |
| Forms | Simulated success | Real submissions with error states |
| Sunday service time | Wrong | Sunday 9:00 AM |
| Call-to-action contrast | 2.2:1 | 5.5:1 |
| Nav dropdowns | Hover only | Keyboard and Escape |

**Figures.** `public/work/dlbc-tampa/` (supplied, from a local build): cover and seven pages at desktop and phone. The full home page is held back: the home Events cards show "NaN" dates (see BUILD-PLAN "Outside this repo").

**Reflection.** `What I'd do next:` the audit approach here became the systematic one I used on Lewisville. Link to the Lewisville case study.

### 6.4 Ron's Body Shop

**Do the client fixes first** (BUILD-PLAN Phase 3, outside this repo), then write this case study around them.

**Front matter**

- outcome (after fixes): `TODO(content): e.g. "A collision-repair site that now delivers every estimate request" — only once the form fix is live`
- role: `Sole developer`
- timeline: `Aug 2025 – Jan 2026`
- stack: React 19, Vite, TypeScript, Tailwind CSS 4, Vercel Analytics
- location: Torrance, California
- links: live `https://www.ronsbodyshop.net/`; code `https://github.com/tobiakoko/RonsBodyShop`

**Facts available now:** a collision-repair shop in Torrance, California; video hero; services, gallery, story and contact sections; Vercel Analytics tracks "Request Estimate" clicks; 44 commits from August 2025 to January 2026.

**Known issues to fix and then show as before/after:** contact and newsletter forms simulate success; six images load from a design tool's host rather than the shop's own photos; 25 MB of media in `src/assets`; autoplaying hero video with no pause control.

`TODO(content): before/after page weight, Lighthouse, and estimate requests per month (with the owner's OK).`

### 6.5 OseiPrempeh Law Firm

**Front matter**

- outcome: `A single-page site for a Tampa law practice, delivered in three weeks.`
- role: `Sole developer`
- timeline: `May – Jun 2025`
- stack: React Router 7, React 19, TypeScript, Tailwind CSS 4, Radix UI, Embla Carousel
- links: live `https://www.oseiprempeh.com/`; code `https://github.com/tobiakoko/D-Law`

Short case study (300–400 words): context, my role, practice-area structure (immigration, personal injury, international business, family law, contract disputes, criminal defense), search metadata and link previews, screenshots desktop and phone.

`TODO(content): the firm must approve the statistics and testimonials shown on its site before any screenshot that includes them is used.` The supplied screenshots show both, so they're held in `assets/public/work/oseiprempeh/` (not deployed) until the firm approves.

### 6.6 This portfolio

**Front matter**

- outcome: `Made my own site indexable and rebuilt it as a quiet, fast, prerendered portfolio.`
- role: `Designer and developer`
- timeline: `2025 – 2026`
- stack: React Router 7 (prerendered), React 19, TypeScript, Tailwind CSS 4, Vercel
- links: live `https://tobiakoko.com`; code `https://github.com/tobiakoko/tobi-dev`

Short case study (about 300 words), from PR #4: home page body text in the prerendered HTML went from 92 to 1,416 characters; a site-wide canonical told search engines every page was the home page; both names added to the structured data; `app/` from 106 to 71 files; runtime dependencies from 11 to 7. `TODO(content): Lighthouse scores after launch.`

### 6.7 Extending a church LED wall (Deeper Life Bible Church Lewisville)

Source: Daniel's case study "Case Study: Extending a P1.25 LED Wall" (3 November 2026). Every figure below comes from it.

**Front matter**

- title: `Extending a church LED wall`
- outcome: `I took a church's LED wall from a failed extension, with scrambled and repeated content, to one working 3072 × 1536 display.`
- role: `Diagnosis, system design, controller and receiving-card configuration, vendor follow-up`
- team: `Solo, with the church and the equipment vendor`
- timeline: `2026` — `TODO(content): months`
- stack label: **Tools and hardware** (not "Stack")
- stack: NovaStar VX1000 Pro (replacing a VX600), 24 NovaStar A7s Plus receiving cards, NovaLCT V5.9.2, NovaStar Mapping test, receiving-card self-tests
- disciplines: Analysis, Implementation, Delivery
- links: none
- stats: `16 → 24` cabinets running · `+50%` screen (3072 × 1536 px) · `9` separate faults found and fixed
- Permission: `TODO(content): pastor's OK to publish; photos only with no congregation faces`

**Context.** The church's LED wall started as 16 cabinets (4 × 4, 2048 × 1536 px), driven by a NovaStar VX600 over six Ethernet ports. To make it bigger, the church added 8 cabinets as two new columns: 24 cabinets, 6 × 4, 3840 × 1920 mm, P1.25 indoor. After the install, the wall no longer showed one clean picture. Sections repeated, froze or showed the wrong part of the image.

**The problem.** The wall grew by 50% while its controller and configuration stayed sized for the original screen. The wall carries lyrics, sermon slides, camera close-ups and what the livestream audience sees, so services ran on a reduced layout with part of the wall dark, and the new cabinets added nothing.

- **Over capacity:** the full wall is 4,718,592 px; the VX600 is rated for 3.9 million, about 21% over.
- **Over per-port bandwidth:** six ports for 24 cabinets meant 4 cabinets (786,432 px) per chain, against about 650,000 px per Gigabit port.
- **Stale map:** the controller still held the 2048 × 1536 map.
- **Wrong module profile:** the receiving cards were set for a different module, which scrambled the picture, capped cabinet height at 256 px and ran a 480 Hz refresh that risked banding on camera.
- **Missing controller:** the packing list included a VX1000, but none was shipped.

**My role.**

- Analysis: rebuilt the specification from physical evidence (carton labels, circuit-board markings, mounting bars, the packing list) instead of trusting stored settings; worked out the pixel and port maths that showed it was a hardware limit; reconstructed the original installer's port map.
- Implementation: designed a new data topology; configured the VX1000 Pro (grid, cabinets per port, map, output); identified the module's driver chip and loaded the manufacturer's receiving-card profile on all 24 cards.
- Delivery: raised the missing controller and the profile request with the vendor under the order number; kept services running on a reduced layout in the meantime; validated and documented the handover.

**Process.** Six phases. Frame them with the idea from the source: the system is a stack of five configuration layers, each relying on the one below, and every layer held its own fault.

1. *Discovery:* the physical evidence table (module label R1.25/64S 256X128; 640 mm and 955 mm mounting bars giving 640 × 480 mm, 512 × 384 px cabinets; A7s Plus cards; a 6 × 4 grid; the VX600 still showing 2048x1536@60).
2. *Capacity:* the cabinets-per-port table: 2 per port = 393,216 px (60%), 3 = 589,824 px (91%), 4 = 786,432 px (121%, over).
3. *Topology:* 8 horizontal chains of 3 cabinets. Odd ports feed the left power supply and even ports the right, so no chain crosses the power boundary.
4. *Controller setup:* three passes. Vertical chains failed because 3 doesn't divide 4 rows; the grid still described a 4 × 2 wall; "Device overloaded" came from 3D being on, which halves capacity.
5. *Receiving cards:* the cards held a generic common-chip, static-scan profile; the module is a Chipone ICND2165 PWM driver at 1/64 scan. Daniel resisted cutting the cabinet height to clear a red warning, which would have hidden a third of every cabinet, and loaded the factory profile instead.
6. *Validation and handover:* Mapping walk, full-colour tests, a camera check at 1/60 and 1/120 shutter, a power cycle to confirm persistence, and written records.

**Architecture.** Two diagrams, redrawn as SVG: (1) the five-layer configuration stack with the fault found at each layer; (2) the final port map: 24 cabinets, 8 chains of 3, two power halves. Text: "The VX1000 Pro feeds 8 of its 10 Gigabit ports, each carrying one horizontal chain of three cabinets at 589,824 px, 91% of a port's limit. Odd ports sit on power supply A and even ports on supply B, so a supply failure darkens exactly one half of the wall."

**Key decisions.**

- *Chose a bigger controller over more tuning:* no port arrangement on a VX600 could carry 24 of these cabinets.
- *Chose horizontal chains of three over vertical chains:* three divides the 6 columns, not the 4 rows.
- *Chose to keep each chain inside one power half:* a power fault can never be mistaken for a data fault.
- *Chose the manufacturer's profile over editing settings by hand:* PWM driver chips need factory register settings.

**Issues log.** Use the 9-row table from the source (symptom, root cause, fix): stale map and over-capacity; no controller shipped; a missing module; stranded top-row cabinets; only the top-left region addressed; "Device overloaded" from 3D; Image Mosaic and PIP left on; module size entered as cabinet size; the wrong receiving-card profile.

**Outcome.**

| Measure | Before | After |
| --- | --- | --- |
| Cabinets | 24 installed, picture broken | 24 (6 × 4) running as one canvas |
| Canvas | 2048 × 1536, stale | 3072 × 1536 @ 60 Hz |
| Controller | VX600, 21% over its 3.9M px rating | VX1000 Pro, 73% of its 6.5M px rating |
| Heaviest port load | 786,432 px (121%) | 589,824 px (91%) |
| Ports in use | 6 of 6 | 8 of 10 (2 spare) |
| Receiving-card profile | Generic common-chip, static scan | Chipone ICND2165, 1/64 scan |

Settings are saved to the controller and the cards and survived a power cycle. Handover note for the church team: "If exactly half the wall goes dark, check that half's power supply first."

**Reflection.** Use the source's lessons, condensed: do the pixel maths before mounting anything; trust physical evidence over stored settings; test one layer at a time; treat a warning as a symptom; ask for factory files with the order.

**Writing note.** The source writes each section twice, once "for church leadership" and once as a "technical view". On the portfolio, keep that idea in a lighter form: open each section with the plain-language sentence, then the technical detail. That shows the same skill analyst and implementation roles look for: explaining one problem to two audiences.

**AI note.** The source lists "Claude for spec research and diagnostic cross-checks" under tools. Keep it in the tools line.

---

## 7. Still missing

- [x] Headline choice (2.1): A
- [x] LinkedIn URL confirmed
- [ ] Booking link (optional; see §1)
- [x] Résumé: not used (§1)
- [x] MBA and B.S. dates
- [ ] Years for the B.G.S., the A.S. and both certifications
- [x] Roles and dates (§4.5)
- [ ] DLBC ICT role: a link to the donation project, or rewritten bullets (§4.5 comment)
- [ ] Afromerica: a source for any performance or traffic figures before they return
- [ ] Employment type for each role
- [x] Hospitality employers: not named
- [x] Lewisville URL and permission
- [x] Afromerica permission and live URL
- [ ] Afromerica repo clean-up before linking the code
- [ ] Ron's Body Shop: fixes done, then numbers and owner's OK
- [ ] OseiPrempeh: firm's approval of statistics and testimonials
- [x] Lighthouse scores (§8)
- [ ] Afromerica screenshots from the live site (capture kit)
- [x] Lewisville screenshots and architecture diagram; Afromerica architecture diagram
- [ ] LED wall: timeline (months), photos (front of the working wall, rear cabling, Mapping test, receiving-card self-test before and after), confirmation that the pastor's 5 Nov permission covers this write-up; the two diagrams redrawn as SVG

---

## 8. Lighthouse scores

Measured from Daniel's machine with `tools/capture-kit/lighthouse.mjs` on 5 Nov 2026. Lighthouse 12, median of 3 runs. These are measurements of the live sites; quote them only with the date.

| Project | Page | Form | Perf | A11y | BP | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| lewisville | / | mobile | 79 | 100 | 100 | 100 | 4.5 s | 0.005 |
| lewisville | / | desktop | 99 | 100 | 100 | 100 | 1.0 s | 0.005 |
| lewisville | /visit | mobile | 88 | 100 | 96 | 100 | 3.6 s | 0 |
| lewisville | /visit | desktop | 99 | 100 | 96 | 100 | 0.7 s | 0.054 |
| afromerica | / | mobile | 84 | 100 | 96 | 100 | 2.4 s | 0 |
| afromerica | / | desktop | 100 | 96 | 96 | 100 | 0.5 s | 0 |
| afromerica | /events | mobile | 95 | 98 | 100 | 92 | 2.4 s | 0 |
| afromerica | /events | desktop | 100 | 98 | 100 | 92 | 0.5 s | 0 |
| dlbc-tampa | / | mobile | 69 | 89 | 100 | 83 | 6.4 s | 0 |
| dlbc-tampa | / | desktop | 96 | 89 | 100 | 83 | 1.3 s | 0 |
| dlbc-tampa | /contact | mobile | 66 | 97 | 100 | 92 | 6.8 s | 0 |
| dlbc-tampa | /contact | desktop | 98 | 97 | 100 | 92 | 1.0 s | 0 |
| rons-body-shop | / | mobile | 89 | 92 | 100 | 100 | 3.0 s | 0 |
| rons-body-shop | / | desktop | 99 | 92 | 100 | 100 | 0.9 s | 0 |
| oseiprempeh | / | mobile | 98 | 77 | 96 | 92 | 1.7 s | 0.087 |
| oseiprempeh | / | desktop | 99 | 84 | 100 | 92 | 0.4 s | 0.083 |

This portfolio (`tobiakoko.com`, the Phase 1 build on `main`), rerun 5 Nov 2026 after the domain redirect fix:

| Project | Page | Form | Perf | A11y | BP | SEO | LCP | CLS |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| portfolio | / | mobile | 99 | 100 | 100 | 100 | 1.7 s | 0 |
| portfolio | / | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 |
| portfolio | /about | mobile | 100 | 100 | 100 | 100 | 1.4 s | 0 |
| portfolio | /about | desktop | 100 | 100 | 100 | 100 | 0.4 s | 0 |
