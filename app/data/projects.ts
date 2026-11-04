export type Discipline = 'Engineering' | 'Analysis' | 'Implementation' | 'Delivery';

/**
 * One case study. Every field comes from docs/build/CONTENT.md §6; optional
 * fields are optional because the fact is still missing there, and the UI
 * hides the element rather than filling the gap.
 */
export interface Project {
  /** URL segment for /work/:slug */
  slug: string;
  title: string;
  /** Shown on Home under Selected work. */
  featured: boolean;
  year: string;
  timeline: string;
  disciplines: Discipline[];
  role: string;
  team?: string;
  location?: string;
  /** Exactly what the project's own code uses. */
  stack: string[];
  /** One-line summary for cards and the page lead. */
  outcome?: string;
  context?: string;
  liveUrl?: string;
  codeUrl?: string;
}

/** In display order (CONTENT.md §6). */
export const projects: Project[] = [
  {
    slug: 'lewisville',
    title: 'Deeper Life Bible Church Lewisville',
    featured: true,
    year: '2025–2026',
    timeline: 'Nov 2025 – Nov 2026',
    disciplines: ['Engineering', 'Analysis', 'Implementation', 'Delivery'],
    role: 'Sole developer, analyst and project lead',
    team: 'Solo, with the pastor and church staff',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Sanity 6',
      'Tailwind CSS 4',
      'Resend',
      'Upstash',
      'Jest',
      'Playwright',
      'Vercel',
    ],
    outcome:
      'I built a church website, audited it a year later, then rebuilt it in four gated phases.',
    context:
      'Deeper Life Bible Church Lewisville is a local congregation of an international church. Most first-time visitors find it on a phone and need to know, within seconds, when and where it meets and what to expect.',
    // TODO(content): production URL once the domain moves to deeperlifelewisville.org
    codeUrl: 'https://github.com/tobiakoko/dclm-lewisville',
  },
  {
    slug: 'afromerica',
    title: 'Afromerica Entertainment',
    featured: true,
    year: '2025',
    timeline: 'Oct – Dec 2025',
    disciplines: ['Engineering', 'Implementation'],
    role: 'Sole developer',
    stack: [
      'Next.js 16',
      'React 19',
      'TypeScript',
      'Supabase (Postgres, Auth, Realtime)',
      'Paystack',
      'Resend',
      'Sentry',
      'Tailwind CSS 4',
      'Vercel',
    ],
    outcome:
      'A talent-competition platform with paid voting, ticketing and a live judged finale, with scoring computed in the database.',
    context:
      'Afromerica Entertainment runs a music talent competition with public events, artist profiles, ticket sales and fan voting, ending in a live grand finale.',
    // TODO(content): confirm still live
    liveUrl: 'https://www.afromericaent.com/',
    // TODO(content): Daniel to decide if https://github.com/tobiakoko/afromerica-ent is public
  },
  {
    slug: 'dlbc-tampa',
    title: 'Deeper Life Bible Church Tampa',
    featured: true,
    year: '2025–2026',
    timeline: 'Dec 2025 – Aug 2026',
    disciplines: ['Engineering', 'Analysis', 'Implementation'],
    role: 'Sole developer',
    stack: [
      'Vite',
      'React 18',
      'React Router 6',
      'TypeScript',
      'Tailwind CSS 4',
      'Sanity',
      'Framer Motion',
      'Formspree',
    ],
    outcome: 'An audit-driven pass that cut the entry bundle by 87% and made every form actually deliver.',
    context:
      "The Tampa congregation's site, with sermons, events, ministries, a gallery and an embedded Sanity Studio at /studio.",
    liveUrl: 'https://www.dlbctampa.org/',
    codeUrl: 'https://github.com/tobiakoko/dlbc-template',
  },
  {
    slug: 'rons-body-shop',
    title: "Ron's Body Shop",
    featured: true,
    year: '2025–2026',
    timeline: 'Aug 2025 – Jan 2026',
    disciplines: ['Engineering', 'Implementation'],
    role: 'Sole developer',
    location: 'Torrance, California',
    stack: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS 4', 'Vercel Analytics'],
    // TODO(content): outcome, only once the estimate form fix is live
    liveUrl: 'https://www.ronsbodyshop.net/',
    codeUrl: 'https://github.com/tobiakoko/RonsBodyShop',
  },
  {
    slug: 'oseiprempeh',
    title: 'OseiPrempeh Law Firm',
    featured: false,
    year: '2025',
    timeline: 'May – Jun 2025',
    disciplines: ['Engineering'],
    role: 'Sole developer',
    stack: [
      'React Router 7',
      'React 19',
      'TypeScript',
      'Tailwind CSS 4',
      'Radix UI',
      'Embla Carousel',
    ],
    outcome: 'A single-page site for a Tampa law practice, delivered in three weeks.',
    liveUrl: 'https://www.oseiprempeh.com/',
    codeUrl: 'https://github.com/tobiakoko/D-Law',
  },
  {
    slug: 'portfolio',
    title: 'This portfolio',
    featured: false,
    year: '2025–2026',
    timeline: '2025 – 2026',
    disciplines: ['Engineering'],
    role: 'Designer and developer',
    stack: ['React Router 7 (prerendered)', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Vercel'],
    outcome: 'Made my own site indexable and rebuilt it as a quiet, fast, prerendered portfolio.',
    liveUrl: 'https://tobiakoko.com',
    codeUrl: 'https://github.com/tobiakoko/tobi-dev',
  },
];

export function getProjectBySlug(slug: string | undefined) {
  return projects.find((p) => p.slug === slug);
}

/**
 * Every technology across all projects, without version numbers or notes:
 * 'Supabase (Postgres, Auth, Realtime)' and 'Next.js 16' become 'Supabase'
 * and 'Next.js'. Feeds the Person schema's knowsAbout.
 */
export function allTechnologies() {
  const names = projects.flatMap((p) =>
    p.stack.map((s) => s.replace(/\s*\(.*\)$/, '').replace(/\s+\d+$/, '')),
  );
  return [...new Set(names)];
}
