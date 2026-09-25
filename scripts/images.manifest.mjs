// Prompts for every AI-generated image on the site. Regenerate with:
//   node scripts/generate-batch.mjs            (only missing images)
//   node scripts/generate-batch.mjs --force    (all)
//   node scripts/generate-batch.mjs icon-voice  (just one, by id)

const brand =
  'Color palette: deep near-black teal background (#030708), electric cyan (#00F0FF) as the main glow, violet (#8B7BFF) as a secondary accent light. Premium, cinematic, high-end tech aesthetic.';

const icon = (subject) =>
  `A single premium 3D icon of ${subject}. Made of frosted translucent glass with crisp glowing electric cyan (#00F0FF) edges and a soft violet (#8B7BFF) inner glow, subtle reflections, soft studio lighting, slight three-quarter perspective, centered with generous padding, clean and minimal like a modern app icon set. No text, no letters, no numbers, no logos. Isolated on a fully transparent background.`;

const iconOpts = { size: '1024x1024', background: 'transparent', width: 512 };

export const images = [
  // ---- Feature tile icons (consistent set) ----
  { id: 'icon-sales-specialist', out: 'public/images/icons/sales-specialist.webp', prompt: icon('a sleek friendly AI assistant head wearing a headset microphone, with a small glowing upward trend arrow beside it'), ...iconOpts },
  { id: 'icon-follow-up', out: 'public/images/icons/follow-up.webp', prompt: icon('seven small chat message bubbles orbiting and connected by thin glowing lines to a central glowing node'), ...iconOpts },
  { id: 'icon-voice', out: 'public/images/icons/voice.webp', prompt: icon('a classic telephone handset with glowing concentric sound waves radiating from it'), ...iconOpts },
  { id: 'icon-speed-to-lead', out: 'public/images/icons/speed-to-lead.webp', prompt: icon('a lightning bolt striking through a stopwatch'), ...iconOpts },
  { id: 'icon-out-of-hours', out: 'public/images/icons/out-of-hours.webp', prompt: icon('a crescent moon next to a small clock, with a few tiny stars'), ...iconOpts },
  { id: 'icon-live-transfer', out: 'public/images/icons/live-transfer.webp', prompt: icon('two telephone handsets connected by a bright curved arrow of light passing a call between them'), ...iconOpts },
  { id: 'icon-reporting', out: 'public/images/icons/reporting.webp', prompt: icon('a rising 3D bar chart with a glowing upward trend line above the bars'), ...iconOpts },
  { id: 'icon-mobile-app', out: 'public/images/icons/mobile-app.webp', prompt: icon('a modern smartphone with two small notification bubbles popping out of the screen'), ...iconOpts },
  { id: 'icon-google-reviews', out: 'public/images/icons/google-reviews.webp', prompt: icon('a speech bubble containing a row of five stars, with a small reply arrow'), ...iconOpts },
  { id: 'icon-reactivation', out: 'public/images/icons/reactivation.webp', prompt: icon('a stack of database cylinders wrapped by a circular glowing refresh arrow'), ...iconOpts },
  { id: 'icon-abandoned-cart', out: 'public/images/icons/abandoned-cart.webp', prompt: icon('a shopping cart with a glowing curved arrow looping back into it'), ...iconOpts },

  // ---- Scene images (replace the old cartoon illustrations) ----
  {
    id: 'scene-calendar',
    out: 'public/images/scenes/calendar.webp',
    size: '1024x1024',
    width: 1024,
    prompt: `A floating 3D glass calendar interface in dark space, shown at a slight angle with depth of field. A weekly grid where several time slots glow bright cyan as booked appointments with small check marks, and one slot is being filled by a stream of light particles arriving from the left. Small floating notification chips with a phone icon and a calendar icon hover nearby. No readable text or numbers. ${brand}`,
  },
  {
    id: 'scene-owner',
    out: 'public/images/scenes/business-owner.webp',
    size: '1536x1024',
    width: 1400,
    prompt: `Photorealistic cinematic photo of a confident, friendly small service-business owner in their 40s, sitting in a modern dimly lit office in the evening, smiling while looking at a laptop. Around them, subtle translucent holographic panels float in the air showing chat bubbles from text messages, Facebook, Instagram and Google chat flowing into a calendar with booked appointment slots. Soft cyan screen glow on their face, violet rim light from behind, shallow depth of field, 35mm lens. No readable text, no brand logos. ${brand}`,
  },
  {
    id: 'scene-funnel',
    out: 'public/images/scenes/lead-funnel.webp',
    size: '1024x768',
    width: 1024,
    prompt: `An abstract 3D visualization: many small glowing particles (leads) streaming in from the edges of the frame from several small floating chat bubble and phone shapes, converging through a translucent glass funnel and emerging as neat glowing appointment cards stacking into a glass calendar block. Elegant, minimal, dark background. No text, no logos. ${brand}`,
  },

  // ---- About page ----
  {
    id: 'about-hero',
    out: 'public/images/scenes/human-meets-ai.webp',
    size: '1536x1024',
    width: 1400,
    prompt: `Cinematic photograph-style image: a real human hand reaching from the left toward a hand made entirely of luminous cyan light particles and fine digital lines reaching from the right; their fingertips nearly touch with a small bright spark between them. Dark atmospheric background with soft volumetric light, violet rim lighting on the human hand, shallow depth of field. Evokes human intention meeting machine intelligence. No text. ${brand}`,
  },
  {
    id: 'value-grit',
    out: 'public/images/values/grit.webp',
    size: '1024x1024',
    width: 720,
    prompt: `A rugged cube of dark granite stone floating in darkness, its surface cracked, with intense electric cyan light glowing from within the cracks. Dramatic low-key lighting, subtle violet rim light, dust particles in the air. No text. ${brand}`,
  },
  {
    id: 'value-heart',
    out: 'public/images/values/heart.webp',
    size: '1024x1024',
    width: 720,
    prompt: `An anatomical-style but elegant heart sculpted from clear glass, filled with softly glowing cyan and violet light and fine flowing light filaments like a neural network, floating in darkness with gentle reflections. No text. ${brand}`,
  },
  {
    id: 'value-disruption',
    out: 'public/images/values/disruption.webp',
    size: '1024x1024',
    width: 720,
    prompt: `A dark glass pane shattering outward in slow motion, a burst of electric cyan energy breaking through the center, shards catching violet light, frozen mid-explosion, high-speed photography look. No text. ${brand}`,
  },
];
