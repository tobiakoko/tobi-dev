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
  width: number;
  height: number;
}

/** Front matter, per docs/build/CASE-STUDY-TEMPLATE.md. */
export interface WorkMeta {
  slug: string;
  title: string;
  /** TODO(content): required by the template; optional while Ron's Body Shop has none. */
  outcome?: string;
  order: number;
  featured: boolean;
  year: string;
  role: string;
  team?: string;
  location?: string;
  timeline: string;
  /** Exactly what the project's own code uses. */
  stack: string[];
  disciplines: Discipline[];
  links: { live?: string; code?: string };
  /** TODO(content): required from Phase 3, when screenshots exist. */
  cover?: Cover;
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
 * Every technology across all projects, without version numbers or notes:
 * 'Supabase (Postgres, Auth, Realtime)' and 'Next.js 16' become 'Supabase'
 * and 'Next.js'. Feeds the Person schema's knowsAbout.
 */
export function technologies(work: WorkMeta[]) {
  const names = work.flatMap((w) =>
    w.stack.map((s) => s.replace(/\s*\(.*\)$/, '').replace(/\s+\d+$/, '')),
  );
  return [...new Set(names)];
}
