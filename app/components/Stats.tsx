import type { Stat } from '~/data/work';

/** 2–4 key results. Every value is checked against CONTENT.md at build time. */
export default function Stats({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null;
  return (
    <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse gap-1">
          <dt className="text-small text-muted">{stat.label}</dt>
          <dd className="text-h2 tabular-nums">{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
