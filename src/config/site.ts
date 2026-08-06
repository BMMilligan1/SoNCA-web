/**
 * Global site facts.
 *
 * Anything still awaiting committee sign-off is marked TO CONFIRM so it can be
 * found with a single grep before launch.
 */

export const site = {
  name: 'Society for Natural Capital Accounting',
  shortName: 'SoNCA',
  tagline: 'A professional home for people who produce, use and improve natural capital accounts.',
  description:
    'The Society for Natural Capital Accounting connects practitioners across government, business, research and civil society; supports professional development; and advances credible methods and standards. Incorporated in Australia, with members worldwide.',
  url: 'https://naturalcapitalaccounting.org',
  locale: 'en_AU',
  email: 'inquiries@naturalcapitalaccounting.org',
  linkedin: 'https://www.linkedin.com/company/sonca', // TO CONFIRM — exact LinkedIn page URL
  foundingYear: '2026–27',
} as const;

/** Incorporation details — certificate awaited (application lodged 11 July 2026). */
export const incorporation = {
  act: 'Associations Incorporation Act 1991 (ACT)',
  /** TO CONFIRM (C1) — add once the certificate issues. */
  number: null as string | null,
  /** TO CONFIRM (C1) — date of incorporation. */
  date: null as string | null,
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
  launchCloses: '30 September 2026',
  /** D4 — common renewal date; foundation year runs to this date. */
  renewalDate: '30 June 2027',
  /** D5 — TO CONFIRM: depends on GST registration. */
  gstNote: 'Fees are shown in Australian dollars. GST treatment will be confirmed before launch.',
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
    'An introduction to the Society and its aims, with a presentation by Carl Obst on the update to the SEEA Central Framework, followed by questions.',
  audience: 'Open to all',
} as const;
