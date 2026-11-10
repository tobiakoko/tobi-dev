import type { Stat } from '~/data/work';

/** 2–4 key results. Every value is checked against CONTENT.md at build time. */
export default function Stats({ stats }: { stats: Stat[] }) {
  if (!stats.length) return null;
  return (
    <dl className="case-stats">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col-reverse">
          <dt>{stat.label}</dt>
          <dd>{stat.value}</dd>
        </div>
      ))}
    </dl>
  );
}
