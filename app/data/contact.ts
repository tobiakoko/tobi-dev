/*
 * Contact form copy and the mailto it composes (CONTENT.md §5). Nothing is
 * sent from the browser: the form opens the visitor's email app with a draft.
 */

export const ENQUIRY_TYPES = ['Full-time role', 'Freelance project', 'Other'] as const;
export type EnquiryType = (typeof ENQUIRY_TYPES)[number];

export interface Enquiry {
  name: string;
  email: string;
  type: EnquiryType | string;
  message: string;
}

/** Subject: "[Portfolio enquiry] {type} from {name}". */
export function enquirySubject({ name, type }: Pick<Enquiry, 'name' | 'type'>) {
  return `[Portfolio enquiry] ${type.trim()} from ${name.trim()}`;
}

/** Body: name, reply-to email and type, then the message. CRLF per RFC 6068. */
export function enquiryBody({ name, email, type, message }: Enquiry) {
  return [
    `Name: ${name.trim()}`,
    `Reply to: ${email.trim()}`,
    `About: ${type.trim()}`,
    '',
    message.trim(),
  ].join('\r\n');
}

/** A mailto: URL with the subject and body percent-encoded. */
export function composeMailto(to: string, enquiry: Enquiry) {
  const subject = encodeURIComponent(enquirySubject(enquiry));
  const body = encodeURIComponent(enquiryBody(enquiry));
  return `mailto:${to}?subject=${subject}&body=${body}`;
}
