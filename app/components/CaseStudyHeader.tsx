import { Link } from 'react-router';
import type { WorkMeta } from '~/data/work';
import DisciplineTag from './DisciplineTag';

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

/**
 * Back link, "Case study NN" and the title with the proposition beside it,
 * then the Year · Work · Tools facts and the cover.
 */
export default function CaseStudyHeader({ work, number }: { work: WorkMeta; number: number }) {
  const { live, code } = work.links;

  return (
    <header>
      <Link to="/work" className="ulink text-[0.9rem] font-semibold">
        <span aria-hidden="true">←</span> Work
      </Link>

      <div className="case-title-grid">
        <div>
          <p className="label tabular-nums">Case study {String(number).padStart(2, '0')}</p>
          <h1>{work.title}</h1>
        </div>
        <p className="case-summary">{work.proposition}</p>
      </div>

      <dl className="case-facts">
        <div>
          <dt>Year</dt>
          <dd>
            {work.year}
            <br />
            <span className="text-muted">{work.timeline}</span>
          </dd>
        </div>
        <div>
          <dt>Work</dt>
          <dd>
            {work.role} · <DisciplineTag disciplines={work.disciplines} />
            {work.team && (
              <>
                <br />
                <span className="text-muted">{work.team}</span>
              </>
            )}
            {work.location && (
              <>
                <br />
                <span className="text-muted">{work.location}</span>
              </>
            )}
          </dd>
        </div>
        <div>
          <dt>{work.stackLabel ?? 'Tools'}</dt>
          <dd>{work.stack.join(', ')}</dd>
        </div>
      </dl>

      {(live || code) && (
        <p className="flex flex-wrap gap-x-6 gap-y-2">
          {live && (
            <a href={live} className="arrowlink ulink" {...external}>
              Live site <span aria-hidden="true">↗</span>
            </a>
          )}
          {code && (
            <a href={code} className="arrowlink ulink" {...external}>
              Code <span aria-hidden="true">↗</span>
            </a>
          )}
        </p>
      )}

      {work.cover && (
        <div className="case-cover">
          <img
            src={work.cover.src}
            srcSet={work.cover.srcSet}
            sizes={work.cover.srcSet ? '(min-width: 82.5rem) 82.5rem, 100vw' : undefined}
            width={work.cover.width}
            height={work.cover.height}
            alt={work.cover.alt}
            fetchPriority="high"
          />
        </div>
      )}
    </header>
  );
}
