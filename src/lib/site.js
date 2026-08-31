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
      'Professional exterior cleaning for driveways, concrete, siding, patios, and other exterior surfaces.',
    items: [
      'Driveways',
      'Sidewalks',
      'Patios',
      'Concrete surfaces',
      'Exterior surfaces',
      'Residential exterior cleaning',
    ],
    description:
      'Our pressure washing service removes years of embedded grime, organic growth, and staining from exterior surfaces. We calibrate pressure and cleaning methods to each material — concrete, brick, wood, vinyl, and stone — protecting the surface while restoring its original appearance.',
    benefits: [
      'Material-calibrated cleaning helps prevent surface damage',
      'Removes dirt, grime, mold, mildew, algae, and staining',
      'Restores curb appeal and improves the appearance of your property',
      'Professional equipment and cleaning solutions',
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
        a: 'We use professional pressure washing equipment, surface cleaners for flatwork, low-pressure soft-wash systems for delicate materials, and professional cleaning solutions. Each method is selected based on the surface being cleaned.',
      },
      {
        q: 'Will pressure washing damage my surfaces?',
        a: 'We assess each surface before cleaning and adjust the pressure and cleaning method accordingly. Delicate materials are cleaned using lower-pressure methods to help protect the surface.',
      },
      {
        q: 'How often should I schedule pressure washing?',
        a: 'Most properties benefit from an annual exterior cleaning. Properties exposed to heavy dirt, trees, or organic growth may benefit from more frequent service.',
      },
      {
        q: 'Are your cleaning agents safe for plants and pets?',
        a: 'We use professional cleaning solutions and take precautions around landscaping and other sensitive areas. Plants and surrounding areas are rinsed and protected throughout the cleaning process.',
      },
    ],
  },
];

export const PACKAGES = [
  {
    id: 'driveway-cleaning',
    name: 'Driveway Cleaning',
    price: '$75–$175',
    description:
      'Professional driveway cleaning designed to restore the appearance of your concrete and improve curb appeal.',
    includes: ['Driveway cleaning'],
  },
  {
    id: 'house-exterior-wash',
    name: 'House Exterior Wash',
    price: '$150–$500',
    description:
      'A professional exterior wash designed to remove dirt, grime, and organic buildup from your home.',
    includes: ['House exterior wash'],
  },
  {
    id: 'house-refresh',
    name: 'House Refresh',
    price: '$225',
    description:
      'A simple exterior refresh combining your home exterior and driveway for a cleaner overall appearance.',
    includes: [
      'House exterior wash',
      'Driveway cleaning',
    ],
  },
  {
    id: 'curb-appeal',
    name: 'Curb Appeal',
    price: '$275',
    description:
      'A complete exterior refresh focused on the surfaces that make the biggest difference in your property’s appearance.',
    includes: [
      'House exterior wash',
      'Driveway cleaning',
      'Sidewalk cleaning',
    ],
  },
  {
    id: 'the-halvor',
    name: 'The Halvor',
    price: '$350',
    popular: true,
    description:
      'Our most popular complete exterior package, combining the core services needed for a noticeable property refresh.',
    includes: [
      'House exterior wash',
      'Driveway cleaning',
    ],
  },
  {
    id: 'the-halvor-signature',
    name: 'The Halvor Signature',
    price: '$500',
    featured: true,
    description:
      'The complete HALVOR experience with comprehensive exterior cleaning and additional surface care.',
    includes: [
      'Everything in The Halvor',
      'Additional exterior surfaces',
      'Patio cleaning',
    ],
  },
];

// Before & after project photos.
export const PROJECTS = [];

// Customer reviews.
export const REVIEWS = [];
