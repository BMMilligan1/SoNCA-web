export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

/** Primary navigation. */
export const primaryNav: NavItem[] = [
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About the Society', href: '/about/' },
      { label: 'What is natural capital accounting?', href: '/natural-capital-accounting/' },
      { label: 'Leadership and governance', href: '/leadership/' },
      { label: 'Foundation-year priorities', href: '/priorities/' },
      { label: 'Frequently asked questions', href: '/faq/' },
    ],
  },
  {
    label: 'Membership',
    href: '/membership/',
    children: [
      { label: 'Join the Society', href: '/membership/' },
      { label: 'Member participation code', href: '/participation-code/' },
      { label: 'Organisational partners', href: '/partners/' },
    ],
  },
  {
    label: 'Programme',
    href: '/events/',
    children: [
      { label: 'Events and get involved', href: '/events/' },
      { label: 'Technical working group', href: '/technical-working-group/' },
      { label: 'Resources and news', href: '/resources/' },
    ],
  },
  { label: 'Contact', href: '/contact/' },
];

/** Footer link columns. */
export const footerNav: { title: string; items: NavItem[] }[] = [
  {
    title: 'About',
    items: [
      { label: 'About the Society', href: '/about/' },
      { label: 'What is natural capital accounting?', href: '/natural-capital-accounting/' },
      { label: 'Leadership and governance', href: '/leadership/' },
      { label: 'Foundation-year priorities', href: '/priorities/' },
      { label: 'Frequently asked questions', href: '/faq/' },
    ],
  },
  {
    title: 'Take part',
    items: [
      { label: 'Membership', href: '/membership/' },
      { label: 'Events and get involved', href: '/events/' },
      { label: 'Technical working group', href: '/technical-working-group/' },
      { label: 'Resources and news', href: '/resources/' },
      { label: 'Organisational partners', href: '/partners/' },
    ],
  },
  {
    title: 'Governance',
    items: [
      { label: 'Rules', href: '/rules/' },
      { label: 'Member participation code', href: '/participation-code/' },
      { label: 'Privacy policy', href: '/privacy/' },
      { label: 'Complaints', href: '/complaints/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
];
