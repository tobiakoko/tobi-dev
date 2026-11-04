import type { ReactNode } from 'react';

export interface MetaItem {
  label: string;
  value: ReactNode;
  /** Let a long value (a stack list) take a full row. */
  wide?: boolean;
}

/** Label/value pairs with a hairline above and below. Empty values are dropped. */
export default function MetaGrid({ items }: { items: MetaItem[] }) {
  return (
    <dl className="grid grid-cols-2 gap-x-6 gap-y-6 border-y border-line py-6 lg:grid-cols-3">
      {items
        .filter((item) => item.value)
        .map((item) => (
          <div key={item.label} className={`flex min-w-0 flex-col gap-1 ${item.wide ? 'col-span-2' : ''}`}>
            <dt className="label">{item.label}</dt>
            <dd className="text-small tabular-nums [overflow-wrap:anywhere]">{item.value}</dd>
          </div>
        ))}
    </dl>
  );
}
