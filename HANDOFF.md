# GHD site: handoff from the "Learning from Borstev's site design" thread

Read this first. It carries what was decided and built in a long cloud session (session `session_015GWSmbSUJn1wwTTRtkEdFB`) so nothing has to be re-explained. All site work is on branch `claude/borstev-site-analysis-ujgxcb`. Nothing has been merged to `main` and nothing has been published.

## The job for the desktop thread (the one with Chrome and GHL access)
Build the booking flow in GoHighLevel. The cloud session cannot reach GHL. Full spec, email copy and video script: `ghl/booking-form.md` on the branch.

```
git fetch origin claude/borstev-site-analysis-ujgxcb
git show origin/claude/borstev-site-analysis-ujgxcb:ghl/booking-form.md
```

1. Calendar "Revenue Map Session": duration 30 minutes (Rich said he will change this himself), minimum scheduling notice 25 hours.
2. Edit workflow "Website: Revenue Map application": remove the qualification branch. Everyone goes to the calendar.
3. New workflow "Time held": trigger Customer Booked Appointment. Send the "time held" email and text, wait 12 hours and send the reminder if tag `confirmed` is missing, at 24 hours cancel the appointment (frees the slot) and send the "released" message if still not confirmed.
4. New workflow "Website: confirm": trigger Inbound Webhook (premium trigger). Find the contact by email, save the five answers to custom fields and a note, tag `confirmed`, set the appointment to Confirmed, send the paid invoice email (`ghl/paid-invoice-email.html`).
5. Report back: the inbound webhook URL from workflow 4. It goes into `confirmForm.webhook` in `src/directions/copy.ts`.

Do not change site files. The cloud session will add the webhook URL and the video embed link and push.

## The flow (agreed with Rich, 2026-10-06)
1. CTA "Grow My Revenue" opens `/v4/apply/`: short form (first, last, mobile, email, business, website, consent).
2. Posts to the existing GHL webhook, then sends everyone to the calendar link with details prefilled.
3. They pick a time. GHL holds it for 24 hours.
4. "Your time is held" email and text with Rich's video and a button to `/v4/confirm/`.
5. Confirm page: video plus five questions (lifetime value, average sale, how they get business, leads per month, CRM). Questions 4 and 5 were proposed by Claude and are not yet approved.
6. Confirmed: the $0 invoice goes out ($997 session plus $500 written growth plan, "Paid by Rich Diaz", balance $0, no session length printed).
7. Not confirmed in 24 hours: the time is released.

## What is built on the branch (site side)
- `src/directions/ApplyForm.astro`: one component, two modes (`apply`, `confirm`). Tested in a headless browser with GHL mocked.
- `src/pages/v4/confirm.astro`: the confirm page. Shows a placeholder frame where the video goes and an error on submit until `confirmForm.vsl` and `confirmForm.webhook` are set in `copy.ts`.
- `src/directions/Blocks.astro` (offer strip, fit, data promises, FAQ, calculator), wired into Home, Services and Solutions.
- Black and light-gray bands on every page but Home (see "Design decision" below). One CTA label, "Grow My Revenue", everywhere.
- Hero order: the three-line statement now sits above the headline.
- Real `<title>`, meta description and social tags. Topa logo removed from the logo strip.

## Design decision (Rich, 2026-10-06, corrected same day): Home stays black, the other pages alternate black and light gray
An earlier written brief asked for an all-dark "tonal ladder" (black and graphite, "not white"). Rich rejected it: it made every page solid black again. What he wants is the opposite.
- Home is unchanged: dark and dramatic.
- Every other page opens on a black hero and closes on the black footer. In between, black bands and light-gray bands (`#eef0f2`) alternate, so the black is broken up. White cards sit on the light bands, dark `#1b1e22` cards on the black bands.
- Light bands: Services steps 1 and 3, the fit block and the FAQ, About's story section, every other Solutions row, the legal text, and the closing button band where it follows a black block. Black bands: everything else.
- Text on light bands is `#14171a` with `#4a545c` secondary. Accents on light are deep teal `#00696d` for text and `#009fa4` for lines. Cyan `#00FFFF` is used on black bands and on the dark button pills.
- Champagne gold and the old warm off-white are gone. The industry icons use cyan.
- Apply and Confirm are white cards on the black page. Selected chips fill black with a cyan edge.
- Header and footer are solid black on every inner page.
- Photos on Services and Solutions are near edge to edge (16:9 desktop, 3:2 phone) and framed to keep faces.
- How it is built: the band variables (`--t1`, `--t2`, `--card`, `--edge`, `--accent`, `--accent-t`, `--metal`) and the BANDS block at the end of the global style in `src/directions/LiquidMetal.astro`. A band is made light by listing it in the `:is(...)` selector there. `Blocks.astro` and `ApplyForm.astro` read the same variables.
- Not changed: the invoice email and the amber money figure in the Home stats block.

## Decisions made by Rich in this thread (they override the older handoff where they differ)
- Pricing: Vidian Method session is "complimentary" (never say free), 30 minutes. Prince Charming pilot: two weeks, no price on the card. Terms live only in the FAQ: $500 Setup Deposit, refunded if no results, applied to the build if GHD proceeds. The build starts at $3,000 ("We only fix what's necessary"). Monthly Grow price is unconfirmed, so it is not on the site.
- Fit block is requirement bullets, not tied to a revenue number. The form collects the rest.
- HIPAA wording: "We can build to HIPAA requirements when your business needs it." (not "is compliant").
- Home stats block stays exactly as is (22,309 aged buyers, 588 in-market buyers, $211,680 recovered gross, with its footnote). The Solutions calculator uses those same numbers by default.
- Phone number 725-241-0571 is confirmed.
- Do not use Erik Radle's name anywhere. A testimonial from him will come later.
- Closed sales are not ours to report. Do not claim them.
- Do not use Hodge case-study cards. The Home stats block is the proof.
- The cloud session may not rewrite approved copy without Rich seeing it first.

## Home/offer pass (Rich, 2026-10-06, "GO")
- Hero statement is bolder than the tagline. Scroll beat "You know you need it..." cut.
- "Your Growth Partner. We answer with Results." loads automatically after the GHD logo animation ends.
- Results (stats) block sits directly above the offer section ("Come see what you're missing."), which has the CTA above and below three cards (Vidian Method, Prince Charming Pilot, The Build). No steps, no invoice mention.
- About names GHD as a category: Generative Human Design is the craft, the Awakeners practice it.
- Pending Rich's approval: Rich photo retouch (ring and watch removed) and brushed-silver 3D industry emblems. Not on the site yet.

## Open items
- Rich's video: record it with the script in `ghl/booking-form.md`, host it (YouTube unlisted or Vimeo), give the embed link.
- Confirm webhook URL (from step 4 above).
- Questions 4 and 5 on the confirm form: approve or swap.
- Grow monthly price: confirm or leave off.
- Invoice email still lists the Revenue Map Session, which no longer shows a length. Keep or rename.
- Security block lines to verify against real operations before launch: "Your team approves anything high-stakes before it goes out", "We test on sample data before anything touches a real customer".
- `noindex` is still on. Flip it at launch.
- Getting this onto `main`: pull request or direct merge. Rich has not chosen.
- An older handoff (`GHD-homepage-handoff.md`, from a chat) proposes a single long page with jump links, a $500 pilot deposit and a $5,000 monthly retainer. Rich's decisions above won where they conflict. Ask before reintroducing any of it.

## Copy rules (from Rich)
No em dashes. Never start a sentence with "But" or "So". Do not lead with "AI" in positioning. No mechanism disclosure in outward copy. No quantified earnings promises. Never name or compare to competitors. Locked tagline: "We answer with results." Do not rename: Generative Human Design, Vidian Method, Prince Charming, Sleeping Giant. Brand: Roboto, #009FA4 and #00FFFF, metallic gradient, black background.

## Housekeeping flags
- A Drive sheet named "Hodge Dealerships" holds a plaintext OpenAI secret key, and a sent email on 2026-07-24 contains plaintext passwords. Rotate them. Their values are deliberately not copied here.
- Client logos on the site: Hodge Ford, Hodge Hyundai, Miller Ad Agency, Construct, Advanced Vision Institute, Revitaleyes. Confirm Miller is showable.
