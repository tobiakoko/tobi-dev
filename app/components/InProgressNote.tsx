import { Link } from 'react-router';
import { IN_PROGRESS_NOTE } from '~/data/work';

/**
 * Stands in for a case study's sections while it's being written (front matter
 * `inProgress: true`). A dark panel in both themes; the link goes to Contact.
 */
export default function InProgressNote() {
  return (
    <section className="in-progress" aria-labelledby="in-progress-title">
      <p className="label">{IN_PROGRESS_NOTE.eyebrow}</p>
      <h2 id="in-progress-title">{IN_PROGRESS_NOTE.heading}</h2>
      <p className="in-progress__body">{IN_PROGRESS_NOTE.body}</p>
      <Link to="/contact" className="ulink arrowlink">
        {IN_PROGRESS_NOTE.link} <span aria-hidden="true">↗</span>
      </Link>
    </section>
  );
}
