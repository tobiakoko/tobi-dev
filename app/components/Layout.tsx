import type { ReactNode } from 'react';

/*
 * Layout primitives (DESIGN-SYSTEM.md, "Spacing and layout"). Pages compose
 * these instead of repeating gutters, widths and section gaps.
 */

/** Wide container: 1320px, centered, 24px gutters (the .shell class in app.css). */
export function Container({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`shell ${className}`}>{children}</div>;
}

/** Prose column: 40rem, with the stack gap between paragraphs. */
export function Prose({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div className={`flex max-w-measure flex-col gap-4 md:gap-6 ${className}`}>{children}</div>
  );
}

/** A major section. Adjacent sections are a section gap apart (96 px / 160 px). */
export function Section({
  children,
  className = '',
  ...rest
}: { children: ReactNode; className?: string } & React.ComponentProps<'section'>) {
  return (
    <section className={`py-12 md:py-20 ${className}`} {...rest}>
      <Container>{children}</Container>
    </section>
  );
}

/** Label style, --muted. The label in a LabelRail row. */
export function SectionLabel({ children, id }: { children: ReactNode; id?: string }) {
  return (
    <h2 id={id} className="label lg:sticky lg:top-24">
      {children}
    </h2>
  );
}

/**
 * Label column + content from 1024 px; the label stacks above the content on
 * smaller screens. Rows are a block gap apart.
 */
export function LabelRail({ children }: { children: ReactNode }) {
  return <div className="flex flex-col gap-12 md:gap-18">{children}</div>;
}

export function LabelRailRow({
  label,
  id,
  children,
}: {
  label: ReactNode;
  id?: string;
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 items-start gap-4 lg:grid-cols-[14rem_1fr] lg:gap-16">
      <div className="pt-1.5 lg:h-full">
        <SectionLabel id={id}>{label}</SectionLabel>
      </div>
      <div className="min-w-0">{children}</div>
    </div>
  );
}
