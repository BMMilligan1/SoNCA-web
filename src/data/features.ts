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
 *   slug, title, author, image, imageAlt, blurb, date are required.
 *   slug        PERMANENT web address of the feature: /features/<slug>/. Lower case,
 *               words joined by hyphens. Never change it once published, because
 *               posts on LinkedIn and elsewhere link to it. (Editing the title is fine.)
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
  slug: string;
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

/** Permanent address of a feature page. */
export const featureUrl = (f: Pick<Feature, 'slug'>) => `/features/${f.slug}/`;

/** Features, newest first. */
export const sortedFeatures = (): Feature[] =>
  [...features].sort((a, b) => +new Date(b.date) - +new Date(a.date));

export const features: Feature[] = [
  {
    slug: 'one-profession-many-frameworks',
    title: 'One profession, many frameworks: reflections on our first seminar',
    author: 'Michael Vardon, President, Society of Natural Capital Accounting',
    image: '/features/one-profession-many-frameworks-2026.jpg',
    imageAlt: 'The natural capital accounting landscape: national statistics, standards for organisations, organisation and site accounts, disclosure, tools and research networks, all built on a shared foundation of stocks and flows and the SEEA',
    blurb:
      'Our first seminar compared the natural capital accounting frameworks used in the private sector with each other and with the SEEA. Frameworks differ on assets, condition, liabilities and boundaries, but they can be built on the same concepts. The recording and slides are now online.',
    date: '2026-10-26',
    link: 'https://youtu.be/8DXpjk9p1qk',
    linkLabel: 'Watch the seminar recording',
    body: [
      `The <a href="https://youtu.be/8DXpjk9p1qk" target="_blank" rel="noopener">recording</a> and <a href="/downloads/SoNCA-seminar-slides-Comparing-NCA-frameworks-21-October-2026.pdf" target="_blank" rel="noopener">slides</a> from the Society’s first seminar, <em>Comparing natural capital accounting frameworks: what does the profession need to understand?</em>, are now on our website.`,
      `Nearly 100 people registered. The seminar was built around two questions. How do the natural capital accounting (NCA) frameworks used in the private sector compare with each other and with the <a href="https://seea.un.org/" target="_blank" rel="noopener">System of Environmental-Economic Accounting</a> (SEEA)? What would it take to make them comparable, and where can corporate practice and the SEEA learn from each other?`,
      `<h3>What we heard</h3>`,
      `John Finisdore and Joël Houdet drew on their earlier work with colleagues, including a review of four corporate case studies against criteria they developed. The case studies differed in how ecosystem assets were defined (land use classes in some, ecosystem types in others), whether condition was measured against a reference state, how gains and losses in condition were tracked, and where the assessment boundary was drawn. They found that these differences make it hard to compare NCA reports across organisations.`,
      `The definition and recording of liabilities is also not settled. One approach treats the gap between current and reference condition as a liability. Another limits a liability to being a legal or constructive obligation, such as a public commitment to be nature positive. Nonetheless, both approaches depend on attributing change to its cause, for example, the company’s actions or a wildfire. Carl Obst noted that the national accounts and SEEA communities are working through the same question in their discussion of distinguishing between depletion, degradation and other changes in volume.`,
      `Carter Ingram pointed to the benefits of spatially explicit SEEA accounts in providing a shared information base for companies operating in the same landscape, but possibly at different scales. Several businesses drawing on one catchment for water, or exposed to the same wildfire risk, would benefit from working from the same accounts.`,
      `Greg Smith and Tony O’Grady of CSIRO, whose work was among the studies John and Joël compared, also joined the discussion. Greg explained that CSIRO frames corporate accounts around the International Accounting Standards Board’s concept of control, which sets the boundary of the accounts. It proposes an ecosystem change statement to attribute changes in natural capital to their causes, so that change caused by a company’s own activities could create a liability to restore. Carl noted that much of what is called corporate NCA is in fact impact accounting. Tony reminded us that most companies do not directly control natural capital assets, and that existing examples are mostly about disclosure. What we lack are examples of information being used for internal management decisions. Until these emerge, many businesses will see NCA as a compliance cost rather than a source of information for decisions.`,
      `<h3>One profession</h3>`,
      `A key question for the Society is how to move the profession forward when entry points to NCA vary so widely. As John outlined, NCA has many definitions and interpretations. Carl suggested that accounting is, in the first instance, the organisation of information. If the information is organised consistently, it can then be analysed and presented in different ways for different purposes. That may be for a company’s annual report, a bank’s loan portfolio, a national budget, an environmental market or a catchment management plan.`,
      `These different outputs will serve different users and will not be identical, but they can be built on the same concepts of stocks, flows, extent and condition. Consistency in concepts will allow practitioners to increasingly move between the different outputs. That is what we mean by one profession with many applications. How far corporate standards could draw on the System of National Accounts and the SEEA is an open question and one worth investigating.`,
      `The Society does not take a position on any framework or standard. Our role is to help practitioners understand them and build a common NCA language.`,
      `<h3>What comes next</h3>`,
      `The discussion raised more topics than one seminar could cover, including:`,
      `<ul><li>a worked comparison applying each framework to the same case study information, as Greg suggested</li><li>how NCA information is used in management decisions, not only disclosure</li><li>the relationship between impact accounting and asset-based accounting</li><li>the International Sustainability Standards Board’s exposure draft on nature-related disclosures (<a href="https://www.ifrs.org/projects/work-plan/biodiversity-ecosystems-and-ecosystem-services/" target="_blank" rel="noopener">IFRS Sustainability Disclosure Practice Statement 1</a>), open for comment until 19 February 2027</li></ul>`,
      `We also received an audience question on valuation that we did not have time to address. It is a big topic, and one we plan to come back to in a future seminar.`,
      `If you would like to take up any of these topics, or something else, please propose a seminar or working group using the <a href="/events/#propose">forms on our website</a>. Anyone can propose one, and the committee considers every proposal. We aim to hold a seminar every two months.`,
      `If you know of a development in the field that we should share with members, please send a note to <a href="mailto:inquiries@naturalcapitalaccounting.org">inquiries@naturalcapitalaccounting.org</a>.`,
      `And if you have not yet joined the Society, please <a href="/membership/">do</a>. Nothing happens without members.`,
      `Thank you very much to John, Joël, Carter and Carl, and to Greg Smith and Tony O’Grady of CSIRO for their comments, and to everyone who joined us.`,
      `<h3>Further reading</h3>`,
      `To read more of the work our presenters and panellists discussed see:`,
      `Finisdore, J., et al. (2022) <em>Time to take stock, version 2.1: improving corporate natural capital accounting with asset registers of stocks, ecological equivalency, double entry bookkeeping and statements of position and performance</em>. Working paper. Capitals Coalition. Available at: <a href="https://capitalscoalition.org/wp-content/uploads/2026/09/Time-to-Take-Stock-2.1.pdf" target="_blank" rel="noopener">https://capitalscoalition.org/wp-content/uploads/2026/09/Time-to-Take-Stock-2.1.pdf</a>`,
      `Houdet, J. (2024) <em>Unpacking corporate natural capital accounting (BS 8632, BD Protocol and UN SEEA): comparative analysis of case studies</em>. The Biodiversity Footprint Company. Available at: <a href="https://ieeb.fundacion-biodiversidad.es/recursos/unpacking-corporate-natural-capital-accounting-bs-8632-bd-protocol-un-seea-comparative/" target="_blank" rel="noopener">https://ieeb.fundacion-biodiversidad.es/recursos/unpacking-corporate-natural-capital-accounting-bs-8632-bd-protocol-un-seea-comparative/</a>`,
      `Ingram, J.C., et al. (2024) ‘Leveraging natural capital accounting to support businesses with nature-related risk assessments and disclosures’, <em>Philosophical Transactions of the Royal Society B</em>, 379(1903), 20220328. Available at: <a href="https://doi.org/10.1098/rstb.2022.0328" target="_blank" rel="noopener">https://doi.org/10.1098/rstb.2022.0328</a>`,
      `Smith, G., et al. (2026) ‘Nature on the balance sheet: Accountability for Nature Positive’, <em>Methods in Ecology and Evolution</em>, 17, pp. 1418–1433. Available at: <a href="https://doi.org/10.1111/2041-210x.70193" target="_blank" rel="noopener">https://doi.org/10.1111/2041-210x.70193</a>`,
    ],
  },
  {
    slug: 'comparing-nca-frameworks',
    title: 'Comparing natural capital accounting frameworks',
    author: 'John Finisdore, Sustainable Flows',
    image: '/features/comparing-nca-frameworks-seminar-2026.jpg',
    imageAlt: 'Banner for the online seminar Comparing natural capital accounting frameworks, 21 October 2026',
    blurb:
      'Corporations are turning to natural capital accounting to track the state of nature, the ecosystem services they depend on and their value. Methods have multiplied, from ISO 14054 to the SEEA. Which approaches work, and how can they learn from each other? Join our first seminar on 21 October (Australian time).',
    date: '2026-10-01',
    link: 'https://youtu.be/8DXpjk9p1qk',
    linkLabel: 'Watch the seminar recording',
    body: [
      `With rising nature-related risks, corporations are increasingly seeking more effective ways to track the state of nature, flows of ecosystem services and their monetary values.`,
      `Natural capital accounting (NCA) helps fill these needs by applying accounting concepts to an organisation’s nature data. Conventional environmental data often focuses on annual flows—such as greenhouse gas emissions or water consumption. NCA includes the stocks of natural capital, their condition, and how these change over time. It also includes the flows of ecosystem services on which people and the economy depend. For an organisation, NCA seeks to determine whether it is maintaining, degrading or enhancing the natural capital it impacts or depends upon.`,
      `The United Nations (UN) System of Environmental-Economic Accounting (SEEA) set out NCA concepts for countries, and its Central Framework was adopted as an international statistical standard in 2012. For organisations, an early development was the <a href="https://assets.publishing.service.gov.uk/media/5a80dfe640f0b62305b8da2f/ncc-research-cnca-summary.pdf" target="_blank" rel="noopener">2015 UK Natural Capital Committee report</a> that presented a framework for corporations to “document [natural capital] assets and liabilities in a balance sheet format that extends traditional financial reporting.” Corporate methods have grown, boosted by <a href="https://seea.un.org/en/methodology/ecosystem-accounting" target="_blank" rel="noopener">SEEA Ecosystem Accounting (SEEA EA)</a>, which the UN adopted in 2021. The SEEA EA presents stock, flow and monetary accounts and uses established accounting concepts, such as accounting periods and asset accounts that reconcile opening and closing stocks, adapted to the distinctive characteristics of ecosystems. It can be applied at any spatial scale, from a single site to a whole country.`,
      `The corporate developments include the <a href="https://nbbnbdp.org/wp-content/uploads/2022/05/bdp_final_080321.pdf" target="_blank" rel="noopener">Biological Diversity Protocol</a>, which focused on measuring the stocks of natural capital; <a href="https://www.iso.org/standard/14054" target="_blank" rel="noopener">ISO 14054</a>, which drew heavily on the 2015 UK report and <a href="https://standardsdevelopment.bsigroup.com/projects/9020-04869" target="_blank" rel="noopener">BS 8632</a>; <a href="https://www.csiro.au/en/research/natural-environment/natural-resources/natural-capital-accounting/handbook" target="_blank" rel="noopener">CSIRO’s Natural Capital Handbook</a>, which adds to the discussion and was recently complemented by <a href="https://besjournals.onlinelibrary.wiley.com/doi/full/10.1111/2041-210X.70193" target="_blank" rel="noopener">Smith et al. (2026)</a>; and <a href="https://capitalscoalition.org/publication/time-to-take-stock/" target="_blank" rel="noopener">Time to Take Stock</a>, which proposed a definition of NCA for corporations and described its components.`,
      `This thinking spurred activity worldwide. Companies including <a href="https://www.bhp.com/beenup" target="_blank" rel="noopener">BHP</a>, <a href="https://nbbnbdp.org/wp-content/uploads/2022/09/Sibanye-Stillwater-Biodiversity-Footprint-May-2022.pdf" target="_blank" rel="noopener">Sibanye-Stillwater</a>, <a href="https://forico.com.au/natural-capital" target="_blank" rel="noopener">Forico</a>, and <a href="https://www.olamgroup.com/content/dam/olamgroup/investor-relations/ir-library/annual-reports/annual-reports-pdfs/olam-annual-report-fy19_3-in-1.pdf" target="_blank" rel="noopener">Olam</a> have explored different accounting methods and presentations as their peers assess NCA’s usefulness. Other firms use NCA techniques for specific needs, sometimes without realising their origin and without building full accounts. For example, NCA techniques can measure progress towards no net loss of biodiversity.`,
      `Accounts and natural capital data at large need greater consistency, comparability and ultimately assurance for both internal use and external market credibility. In response, the <a href="https://www.fordham.edu/gabelli-school-of-business/industry-collaborations/responsible-business-center/natural-capital-accounting-principles--naasb/" target="_blank" rel="noopener">Natural Asset Accounting Standards Board (NAASB)</a> is developing standards for measuring, reporting, and assuring natural capital value, which it describes as comparable to US Generally Accepted Accounting Principles (GAAP) or International Financial Reporting Standards (IFRS).`,
      `But the development and uptake of NCA by corporations is far from complete. Several initiatives are working on this. <a href="https://is-fc.com/" target="_blank" rel="noopener">The Forestry Natural Capital Project</a>, led by the International Sustainable Forestry Coalition with the Capitals Coalition, the Taskforce on Nature-related Financial Disclosures (TNFD) and others, is working with more than 20 forestry companies, from Weyerhaeuser to New Forests to Suzano. It aims to expand the use of NCA by the forestry sector and advance best practices. <a href="https://www.accountingfornature.org/framework" target="_blank" rel="noopener">Accounting for Nature</a> is building condition rating systems for ecosystems around the globe. <a href="https://a-track.info/a-track/natural-capital-assessment-and-accounting" target="_blank" rel="noopener">A-Track</a>, an EU-funded initiative, is mainstreaming natural capital assessment and accounting within businesses. Its efforts range from awareness to training to method development. It is also making concerted efforts to link NCA to corporate finance of nature and life cycle assessment practices.`,
      `The challenge is no longer simply to demonstrate that corporations can produce natural capital accounts. It is to determine which approaches work, where greater consistency is needed, and how corporate approaches can learn from—and contribute to—SEEA EA and the wider natural capital accounting community. This is precisely the kind of exchange the Society of Natural Capital Accounting (SoNCA) was established to support.`,
      `<strong>Seminar: <em>Comparing natural capital accounting frameworks: what does the profession need to understand?</em></strong> Wednesday 21 October 2026, 8–9 am AEDT (Canberra and Sydney); 5–6 pm EDT on Tuesday 20 October (New York and Washington DC); 11 pm–midnight CEST (central Europe). <a href="https://events.humanitix.com/sonca-comparing-nca-frameworks" target="_blank" rel="noopener">Register here</a> (free); your link to join will be in your confirmation email. To join the Society, see <a href="/membership/">membership</a>.`,
      `<em>Disclosure: John Finisdore is a member of the Natural Asset Accounting Standards Board and of the A-Track advisory committee. The views expressed are his own and not necessarily those of the Society.</em>`,
    ],
  },
  {
    slug: 'society-launches-what-you-asked-for',
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
    slug: 'meet-the-london-group',
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
