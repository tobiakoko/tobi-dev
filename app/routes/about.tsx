import type { ReactNode } from 'react';
import { Link } from 'react-router';
import { Container, LabelRail, LabelRailRow, Prose } from '~/components/Layout';
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

const principles = [
  {
    line: 'Get the facts right.',
    sentence: 'Every fact lives in one place, and a test fails if a wrong one comes back.',
  },
  {
    line: 'Fail honestly.',
    sentence: "A form that can't send says so, and shows another way to reach a person.",
  },
  {
    line: 'Leave it runnable.',
    sentence:
      'Documentation, a runbook and training mean the client never depends on me to change a service time.',
  },
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

function RuledList({ children }: { children: ReactNode }) {
  return <ul className="flex flex-col border-t border-line">{children}</ul>;
}

function RuledItem({ children }: { children: ReactNode }) {
  return <li className="flex flex-col gap-1 border-b border-line py-4">{children}</li>;
}

export default function About() {
  return (
    <Container className="flex flex-col gap-24 pt-16 md:gap-40 md:pt-24">
      <header className="flex flex-col gap-6">
        <h1 className="text-title">About</h1>
        <p className="max-w-measure text-h2 text-muted">
          I build software that tells the truth: correct facts, honest error messages, and a
          handover the client can actually run.
        </p>
      </header>

      <LabelRail>
        <LabelRailRow label="Bio">
          <Prose>
            <p>
              I&rsquo;m Daniel Akoko, and most people call me Tobi. I&rsquo;m a software engineer in
              Dallas, Texas. I build web software for churches and small businesses, and I care most
              about the parts people only notice when they break: the facts on the page, the error
              messages, the tests and the handover.
            </p>
            <p>
              My path here wasn&rsquo;t a straight line. I studied electrical engineering, then
              criminal justice, then computer science, and I worked in hospitality, where I learned
              to stay calm under pressure and look after people. For years I&rsquo;ve also run
              sound, media and livestreaming at my church. All of it shows up in how I work: I
              listen first, I plan in steps, and I don&rsquo;t call something done until it works
              for the person using it.
            </p>
          </Prose>
        </LabelRailRow>

        <LabelRailRow label="How I work">
          <ol className="flex max-w-measure flex-col gap-4 md:gap-6">
            {principles.map((p) => (
              <li key={p.line}>
                <strong className="font-semibold">{p.line}</strong> {p.sentence}
              </li>
            ))}
          </ol>
        </LabelRailRow>

        <LabelRailRow label="Present">
          <Prose>
            <p>
              I build websites and digital services for churches and small businesses, and I&rsquo;m
              studying for an MBA at Western Governors University (expected June 2027). I&rsquo;m
              open to full-time roles in software engineering, business and systems analysis,
              implementation, and project delivery.
            </p>
          </Prose>
        </LabelRailRow>

        <LabelRailRow label="Past">
          <RuledList>
            {past.map((r) => (
              <RuledItem key={r.role}>
                <h3 className="font-medium">{r.role}</h3>
                <p className="text-small text-muted tabular-nums">
                  {join(r.org, r.location, r.dates)}
                </p>
                {r.bullets.length > 0 && (
                  <ul className="mt-2 flex list-disc flex-col gap-1.5 pl-5 text-small marker:text-muted">
                    {r.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </RuledItem>
            ))}
          </RuledList>
        </LabelRailRow>

        <LabelRailRow label="Origins">
          <Prose>
            <p>
              I started in electrical engineering at the Community College of Baltimore County,
              moved into criminal justice at the University of South Florida, and found my way to
              computer science at Western Governors University. Music has been a constant: I direct
              choirs and help run music and media for church events.
            </p>
          </Prose>
        </LabelRailRow>

        <LabelRailRow label="Education">
          <RuledList>
            {education.map((d) => (
              <RuledItem key={d.degree}>
                <p className="font-medium">{d.degree}</p>
                {(d.school || d.dates) && (
                  <p className="text-small text-muted tabular-nums">{join(d.school, d.dates)}</p>
                )}
              </RuledItem>
            ))}
          </RuledList>
        </LabelRailRow>

        <LabelRailRow label="Certifications">
          <RuledList>
            {certifications.map((c) => (
              <RuledItem key={c}>
                <p>{c}</p>
              </RuledItem>
            ))}
          </RuledList>
        </LabelRailRow>

        <LabelRailRow label="Community">
          <RuledList>
            {community.map((c) => (
              <RuledItem key={c}>
                <p>{c}</p>
              </RuledItem>
            ))}
          </RuledList>
        </LabelRailRow>
      </LabelRail>

      <p className="text-h3">
        Want to work together?{' '}
        <a href={`mailto:${EMAIL}`} className="link">
          Email me
        </a>{' '}
        or{' '}
        <Link to="/work" className="link">
          see my work
        </Link>
        .
      </p>
    </Container>
  );
}
