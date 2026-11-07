import type { ReactNode } from 'react';
import { Link } from 'react-router';
import PageHeader from '~/components/PageHeader';
import { EMAIL, pageMeta } from '~/data/site';

export function meta() {
  return pageMeta({
    title: 'About · Daniel (Tobi) Akoko',
    description:
      'Daniel (Tobi) Akoko is a software engineer in Dallas with a background in computer science, electrical engineering and years of client-facing work.',
    path: '/about',
    type: 'profile',
  });
}

/*
 * Copy from CONTENT.md §4. A missing fact is left undefined, and the element
 * that would show it is hidden; each gap is a TODO(content) below.
 */

const capabilities = [
  'Full-stack engineering',
  'Front-end development',
  'Systems analysis',
  'Implementation',
  'Payments',
  'IT & AV systems',
  'Documentation & handover',
];

interface Role {
  role: string;
  org?: string;
  location: string;
  dates?: string;
  bullets: ReactNode[];
}

// CONTENT.md §4.5, newest first. TODO(content): employment type for each role.
const past: Role[] = [
  {
    role: 'Senior Full-Stack Developer',
    org: 'Afromerica Entertainment',
    location: 'Remote',
    dates: 'Aug 2025 – Dec 2025',
    bullets: [
      'Built a competition and events platform in React, TypeScript and Next.js, from the database and APIs to the admin dashboard.',
      'Delivered paid voting with a live leaderboard, an event management dashboard and ticket checkout with Paystack.',
      'Built REST APIs on PostgreSQL (Supabase) with signed, idempotent payment webhooks and real-time updates.',
    ],
  },
  {
    role: 'Software Engineer (Full-Stack)',
    org: 'DLBC ICT',
    location: 'Dallas, TX',
    dates: 'Nov 2024 – Sep 2025',
    // TODO(content): bullets stay hidden until Daniel links the donation project or
    // rewrites them to match work that can be shown (CONTENT.md §4.5 comment).
    bullets: [],
  },
  {
    role: 'IT & AV Systems Lead',
    org: 'Deeper Life Bible Church',
    location: 'Tampa, FL and Dallas, TX',
    dates: '2018 – present',
    bullets: [
      'Run IT across two church locations: workstations, networks and Wi-Fi, printers, and hardware and software troubleshooting.',
      <>
        Designed and installed the AV and livestream system (cameras, audio mixers, microphones,
        monitors and streaming encoders) for weekly services broadcast online. See the{' '}
        <Link to="/work/led-wall" className="link">
          LED wall case study
        </Link>
        .
      </>,
      'Lead and train a volunteer electronics team, with standard operating procedures and documentation.',
      'Maintain the church website and its security, and keep network diagrams, equipment inventories, troubleshooting guides, backups and account policies up to date.',
    ],
  },
  {
    role: 'Freelance Web Developer',
    org: 'Self-employed',
    location: 'Remote',
    dates: '2025 – present',
    bullets: [
      <>
        Websites for a Tampa law practice and a Torrance, California collision-repair shop (see{' '}
        <Link to="/work" className="link">
          Work
        </Link>
        ).
      </>,
    ],
  },
  {
    role: 'Hospitality',
    location: 'Dallas, TX',
    // TODO(content): years. Employers are deliberately not named.
    bullets: ['Guest-facing service in high-volume restaurants.'],
  },
];

interface Degree {
  degree: string;
  school?: string;
  dates?: string;
}

const education: Degree[] = [
  {
    degree: 'Master of Business Administration (in progress)',
    school: 'Western Governors University',
    dates: 'Jun 2026 – Jun 2027 (expected)',
  },
  {
    degree: 'B.S. Computer Science',
    school: 'Western Governors University',
    dates: 'Apr 2023 – Sep 2024',
  },
  {
    degree: 'Bachelor of Arts (BA), Criminal Justice',
    school: 'University of South Florida',
    dates: 'Sep 2018 – Dec 2022',
  },
  {
    degree: 'Associate of Science (AS), Electrical Engineering',
    school: 'Community College of Baltimore County',
    dates: 'Aug 2015 – May 2018',
  },
];

// TODO(content): years earned.
const certifications = ['ITIL Foundation', 'LPI Linux Essentials'];

const community = [
  'Media production, choir direction and digital streaming, Deeper Life Bible Church',
  'DLYA fundraising team',
];

const join = (...parts: (string | undefined)[]) => parts.filter(Boolean).join(' · ');

/*
 * Rail labels are H2s styled as eyebrows, and role titles are H3s, so the
 * page reads as a proper outline to screen readers.
 */
function Rail({ label, first, children }: { label: string; first?: boolean; children: ReactNode }) {
  return (
    <section className={`rail ${first ? 'rail--first' : ''}`} aria-label={label}>
      <h2 className="label">{label}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function About() {
  return (
    <>
      <div className="page-top shell">
        <PageHeader
          eyebrow="The person behind the work"
          title="About"
          inline
          lead={
            <p className="about-sub">
              I came to software through engineering, hospitality and hands-on systems work. That
              mix taught me to listen first, make the complicated clear and stay with a problem
              until it works.
            </p>
          }
        />

        <Rail label="Bio" first>
          <div className="prose">
            <p>
              I&rsquo;m Daniel Akoko, though most people call me Tobi. I&rsquo;m a software engineer
              in Dallas, Texas. I build web software for churches and small businesses, and I pay
              close attention to the parts people usually notice only when they fail: the
              information on the page, the error message after a wrong turn, the test that catches a
              regression and the documentation someone needs after handover.
            </p>
            <p>
              My route into software was not a straight line. I studied electrical engineering, then
              criminal justice, then computer science. I worked in hospitality, where I learned to
              stay calm when the room is busy and take care of the person in front of me. For years
              I have also run sound, media and livestreaming at church.
            </p>
            <p>
              That mix shapes how I work now. I listen before I propose, turn complicated work into
              clear steps and stay with a project through testing, launch and handover. The goal is
              not simply to ship software. It is to leave people with something they can understand,
              use and depend on.
            </p>
          </div>
        </Rail>

        <Rail label="Capabilities">
          <ul className="caps">
            {capabilities.map((c) => (
              <li key={c}>{c}</li>
            ))}
          </ul>
        </Rail>

        <Rail label="Present">
          <div className="prose">
            <p>
              I build websites and digital services for churches and small businesses, and I&rsquo;m
              studying for an MBA at Western Governors University (expected June 2027). I&rsquo;m
              open to full-time roles in software engineering, business and systems analysis,
              implementation, and project delivery.
            </p>
          </div>
        </Rail>

        <Rail label="Past">
          <ol>
            {past.map((r) => (
              <li key={r.role} className="timeline-item">
                <p className="timeline-meta">
                  {r.dates && (
                    <>
                      {r.dates}
                      <br />
                    </>
                  )}
                  {r.location}
                </p>
                <div>
                  <h3>{r.role}</h3>
                  {r.org && <p className="mt-1 text-muted">{r.org}</p>}
                  {r.bullets.length > 0 && (
                    <ul>
                      {r.bullets.map((b, i) => (
                        <li key={i}>{b}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </li>
            ))}
          </ol>
        </Rail>

        <Rail label="Origins">
          <div className="prose">
            <p>
              I started in electrical engineering at the Community College of Baltimore County,
              moved into criminal justice at the University of South Florida, and found my way to
              computer science at Western Governors University. Music has been a constant: I direct
              choirs and help run music and media for my church&rsquo;s events.
            </p>
          </div>
        </Rail>

        <Rail label="Education">
          <ul className="ruled">
            {education.map((d) => (
              <li key={d.degree}>
                <span className="ruled__main">{d.degree}</span>
                {(d.school || d.dates) && (
                  <span className="ruled__note">{join(d.school, d.dates)}</span>
                )}
              </li>
            ))}
          </ul>
        </Rail>

        <div className="two-col-divided">
          <section aria-label="Certifications">
            <h2 className="label">Certifications</h2>
            <ul className="ruled">
              {certifications.map((c) => (
                <li key={c}>
                  <span className="ruled__main">{c}</span>
                </li>
              ))}
            </ul>
          </section>
          <section aria-label="Community">
            <h2 className="label">Community</h2>
            <ul className="ruled">
              {community.map((c) => (
                <li key={c}>
                  <span className="ruled__main">{c}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>

      <section className="about-cta-band" aria-labelledby="work-together">
        <div className="about-cta-band__inner shell">
          <h2 id="work-together">Want to work together?</h2>
          <p className="flex flex-wrap gap-x-[26px] gap-y-2 font-semibold">
            <a href={`mailto:${EMAIL}`} className="ulink">
              Email me <span aria-hidden="true">↗</span>
            </a>
            <Link to="/work" className="ulink">
              See my work <span aria-hidden="true">↗</span>
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
