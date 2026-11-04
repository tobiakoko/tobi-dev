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
  dates?: string;
  line: ReactNode;
}

// TODO(content): software engineering roles and dates, as Daniel supplies them.
const past: Role[] = [
  {
    role: 'Freelance web developer',
    org: 'Self-employed',
    // TODO(content): start year, then dates: `${start}–present`
    line: (
      <>
        Church, legal, automotive and entertainment websites (see{' '}
        <Link to="/work" className="link">
          Work
        </Link>
        ).
      </>
    ),
  },
  {
    role: 'Church technology and media',
    org: 'Deeper Life Bible Church, Tampa and Dallas',
    // TODO(content): years
    line: 'Sound, media production, livestreaming and IT support.',
  },
  {
    role: 'Hospitality',
    // TODO(content): Daniel to choose whether to name employers; years
    line: 'Guest-facing service in high-volume restaurants.',
  },
];

interface Degree {
  degree: string;
  school?: string;
  year?: string;
}

const education: Degree[] = [
  // TODO(content): MBA school and expected completion date.
  { degree: 'MBA (in progress)' },
  { degree: 'B.S. Computer Science', school: 'Western Governors University', year: '2024' },
  // TODO(content): year.
  { degree: 'B.G.S. Criminology', school: 'University of South Florida' },
  // TODO(content): year.
  { degree: 'A.S. Electrical Engineering', school: 'Community College of Baltimore County' },
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
              criminology, then computer science, and I worked in hospitality, where I learned to
              stay calm under pressure and look after people. For years I&rsquo;ve also run sound,
              media and livestreaming at my church. All of it shows up in how I work: I listen
              first, I plan in steps, and I don&rsquo;t call something done until it works for the
              person using it.
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
              completing an MBA. I&rsquo;m open to full-time roles in software engineering, business
              and systems analysis, implementation, and project delivery.
            </p>
          </Prose>
        </LabelRailRow>

        <LabelRailRow label="Past">
          <RuledList>
            {past.map((r) => (
              <RuledItem key={r.role}>
                <p className="font-medium">{r.role}</p>
                {(r.org || r.dates) && (
                  <p className="text-small text-muted tabular-nums">{join(r.org, r.dates)}</p>
                )}
                <p className="text-small">{r.line}</p>
              </RuledItem>
            ))}
          </RuledList>
        </LabelRailRow>

        <LabelRailRow label="Origins">
          <Prose>
            <p>
              I started in electrical engineering at the Community College of Baltimore County,
              moved into criminology at the University of South Florida, and found my way to
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
                {(d.school || d.year) && (
                  <p className="text-small text-muted tabular-nums">{join(d.school, d.year)}</p>
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
