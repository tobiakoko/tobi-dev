import ProjectCard from '~/components/ProjectCard';
import { projects } from '~/data/projects';
import { pageMeta } from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'Work · Daniel (Tobi) Akoko',
    description:
      'Case studies from Daniel Akoko: church websites, a live-voting competition platform, and small-business sites, with architecture and measured results.',
    path: '/work',
  });
}

export default function Work() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-20 pb-10 md:px-12">
        <h1 className="text-[clamp(40px,5vw,64px)] font-light tracking-[-0.02em]">Work</h1>
        <p className="mt-5 max-w-[60ch] text-[17px] leading-[1.65] text-muted">
          Projects I&rsquo;ve planned, built and supported, each with a full case study.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 pt-5 pb-24 md:px-12 md:pb-[100px]">
        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </section>
    </>
  );
}
