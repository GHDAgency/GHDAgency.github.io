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
  // Owner's About copy, verbatim. Intro: two paragraphs, each on the owner's line breaks.
  intro: [
    ['Generative Human Design™ is the craft of waking the revenue already sleeping inside a business.', 'GHD is where the Awakeners practice it.'],
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

/* "Grow My Revenue" booking (flow agreed with the owner, 2026-10-06):
   1. Short form (this block)  2. Calendar: the time is held for 24 hours
   3. "Time held" email with the VSL and a confirm link  4. Confirm page (five questions)
   5. Confirmed: the $0 invoice goes out.  No confirmation in 24 hours: GHL releases the time. */
export const applyForm = {
  title: "Let's see where your revenue is slipping.",
  note: 'Next, you pick a time. We hold it for 24 hours.',
  button: 'Pick My Time',
  consent: 'I agree to receive calls and texts from GHD Agency about my inquiry. Message and data rates may apply. Reply STOP to opt out.',
  webhook: 'https://services.leadconnectorhq.com/hooks/H4kd9KFulXDimXLU1DlP/webhook-trigger/96520cb1-da85-4b95-95fa-3ffa951d6b0a',
  calendar: 'https://links.ghdagency.ai/widget/booking/16ibCnnbCNSihNaDQ6VI',
};

/** The confirm page that the "time held" email links to. */
export const confirmForm = {
  title: 'One more step to confirm your time.',
  sub: 'Your time is held for 24 hours. Watch this short video from Rich, then answer five quick questions.',
  /** Embed address of Rich's video (YouTube or Vimeo embed link). Empty shows a placeholder frame. */
  vsl: '',
  vslPlaceholder: "Rich's video goes here.",
  /** GHL inbound webhook for the "confirm" workflow. Empty until the workflow exists. */
  webhook: '',
  questions: [
    { name: 'lifetime_value', label: 'What is a customer worth to you over their lifetime? ($)', type: 'number' },
    { name: 'average_sale', label: 'What is your average sale price? ($)', type: 'number' },
    {
      name: 'sources',
      label: 'How do you get business today?',
      type: 'chips',
      options: ['Referrals', 'Google or search', 'Paid ads', 'Social media', 'Phone or walk-ins', 'Repeat customers', 'Other'],
    },
    { name: 'leads_per_month', label: 'About how many leads or inquiries do you get in a typical month?', type: 'number' },
    { name: 'crm', label: 'What CRM or software do you use today? ("None" is fine)', type: 'text' },
  ],
  button: 'Confirm My Session',
  done: 'Confirmed. Your invoice is on its way to your inbox.',
};

/* ---------------------------------------------------------------------------------------------
   Offer, fit, data promises, FAQ and calculator (added 2026-10-06, wording agreed with the owner).
   --------------------------------------------------------------------------------------------- */

/** Start here: the three steps of working with GHD. Shown on Home and Services. */
export const offer = {
  heading: 'Wake the Giant.',
  cards: [
    {
      name: 'Vidian Method',
      tag: 'Complimentary',
      line: 'Proprietary software that identifies where opportunities are being missed and what it is costing you, measured in time and dollars.',
    },
    {
      name: 'The Prince Charming',
      tag: 'Two weeks',
      line: 'A pilot test to pressure test outcomes, then decide how to proceed.',
    },
    {
      name: 'The Build',
      tag: 'Starting at $3,000',
      line: 'Customized to your business, with the data analytics to prove results.',
    },
  ],
};

export const fit = {
  eyebrow: 'Are you a fit?',
  goodLabel: 'You are a fit if',
  good: [
    'You have a customer list, even a messy one',
    'Someone on your team will take the calls we set up',
    'You can serve more customers than you do today',
    'You can contact your customers by text, email and phone',
    'A decision maker joins the call',
  ],
  badLabel: 'Not yet a fit if',
  bad: [
    'You have no customer list or lead history',
    'Nobody is available when a buyer raises their hand',
    'You want a one-time ad campaign or a software tool',
    'You are not ready to change how follow-up gets handled',
  ],
};

export const security = {
  eyebrow: 'Your business, your data',
  items: [
    'Every account we build is in your name. If we part ways, you keep everything.',
    'Your team approves anything high-stakes before it goes out.',
    'We test on sample data before anything touches a real customer.',
    'Customers opt in, and every message honors STOP.',
    'We can build to HIPAA requirements when your business needs it.',
  ],
};

export const faq = {
  eyebrow: 'Questions',
  items: [
    {
      q: 'What does it cost?',
      a: 'The Vidian Method session is complimentary. The Prince Charming Pilot requires a $500 Setup Deposit, refunded if there are no results and applied to your build if we proceed. The build starts at $3,000.',
    },
    {
      q: 'How does the Prince Charming Pilot work?',
      a: 'A $500 Setup Deposit is required to create the system. At the conclusion of the pilot, if there are no results, your deposit will be refunded. When the pilot is successful and we decide to proceed, the $500 will be applied to the cost of the build.',
    },
    {
      q: 'What if it does not work?',
      a: 'If the pilot produces no results, your $500 deposit is refunded.',
    },
    {
      q: 'Will my team actually use it?',
      a: 'That is step 5. We train your people to run the engine, and the playbooks are written for them, not for us.',
    },
    {
      q: 'We already have a CRM. Do we start over?',
      a: 'No. We work with what you have and fix where it leaks.',
    },
    {
      q: 'Can you work with a regulated business?',
      a: 'Yes. We can build to HIPAA requirements when your business needs it.',
    },
    {
      q: 'Who will I talk to?',
      a: 'Rich Diaz, the founder, runs your session. You talk to him, not an account manager.',
    },
  ],
};

/** Revenue calculator (Solutions). The defaults are the same assumptions as the Home stats block. */
export const calc = {
  eyebrow: 'Run your own numbers',
  headline: 'What are your unanswered leads costing you?',
  fields: [
    { name: 'buyers', label: 'In-market buyers in your database', value: 588, prefix: '', step: 1 },
    { name: 'close', label: 'Close rate (%)', value: 15, prefix: '', step: 1 },
    { name: 'gross', label: 'Average gross per sale ($)', value: 2400, prefix: '$', step: 50 },
  ],
  resultLabel: 'Revenue sitting in your database',
  footnote: 'An estimate: buyers × close rate × average gross. Your numbers will vary.',
};
