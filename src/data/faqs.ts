export const homeFaqs = [
  {
    q: 'What kind of work does B&M Property Construction Services do?',
    a: 'Most of our work is residential remodeling and repairs: kitchen remodels, bathroom remodels, flooring, drywall repair, interior painting, carpentry and trim, and general home repairs. We also do commercial interior work: metal stud framing, drywall finishing, and repairs and maintenance for offices and retail spaces. We do not build new homes or buildings.',
  },
  {
    q: 'What areas do you serve?',
    a: 'We are based in Titusville and work throughout Brevard County, including Mims, Port St. John, Cocoa, Merritt Island and Rockledge. We also travel to Oviedo, Winter Park, Orlando and Clermont for remodeling projects.',
  },
  {
    q: 'Are you licensed and insured?',
    a: 'Yes. B&M Property Construction Services is a licensed and insured Florida contractor. For specialty work like electrical or plumbing that requires a separate license, we coordinate with licensed trade partners and handle permits where they are required.',
  },
  {
    q: 'Do you give free estimates?',
    a: 'Yes. We come out, look at the space, talk through what you want and send a written quote. There is no charge for the estimate.',
  },
  {
    q: 'Do you take small jobs?',
    a: 'Yes. Along with full remodels, we handle repair lists and small jobs. Grouping several items into one visit is usually the most cost-effective way to get them done.',
  },
  {
    q: 'How do I get started?',
    a: 'Call (321) 890-7839 or fill out the estimate form with a few details about the job. We will get back to you to set up a time to see the space.',
  },
];

export const commercialFaqs = [
  {
    q: 'What commercial work do you do?',
    a: 'Interior work in existing buildings and tenant spaces: metal stud framing, drywall hanging and finishing, and repairs and maintenance such as ceiling tiles, doors and hardware, drywall patches and punch lists.',
  },
  {
    q: 'Do you work as a subcontractor for general contractors?',
    a: 'Yes. We frame and finish on tenant improvements and remodels for general contractors, working from your drawings and schedule.',
  },
  {
    q: 'Do you do new commercial construction?',
    a: 'No. We do not take on ground-up construction or structural work. We handle interior framing, finishing and repairs inside existing buildings.',
  },
  {
    q: 'Are you licensed and insured for commercial jobs?',
    a: 'Yes. We are a licensed and insured Florida contractor and can provide a certificate of insurance before work starts.',
  },
  {
    q: 'What areas do you cover for commercial work?',
    a: 'Titusville and all of Brevard County, plus the Orlando area including Oviedo, Winter Park and Clermont.',
  },
];

export const faqSchema =(items: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
});

export const breadcrumbSchema = (base: string, trail: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: trail.map((t, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: t.name,
    item: new URL(t.path, base).href,
  })),
});
