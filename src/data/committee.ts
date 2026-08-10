export interface CommitteeMember {
  name: string;
  role: string;
  /** One-line description used in the home-page leadership block. */
  summary: string;
  /** Full biography for the leadership page. Empty array = TO CONFIRM. */
  bio: string[];
  affiliation: string;
  /** Optional institutional profile link. */
  profile?: string;
  /** Set when the biography is still being drafted. */
  pending?: string;
}

/**
 * Affiliations are provided for identification only and do not imply
 * institutional endorsement.
 */
export const committee: CommitteeMember[] = [
  {
    name: 'Michael Vardon',
    role: 'President',
    summary:
      'Environmental-economic and ecosystem accounting; ANU Fenner School of Environment and Society.',
    affiliation: 'Australian National University',
    bio: [
      'Honorary Associate Professor at the ANU Fenner School of Environment and Society, specialising in natural capital and ecosystem accounting.',
      'He spent fourteen years at the Australian Bureau of Statistics, including as Director of the Centre of Environment and Energy Statistics, with secondments to the United Nations, the National Water Commission and the Bureau of Meteorology.',
      "He has served on the editorial board of the UN SEEA and the World Bank's WAVES partnership, and contributes to the Australian Government's Technical Advisory Panel on Environmental-Economic Accounting and the current update of the SEEA Central Framework.",
    ],
    profile: 'https://researchportalplus.anu.edu.au/en/persons/michael-vardon/',
  },
  {
    name: 'Heather Keith',
    role: 'Vice-President',
    summary: 'Ecologist; forest carbon and ecosystem accounting; Griffith University.',
    affiliation: 'Griffith University',
    bio: [
      "Principal Research Fellow at Griffith University's Climate Action Beacon and an ecologist specialising in forest carbon, from field measurement of carbon stocks and fluxes to spatial modelling across landscapes.",
      'She contributed to the development of the UN SEEA Ecosystem Accounting standard, providing implementation guidance and case studies on forest ecosystems, restoration and carbon accounting, and is an independent member of the GHG Protocol Standards Board.',
    ],
  },
  {
    name: 'Crystal Bradley',
    role: 'Secretary',
    summary: 'Environment policy and ocean accounting; doctoral researcher, ANU.',
    affiliation: 'Australian National University',
    bio: [
      'More than two decades in the Australian Public Service, leading domestic and international environment policy across chemicals, biodiversity and natural capital accounting.',
      "She directed the development of Australia's first national ocean ecosystem account with the Australian Bureau of Statistics and co-chaired the United Nations working group on global ocean accounting standards.",
      'Qualified in environmental science and law, she is a Sir Roland Wilson Scholar at the ANU Fenner School of Environment and Society, where her doctoral research examines critical natural capital dependency in Australia and options for its protection in law and policy.',
    ],
  },
  {
    name: 'Mark Eigenraam',
    role: 'Treasurer',
    summary: 'Economist; Director, IDEEA Group.',
    affiliation: 'IDEEA Group',
    bio: [
      'Economist and a Director of the IDEEA Group (Institute for the Development of Environmental-Economic Accounting), where he leads stakeholder engagement on the practical implementation of natural capital accounting, working with governments and organisations to put ecosystem services and natural capital accounts into practice.',
    ],
    // TO CONFIRM (C2) — complete the biography to match the others: earlier
    // environmental-economic accounting work with the Victorian Government, and
    // an optional institutional profile link.
    pending: 'Further biographical detail to be added.',
  },
  {
    name: 'Steven May',
    role: 'Ordinary committee member',
    summary: 'Australian Bureau of Statistics.',
    affiliation: 'Australian Bureau of Statistics',
    bio: [],
    // TO CONFIRM (C3) — full profile to be supplied.
    pending: 'Biography to be supplied.',
  },
  {
    name: 'Ben Milligan',
    role: 'Ordinary committee member',
    summary: 'Environmental law and ecosystem science; UNSW Sydney.',
    affiliation: 'UNSW Sydney',
    bio: [
      'Associate Professor and Scientia Fellow in the School of Biological, Earth and Environmental Sciences at UNSW Sydney, working across environmental law, ecosystem science and applied economics.',
      'His research examines how environmental information — including natural capital and ecosystem accounts — is used in public policy, and the design of legal and institutional frameworks for sustainable development, with a particular focus on the ocean.',
      'He has advised the High Level Panel for a Sustainable Ocean Economy and the UN Environment International Resource Panel.',
    ],
  },
  {
    name: 'Carl Obst',
    role: 'Ordinary committee member',
    summary: 'Lead author and editor of the SEEA; Director, IDEEA Group.',
    affiliation: 'IDEEA Group',
    bio: [
      'Director of the IDEEA Group and the lead author and editor of the UN System of Environmental-Economic Accounting (SEEA).',
      'He previously headed Australia’s national accounts and now works to narrow the gap between national and corporate approaches to natural capital accounting and to reconcile the perspectives of accountants and economists on valuation.',
      'He will present on the SEEA Central Framework update at the Society’s launch seminar.',
    ],
  },
];
