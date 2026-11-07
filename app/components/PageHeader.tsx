import type { ReactNode } from 'react';

/**
 * Inner-page header: an eyebrow across the top (one part, or two pushed to
 * either end), the H1 on the left and a lead in the right column.
 */
export default function PageHeader({
  eyebrow,
  title,
  lead,
}: {
  eyebrow: string | [string, string];
  title: string;
  lead?: ReactNode;
}) {
  return (
    <header className="page-header">
      <p className="label">
        {typeof eyebrow === 'string' ? (
          eyebrow
        ) : (
          <>
            <span>{eyebrow[0]}</span>
            <span>{eyebrow[1]}</span>
          </>
        )}
      </p>
      <h1>{title}</h1>
      {lead}
    </header>
  );
}
