import ContactForm from '~/components/ContactForm';
import PageHeader from '~/components/PageHeader';
import { BOOKING_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, LOCATION, pageMeta } from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'Contact · Daniel (Tobi) Akoko',
    description:
      'Contact Daniel (Tobi) Akoko, a software engineer in Dallas, about full-time roles or freelance web projects.',
    path: '/contact',
  });
}

const external = { target: '_blank', rel: 'noopener noreferrer' } as const;
/** The last path segment of a profile URL: "daniel-akoko", "tobiakoko". */
const handle = (url: string) => url.replace(/\/$/, '').split('/').pop() ?? url;

const Arrow = () => (
  <span aria-hidden="true" className="arrow-sm">
    ↗
  </span>
);

export default function Contact() {
  return (
    <div className="page-top shell">
      <PageHeader
        eyebrow={['Contact', LOCATION]}
        title="Let’s talk"
        lead={
          <p className="page-header__lead">
            Tell me about the role, project or problem you&rsquo;re working through.
          </p>
        }
        note={
          <p className="page-header__note">
            I&rsquo;m open to full-time roles and freelance projects. Email is best, and I reply
            within two business days.
          </p>
        }
      />

      <div className="contact">
        <section aria-labelledby="direct-title">
          <h2 id="direct-title" className="label mb-[22px]">
            Direct
          </h2>
          <dl className="ruled direct-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`} className="ulink">
                  {EMAIL}
                </a>
              </dd>
            </div>
            {BOOKING_URL && (
              <div>
                <dt>Book a call</dt>
                <dd>
                  <a href={BOOKING_URL} className="ulink" {...external}>
                    Pick a time <Arrow />
                  </a>
                </dd>
              </div>
            )}
            <div>
              <dt>LinkedIn</dt>
              <dd>
                <a href={LINKEDIN_URL} className="ulink" {...external}>
                  {handle(LINKEDIN_URL)} <Arrow />
                </a>
              </dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={GITHUB_URL} className="ulink" {...external}>
                  {handle(GITHUB_URL)} <Arrow />
                </a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{LOCATION}</dd>
            </div>
          </dl>
        </section>

        <div className="contact-panel">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
