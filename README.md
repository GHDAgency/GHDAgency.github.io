# GHD Agency.ai — Website

Rebuild of [ghdagency.ai](https://ghdagency.ai) with Astro, Tailwind CSS v4, GSAP and Lenis.

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:4321.

## Where things live

| What | Where |
|---|---|
| All copy (features, pricing, FAQs, testimonials, disclosures, contact info) | `src/data/site.ts` |
| Pages (same URLs as the old site) | `src/pages/` |
| Sections (hero, pricing, FAQ…) | `src/components/` |
| Colors, fonts, shared styles | `src/styles/global.css` |
| Scroll/hover animations | `src/scripts/motion.ts` |
| Images | `public/images/` |
| Original site content inventory | `content/site-content.md` |

## Demo form → GoHighLevel

The "Receive an Ai Demo Call" form POSTs JSON to a GoHighLevel **Inbound Webhook**.

1. In GHL: **Automation → Workflows → Create workflow → Trigger: Inbound Webhook**. Copy the webhook URL.
2. Copy `.env.example` to `.env` and set `PUBLIC_GHL_WEBHOOK_URL`.
3. In the workflow, map the fields (`first_name`, `last_name`, `email`, `phone`, `website`, `sms_marketing_consent`, `sms_transactional_consent`) to a contact, then add your AI demo-call steps.

When hosting, add the same `PUBLIC_GHL_WEBHOOK_URL` variable in the host's environment settings.

## AI-generated images

Needs `OPENAI_API_KEY` in `.env`. Default model: `gpt-image-2.5-sunburst` at `max` quality.

```bash
npm run image -- "a prompt" --out public/images/something.webp   # one-off image
npm run images                                                     # generate any missing site images
npm run images -- icon-voice scene-calendar                        # regenerate specific ones
npm run images -- --force                                          # regenerate all
```

Every site image's prompt lives in `scripts/images.manifest.mjs`: edit a prompt there and regenerate by id.

## Build

```bash
npm run build     # outputs static files to dist/
npm run preview   # serve the built site locally
```

## Homepage design directions (/v1 to /v5)

Five design directions for the same homepage, with identical copy. The index is at `/directions`.

| What | Where |
|---|---|
| All copy, and the CTA label/link (`CTA_LABEL`, `CTA_HREF`) | `src/directions/copy.ts` |
| Each direction | `src/pages/v1.astro` to `src/pages/v5.astro` |
| Shared scroll engine (pinning progress, word reveal, count-up, fades) | `src/directions/engine.ts` |
| Shared tokens, word-reveal styles, marquee | `src/directions/base.css` |
| Client logos (drop files here) | `public/logos/` |

The logo row reads every image in `public/logos` automatically. `scripts/process-logos.mjs` runs before `dev` and `build`
(or on demand with `npm run logos`), converts each logo to one white tone, and writes the results to `public/logos-mono/`.
That folder is generated, so it isn't committed.

Motion uses no animation library: one passive scroll listener drives CSS variables. With `prefers-reduced-motion`,
nothing is pinned or scrubbed and sections simply fade in. These pages are `noindex` and are left out of the sitemap.
