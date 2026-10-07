# Go-live punch list (target: Wednesday night)

Status key: DONE = built and merged, ME = I can do it, YOU = needs Rich or his accounts.

## Built and merged
- DONE Per-page titles, descriptions, canonical URLs, social share tags, structured data (Organization, WebSite, FAQ, About, Breadcrumbs). `llms.txt` and `robots.txt` (AI crawlers allowed). Skip-to-content link. Sitemap.
- DONE Indexing is OFF until launch (`noindex`). The go-live script flips it.
- DONE Accessibility menu and statement page, linked in the footer.
- DONE Every "Grow My Revenue" button goes to the form (`/apply/`). Link audit: 0 broken internal links.
- DONE Cutover rehearsed: `node scripts/go-live.mjs` moves the new site to the domain root, redirects the old URLs (about-us, our-solutions, pricing, contact-us, home), writes the CNAME, turns indexing on. Rehearsal build passes with 0 broken links.

## Added tonight
- DONE Cookie banner and preferences (analytics, marketing). Choice is saved. Footer "Cookie Preferences" and the Cookie Policy button reopen it. Tracking loads only after consent: paste GA4 and Meta Pixel IDs in `src/directions/tracking.ts`.
- DONE SMS consent on the form: carrier-style wording (automated messages, not a condition of purchase, frequency varies, rates apply, STOP and HELP, links to Terms and Privacy). SMS sections added to the Privacy Policy and Terms.
- DONE Street address removed from the site, structured data and `llms.txt`.
- DONE Confirm video script (in `ghl/booking-form.md`).

## Blockers (YOU)
1. **GoDaddy DNS access.** Need a login or an invite for whoever manages ghdagency.ai. First question: where does the root domain point today (the old site)? If it points at GoHighLevel, the checkout funnel (ghdagency.ai/checkout-page) and any GHL pages on the root will stop working when it moves. They must be moved to a subdomain (for example links.ghdagency.ai) first.
2. **GoHighLevel, "Website: confirm" workflow.** Needs an inbound webhook URL. Send it to me and I add it to the site.
3. **Rich's video (VSL).** Needs the embed link (YouTube unlisted or Vimeo). The confirm page shows a placeholder until then.
4. **GoHighLevel calendar "Revenue Map Session":** duration 30 minutes, minimum notice 25 hours.
5. **GoHighLevel workflows (spec is in `ghl/booking-form.md`):**
   - A: "Website: Revenue Map application" (exists). Remove the qualification branch so everyone goes to the calendar.
   - B: "Time held". On booking: email and text, 12-hour reminder, cancel and send "released" at 24 hours if not confirmed.
   - C: "Website: confirm". Save the five answers, tag `confirmed`, mark the appointment confirmed, send the invoice email.
6. **Approve** confirm questions 4 and 5 (leads per month, CRM), or swap them.
7. **Real photos.** I cannot reach stock sites from here. Send 7 real-people photos (3 for Services, 4 for Solutions) or tell me to remove the photos.
8. ~~Facts~~ Phone 725-241-0571 confirmed. No street address anywhere (home address): the site and search data say Las Vegas, NV only. Still open: is the LinkedIn link (a personal profile) the one you want, or is there a company page?
9. ~~Logo permission~~ Confirmed by Rich: Miller Ad Agency and James Hodge logos are cleared.
10. **Security-block lines are true in practice:** "Your team approves anything high-stakes before it goes out" and "We test on sample data before anything touches a real customer."
11. **Legal review** of Terms, Privacy and Cookie policy (written for the old product; I added SMS sections and the cookie banner now matches the Cookie Policy). Have your attorney read them.

## Tonight (Tuesday)
- YOU: send DNS access, the GHL webhook, the video link, the photos.
- YOU: in GoDaddy, edit the `www` CNAME and set its TTL to 10 minutes (the root A record is already 600 seconds).
- YOU: in GHL, build workflows A, B and C and set the calendar. I test the form end to end the moment the webhook is in.
- ME: wire the webhook and video, test the apply and confirm flow, final accessibility and speed pass.

## Cutover (Wednesday, in this order)
1. ME: run `node scripts/go-live.mjs`, build, run the link audit, merge to `main`. The deploy builds with indexing on.
2. YOU or ME: GitHub, Settings, Pages, Custom domain `ghdagency.ai`, tick Enforce HTTPS once the certificate appears (can take up to an hour).
3. YOU: GoDaddy DNS (read from Rich's screenshot, 2026-10-07; nameservers are GoDaddy's, so all changes are made in GoDaddy):
   - `A  @  162.159.140.166` (the old GoHighLevel site): **delete it**, then add four A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
   - `CNAME  www  sites.ludicrous.cloud` (old GoHighLevel site): **edit the value to** `ghdagency.github.io`.
   - **Leave alone:** both `NS`, `SOA`, `MX` (Google Workspace email), every `TXT` (SPF, DKIM, DMARC, verification), `CNAME links` (brand.ludicrous.cloud, the GHL booking calendar), `CNAME email.admin` (Mailgun), `CNAME vidiantool` (the Vidian tool on Netlify), `CNAME _domainconnect`.
   - Records on pages 2 and 3 of the DNS list have not been reviewed yet. Check for any `AAAA` record on `@`: if one exists, delete it.
4. Check from a phone and a laptop: home, all four pages, the form to the calendar, confirm page, redirects (`/about-us`, `/pricing`), `https`, `www`.
5. After it is live: Google Search Console and Bing Webmaster (verify with a DNS TXT record, submit `sitemap-index.xml`), Google Business Profile with the same name, phone and address. Share link preview check on LinkedIn and Facebook.
6. Keep the old site content available for a week in case of a rollback: rollback is reverting the DNS A records.

## After launch
- Replace `og-image.jpg` (still the old site's image) with a new one.
- Add analytics (GA4) and the GHL tracking code, with a consent banner.
- Real testimonials and results once approved. No names until cleared.
- Run an accessibility audit with real assistive tech.
