import { expect, test } from '@playwright/test';
import { composeMailto, ENQUIRY_TYPES, enquiryBody, enquirySubject } from '../app/data/contact';

const enquiry = {
  name: 'Ada Lovelace',
  email: 'ada@example.com',
  type: 'Freelance project',
  message: 'A small site & a contact form?\nThanks.',
};

test.describe('mailto composition', () => {
  test('subject is "[Portfolio enquiry] {type} from {name}"', () => {
    expect(enquirySubject(enquiry)).toBe('[Portfolio enquiry] Freelance project from Ada Lovelace');
  });

  test('body carries name, reply-to, type and the message', () => {
    expect(enquiryBody(enquiry)).toBe(
      'Name: Ada Lovelace\r\nReply to: ada@example.com\r\nAbout: Freelance project\r\n\r\nA small site & a contact form?\nThanks.',
    );
  });

  test('the URL is percent-encoded, so & and ? in a message are safe', () => {
    const url = composeMailto('enquiries@tobiakoko.com', enquiry);
    expect(url.startsWith('mailto:enquiries@tobiakoko.com?subject=')).toBe(true);
    const params = new URLSearchParams(url.split('?')[1]);
    expect([...params.keys()]).toEqual(['subject', 'body']);
    expect(params.get('body')).toBe(enquiryBody(enquiry));
  });

  for (const type of ENQUIRY_TYPES) {
    test(`works for "${type}"`, () => {
      expect(enquirySubject({ ...enquiry, type })).toContain(` ${type} from `);
    });
  }
});

test('the form keeps the address visible and never shows a sent state', async ({ page }) => {
  await page.goto('/contact');
  await expect(page.getByRole('link', { name: 'enquiries@tobiakoko.com' })).toBeVisible();
  await expect(page.getByLabel('What’s this about?').locator('option')).toHaveText([
    ...ENQUIRY_TYPES,
  ]);

  // Required fields stop an empty submit in the browser.
  await page.getByRole('button', { name: /open email draft/i }).click();
  await expect(page.getByLabel('Name')).toHaveJSProperty('validity.valid', false);

  await page.getByLabel('Name').fill(enquiry.name);
  await page.getByLabel('Email', { exact: true }).fill(enquiry.email);
  await page.getByRole('textbox', { name: 'Message' }).fill(enquiry.message);
  await page.getByRole('button', { name: /open email draft/i }).click();
  await expect(page.locator('main')).not.toContainText(/message sent|thank you|thanks for/i);
});
