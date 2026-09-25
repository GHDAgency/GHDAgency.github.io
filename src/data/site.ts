// All site copy lives here so it can be edited in one place.
// Source: content/site-content.md (extracted from the original ghdagency.ai).

export const company = {
  brand: 'GHD: Generative Human Design™',
  shortName: 'GHD Agency.ai',
  legalName: 'Greatest Home Decor LLC',
  dba: 'GHD Agency.ai',
  address: '1672 Sabatini Dr, Henderson, NV 89052',
  phone: '702-581-8617',
  phoneHref: 'tel:+17025818617',
  email: 'connect@ghdagency.ai',
  contactEmail: 'info@GHDAgency.ai',
  legalEmail: 'legal@ghdagency.ai',
  privacyEmail: 'privacy@ghdagency.ai',
  tagline: 'Human by Design. Amplified by Intelligence.',
  motto: 'Built with grit. Powered by heart. Driven by disruption.™',
  triad: ['Smart Solutions.', 'Human Design.', 'AI Precision.'],
};

// Where "Start with Setup" sends people. Still the GoHighLevel checkout funnel —
// update this if the checkout moves off the ghdagency.ai domain.
export const checkoutUrl = 'https://ghdagency.ai/checkout-page';

export const seo = {
  title: 'AI Automation Agency for Service Businesses | GHD: Generative Human Design™',
  description:
    'Accelerate your business growth with GHD — the AI automation agency built for service businesses. From AI receptionists and chat agents to database reactivation and lead conversion systems, we help brands automate intelligently, scale sustainably, and dominate their market.',
};

export const nav = [
  { label: 'Home', href: '/' },
  { label: 'Solutions', href: '/our-solutions' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About Us', href: '/about-us' },
  { label: 'Contact Us', href: '/contact-us' },
];

export const footerLinks = [
  { label: 'About Us', href: '/about-us' },
  { label: 'Solutions', href: '/our-solutions' },
  { label: 'Contact Us', href: '/contact-us' },
  { label: 'Pricing', href: '/pricing' },
];

export const legalLinks = [
  { label: 'Terms & Conditions', href: '/terms-and-conditions' },
  { label: 'Privacy Policy', href: '/privacy-policy' },
  { label: 'Cookie Policy', href: '/cookie-policy' },
];

export const channels = [
  'SMS', 'Email', 'Voicemail', 'Calls', 'Facebook Messenger', 'Instagram', 'Google Business',
  'Website Chat', 'LinkedIn', 'WhatsApp', 'Google Messages',
];

export const stats = [
  { value: 80, suffix: '%', label: 'Response rate from your leads and customers', prefix: 'up to ' },
  { value: 24, suffix: '/7', label: 'Engaging leads and keeping your pipeline alive' },
  { value: 7, suffix: '', label: 'Channel Automated Follow Up' },
  { value: 2000, suffix: '+', label: 'Tools with seamless integration' },
];

export const features = [
  {
    title: 'Custom Ai Sales Specialist',
    body: 'Your Custom AI sales agent NEVER STOPS PROSPECTING, built with grit and powered by AI. It calls, texts, and messages across every platform: SMS, email, LinkedIn, Meta, Google Messages, and WhatsApp, finding new leads, following up fast, and closing deals around the clock.',
    image: '/images/icons/sales-specialist.webp',
    featured: true,
  },
  {
    title: '7 Channel Automated Follow Up',
    body: 'Automatically message leads across multiple channels including SMS, Email, Voicemail, Calls, Facebook Messenger, GMB and Website Chat to increase response rates to up to 80%.',
    image: '/images/icons/follow-up.webp',
    featured: true,
  },
  {
    title: 'Voice',
    body: 'Use AI to handle inbound & outbound calls to generate leads, take information, onboard, book & confirm appointments',
    image: '/images/icons/voice.webp',
  },
  {
    title: 'Speed To Lead',
    body: 'Stop losing sales to competitors who are faster to the phone, by getting AI to work your leads 24/7',
    image: '/images/icons/speed-to-lead.webp',
  },
  {
    title: 'Out Of Hours',
    body: "Stop 'Out of Hours' leads going unanswered and wasting time each morning on unqualified prospects with AI",
    image: '/images/icons/out-of-hours.webp',
  },
  {
    title: 'Live Call Transfer',
    body: 'Automatically get inbound calls every time a lead is ready to talk and when they schedule on your calendar.',
    image: '/images/icons/live-transfer.webp',
  },
  {
    title: 'Advanced Reporting',
    body: 'Easily see how well your campaigns and sales team are performing so that you can increase your opportunities and sales!',
    image: '/images/icons/reporting.webp',
  },
  {
    title: 'Mobile App',
    body: 'Close prospects on-the-go with our mobile app, respond to leads, track statuses, complete reminders, and more.',
    image: '/images/icons/mobile-app.webp',
  },
  {
    title: 'Google Reviews',
    body: 'Improve business credibility and customer opinion replying to reviews without spending man-hours using AI',
    image: '/images/icons/google-reviews.webp',
  },
  {
    title: 'Database Reactivation',
    body: 'Pull fresh sales from leads you’ve already paid for and haven’t bought, using conversational AI',
    image: '/images/icons/reactivation.webp',
  },
  {
    title: 'Abandoned Cart',
    body: 'Secure sales that would have otherwise been lost to the void by following up with users who left before purchasing',
    image: '/images/icons/abandoned-cart.webp',
  },
];

export const plans = [
  {
    id: 'basic',
    name: 'Basic',
    price: 399,
    setup: '2,500',
    items: [
      '1 AI Agent',
      'Conversation AI (Messages + SMS)',
      'AI Voice (Inbound Only)',
      '2 Premium Triggers ($0.01/trigger)',
      '1 Smart Workflow Automation (Email, SMS, Voicemail)',
      'Push Notifications (Email, Text, Phone, Desktop)',
      'Voice usage billed at $0.14/min',
    ],
  },
  {
    id: 'starter',
    name: 'Starter',
    price: 499,
    setup: '3,500',
    popular: true,
    items: [
      '3 AI Agents (Voice + SMS + CRM)',
      'Advanced Automations + Lead Re-Engagement',
      'AI Voice (Inbound + Outbound)',
      '4 Premium Triggers ($0.01/trigger)',
      'Smart Workflow Automation (Email, SMS, Voicemail)',
      'Custom Dashboard + CRM Integration',
      'Priority Chat Support',
    ],
  },
  {
    id: 'pro',
    name: 'Professional',
    price: 699,
    setup: '6,500',
    items: [
      '5 AI Agents (Custom Trained)',
      'Conversation AI (Messages + SMS + Livechat)',
      'AI Voice (Inbound + Outbound)',
      '6 Premium Triggers ($0.01/trigger)',
      'Automated Appointment Booking (+ Calendar Integration)',
      '4 Smart Workflow Automations (Email, SMS, Voicemail)',
      'Push Notifications (Email, Text, Phone, Desktop)',
      '7-Step Lead Nurture & Reactivation',
    ],
  },
];

export const testimonials = [
  { quote: 'Very happy. Helped me like they want me to win—quality is amazing.', name: 'Renee Ross', source: 'Facebook Review' },
  { quote: 'Game-changing software and the most responsive support I’ve ever received.', name: 'Joel Frenette', source: 'Facebook Review' },
  { quote: 'Skeptical at first—now obvious. They know how to scale with automation.', name: 'Joel Brown', source: 'Facebook Review' },
  { quote: 'Dave answered every question and helped me get set up faster than I thought possible.', name: 'Andrew Peterson', source: 'Facebook Review' },
];

export const testimonialDisclaimer =
  'Testimonials displayed with permission from Centrify™. Logos and marks belong to their owners.';

export const faqs = [
  {
    q: 'How does your AI automation work?',
    a: 'We connect your website, SMS, and voice channels to trained AI agents that answer questions, book appointments, and follow up automatically. Dashboards show conversations, bookings, and ROI.',
  },
  {
    q: 'What platforms do you integrate with?',
    a: 'GoHighLevel, Calendly/Acuity, Google/Outlook calendars, Facebook/Instagram lead forms, Zapier/Make, and more.',
  },
  {
    q: 'What kind of support do you provide?',
    a: 'Guided onboarding, knowledge base, and priority chat. Pro includes optimization reviews and custom playbooks.',
  },
  {
    q: 'Is my customer data secure?',
    a: 'Yes—encrypted in transit & at rest, role-based access, and opt-in compliant messaging flows.',
  },
  {
    q: 'How is usage billed?',
    a: 'Voice minutes and SMS are metered separately. Your dashboard shows real-time usage and projected totals.',
  },
  {
    q: 'Are there any other fees?',
    a: 'Setup is paid once. Monthly retainer begins after the first 30 days. Carrier pass-through fees (e.g., SMS) apply at cost.',
  },
  {
    q: 'If I have questions, is there someone I can talk to?',
    a: 'Absolutely—book a quick call or open chat from the dashboard anytime.',
  },
];

export const disclosures = [
  {
    title: 'AI Disclosure',
    body: 'GHD Agency.ai utilizes artificial intelligence, automation systems, and conversational technologies to support marketing, communication, customer engagement, and operational workflows. AI-assisted interactions may be monitored or reviewed by human team members to ensure quality and accuracy.',
  },
  {
    title: 'SMS & Lead Form Disclosure',
    body: 'By submitting a form or providing your contact information, you consent to receive communications from GHD Agency.ai via phone, SMS, email, and automated technologies regarding services, appointments, and account-related information. Message frequency varies. Reply STOP to opt out.',
  },
  {
    title: 'AI Voice Disclosure',
    body: 'Calls may utilize AI-assisted voice technology for routing, scheduling, customer support, and quality assurance purposes.',
  },
  {
    title: 'Platform Dependency & Third-Party Services',
    body: 'Portions of GHD Agency.ai services may rely on third-party platforms, APIs, software providers, advertising networks, artificial intelligence systems, telecommunications providers, and external technologies beyond GHD Agency.ai’s direct control. GHD Agency.ai shall not be liable for interruptions, suspensions, account restrictions, policy enforcement actions, algorithm changes, API limitations, outages, inaccurate outputs, or performance fluctuations caused by third-party providers or platforms including but not limited to Meta, Google, LinkedIn, TikTok, OpenAI, Twilio, Stripe, GoHighLevel, or related systems. AI-generated outputs and automated systems may contain inaccuracies and remain subject to human review and approval.',
  },
  {
    title: 'Refund Policy',
    body: 'Due to the nature of digital marketing, consulting, AI system configuration, advertising management, and custom implementation services, all payments made to GHD Agency.ai are non-refundable unless otherwise stated in writing. This includes setup fees, strategy engagements, paid advertising spend, software fees, custom builds, automation configuration, AI agent deployment, and creative services. Clients may cancel recurring services with thirty (30) days written notice. Cancellation does not waive outstanding balances or obligations incurred prior to termination.',
  },
  {
    title: 'Payment Reinstatement',
    body: 'A reinstatement fee of up to fifty percent (50%) of the monthly service fee may be applied to restore suspended services, workflows, automations, and platform access.',
  },
  {
    title: 'Client Delay Notice',
    body: 'Client delays in providing approvals, feedback, access credentials, content, or required materials may result in timeline adjustments, project delays, or additional fees.',
  },
];

export const smsConsent = {
  marketing:
    'By checking this box, I consent to receive marketing text messages from GHD Agency.Ai at the phone number provided, related to my account, orders, or services I have requested. These messages may include appointment reminders, order confirmations, and account notifications, among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for assistance or STOP to opt-out.',
  transactional:
    'By checking this box, I consent to receive non-marketing text and promotional messages from GHD Agency.Ai. about my order updates, appointment reminders etc. Message & Data rates may apply. Reply HELP for help or STOP to opt-out.',
};
