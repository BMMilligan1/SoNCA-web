export interface ProgrammeItem {
  when: string;
  title: string;
  detail: string;
  href?: string;
  status?: 'next' | 'planned';
}

/** The foundation-year programme, 2026–27. */
export const programme: ProgrammeItem[] = [
  {
    when: '18 August 2026',
    title: 'Public launch seminar — held',
    detail:
      'The Society was launched online, with 124 people registered. The recording and the slides are on the events page.',
    href: '/events/',
  },
  {
    when: 'August – December 2026',
    title: 'Online professional programme',
    detail:
      'A regular series of presentations and workshops, including technical sessions tracking the SEEA update. Twenty five people offered to present at the launch; the calendar is being set now.',
    href: '/events/',
    status: 'next',
  },
  {
    when: 'Late 2026',
    title: 'Member consultation',
    detail:
      'Members are consulted on the draft competency framework and on the Society’s professional priorities.',
    href: '/priorities/',
  },
  {
    when: 'February 2027',
    title: 'Inaugural conference, Canberra',
    detail:
      'One to two days of presentations and papers, with a reduced registration rate for members.',
    href: '/events/',
  },
  {
    when: 'First half of 2027',
    title: 'First annual general meeting',
    detail:
      'Election of the committee in accordance with the rules, and publication of the foundation-year report.',
    href: '/leadership/',
  },
];

export interface Stream {
  name: string;
  summary: string;
  detail: string;
}

/** The four streams of the Society's work. */
export const streams: Stream[] = [
  {
    name: 'Connect',
    summary: 'Events, networks and peer exchange.',
    detail:
      'A regular programme of online seminars and workshops, an annual conference, and the everyday connections between practitioners that a scattered field has never had.',
  },
  {
    name: 'Develop',
    summary: 'Skills, competencies and professional pathways.',
    detail:
      'A competency framework, recognition of continuing professional development, and — in consultation with members and employers — an examination of the case for accreditation or certification.',
  },
  {
    name: 'Advance',
    summary: 'Methods, standards and research.',
    detail:
      'A technical working group for the harder measurement and implementation questions, anchored in the SEEA while engaging with related public, corporate and community frameworks.',
  },
  {
    name: 'Represent',
    summary: 'Coordinated practitioner contributions.',
    detail:
      'Considered practitioner input to consultations and public discussion — including the SEEA update — in a way that scattered individuals cannot achieve alone.',
  },
];

/** Foundation-year membership benefits. */
export const benefits: string[] = [
  'A programme of online seminars and workshops, at least six per year',
  'Access to recordings and presentation materials',
  'Quarterly member newsletters',
  'Voting rights and participation in the first annual general meeting',
  'Eligibility to join working groups',
  'Consultation on the competency framework and professional priorities',
  'Reduced registration for the inaugural conference',
  'An optional profile in the member directory',
];

/** Foundation-year priorities, against which the Society will report. */
export const priorities: { title: string; detail: string }[] = [
  {
    title: 'Establish a regular professional programme',
    detail:
      'A dependable rhythm of online seminars and workshops — at least six in the foundation year — that members can plan around.',
  },
  {
    title: 'Contribute practitioner perspectives to the SEEA update',
    detail:
      'Organised, evidence-based input to the global consultations running through 2026 on the update to the SEEA Central Framework.',
  },
  {
    title: 'Develop a draft competency framework',
    detail:
      'A first description of what practitioners in this field need to know and be able to do, developed in consultation with members and employers.',
  },
  {
    title: 'Hold the inaugural conference',
    detail:
      'A first gathering of the profession in Canberra in February 2027, with presentation materials and selected papers published afterwards.',
  },
  {
    title: 'Establish sustainable governance and member services',
    detail:
      'Working governance, transparent policies, and member services that can be sustained beyond the establishment period.',
  },
];
