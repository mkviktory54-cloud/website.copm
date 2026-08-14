// Central brand + content data for HALVOR.
// Add services and packages here to expand the site.

export const COMPANY = {
  name: 'HALVOR',
  tagline: 'Precision Exterior Care',
  phone: '(720) 827-7769',
  phoneHref: 'tel:+17208277769',
  email: 'marcus@halvorco.com',
  emailHref: 'mailto:marcus@halvorco.com',
  serviceArea: 'Greater Denver Metro & Colorado Front Range',
  serviceCities: ['Commerce City', 'Denver', 'Aurora', 'Surrounding Areas'],
  mapQuery: 'Denver, CO',
  mapEmbed:
    'https://maps.google.com/maps?q=Denver%2C%20CO&t=&z=10&ie=UTF8&iwloc=&output=embed',
  social: {
    instagram: 'https://instagram.com',
    facebook: 'https://facebook.com',
    linkedin: 'https://linkedin.com',
  },
};

export const NAV_LINKS = [
  { label: 'Services', to: '/services' },
  { label: 'Work', to: '/gallery' },
  { label: 'About', to: '/about' },
  { label: 'Contact', to: '/contact' },
];

export const SERVICES = [
  {
    id: 'pressure-washing',
    index: '01',
    name: 'Pressure Washing',
    short:
      'Restoration of driveways, siding, decks, and hardscapes to their original finish.',
    items: [
      'Driveways',
      'Sidewalks',
      'Patios',
      'Exterior surfaces',
      'Residential exterior cleaning',
    ],
    description:
      'Our pressure washing service removes years of embedded grime, organic growth, and staining from exterior surfaces. We calibrate pressure and temperature to each material — concrete, brick, wood, vinyl, and stone — protecting the substrate while restoring its original color and texture.',
    benefits: [
      'Material-calibrated pressure prevents surface damage',
      'Removes mold, mildew, algae, and oxidation',
      'Restores curb appeal and property value',
      'Eco-conscious cleaning agents, biodegradable',
    ],
    specs: [
      {
        label: 'Surfaces',
        value: 'Concrete, Brick, Stone, Vinyl, Wood',
      },
      {
        label: 'Method',
        value: 'Soft-wash & calibrated high-pressure',
      },
      {
        label: 'Avg. Duration',
        value: '2–6 hours',
      },
      {
        label: 'Warranty',
        value: 'Satisfaction guaranteed',
      },
    ],
    faq: [
      {
        q: 'How long does the service take?',
        a: 'Most residential pressure washing projects take 2–6 hours depending on the size of the property and the number of surfaces being cleaned. We provide a precise time estimate with your quote.',
      },
      {
        q: 'What equipment do you use?',
        a: 'Commercial-grade pressure washers with adjustable PSI, dedicated surface cleaners for flatwork, low-pressure soft-wash systems for delicate materials, and biodegradable cleaning agents — all calibrated to each surface to prevent damage.',
      },
      {
        q: 'Will high pressure damage my surfaces?',
        a: 'No. We assess each surface and calibrate pressure accordingly. For delicate materials like siding and roofing we use a low-pressure soft-wash method combined with specialized detergents.',
      },
      {
        q: 'How often should I schedule pressure washing?',
        a: 'Most homes benefit from an annual cleaning. Properties surrounded by trees or in humid climates may need service every 6–9 months.',
      },
      {
        q: 'Are your cleaning agents safe for plants and pets?',
        a: 'Yes. We use biodegradable, eco-conscious solutions and pre-rinse all landscaping to protect your plants.',
      },
    ],
  },
  {
    id: 'window-cleaning',
    index: '02',
    name: 'Window Cleaning',
    short:
      'Streak-free clarity for residential glass using pure-water technology.',
    items: ['Exterior windows', 'Residential windows', 'Glass doors'],
    description:
      'Our window cleaning service delivers optical clarity without streaks or residue. We use a pure-water filtration system that leaves glass spotless as it dries, combined with traditional squeegee technique for interior panes, frames, and sills.',
    benefits: [
      'Pure-water technology leaves zero residue',
      'Streak-free, spotless finish guaranteed',
      'Frames, sills, and tracks detailed',
      'Safe for all glass types and coatings',
    ],
    specs: [
      {
        label: 'Surfaces',
        value: 'Exterior & interior glass, screens, frames',
      },
      {
        label: 'Method',
        value: 'Pure-water fed pole + squeegee',
      },
      {
        label: 'Avg. Duration',
        value: '1–4 hours',
      },
      {
        label: 'Warranty',
        value: '14-day streak-free promise',
      },
    ],
    faq: [
      {
        q: 'How long does the service take?',
        a: 'A typical window cleaning takes 1–4 hours depending on the number of windows, their accessibility, and whether interior panes are included. We confirm an exact timeframe with your quote.',
      },
      {
        q: 'What equipment do you use?',
        a: 'A pure-water fed-pole system with deionization filtration for exterior glass, professional squeegees and applicators for interior panes, and detailing tools for frames, sills, and tracks — no harsh chemicals required.',
      },
      {
        q: 'What is pure-water cleaning?',
        a: 'Water is passed through a deionization filter that removes all minerals. When applied to glass and allowed to dry naturally, it leaves no spots or streaks — eliminating the need for chemical cleaners on exterior panes.',
      },
      {
        q: 'Do you clean screens and tracks too?',
        a: 'Yes. Every window cleaning includes screens, frames, sills, and tracks, fully detailed.',
      },
      {
        q: 'How long will the windows stay clean?',
        a: 'Typically 3–6 months depending on exposure to pollen, rain, and nearby trees. We offer maintenance plans for year-round clarity.',
      },
    ],
  },
];

export const PACKAGES = [
  {
    id: 'curb-appeal',
    name: 'Curb Appeal',
    price: '$275',
    description:
      'A complete exterior refresh focused on the areas that make the biggest difference.',
    includes: [
      'House exterior wash',
      'Driveway cleaning',
      'Sidewalk cleaning',
    ],
  },
  {
    id: 'driveway-cleaning',
    name: 'Driveway Cleaning',
    price: '$75–$175',
    description:
      'Professional driveway cleaning to restore the appearance of your concrete.',
    includes: ['Driveway cleaning'],
  },
  {
    id: 'home-windows',
    name: 'Home & Windows',
    price: '$250',
    description:
      'A convenient combination of home exterior care and window cleaning.',
    includes: [
      'Home exterior care',
      'Window cleaning',
    ],
  },
  {
    id: 'house-exterior-wash',
    name: 'House Exterior Wash',
    price: '$150–$500',
    description:
      'A professional exterior wash designed to restore your home’s appearance.',
    includes: ['House exterior wash'],
  },
  {
    id: 'house-refresh',
    name: 'House Refresh',
    price: '$225',
    description:
      'A simple exterior refresh combining your home and driveway.',
    includes: [
      'House exterior wash',
      'Driveway cleaning',
    ],
  },
  {
    id: 'the-halvor',
    name: 'The Halvor',
    price: '$350',
    popular: true,
    description:
      'Our most popular complete exterior package.',
    includes: [
      'House exterior wash',
      'Driveway cleaning',
      'Window cleaning',
    ],
  },
  {
    id: 'the-halvor-signature',
    name: 'The Halvor Signature',
    price: '$500',
    featured: true,
    description:
      'The complete Halvor experience with additional surface and patio cleaning.',
    includes: [
      'Everything in The Halvor',
      'Additional exterior surfaces',
      'Patio cleaning',
    ],
  },
  {
    id: 'window-cleaning',
    name: 'Window Cleaning',
    price: '$10/window',
    description:
      'Professional window cleaning for clear, spotless glass.',
    includes: ['Window cleaning'],
  },
];

// Before & after project photos.
export const PROJECTS = [];

// Customer reviews.
export const REVIEWS = [];