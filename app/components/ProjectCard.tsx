import { Link } from 'react-router';
import type { Project } from '~/data/projects';

/**
 * Text-only until Phase 3 adds real screenshots.
 * `featured` (home) sits on a bordered card and highlights its border on hover.
 * `index` (work page) is borderless and tints its whole text block instead.
 */
export default function ProjectCard({
  project,
  variant = 'index',
}: {
  project: Project;
  variant?: 'featured' | 'index';
}) {
  const disciplines = project.disciplines.join(' · ');

  if (variant === 'featured') {
    return (
      <Link
        to={`/work/${project.slug}`}
        className="group flex flex-col gap-2.5 border border-line bg-card px-6 pt-6 pb-7 text-ink transition-colors hover:border-accent hover:text-ink"
      >
        <span className="label">{disciplines}</span>
        <span className="text-[21px] font-medium tracking-[-0.01em]">{project.title}</span>
        {project.outcome && (
          <span className="text-sm leading-[1.6] text-muted">{project.outcome}</span>
        )}
      </Link>
    );
  }

  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex flex-col gap-2 border-t border-line pt-[18px] text-ink transition-colors hover:text-accent"
    >
      <span className="text-xl font-medium tracking-[-0.01em]">
        {project.title}{' '}
        {project.location && <span className="font-light text-muted">{project.location}</span>}
      </span>
      {project.outcome && (
        <span className="text-sm leading-[1.6] text-muted">{project.outcome}</span>
      )}
      <span className="label mt-1">
        {disciplines} · {project.year}
      </span>
    </Link>
  );
}
