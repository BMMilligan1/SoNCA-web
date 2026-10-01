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
  /** Stripe Payment Link for standard membership. Paste the buy.stripe.com URL here. */
  joinStandard: 'https://buy.stripe.com/9B63cxfjE0PR1vzfA2a3u00' as string | null,

  /** Stripe Payment Link for the student concession. Paste the buy.stripe.com URL here. */
  joinConcession: 'https://buy.stripe.com/dRm28t1sOeGH8Y10F8a3u01' as string | null,

  /** Every "Become a member" button. Goes to the payment options on the membership
   *  page once both Stripe links above are filled in; until then shows "Soon". */
  get join(): string | null {
    return this.joinStandard && this.joinConcession ? '/membership/#join' : null;
  },

  /** Launch seminar registration form. The launch was held on 18 August 2026;
   *  kept for the record, no longer used by any call to action. */
  registerLaunch: 'https://events.humanitix.com/sonca',

  /** Recording of the launch seminar, 18 August 2026. */
  launchRecording: 'https://youtu.be/CbehJIHV0Dk',

  /** Slides from the launch seminar, 18 August 2026. */
  launchSlides: '/downloads/SoNCA-launch-slides-18-August-2026.pdf',

  /** Registration for the first seminar, Comparing natural capital accounting
   *  frameworks, 8 am AEDT Wednesday 21 October 2026. */
  registerSeminar1: 'https://events.humanitix.com/sonca-comparing-nca-frameworks',

  /** Offering to deliver a session in the online programme. */
  offerSession:
    'mailto:inquiries@naturalcapitalaccounting.org?subject=Offering%20to%20present%20in%20the%20online%20programme',
  
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
