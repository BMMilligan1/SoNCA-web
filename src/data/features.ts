/**
 * "Feature of the week" — a changing spotlight shown in the FeatureBox on the
 * home page and, in full, on the Features page (/features/).
 *
 * HOW IT WORKS
 *   The entry with the most recent `date` is the CURRENT feature: it appears in
 *   the home-page FeatureBox and at the top of the Features page. Every older
 *   entry drops into the "Past features" archive on the Features page.
 *
 *   To publish a new weekly feature, add an entry with a newer `date`.
 *
 * FIELDS
 *   title, author, image, imageAlt, blurb, date are required.
 *   blurb       ~50 words, PLAIN TEXT — shown in the box and archive cards.
 *               (No links: the whole box is itself a link.)
 *   body        optional; a string OR an array of paragraphs. May contain inline
 *               HTML links — rendered on the Features page only.
 *   imageCredit optional; shown under the image on the Features page. May contain
 *               a link. Required for CC BY / CC BY-SA images.
 *   link        optional "read more" destination.
 */

export interface Feature {
  title: string;
  author: string;
  image: string;
  imageAlt: string;
  blurb: string;
  date: string;
  body?: string | string[];
  imageCredit?: string;
  link?: string;
}

export const features: Feature[] = [
  {
    title: 'Meet the London Group: where the SEEA is worked out',
    author: 'SoNCA editorial',
    image: '/features/london-group-guatemala.jpg',
    imageAlt: 'Guatemala City skyline, host of the 32nd London Group meeting',
    imageCredit:
      'Photo: Rene Hernandez, <a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="noopener">CC BY-SA 2.0</a>, via <a href="https://commons.wikimedia.org/wiki/File:Guatemala_City_-_Guatemala_-_Zona_14_-_Skyline.jpg" target="_blank" rel="noopener">Wikimedia Commons</a>',
    blurb:
      'Since 1993 the London Group on Environmental-Economic Accounting has been the workshop of the field: an informal group of experts, mostly from national statistical offices, who advance the methods and implementation advice behind the System of Environmental-Economic Accounting (SEEA). Its 32nd meeting is in Guatemala City this September.',
    date: '2026-08-12',
    link: 'https://seea.un.org/en/about-seea/unceea-and-london-group/london-group-environmental-accounting',
    body: [
      `The <a href="https://seea.un.org/en" target="_blank" rel="noopener">System of Environmental-Economic Accounting</a> (SEEA) did not arrive fully formed. Much of it was worked out in the <a href="https://seea.un.org/en/about-seea/unceea-and-london-group/london-group-environmental-accounting" target="_blank" rel="noopener">London Group on Environmental-Economic Accounting</a>, established in 1993 and first convened in London in 1994. It is an informal, voluntary group of experts, drawn mainly from national statistical offices and international organisations, that meets each year to advance methodological research and develop implementation advice for the SEEA. Its work fed into the <a href="https://seea.un.org/en/methodology/seea-central-framework" target="_blank" rel="noopener">SEEA Central Framework</a> and <a href="https://seea.un.org/en/methodology/ecosystem-accounting" target="_blank" rel="noopener">SEEA Ecosystem Accounting</a>. This September the London Group holds its <a href="https://seea.un.org/en/events/london-group-environmental-economic-accounting-32nd-meeting" target="_blank" rel="noopener">32nd meeting in Guatemala City</a>, hosted by the Bank of Guatemala.`,
      `The London Group's work currently centres on updating the <a href="https://seea.un.org/en/update-seea-central-framework" target="_blank" rel="noopener">SEEA Central Framework itself</a>, something that Carl Obst, the editor of the revision, will be outlining at the Society for Natural Capital Accounting (SoNCA) <a href="https://events.humanitix.com/sonca" target="_blank" rel="noopener">launch on 18 August 2026</a>. First adopted in 2012, it is being revised to keep pace with new demands, including climate change, the circular economy and biodiversity, and to stay consistent with the 2025 revision of the <a href="https://unstats.un.org/unsd/nationalaccount/sna2025.asp" target="_blank" rel="noopener">System of National Accounts</a> (SNA). Much of the <a href="https://seea.un.org/en/events/london-group-environmental-accounting-31st-meeting" target="_blank" rel="noopener">London Group's 31st meeting, held in Tallinn</a> in September 2025, was given over to this update, and it will again take up most of the time of the 32nd meeting in Guatemala. This is where the detail is debated: how carbon and other emissions are recorded, how water and other assets are valued, how environmental taxes, subsidies and expenditures are classified, and how all of it lines up with the measures of the economy. Those debates reach well beyond the statistical offices. Whoever compiles or uses natural capital accounts, whether in business, finance, consultancy, government or research, will be working with the concepts debated and practices considered by the London Group. Following its deliberations is how practitioners across the field can keep up with what is coming and, in time, help shape it.`,
      `SoNCA is not part of this standards machinery, which is governed by the <a href="https://seea.un.org/en/about-seea/unceea-and-london-group/un-committee-experts-environmental-economic-accounting-unceea" target="_blank" rel="noopener">United Nations Committee of Experts on Environmental-Economic Accounting</a> (UNCEEA), but many of our members are the practitioners who do this work. Raising awareness of the deliberations of the London Group is part of the broader exchange of ideas and experience that SoNCA exists to support.`,
    ],
  },
];
