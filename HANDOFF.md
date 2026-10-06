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
- Tonal dark ladder on every page (see "Design decision" below). One CTA label, "Grow My Revenue", everywhere.
- Hero order: the three-line statement now sits above the headline.
- Real `<title>`, meta description and social tags. Topa logo removed from the logo strip.

## Design decision (approved by Rich, 2026-10-06): the light theme is gone
The site is one dark family. Do not reintroduce a light or champagne theme (`v4-light` and every champagne color were removed).
- Frame: every page opens on black `#0a0b0d` and closes on the black footer. Home stays the darkest, most dramatic page.
- Inner pages (Services, Solutions, About, Terms, Privacy, Cookies, Apply, Confirm): sections alternate black `#0a0b0d` and graphite `#131518`. Cards are `#1b1e22` with a 1px edge `rgb(230 235 238 / 0.12)`. Text `#e6ebee`, secondary `#9aa3aa`. Legal text `#c9d0d5`.
- One accent family, cyan and silver. Cyan (`#009FA4` to `#00FFFF`) is for buttons, key numbers and small highlights. The industry icons use a cyan swoop, cyan ticks and a cyan lit window.
- People photos on Services and Solutions are near edge to edge (16:9 on desktop, 3:2 on phone) and framed so faces are never cropped.
- Forms: dark cards, silver underline that turns cyan on focus, silver-outline chips, selected chip filled cyan with dark text.
- Implementation: the "TONAL LADDER" block at the end of the global style in `src/directions/LiquidMetal.astro`, plus `Blocks.astro` and `ApplyForm.astro` styles. All body text passes WCAG AA (checked by script on every page).
- Not changed: the invoice email (`ghl/paid-invoice-email.html`) and the amber money figure in the Home stats block. The old design-direction pages (`/v1` to `/v5`, `/w*`) were not touched.

## Decisions made by Rich in this thread (they override the older handoff where they differ)
- Pricing: Vidian Method session free, 30 minutes. Prince Charming pilot free for two weeks. The build starts at $3,000 ("We only fix what's necessary"). Monthly Grow price is unconfirmed, so it is not on the site.
- Fit block is requirement bullets, not tied to a revenue number. The form collects the rest.
- HIPAA wording: "We can build to HIPAA requirements when your business needs it." (not "is compliant").
- Home stats block stays exactly as is (22,309 aged buyers, 588 in-market buyers, $211,680 recovered gross, with its footnote). The Solutions calculator uses those same numbers by default.
- Phone number 725-241-0571 is confirmed.
- Do not use Erik Radle's name anywhere. A testimonial from him will come later.
- Closed sales are not ours to report. Do not claim them.
- Do not use Hodge case-study cards. The Home stats block is the proof.
- The cloud session may not rewrite approved copy without Rich seeing it first.

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
