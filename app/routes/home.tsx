import { Link } from 'react-router';
import HatchPlaceholder from '~/components/HatchPlaceholder';
import ProjectCard from '~/components/ProjectCard';
import { projects } from '~/data/projects';
import { pageMeta } from '~/data/site';
import type { Route } from './+types/home';

export function meta({}: Route.MetaArgs) {
  return pageMeta({
    title: 'Daniel “Tobi” Akoko — Full Stack Software Engineer',
    description:
      'Daniel Akoko (Tobi Akoko) is a full stack software engineer in Dallas, Texas, building performant, accessible web applications from enterprise platforms to AI-powered tools.',
    path: '/',
    type: 'profile',
  });
}

export default function Home() {
  const featured = projects.slice(0, 3);

  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-24 pb-24 md:px-12 md:pt-[120px] md:pb-[100px]">
        <p className="mb-7 text-xs tracking-[0.2em] text-muted uppercase">
          Software Engineer &middot; Dallas, Texas
        </p>
        <h1 className="max-w-[18ch] text-[clamp(44px,6vw,84px)] leading-[1.05] font-light tracking-[-0.02em] text-pretty">
          Building software that helps people work, connect, and grow.
        </h1>
        <p className="mt-9 max-w-[56ch] text-[19px] leading-[1.65] text-muted">
          Daniel &ldquo;Tobi&rdquo; Akoko is a full stack software engineer who designs and builds
          performant, accessible web applications — from enterprise platforms to AI-powered tools —
          with a rigorous, user-centered approach.
        </p>
        <div className="mt-11 flex flex-wrap gap-4">
          <Link to="/projects" className="btn-solid">
            View the Work
          </Link>
          <Link to="/about" className="btn-outline">
            The Studio
          </Link>
        </div>
      </section>

      <section className="border-t border-line bg-bg-alt px-6 py-20 md:px-12 md:py-[90px]">
        <div className="mx-auto max-w-[1200px]">
          <div className="mb-12 flex flex-wrap items-baseline justify-between gap-6">
            <h2 className="text-[34px] font-light tracking-[-0.01em]">Selected Work</h2>
            <Link to="/projects" className="text-xs tracking-[0.16em] uppercase">
              All Projects →
            </Link>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {featured.map((project) => (
              <ProjectCard key={project.slug} project={project} variant="featured" />
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-line px-6 py-20 md:px-12 md:py-[90px]">
        <div className="mx-auto grid max-w-[1200px] grid-cols-1 items-center gap-12 md:grid-cols-[320px_1fr] md:gap-[72px]">
          <HatchPlaceholder note="[ headshot ]" ratio="1/1" />
          <div className="flex flex-col gap-6">
            <p className="text-xs tracking-[0.2em] text-muted uppercase">The Studio</p>
            <h2 className="max-w-[26ch] text-[34px] leading-[1.25] font-light tracking-[-0.01em] text-pretty">
              Every project is an opportunity to listen, collaborate, and deliver.
            </h2>
            <p className="max-w-[60ch] text-base leading-[1.7] text-muted">
              With a foundation spanning computer science, electrical engineering, and years of
              client-facing work, Daniel brings a technically rigorous and collaborative approach to
              every engagement.
            </p>
            <Link to="/about" className="text-xs tracking-[0.16em] uppercase">
              About Daniel →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
