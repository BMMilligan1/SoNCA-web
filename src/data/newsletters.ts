/**
 * The monthly newsletter. Each issue is one page at a PERMANENT address:
 * /newsletter/<slug>/ (e.g. /newsletter/2026-11/). Link to that address from the
 * Zoho email and LinkedIn. /newsletter/ always shows the newest issue.
 *
 * TO PUBLISH AN ISSUE
 *   1. Save the issue text as HTML in src/data/newsletters/<slug>.html
 *      (headings: <h2> for sections, <h3> for sub-sections; the h2 headings
 *      become the "In this issue" list automatically).
 *   2. Add an entry below with a newer `date`, and import its HTML.
 *
 * FIELDS
 *   slug       PERMANENT: year-month, e.g. '2026-12'. Never change once published.
 *   issue      issue number.
 *   date       publication date, YYYY-MM-DD.
 *   headline   one line naming what is in the issue (plain text); used on the
 *              home page and in the list of past issues.
 *   html       the issue body.
 */
import issue202611 from './newsletters/2026-11.html?raw';

export interface NewsletterIssue {
  slug: string;
  issue: number;
  date: string;
  headline: string;
  html: string;
}

export const newsletterUrl = (n: Pick<NewsletterIssue, 'slug'>) => `/newsletter/${n.slug}/`;

export const newsletterMonth = (n: Pick<NewsletterIssue, 'date'>) =>
  new Date(n.date).toLocaleDateString('en-AU', { month: 'long', year: 'numeric' });

export const newsletterDate = (n: Pick<NewsletterIssue, 'date'>) =>
  new Date(n.date).toLocaleDateString('en-AU', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

/** The section headings (h2) of an issue, for the "In this issue" list. */
export const newsletterSections = (n: NewsletterIssue) =>
  [...n.html.matchAll(/<h2 id="([^"]+)">(.*?)<\/h2>/g)].map((m) => ({ id: m[1], title: m[2] }));

/** Issues, newest first. */
export const sortedNewsletters = (): NewsletterIssue[] =>
  [...newsletters].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export const newsletters: NewsletterIssue[] = [
  {
    slug: '2026-11',
    issue: 1,
    date: '2026-11-10',
    headline:
      'Comparing natural capital accounting frameworks, new accounts released in October, and a review of more than 165 frameworks',
    html: issue202611,
  },
];
