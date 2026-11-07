import type { FormEvent } from 'react';
import { composeMailto, ENQUIRY_TYPES } from '~/data/contact';
import { EMAIL } from '~/data/site';

/**
 * Opens the visitor's email app with the message filled in. Without
 * JavaScript the browser's own mailto: form handling takes over. There is no
 * "sent" state: nothing is submitted, and the address stays visible beside it.
 */
export default function ContactForm() {
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const field = (key: string) => String(data.get(key) ?? '');
    window.location.href = composeMailto(EMAIL, {
      name: field('name'),
      email: field('email'),
      type: field('type'),
      message: field('message'),
    });
  };

  return (
    <form
      action={`mailto:${EMAIL}`}
      method="post"
      encType="text/plain"
      onSubmit={onSubmit}
      aria-labelledby="message-title"
    >
      <div className="form-head">
        <h2 id="message-title" className="label">
          Message
        </h2>
        <span className="text-[13px] text-muted">About a minute</span>
      </div>
      <div className="form">
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            autoComplete="name"
            placeholder="Your name"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@example.com"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="cf-type">What&rsquo;s this about?</label>
          <select id="cf-type" name="type" defaultValue={ENQUIRY_TYPES[0]}>
            {ENQUIRY_TYPES.map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            placeholder="A little context about what you need…"
            required
          />
        </div>
        <p className="text-[12px] text-muted">
          Sending opens your email app with this message filled in. Nothing is submitted in the
          browser.
        </p>
        <button type="submit" className="btn btn-primary btn--sm self-start">
          Open email draft{' '}
          <span aria-hidden="true" className="arrow-sm">
            ↗
          </span>
        </button>
      </div>
    </form>
  );
}
