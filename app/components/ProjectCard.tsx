import { Link } from 'react-router';
import type { Project } from '~/data/projects';
import HatchPlaceholder from './HatchPlaceholder';

/**
 * `featured` (home) sits on a bordered card and highlights its border on hover.
 * `index` (projects page) is borderless and tints its whole text block instead.
 */
export default function ProjectCard({
  project,
  variant = 'index',
}: {
  project: Project;
  variant?: 'featured' | 'index';
}) {
  if (variant === 'featured') {
    return (
      <Link
        to={`/projects/${project.slug}`}
        className="group flex flex-col border border-line bg-card text-ink transition-colors hover:border-accent hover:text-ink"
      >
        <HatchPlaceholder note={project.imgNote} ratio="4/3" />
        <div className="flex flex-col gap-2.5 px-6 pt-6 pb-7">
          <span className="label">{project.type}</span>
          <span className="text-[21px] font-medium tracking-[-0.01em]">{project.title}</span>
          <span className="text-sm leading-[1.6] text-muted">{project.tagline}</span>
        </div>
      </Link>
    );
  }

  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex flex-col text-ink transition-colors hover:text-accent"
    >
      <HatchPlaceholder note={project.imgNote} ratio="4/3" bordered />
      <div className="flex flex-col gap-2 pt-[18px]">
        <span className="text-xl font-medium tracking-[-0.01em]">
          {project.title}{' '}
          {project.locale && <span className="font-light text-muted">{project.locale}</span>}
        </span>
        <span className="text-sm leading-[1.6] text-muted">{project.tagline}</span>
        <span className="label mt-1">{project.type}</span>
      </div>
    </Link>
  );
}
