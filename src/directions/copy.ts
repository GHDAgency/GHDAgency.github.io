// Single source of truth for the /v1 to /v5 design directions.
// Every string here is final copy: do not rewrite, shorten or add to it.

/** The one primary CTA. Change the label (and where it points) here and all five directions update. */
export const CTA_LABEL = 'Grow My Revenue';
export const CTA_HREF = '/v4/apply/';
/** One line set directly under the CTA button. */
export const CTA_SUBLINE = 'Start with one conversation.';

export const hero = {
  eyebrow: 'Ready to Scale?',
  headline: "We'll Build the Engine That Gets You There.",
  subhead: [
    'We find the opportunities in your business,',
    'build the systems that capture them,',
    'and make sure your team can run them.',
  ],
};

/** V4: the who-we-serve line, now part of the hero statement (no colon, sits above the logo band). */
export const heroServes = 'From growing companies to established market leaders';

export const logoRow = {
  label: 'From growing companies to established market leaders:',
};

export const problem = [
  'A new AI tool.',
  'One more demo.',
  'Promises that this one changes everything.',
  'You know you need it.',
  'Customers to serve, zero spare hours.',
  'The team never adopts it.',
  'Not a single dollar to show for it.',
  'Nobody owns it.',
  'Where to start.',
  'Which tool.',
  'Will it make me money?',
];

export const how = {
  steps: [
    { n: '1', title: 'Find the opportunities' },
    { n: '2', title: 'Build the systems' },
    { n: '3', title: 'Make sure your team can run them' },
  ],
  partner: 'GHD, the growth partner that carries it with you.',
  result: 'We answer for the result.',
};

/**
 * Revised problem sequence (currently used by V4 only). One beat per screen; each beat is one or
 * more lines. The final beat is the GHD resolution, which moved here from How We Work.
 */
export const beats: { lines: string[]; finale?: boolean }[] = [
  { lines: ['You have a new AI tool.', 'Watched the demo.', 'Even attended the webinars.'] },
  { lines: ['You know you need it,', 'with zero time to spare.', 'It sits unused.'] },
  { lines: ['Do I have the right tool? Will it grow my revenue?'] },
  { lines: ['The Market Leaders are building with us.'] },
  // The GHD logo animation plays right before this beat.
  { lines: ['Your Growth Partner.', 'We answer with Results.'], finale: true },
];

/** V4: How We Work, reworked as Find → Fix → Grow (draft, pending approval). */
export const howV4 = {
  // Set on exactly three lines.
  intro: ['Somewhere between the first call and', 'the closed deal, customers slip away.', 'Quietly. Every day.'],
  // Same five steps, same wording, as the About page.
  steps: [
    { n: '1', title: 'Find the Sleeping Giant.', line: 'Uncover the revenue, capacity, or opportunity already inside the business.' },
    { n: '2', title: 'Map it with Vidian.', line: 'Find where time and revenue are slipping away, put numbers around the opportunity, and decide what is worth pursuing.' },
    { n: '3', title: 'Test it with Prince Charming.', line: 'Run a focused pilot to see if the opportunity is real before making a bigger commitment.' },
    { n: '4', title: 'Build the engine.', line: 'Custom-build the strategy, systems, workflows, AI, CRM, follow-up, and customer journeys needed to capture it.' },
    { n: '5', title: 'Train the team to run it.', line: 'Your people learn how to run the engine so the gains keep compounding without everything coming back to the owner.' },
  ],
  engagement: [
    { name: 'Find & Fix', line: 'a one-time deep dive and build.' },
    { name: 'Grow', line: 'a monthly partnership that keeps it improving as you scale.' },
  ],
};

/** Who we work with, in priority order (names only). Elective aesthetics = plastic surgery, injectables, med spa. */
export const industries = {
  label: 'Who we work with',
  items: ['Auto Dealerships', 'Optometry & Vision Care', 'Elective Aesthetics', 'Trades & Home Services'],
};

/** V4: final CTA (draft option A). */
export const finalCta = {
  headline: 'We choose to answer for the result.',
  sub: 'Start with one conversation. Find out what your business is already capable of.',
};

export const proof = {
  stats: [
    { value: 22309, prefix: '', label: 'Aged Buyers', money: false },
    { value: 588, prefix: '', label: 'In-Market Buyers', money: false },
    { value: 211680, prefix: '$', label: 'Recovered Gross*', money: true },
  ],
  footnote:
    '*Based on industry averages: 588 in-market buyers × 15% close rate × $2,400 avg front and back gross. Your numbers will vary.',
};

export const footer = {
  name: 'GHD Agency',
  email: 'connect@ghdagency.ai',
  copyright: '©2026',
};

export const fmt = (n: number) => n.toLocaleString('en-US');

// ---------------------------------------------------------------------------------------------
// Inner pages (Liquid Metal): Solutions, Services, About. Structure mirrors sparkmedia.ai
// (problem-first solutions, six service buckets, principles-led about), in GHD's voice.
// ---------------------------------------------------------------------------------------------

export const nav = [
  { label: 'Home', href: '/v4/' },
  { label: 'Services', href: '/v4/services/' },
  { label: 'Solutions', href: '/v4/solutions/' },
  { label: 'About', href: '/v4/about/' },
];
export const HOME_HREF = '/v4/';
export const EXPLORE = { label: 'Explore What We Do', href: '/v4/services/' };

export const solutionsPage = {
  eyebrow: 'Solutions',
  cta: 'Map my growth.',
  headline: '',
  sub: '',
  // Final copy from the owner: set verbatim.
  items: [
    {
      name: 'Speed-to-Lead & Autonomous Prospecting',
      problem: 'Loss of revenue due to slow response and inconsistent follow-up.',
      outcome: 'Instant engagement that secures the sale the moment an inquiry lands, capturing revenue while your competitors are trying to follow up.',
    },
    {
      name: 'Multi-Channel Follow-Up & Voice Conversion',
      problem: 'Inconsistent touchpoints and dropped communication leaving thousands of dollars sitting dormant.',
      outcome: 'Relentless, automated conversations, tailored dynamically in the voice of your business across text, email, voice, and chat, converting abandoned interest into closed deals.',
    },
    {
      name: 'Database Reactivation',
      problem: 'Historical inquiries sit locked away in a dormant CRM while you waste cash acquiring new traffic.',
      outcome: 'Prince Charming, automated reactivation that wakes up forgotten leads and converts them into immediate cash flow, without spending more on ads.',
    },
    {
      name: 'Live Call Routing & Mobile Operations',
      problem: "Trapped by tedious, repetitive screening tasks and manual touchpoints eating up the team's most valuable hours, slowing down progress.",
      outcome: 'Intelligent call routing answers questions, nurturing clients into warm transfers, maintaining a deeply personal, one-on-one response experience, while freeing you entirely from the daily operational grind.',
    },
    {
      name: 'Reputation Management & Authority',
      problem: 'Great customer experiences vanish unrecorded while occasional friction goes unaddressed, leaving your local reputation to chance, eroding trust and impacting growth.',
      outcome: 'Automated systems that capture, track and respond to high-energy positive reviews and resolve less-than-satisfied guest feedback to continuously sharpen the customer experience, developing unshakeable trust.',
    },
  ],
};

export const servicesPage = {
  eyebrow: 'Services',
  cta: 'Build my systems.',
  headline: 'Everything your growth engine runs on.',
  sub: 'Built around your business. Run with your team.',
  // Grouped by the three steps of How We Work, in order.
  groups: [
    {
      n: '1',
      title: 'Find the leaks',
      items: [
        { name: 'Revenue Mapping', line: 'Every step from first contact to closed deal, mapped.', includes: ['Customer journey', 'Lead sources', 'Handoffs', 'Drop-off points'] },
        { name: 'Response Audit', line: 'Where calls, forms and leads go unanswered.', includes: ['Call handling', 'Speed to lead', 'Follow-up gaps', 'No-shows'] },
        { name: 'Systems Review', line: 'What you pay for, and what actually gets used.', includes: ['Software & tools', 'CRM health', 'Data quality', 'Integrations'] },
      ],
    },
    {
      n: '2',
      title: 'Build the fix',
      items: [
        { name: 'Revenue Systems', line: 'Custom workflows and customer journeys, built for how you sell.', includes: ['Customer journeys', 'Workflows', 'Speed to lead', 'Follow-up'] },
        { name: 'CRM & Pipeline', line: 'Every deal in one place.', includes: ['Pipelines', 'Routing', 'Handoffs', 'Deal tracking'] },
        { name: 'AI Integration', line: 'Your tools, working as one system.', includes: ['AI agents & voice', 'Reactivation', 'Tool integration', 'Automations'] },
      ],
    },
    {
      n: '3',
      title: 'Grow it with your team',
      items: [
        { name: 'Training', line: 'Your people, confident running it.', includes: ['Hands-on training', 'Playbooks', 'New-hire onboarding'] },
        { name: 'Websites & Paid Media', line: 'Traffic that turns into conversations.', includes: ['Landing pages', 'Google Ads', 'Meta Ads', 'Tracking'] },
        { name: 'Monthly Growth Reviews', line: 'What the numbers say, and what we change next.', includes: ['Revenue recovered', "What's working", "What's still leaking", "Next month's plan"] },
        { name: 'Continuous Optimization', line: 'Every insight turned into an improvement.', includes: ['Testing', 'Tuning follow-up', 'New automations', 'Scaling what works'] },
      ],
    },
  ],
};

export const aboutPage = {
  eyebrow: 'About',
  headline: '',
  sub: '',
  cta: "I'm ready to live it.",
  // Owner's About copy, verbatim. Intro: two paragraphs, each on the owner's line breaks.
  intro: [
    ['GHD, Generative Human Design™ is a Marketing and AI consultancy.', 'We are the growth partner for owners who are ready to step back without slowing down.'],
    [
      'Every engagement starts by finding where revenue, time, and opportunity are being lost.',
      'We use the Vidian Method™ to map those opportunities, test the strongest ones with Prince Charming™, then build the systems that capture them and train your team to run them.',
    ],
  ],
  founder: 'Rich Diaz, Founder of GHD Agency',
  story: [
    '25 years of building brands, leading sales teams, and sitting in the executive chair meant family time, nights, and holidays all belonged to someone else.',
    'Building my own business taught me what growth really costs, and I felt the weight of it firsthand.',
    'Owners end up living inside the success they built.',
    'Dinners get interrupted. Family vacations get interrupted. Every holiday comes with one eye on the phone.',
  ],
  founded: 'GHD Agency was founded to end that.',
  purpose: 'The business should fund a life doing the things you love with the people you love.',
  howLabel: 'How We Work',
  how: [
    { title: 'Find the Sleeping Giant.', line: 'Uncover the revenue, capacity, or opportunity already inside the business.' },
    { title: 'Map it with Vidian.', line: 'Find where time and revenue are slipping away, put numbers around the opportunity, and decide what is worth pursuing.' },
    { title: 'Test it with Prince Charming.', line: 'Run a focused pilot to see if the opportunity is real before making a bigger commitment.' },
    { title: 'Build the engine.', line: 'Custom-build the strategy, systems, workflows, AI, CRM, follow-up, and customer journeys needed to capture it.' },
    { title: 'Train the team to run it.', line: 'Your people learn how to run the engine so the gains keep compounding without everything coming back to the owner.' },
  ],
  // Photo of Rich on stage, mirrored so he faces into the page (left to right).
  photo: '/media/rich-stage.jpg',
  photoAlt: 'Rich Diaz, founder of GHD Agency',
};

/** Home page founder photo (Rich, polo). Shown only once the file is in public/media. */
export const homePhoto = { src: '/media/rich-polo.jpg', alt: 'Rich Diaz, founder of GHD Agency', caption: 'Rich Diaz' };

export const siteFooter = {
  copyright: '© 2026 Greatest Home Decor LLC, DBA GHD Agency.ai. All Rights Reserved.',
  phone: '725-241-0571',
  tel: '+17252410571',
  email: 'connect@ghdagency.ai',
  legal: [
    { label: 'Terms & Conditions', href: '/v4/terms-and-conditions/' },
    { label: 'Privacy Policy', href: '/v4/privacy-policy/' },
    { label: 'Cookie Policy', href: '/v4/cookie-policy/' },
  ],
  social: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ghdagency/' },
    { label: 'Facebook', href: 'https://www.facebook.com/GHDAgency' },
    { label: 'Instagram', href: 'https://www.instagram.com/ghdagency.ai/' },
  ],
};

export const legalPages = {
  'terms-and-conditions': { title: 'Terms & Conditions', updated: 'October 18, 2025' },
  'privacy-policy': { title: 'Privacy Policy', updated: 'October 17, 2025' },
  'cookie-policy': { title: 'Cookie Policy', updated: 'October 18, 2025' },
};

/* "Grow My Revenue" application (approved wording, 2026-10-03). Answers go to GHL. */
export const applyForm = {
  step1Title: "Let's see where your revenue is slipping.",
  step2Title: 'A few quick questions so your call is worth your time.',
  questions: [
    { name: 'industry', label: 'What industry are you in?', options: ['Auto Dealerships', 'Optometry & Vision Care', 'Elective Aesthetics', 'Trades & Home Services', 'Other'] },
    { name: 'revenue', label: "What's your annual revenue?", options: ['Under $1M', '$1M to $3M', '$3M to $10M', '$10M+'] },
    { name: 'role', label: "What's your role?", options: ['Owner', 'Partner', 'General Manager', 'Other'] },
    { name: 'leak', label: 'Where do you think revenue is slipping?', options: ['Leads wait too long for a reply', 'Leads never get followed up', "Appointments don't show", "Past customers don't come back", "Not sure, that's why I'm here"] },
    { name: 'timeline', label: 'When do you want this fixed?', options: ['Now', 'In the next 90 days', 'Just exploring'] },
  ],
  consent: 'I agree to receive calls and texts from GHD Agency about my inquiry. Message and data rates may apply. Reply STOP to opt out.',
  thanks: "Thanks, {first}. We'll review your answers and reach out within one business day.",
  // Who goes straight to the calendar.
  qualify: { revenue: ['$1M to $3M', '$3M to $10M', '$10M+'], timeline: ['Now', 'In the next 90 days'] },
  webhook: 'https://services.leadconnectorhq.com/hooks/H4kd9KFulXDimXLU1DlP/webhook-trigger/96520cb1-da85-4b95-95fa-3ffa951d6b0a',
  calendar: 'https://links.ghdagency.ai/widget/booking/16ibCnnbCNSihNaDQ6VI',
};
