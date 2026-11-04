import { Link } from 'react-router';
import { projects } from '~/data/projects';
import { FULL_NAME, pageMeta } from '~/data/site';
import type { Route } from './+types/work-detail';

export function meta({ params }: Route.MetaArgs) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return [{ title: 'Project not found · Daniel (Tobi) Akoko' }, { name: 'robots', content: 'noindex' }];
  }
  return pageMeta({
    title: `${project.title} · Daniel (Tobi) Akoko`,
    description:
      project.outcome ??
      `${project.title}${project.location ? `, ${project.location}` : ''}: built by ${FULL_NAME}.`,
    path: `/work/${project.slug}`,
    type: 'article',
  });
}

export default function WorkDetail({ params }: Route.ComponentProps) {
  const index = projects.findIndex((p) => p.slug === params.slug);

  if (index === -1) {
    throw new Response('Project not found', { status: 404 });
  }

  const current = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: 'Role', value: current.role },
    { label: 'Team', value: current.team },
    { label: 'Location', value: current.location },
    { label: 'Timeline', value: current.timeline },
    { label: 'Stack', value: current.stack.join(', ') },
  ];

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 md:px-12 md:pt-[72px]">
        <Link to="/work" className="text-xs tracking-[0.16em] uppercase">
          ← All work
        </Link>
        <h1 className="mt-7 text-[clamp(38px,5vw,60px)] font-light tracking-[-0.02em]">
          {current.title}
        </h1>
        <p className="mt-3 text-[13px] tracking-[0.18em] text-muted uppercase">
          {current.disciplines.join(' · ')}
        </p>
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 pt-16 pb-24 md:grid-cols-[1fr_300px] md:gap-[72px] md:px-12 md:pb-[100px]">
        <div className="flex flex-col gap-6">
          {current.outcome && (
            <p className="max-w-[60ch] text-[22px] leading-[1.5] font-light text-ink">
              {current.outcome}
            </p>
          )}
          {current.context && (
            <p className="max-w-[68ch] text-[17px] leading-[1.75] text-ink">{current.context}</p>
          )}
          {/* TODO(content): full case study sections arrive in Phase 3 (CASE-STUDY-TEMPLATE.md). */}
        </div>

        <aside className="flex flex-col gap-6 border-t-2 border-ink pt-6">
          {facts.map(
            (fact) =>
              fact.value && (
                <div key={fact.label} className="flex flex-col gap-1.5">
                  <span className="label">{fact.label}</span>
                  <span className="text-sm leading-[1.6]">{fact.value}</span>
                </div>
              ),
          )}
          {(current.liveUrl || current.codeUrl) && (
            <div className="mt-2 flex flex-wrap gap-6">
              {current.liveUrl && (
                <a
                  href={current.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.16em] uppercase"
                >
                  Visit site ↗
                </a>
              )}
              {current.codeUrl && (
                <a
                  href={current.codeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs tracking-[0.16em] uppercase"
                >
                  Code ↗
                </a>
              )}
            </div>
          )}
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] justify-between gap-6 px-6 py-7 md:px-12">
          <Link to={`/work/${prev.slug}`} className="text-[13px] tracking-[0.1em] uppercase">
            ← {prev.title}
          </Link>
          <Link
            to={`/work/${next.slug}`}
            className="text-right text-[13px] tracking-[0.1em] uppercase"
          >
            {next.title} →
          </Link>
        </div>
      </section>
    </>
  );
}
