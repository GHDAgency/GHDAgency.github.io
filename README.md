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

## Build

```bash
npm run build     # outputs static files to dist/
npm run preview   # serve the built site locally
```
