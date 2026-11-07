import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';
import DisciplineTag from './DisciplineTag';

const pad = (n: number) => String(n).padStart(2, '0');

/**
 * One project as an image-led card; the whole card is one link. `number` is the
 * project's place in the full list (1-based) and `total` the list length, so a
 * card reads "02 / 07" on Home and on Work alike.
 */
export default function ProjectCard({
  work,
  number,
  total,
  level = 3,
}: {
  work: WorkMeta;
  number: number;
  total: number;
  level?: 2 | 3;
}) {
  const Heading = `h${level}` as const;
  const { cover } = work;

  return (
    <Link to={`/work/${work.slug}`} className="project-card group">
      {/* No cover yet: the card stays text-only rather than show a placeholder. */}
      {cover && (
        <div className="project-media">
          {/* Decorative here: the title below names the link. */}
          <img
            src={cover.src}
            srcSet={cover.srcSet}
            sizes={cover.srcSet ? '(min-width: 761px) 50vw, 100vw' : undefined}
            width={cover.width}
            height={cover.height}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span aria-hidden="true" className="project-media__overlay left-4">
            {pad(number)}
          </span>
          <span aria-hidden="true" className="project-media__overlay right-4">
            {work.year}
          </span>
        </div>
      )}
      <div className="project-card-body">
        <div>
          <p className="label tabular-nums">
            {pad(number)} / {pad(total)}
          </p>
          <Heading className="group-hover:text-accent">{work.title}</Heading>
          <p className="project-summary">{work.proposition}</p>
          <p className="mt-4">
            <span className="arrowlink">
              Read case study <span aria-hidden="true">↗</span>
            </span>
          </p>
        </div>
        <p className="project-meta">
          <span className="tabular-nums">{work.year}</span>
          <span>
            <DisciplineTag disciplines={work.disciplines} />
          </span>
        </p>
      </div>
    </Link>
  );
}
