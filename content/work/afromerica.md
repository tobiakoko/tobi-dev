---
slug: afromerica
title: Afromerica Entertainment
outcome: A talent-competition platform with paid voting, ticketing and a live judged finale, with scoring computed in the database.
proposition: An events platform for a music talent competition, with ticket booking, paid voting, live standings, and judge scoring.
# Header, overview and the "in progress" note only, until Daniel confirms the full case study.
inProgress: true
order: 2
featured: true
year: '2025'
role: Sole developer and repository maintainer
team: Solo, with the company CEO
timeline: Oct – Dec 2025
stack:
  [
    Next.js 16,
    React 19,
    TypeScript,
    'Supabase (Postgres, Auth, Realtime)',
    Paystack,
    Resend,
    Sentry,
    Tailwind CSS 4,
    Vercel,
  ]
disciplines: [Engineering, Implementation]
links:
  live: https://www.afromericaent.com/
  # TODO(content): code link after the repo clean-up (BUILD-PLAN "Outside this repo")
card: /work/afromerica/card.webp
cover:
  src: /work/afromerica/cover.webp
  alt: 'Afromerica home page on desktop: "Welcome to Afromerica" over a photo of a brass section on stage, with buttons to meet the December showcase winners and browse events'
# System facts until the client supplies figures.
# TODO(content): replace with votes cast, tickets sold or peak voters if the client shares them
stats:
  - {
      value: '35 / 10 / 30 / 25',
      label: 'final weighting: paid votes / public / judges / performance',
    }
  - { value: '23', label: 'API routes' }
  - { value: '10 min', label: 'one-time-code expiry' }
---

## Context

I built the platform to support three separate workflows: ticket purchases, paid audience votes during the showcase, and judge scoring during a four-stage finale. Visitors could discover artists, book tickets, and follow results, while organizers managed voting, competition stages, and standings. As the sole developer, I implemented payment checkout and verification, scoring logic, and the public and admin interfaces. I translated competition rules into eligibility checks, stage transitions, and published results. After the competition, I investigated missing stage views and repaired the build pipeline so builds could run without production secrets.

![Afromerica artists page on desktop: a grid of contestant cards, each with a photo, name, stage name, genre and a "Top 10" badge](/work/afromerica/artists-desktop.webp 'The artists page, where fans find the contestants they vote for.')

## The problem

The competition needed paid votes and tickets that couldn't be double-counted, a way to stop vote stuffing, and a scoring system that combined judges and audience, with rules that could change between stages.

## My role

### Engineering

- 23 API routes.
- Paystack checkout and a signed, idempotent webhook.
- Email one-time codes.
- A scoring engine in Postgres functions.
- A live leaderboard with Supabase Realtime.

### Implementation

- An admin dashboard for events, artists, tickets, votes and the finale.
- Email templates with React Email and Resend.
- Error monitoring with Sentry.

## Process

1. Database and auth with row-level security.
2. Public pages.
3. Booking and payments.
4. Voting.
5. The admin dashboard.
6. The finale system, built and adjusted in the last week of December 2025 as the rules changed.

![Afromerica finale voting page: a Voter Authentication form asking for a full name and a 10-character voter code, with a note on judge, in-house and online codes](/work/afromerica/event-desktop.webp 'The finale vote starts with a code check: one vote per stage.')

## Architecture

![Architecture: fans, judges and admins use a Next.js app on Vercel; API routes read and write Supabase Postgres, whose scoring functions feed a live leaderboard through Realtime; Paystack sends signed payment webhooks; Resend sends one-time codes and confirmations.](/work/afromerica/architecture-light.svg 'How the platform is put together.')

Next.js 16 runs on Vercel. Supabase provides Postgres (11 core tables plus finale migrations, with row-level security), Auth and Realtime. Paystack takes payments and sends a webhook that's logged in `webhook_logs`. Resend sends one-time codes and confirmations, and Sentry reports errors.

## Key decisions

### Chose scoring in Postgres functions over app code

One place computes every stage's weighted score, so the leaderboard, admin panel and winners screen always agree.

### Chose idempotent webhooks

Each Paystack event is logged and checked against the vote or ticket before it's applied, so retries can't double-count.

### Chose email one-time codes for voters

6 digits, 10-minute expiry, per-email limits.

## Outcome

Final scoring: paid votes 35%, public score 10%, judges 30% and performance 25%. In-house votes were removed and online voting codes disabled during the final week.

<div data-pair>

![Afromerica Final Results page on desktop: the scoring weights, a "Voting closed" notice and the top five finalists with their scores](/work/afromerica/leaderboard-desktop.webp 'Final Results on desktop, with the weighting shown to every visitor.')
![Afromerica Final Results page on a phone: the scoring weights and the top four finalists with their scores](/work/afromerica/leaderboard-phone.webp 'The same page on a phone.')

</div>

<!-- TODO(content): vote flow, checkout, judge scoring screen, admin finale panel and winners screen (need an account; blur all voter data). -->

## Reflection

> **What I'd do next:** add automated tests for the scoring function and the webhook, compare signatures with a timing-safe check, and move the fix notes out of the repo root.
