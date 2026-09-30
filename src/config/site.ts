/**
 * Global site facts.
 *
 * Anything still awaiting committee sign-off is marked TO CONFIRM so it can be
 * found with a single grep before launch.
 */

export const site = {
  name: 'Society of Natural Capital Accounting',
  shortName: 'SoNCA',
  tagline: 'A professional home for people who produce, use and improve natural capital accounts.',
  strapline: 'Better accounts · Better decisions · A sustainable future',
  description:
    'The Society of Natural Capital Accounting connects practitioners across government, business, research and civil society; supports professional development; and advances credible methods and standards. Incorporated in Australia, with members worldwide.',
  url: 'https://naturalcapitalaccounting.org',
  locale: 'en_AU',
  email: 'inquiries@naturalcapitalaccounting.org',
  linkedin: 'https://www.linkedin.com/company/society-of-natural-capital-accounting', // TO CONFIRM — exact LinkedIn page URL
  foundingYear: '2026–27',
} as const;

/** Incorporation details — incorporated 10 August 2026 (application lodged 11 July 2026). */
export const incorporation = {
  act: 'Associations Incorporation Act 1991 (ACT)',
  number: 'A06752',
  date: '10 August 2026',
  abn: '34 512 560 709',
  lodged: '11 July 2026',
} as const;

/** Membership fees, in Australian dollars. */
export const membership = {
  currency: 'A$',
  standard: 180,
  concession: 90,
  launchStandard: 162,
  launchConcession: 81,
  launchDiscountPct: 10,
  /** D7 — launch-offer closing date. */
  launchCloses: '30 November 2026',
  /** D4 — membership runs for 12 months from the date of joining. */
  term: '12 months from the date you join',
  /** D5 — the Society is not registered for GST. */
  gstNote: 'Fees are in Australian dollars. The Society is not registered for GST, so no GST is charged.',
} as const;

/** The launch seminar. */
export const launchEvent = {
  title: 'Launch seminar',
  /** C4 — founders' notes indicate the week beginning 17 August 2026. */
  date: '18 August 2026',
  dateISO: '2026-08-18',
  dateShort: '18 Aug 2026',
  time: '12.30 to 1.30 pm AEST',
  duration: '60 minutes',
  platform: 'Online via Microsoft Teams',
  summary:
    'An introduction to the Society and its aims by Michael Vardon, with a presentation by Carl Obst on the update to the SEEA Central Framework, followed by questions.',
  audience: 'Open to all',
} as const;
