export interface FaqItem {
  question: string;
  answer: string[];
  /** Group heading on the FAQ page. */
  group: 'The field' | 'Membership' | 'Taking part';
}

export const faqs: FaqItem[] = [
  {
    group: 'The field',
    question: 'What counts as natural capital accounting?',
    answer: [
      'Any structured, repeatable measurement of environmental assets and their relationship with the economy and society. Membership is not limited to any one method.',
    ],
  },
  {
    group: 'The field',
    question: 'Is the Society only for SEEA practitioners?',
    answer: [
      'No. The SEEA is our principal technical reference point, but we engage with related public, corporate and community frameworks. The SEEA is a reference point, not a boundary on valid activity.',
    ],
  },
  {
    group: 'The field',
    question: 'Do I need to be an accountant?',
    answer: [
      'No. The Society is deliberately cross-disciplinary. Members include ecologists, economists, statisticians, geospatial specialists, data scientists, lawyers, auditors, and finance and sustainability professionals, alongside accountants and decision makers.',
    ],
  },
  {
    group: 'Membership',
    question: 'Is it only for Australians?',
    answer: [
      'No. The Society is incorporated in Australia and welcomes members internationally. The initial programme is delivered primarily online, so that practitioners can take part across regions and time zones.',
    ],
  },
  {
    group: 'Membership',
    question: 'Can organisations become members?',
    answer: [
      'Membership is individual. Members join as individuals rather than as representatives of their organisations, which allows them to test ideas and share experience without every contribution being treated as the formal position of their employer.',
      'Organisations can support the Society as partners or sponsors.',
    ],
  },
  {
    group: 'Membership',
    question: 'What is a foundation member?',
    answer: [
      'Someone who joins in the Society’s first year, 2026–27. It is a permanent designation: everyone who joins in the foundation year keeps it.',
    ],
  },
  {
    group: 'Membership',
    question: 'When does my membership run to?',
    answer: [
      'Memberships share a common renewal date of 30 June. Foundation-year membership runs to 30 June 2027, whenever in the first year you join.',
    ],
  },
  {
    group: 'Membership',
    question: 'Can I vote straight away?',
    answer: [
      'Yes. Members may vote at general meetings from the date of joining, in accordance with the Society’s rules.',
    ],
  },
  {
    group: 'Membership',
    question: 'Will my name be published?',
    answer: [
      'Only if you choose. The member directory profile is opt-in, and member details are listed publicly only with consent.',
    ],
  },
  {
    group: 'Taking part',
    question: 'Can non-members attend events?',
    answer: [
      'The launch seminar was open to all, and its recording is on the events page. The online professional programme is provided principally for members, with selected sessions opened more widely.',
    ],
  },
  {
    group: 'Taking part',
    question: 'How will certification be developed?',
    answer: [
      'Cautiously, and in consultation. We will first develop a competency framework and recognise continuing professional development, then explore the case for accreditation or certification with members and employers. Nothing here is predetermined.',
    ],
  },
  {
    group: 'Taking part',
    question: 'How can I contribute to a working group?',
    answer: [
      'Join as a member and register your interest. The technical working group’s terms of reference set out how to take part.',
    ],
  },
  {
    group: 'Taking part',
    question: 'I am a student or early-career practitioner. Is this for me?',
    answer: [
      'Yes. A concession rate is available, and welcoming newcomers and early-career members is written into the Society’s member participation code.',
    ],
  },
];

export const faqGroups = ['The field', 'Membership', 'Taking part'] as const;
