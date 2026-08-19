/**
 * Outbound destinations for every call to action on the site.
 *
 * All buttons and forms are already designed and wired; they simply point here.
 * Replace the placeholders below with the real URLs as they become available —
 * nothing else needs to change.
 *
 * A value of `null` renders the control in a visibly disabled "coming soon"
 * state rather than shipping a dead link.
 */

export const links = {
  /** Membership application / payment (e.g. Microsoft Forms, Stripe, TidyHQ). */
  join: null as string | null,

  /** Launch seminar registration form. The launch was held on 18 August 2026;
   *  kept for the record, no longer used by any call to action. */
  registerLaunch: 'https://events.humanitix.com/sonca',

  /** Recording of the launch seminar, 18 August 2026. */
  launchRecording: 'https://youtu.be/CbehJIHV0Dk',
  
  /** Single expression-of-interest form (sessions, conference, working group, mailing list). */
  expressInterest: null as string | null,

  /** Newsletter subscription. */
  newsletter: null as string | null,

  /** Partnership and sponsorship enquiries. */
  partnership: `mailto:inquiries@naturalcapitalaccounting.org?subject=Partnership%20enquiry`,

  /** General contact. */
  contact: `mailto:inquiries@naturalcapitalaccounting.org`,

  /** Complaints and concerns under the member participation code. */
  complaints: `mailto:inquiries@naturalcapitalaccounting.org?subject=Concern%20under%20the%20member%20participation%20code`,

  /** ACT model rules on the ACT Legislation Register (authorised version). */
  modelRules: 'https://www.legislation.act.gov.au/di/2016-220/',

  /** UN System of Environmental-Economic Accounting. */
  seea: 'https://seea.un.org/',
  seeaCentralFramework: 'https://seea.un.org/content/seea-central-framework',
  seeaEcosystemAccounting: 'https://seea.un.org/ecosystem-accounting',
  seeaUpdate: 'https://seea.un.org/homepage/seea-central-framework-update',
} as const;

export type LinkKey = keyof typeof links;

/** True when a call to action has a real destination. */
export function isLive(href: string | null | undefined): href is string {
  return typeof href === 'string' && href.length > 0;
}
