import { Link } from 'react-router';
import HatchPlaceholder from '~/components/HatchPlaceholder';
import { projects } from '~/data/projects';
import { pageMeta } from '~/data/site';
import type { Route } from './+types/project-detail';

export function meta({ params }: Route.MetaArgs) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return [{ title: 'Project Not Found — Daniel Akoko' }, { name: 'robots', content: 'noindex' }];
  }
  return pageMeta({
    title: `${project.title} — Daniel “Tobi” Akoko`,
    description: `${project.tagline} Built by Daniel Akoko using ${project.stack}.`,
    path: `/projects/${project.slug}`,
    type: 'article',
  });
}

export default function ProjectDetail({ params }: Route.ComponentProps) {
  const index = projects.findIndex((p) => p.slug === params.slug);

  if (index === -1) {
    throw new Response('Project not found', { status: 404 });
  }

  const current = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-16 md:px-12 md:pt-[72px]">
        <Link to="/projects" className="text-xs tracking-[0.16em] uppercase">
          ← All Projects
        </Link>
        <h1 className="mt-7 text-[clamp(38px,5vw,60px)] font-light tracking-[-0.02em]">
          {current.title}
        </h1>
        <p className="mt-3 text-[13px] tracking-[0.18em] text-muted uppercase">{current.type}</p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-12 md:px-12">
        <HatchPlaceholder note={current.imgNote} ratio="16/8" bordered />
      </section>

      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 pt-16 pb-24 md:grid-cols-[1fr_300px] md:gap-[72px] md:px-12 md:pb-[100px]">
        <div className="flex flex-col gap-6">
          {current.body.map((para) => (
            <p key={para.slice(0, 40)} className="max-w-[68ch] text-[17px] leading-[1.75] text-ink">
              {para}
            </p>
          ))}
        </div>

        <aside className="flex flex-col gap-6 border-t-2 border-ink pt-6">
          <div className="flex flex-col gap-1.5">
            <span className="label">Role</span>
            <span className="text-sm leading-[1.5]">{current.role}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="label">Technology</span>
            <span className="text-sm leading-[1.7]">{current.stack}</span>
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="label">Year</span>
            <span className="text-sm">{current.year}</span>
          </div>
          <a
            href={current.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-xs tracking-[0.16em] uppercase"
          >
            Visit Site ↗
          </a>
        </aside>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto flex max-w-[1200px] justify-between gap-6 px-6 py-7 md:px-12">
          <Link to={`/projects/${prev.slug}`} className="text-[13px] tracking-[0.1em] uppercase">
            ← {prev.title}
          </Link>
          <Link
            to={`/projects/${next.slug}`}
            className="text-right text-[13px] tracking-[0.1em] uppercase"
          >
            {next.title} →
          </Link>
        </div>
      </section>
    </>
  );
}
