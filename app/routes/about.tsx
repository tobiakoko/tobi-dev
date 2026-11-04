import { pageMeta } from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'About · Daniel (Tobi) Akoko',
    description:
      'Daniel (Tobi) Akoko is a software engineer in Dallas with a background in computer science, electrical engineering and years of client-facing work.',
    path: '/about',
    type: 'profile',
  });
}

export default function About() {
  return (
    <>
      <section className="mx-auto max-w-[1200px] px-6 pt-20 md:px-12">
        <h1 className="text-[clamp(44px,6vw,72px)] font-light tracking-[-0.02em]">About</h1>
        <p className="mt-6 max-w-[40ch] text-[clamp(20px,2.4vw,26px)] leading-[1.45] font-light text-pretty text-ink">
          I build software that tells the truth: correct facts, honest error messages, and a
          handover the client can actually run.
        </p>
      </section>

      {/* TODO(content): How I work, Present, Past, Origins, Education, Certifications and
          Community arrive in Phase 2 (CONTENT.md §4.3–4.10). */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-6 px-6 pt-16 pb-24 md:grid-cols-[200px_1fr] md:gap-12 md:px-12 md:pb-[100px]">
        <h2 className="label pt-1.5">Bio</h2>
        <div className="flex max-w-[68ch] flex-col gap-5 text-[17px] leading-[1.75] text-ink">
          <p>
            I&rsquo;m Daniel Akoko, and most people call me Tobi. I&rsquo;m a software engineer in
            Dallas, Texas. I build web software for churches and small businesses, and I care most
            about the parts people only notice when they break: the facts on the page, the error
            messages, the tests and the handover.
          </p>
          <p>
            My path here wasn&rsquo;t a straight line. I studied electrical engineering, then
            criminology, then computer science, and I worked in hospitality, where I learned to stay
            calm under pressure and look after people. For years I&rsquo;ve also run sound, media
            and livestreaming at my church. All of it shows up in how I work: I listen first, I plan
            in steps, and I don&rsquo;t call something done until it works for the person using it.
          </p>
        </div>
      </section>
    </>
  );
}
