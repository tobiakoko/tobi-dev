export interface TextLink {
  label: string;
  href: string;
  external?: boolean;
}

/** A row of plain underlined text links (home hero, contact). */
export default function TextLinks({ links }: { links: TextLink[] }) {
  return (
    <ul className="flex flex-wrap gap-x-6 gap-y-2">
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            className="link"
            {...(link.external && { target: '_blank', rel: 'noopener noreferrer' })}
          >
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  );
}
