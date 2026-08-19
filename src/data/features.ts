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
 *   linkLabel   optional label for that link; defaults to "Read more".
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
  linkLabel?: string;
}

export const features: Feature[] = [
  {
    title: 'The Society launches: what you asked for',
    author: 'Michael Vardon',
    image: '/features/sonca-launch-18-august-2026.jpg',
    imageAlt: 'Title slide from the launch of the Society of Natural Capital Accounting, 18 August 2026',
    blurb:
      'The Society of Natural Capital Accounting was launched on 18 August 2026, with 124 people registered. We asked what people want from a professional society that they cannot get today. The answers are an excellent starting point for a work programme. Membership opens shortly.',
    date: '2026-08-19',
    link: 'https://youtu.be/CbehJIHV0Dk',
    linkLabel: 'Watch the launch recording',
    body: [
      `The Society of Natural Capital Accounting (SoNCA) was launched on Tuesday 18 August 2026. One hundred and twenty four people registered, from Australia and from well beyond it. If you missed it you can <a href="https://youtu.be/CbehJIHV0Dk" target="_blank" rel="noopener">watch it online</a> or look at <a href="/downloads/SoNCA-launch-slides-18-August-2026.pdf" target="_blank" rel="noopener">the slides</a>.`,
      `The most useful part of the hour was not on the slides. We put four questions to the audience at the start, and there was much chat in the rest of the session. The one we cared about most was the third: what is the one thing you want from a professional society that you cannot get today?`,
      `The answers converged. People want a central platform to share experience, and not only the successes but the problems and how those problems were solved. They want access to a community of practice, and a view of what is happening in research, and in government and industry take-up. They want to see how Australia and the rest of the world understand, implement and expand on the <a href="https://seea.un.org/en" target="_blank" rel="noopener">System of Environmental-Economic Accounting</a> (SEEA), across both the SEEA Ecosystem Accounting and the SEEA Central Framework. Several raised comparability directly: how other people have handled the same awkward variable, and whether the answers are similar. Measurement challenges came up repeatedly, as did the continuing work of refining indicators. Underneath nearly all of it was the same thing: sharing good practice, connecting with others doing this work, and learning from experience that is currently locked inside the organisation that produced it. This is an excellent starting point for a work programme. The strong interest in a conference, tentatively Canberra in February 2027, was heartening, and if you would like to be involved in its planning, please let us know.`,
      `Twenty five registrants offered to present in the online seminar programme, which gives us a speaker list before we have even set the calendar. On working groups, the first candidate is the treatment of water in large artificial reservoirs as a produced asset, and the valuation of water resources in the SEEA Central Framework. Let us know if you would like to take part. Tell us too if you would like to lead a working group, or if there is a topic you think a group should be formed to address.`,
      `<strong>Membership opens shortly.</strong> Foundation membership is $180, with a concession rate of $90 that covers students, and a 10 per cent discount for anyone joining before 30 September. Sadly, the bank account is not yet open, so there is no payment link on the website now. As soon as it is open, we will put the link there and email everyone who asked us to. Foundation members are recorded as founders, shape the work programme and the working groups, and may vote and stand for election at the first annual general meeting.`,
      `The date and the form of that first annual general meeting are not yet settled. It may sit alongside the conference, or be held online later in the year, which would allow more members to take part. If you are watching the recording rather than the session, the four questions are still open. Send your answers to <a href="mailto:inquiries@naturalcapitalaccounting.org">inquiries@naturalcapitalaccounting.org</a>.`,
    ],
  },
  {
    title: 'Meet the London Group: debating and developing the SEEA',
    author: 'Michael Vardon',
    image: '/features/london-group-guatemala.jpg',
    imageAlt: 'Guatemala City skyline, host of the 32nd London Group meeting',
    imageCredit:
      'Photo: Rene Hernandez, <a href="https://creativecommons.org/licenses/by-sa/2.0" target="_blank" rel="noopener">CC BY-SA 2.0</a>, via <a href="https://commons.wikimedia.org/wiki/File:Guatemala_City_-_Guatemala_-_Zona_14_-_Skyline.jpg" target="_blank" rel="noopener">Wikimedia Commons</a>',
    blurb:
      'Since 1993 the London Group on Environmental-Economic Accounting has been the workshop of the field: an informal group of experts, mostly from national statistical offices, who advance the methods and implementation advice behind the System of Environmental-Economic Accounting (SEEA). Its 32nd meeting is in Guatemala City this September.',
    date: '2026-08-09',
    link: 'https://seea.un.org/en/about-seea/unceea-and-london-group/london-group-environmental-accounting',
    linkLabel: 'More on the London Group',
    body:[
      `The <a href="https://seea.un.org/en" target="_blank" rel="noopener">System of Environmental-Economic Accounting</a> (SEEA) did not arrive fully formed. Much of it was worked out in the <a href="https://seea.un.org/en/about-seea/unceea-and-london-group/london-group-environmental-accounting" target="_blank" rel="noopener">London Group on Environmental-Economic Accounting</a>, established in 1993 and first convened in London in 1994. It is an informal, voluntary group of experts, drawn mainly from national statistical offices and international organisations, that meets each year to advance methodological research and develop implementation advice for the SEEA. Its work fed into the <a href="https://seea.un.org/en/methodology/seea-central-framework" target="_blank" rel="noopener">SEEA Central Framework</a> and <a href="https://seea.un.org/en/methodology/ecosystem-accounting" target="_blank" rel="noopener">SEEA Ecosystem Accounting</a>. The London Group is currently chaired by Sven Kaumanns of the Federal Statistical Office of Germany. In September it holds its <a href="https://seea.un.org/en/events/london-group-environmental-economic-accounting-32nd-meeting" target="_blank" rel="noopener">32nd meeting in Guatemala City</a>, hosted by the Bank of Guatemala.`,
      `The London Group's work currently centres on updating the <a href="https://seea.un.org/en/update-seea-central-framework" target="_blank" rel="noopener">SEEA Central Framework itself</a>, which Carl Obst, editor of the revision, outlined at the Society of Natural Capital Accounting (SoNCA) <a href="https://youtu.be/CbehJIHV0Dk" target="_blank" rel="noopener">launch on 18 August 2026</a>. First adopted in 2012, it is being revised to keep pace with new demands, including climate change, the circular economy and biodiversity, and to stay consistent with the 2025 revision of the <a href="https://unstats.un.org/unsd/nationalaccount/sna2025.asp" target="_blank" rel="noopener">System of National Accounts</a> (SNA). Much of the <a href="https://seea.un.org/en/events/london-group-environmental-accounting-31st-meeting" target="_blank" rel="noopener">London Group's 31st meeting, held in Tallinn</a> in September 2025, was given over to this update, and it will again take up most of the time of the 32nd meeting in Guatemala. This is where the detail of the SEEA is debated: how carbon and other emissions are recorded, how water and other assets are valued, how environmental taxes, subsidies and expenditures are classified, and how all of it lines up with the measures of the economy. Those debates reach well beyond the statistical offices. Whoever compiles or uses natural capital accounts, whether in business, finance, consultancy, government or research, will be working with the concepts debated and practices considered by the London Group. Following its deliberations is how practitioners across the field can keep up with what is coming and, in time, help shape it.`,
      `SoNCA is not part of this standards machinery, which is governed by the <a href="https://seea.un.org/en/about-seea/unceea-and-london-group/un-committee-experts-environmental-economic-accounting-unceea" target="_blank" rel="noopener">United Nations Committee of Experts on Environmental-Economic Accounting</a> (UNCEEA), but many of our members are the practitioners who do this work. Raising awareness of the London Group's deliberations is part of the broader exchange of ideas and experience that SoNCA exists to support.`,
    ],
  },
];
