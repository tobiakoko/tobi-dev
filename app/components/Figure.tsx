import type { Cover } from '~/data/work';

/**
 * A screenshot or diagram on --bg-alt with a hairline border. Markdown images
 * with a title render to the same markup and classes (work.server.ts).
 */
export default function Figure({
  image,
  caption,
  eager = false,
}: {
  image: Cover;
  caption?: string;
  /** Only the first image on a page loads eagerly. */
  eager?: boolean;
}) {
  return (
    <figure className="figure">
      <div className="figure-frame">
        <img
          src={image.src}
          srcSet={image.srcSet}
          sizes={image.srcSet ? '(min-width: 82.5rem) 82.5rem, 100vw' : undefined}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
        />
      </div>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
