/**
 * Types for case studies in content/work/<slug>.md, plus helpers that are safe
 * to ship to the browser. Reading and validating the files happens at build
 * time in work.server.ts.
 */

export const DISCIPLINES = ['Engineering', 'Analysis', 'Implementation', 'Delivery'] as const;
export type Discipline = (typeof DISCIPLINES)[number];

export interface Stat {
  /** Must appear word for word in docs/build/CONTENT.md. */
  value: string;
  label: string;
}

export interface Cover {
  src: string;
  alt: string;
  /** Read from the image file at build time. */
  width: number;
  height: number;
  /** Set when a half-width -1x copy exists (tools/capture-kit/prepare.mjs). */
  srcSet?: string;
}

/** Front matter, per docs/build/CASE-STUDY-TEMPLATE.md. */
export interface WorkMeta {
  slug: string;
  title: string;
  /** TODO(content): required by the template; optional while Ron's Body Shop has none. */
  outcome?: string;
  /** One-line proposition shown on Home, Work and the case study intro. Factual, no metrics. */
  proposition: string;
  order: number;
  featured: boolean;
  year: string;
  role: string;
  team?: string;
  location?: string;
  timeline: string;
  /** Exactly what the project's own code uses. */
  stack: string[];
  /** Label for `stack` in the case study facts (default "Tools"). Set for non-software projects ("Tools and hardware"). */
  stackLabel?: string;
  disciplines: Discipline[];
  links: { live?: string; code?: string };
  /** TODO(content): optional until the LED wall and OseiPrempeh have usable covers. */
  cover?: Cover;
  /** 1200 x 630 link preview made from the cover (tools/capture-kit/prepare.mjs). */
  ogImage?: string;
  stats: Stat[];
}

/** One `##` section of the body, rendered to HTML at build time. */
export interface WorkSection {
  id: string;
  heading: string;
  html: string;
}

export interface WorkStudy extends WorkMeta {
  sections: WorkSection[];
}

/**
 * Every software technology across all projects, without version numbers or
 * notes: 'Supabase (Postgres, Auth, Realtime)' and 'Next.js 16' become
 * 'Supabase' and 'Next.js'. Projects with a stackLabel list hardware and tools,
 * not a software stack, so they're left out. Feeds the Person schema's knowsAbout.
 */
export function technologies(work: WorkMeta[]) {
  const names = work
    .filter((w) => !w.stackLabel)
    .flatMap((w) => w.stack.map((s) => s.replace(/\s*\(.*\)$/, '').replace(/\s+\d+$/, '')));
  return [...new Set(names)];
}
