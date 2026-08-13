import { useState } from 'react';
import ProjectCard from '~/components/ProjectCard';
import { filterDefs, projects } from '~/data/projects';
import type { ProjectCategory } from '~/data/projects';
import { pageMeta } from '~/data/site';
import type { Route } from './+types/projects';

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: 'Projects — Daniel “Tobi” Akoko',
    description:
      'Web applications, AI-powered solutions, and full-stack platforms — each designed and built end to end by Daniel Akoko.',
    path: '/projects',
  });
}

export default function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | 'all'>('all');

  const visible = filter === 'all' ? projects : projects.filter((p) => p.cat === filter);

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-20 pb-10 md:px-12">
        <h1 className="text-[clamp(40px,5vw,64px)] font-light tracking-[-0.02em]">All Projects</h1>
        <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.65] text-muted">
          Web applications, AI-powered solutions, and full-stack platforms — each designed and built
          end to end.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 border-y border-line py-4">
          <span className="label">Filter</span>
          {filterDefs.map((f) => (
            <button
              key={f.key}
              type="button"
              onClick={() => setFilter(f.key)}
              aria-pressed={filter === f.key}
              className={`border-b-2 pb-1 text-[13px] tracking-[0.1em] uppercase transition-colors hover:text-accent ${
                filter === f.key ? 'border-accent text-ink' : 'border-transparent text-muted'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-5 pb-24 md:px-12 md:pb-[100px]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-[repeat(auto-fill,minmax(340px,1fr))]">
          {visible.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
