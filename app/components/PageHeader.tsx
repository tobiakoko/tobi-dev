import type { ReactNode } from 'react';

/**
 * Inner-page header: an eyebrow across the top ("Contact / Dallas, Texas"
 * when it has two parts), the H1 on the left, a lead in the right column with
 * its bottom level with the H1's, and an optional smaller note under the lead.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
  note,
  inline = false,
}: {
  eyebrow: string | [string, string];
  title: string;
  lead?: ReactNode;
  /** A smaller second paragraph under the lead (Contact). */
  note?: ReactNode;
  /** Lead sits right beside the H1 instead of in the far right column (About). */
  inline?: boolean;
}) {
  return (
    <header className={`page-header ${inline ? 'page-header--inline' : ''}`}>
      <p className="label">{typeof eyebrow === 'string' ? eyebrow : eyebrow.join(' / ')}</p>
      <h1>{title}</h1>
      {lead}
      {note}
    </header>
  );
}
