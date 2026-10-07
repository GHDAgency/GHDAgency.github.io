// Search and AI-answer (GEO) metadata for the Liquid Metal site: one place for titles, descriptions and
// structured data. Facts here must match the site copy and the footer (phone, email, address, socials).
import { faq, siteFooter } from './copy';

export const ORIGIN = 'https://ghdagency.ai';

export const pageMeta: Record<string, { title: string; description: string; path: string; index?: boolean }> = {
  home: {
    title: 'GHD Agency | Wake the Revenue Sleeping in Your Business',
    description:
      'GHD Agency finds the revenue sleeping inside your business, builds the systems that capture it, and trains your team to run them. Start with a complimentary session.',
    path: '/',
  },
  services: {
    title: 'Services | Built Around Your Business, Run With Your Team | GHD Agency',
    description:
      'Revenue mapping, response audits, custom systems, CRM and pipeline, follow-up, and team training. Everything your growth engine runs on, built around your business.',
    path: '/services/',
  },
  solutions: {
    title: 'Solutions | Speed-to-Lead, Follow-Up and Reactivation | GHD Agency',
    description:
      'Speed-to-lead, multi-channel follow-up, database reactivation, live call routing and reputation management for dealerships, vision care, aesthetics and home services.',
    path: '/solutions/',
  },
  about: {
    title: 'About | Giant Seekers, Founded by Rich Diaz | GHD Agency',
    description:
      'GHD Agency goes after the sleeping capital locked inside a business. Founded by Rich Diaz to build revenue engines owners control and give them their time back.',
    path: '/about/',
  },
  apply: {
    title: 'Grow My Revenue | Book Your Complimentary Session | GHD Agency',
    description:
      'Tell us about your business and pick a time. Your complimentary Vidian Method session shows where revenue is slipping away.',
    path: '/apply/',
  },
  confirm: {
    title: 'Confirm Your Session | GHD Agency',
    description: 'Confirm your held time with GHD Agency.',
    path: '/confirm/',
    index: false,
  },
  'terms-and-conditions': { title: 'Terms & Conditions | GHD Agency', description: 'Terms and conditions for using ghdagency.ai and GHD Agency services.', path: '/terms-and-conditions/' },
  'privacy-policy': { title: 'Privacy Policy | GHD Agency', description: 'How GHD Agency collects, uses and protects personal information.', path: '/privacy-policy/' },
  'cookie-policy': { title: 'Cookie Policy | GHD Agency', description: 'How GHD Agency uses cookies and similar technologies.', path: '/cookie-policy/' },
  'accessibility-statement': { title: 'Accessibility Statement | GHD Agency', description: 'GHD Agency is working toward WCAG 2.1 AA. Read our accessibility statement and how to reach us.', path: '/accessibility-statement/' },
};

const sameAs = siteFooter.social.map((s) => s.href);

const organization = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${ORIGIN}/#organization`,
  name: 'GHD Agency',
  alternateName: 'GHD Agency.ai',
  legalName: 'Greatest Home Decor LLC',
  url: ORIGIN,
  logo: `${ORIGIN}/media/ghd-logo-end.webp`,
  image: `${ORIGIN}/og-image.jpg`,
  description:
    'GHD Agency finds the revenue sleeping inside a business, builds the systems that capture it, and trains the team to run them.',
  slogan: 'We answer with results.',
  email: siteFooter.email,
  telephone: '+1-725-241-0571',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1672 Sabatini Dr',
    addressLocality: 'Henderson',
    addressRegion: 'NV',
    postalCode: '89052',
    addressCountry: 'US',
  },
  areaServed: { '@type': 'Country', name: 'United States' },
  founder: { '@type': 'Person', name: 'Rich Diaz', jobTitle: 'Founder' },
  sameAs,
  knowsAbout: [
    'Revenue recovery',
    'Speed to lead',
    'Database reactivation',
    'CRM and pipeline systems',
    'Automotive dealership marketing',
    'Optometry and vision care marketing',
    'Elective aesthetics marketing',
    'Home services marketing',
  ],
  makesOffer: [
    { '@type': 'Offer', name: 'Vidian Method session', description: 'Complimentary one-on-one session that shows where opportunities are being missed and what it is costing, measured in time and dollars.', price: '0', priceCurrency: 'USD' },
    { '@type': 'Offer', name: 'The Prince Charming pilot', description: 'A two-week pilot test that pressure tests outcomes before moving forward.' },
    { '@type': 'Offer', name: 'The Build', description: 'A custom revenue system for your business with the data analytics to prove results.', priceSpecification: { '@type': 'PriceSpecification', minPrice: '3000', priceCurrency: 'USD' } },
  ],
};

const website = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${ORIGIN}/#website`,
  url: ORIGIN,
  name: 'GHD Agency',
  publisher: { '@id': `${ORIGIN}/#organization` },
};

export function jsonLdFor(page: string): object[] {
  const out: object[] = [organization, website];
  const meta = pageMeta[page];
  if (page === 'services') {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    });
  }
  if (page === 'about') {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      url: `${ORIGIN}/about/`,
      mainEntity: { '@type': 'Person', name: 'Rich Diaz', jobTitle: 'Founder, GHD Agency', worksFor: { '@id': `${ORIGIN}/#organization` } },
    });
  }
  if (page !== 'home' && meta) {
    out.push({
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${ORIGIN}/` },
        { '@type': 'ListItem', position: 2, name: meta.title.split('|')[0].trim(), item: `${ORIGIN}${meta.path}` },
      ],
    });
  }
  return out;
}
