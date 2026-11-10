import type { ReactNode } from 'react';

/** Numbered eyebrow and H2 on the left; a lead or a link on the right. */
export default function SectionHeading({
  id,
  eyebrow,
  title,
  aside,
}: {
  id: string;
  eyebrow: string;
  title: string;
  aside?: ReactNode;
}) {
  return (
    <div className="section-heading">
      <div className="min-w-0">
        <p className="label">{eyebrow}</p>
        <h2 id={id}>{title}</h2>
      </div>
      {aside}
    </div>
  );
}
