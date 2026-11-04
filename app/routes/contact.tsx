import {
  BOOKING_URL,
  EMAIL,
  GITHUB_URL,
  LINKEDIN_URL,
  LOCATION,
  RESUME_URL,
  pageMeta,
} from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'Contact · Daniel (Tobi) Akoko',
    description:
      'Contact Daniel (Tobi) Akoko, a software engineer in Dallas, about full-time roles or freelance web projects.',
    path: '/contact',
  });
}

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;

export default function Contact() {
  const items = [
    { label: 'Email', href: `mailto:${EMAIL}`, text: EMAIL },
    BOOKING_URL && { label: 'Book a call', href: BOOKING_URL, text: 'Book a call', ...external },
    { label: 'LinkedIn', href: LINKEDIN_URL, text: 'LinkedIn', ...external },
    { label: 'GitHub', href: GITHUB_URL, text: 'GitHub', ...external },
    RESUME_URL && { label: 'Résumé', href: RESUME_URL, text: 'Résumé (PDF)' },
  ].filter((item) => !!item);

  return (
    <section className="mx-auto grid max-w-[1200px] grid-cols-1 items-start gap-12 px-6 pt-24 pb-28 md:grid-cols-2 md:gap-20 md:px-12 md:pt-[100px] md:pb-[120px]">
      <div className="flex flex-col gap-7">
        <h1 className="text-[clamp(44px,6vw,72px)] font-light tracking-[-0.02em]">
          Let&rsquo;s talk
        </h1>
        <p className="max-w-[46ch] text-[17px] leading-[1.7] text-muted">
          I&rsquo;m open to full-time roles and freelance projects. Email is best, and I reply
          within two business days.
        </p>
      </div>

      <dl className="flex flex-col gap-7 border-t-2 border-ink pt-7">
        {items.map(({ label, text, ...link }) => (
          <div key={label} className="flex flex-col gap-1.5">
            <dt className="label">{label}</dt>
            <dd className="m-0">
              <a {...link} className="text-base">
                {text}
              </a>
            </dd>
          </div>
        ))}
        <div className="flex flex-col gap-1.5">
          <dt className="label">Location</dt>
          <dd className="m-0 text-base text-ink">{LOCATION}</dd>
        </div>
      </dl>
    </section>
  );
}
