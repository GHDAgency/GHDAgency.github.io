# Prompt for the desktop Claude session (Chrome connected, GoDaddy, GoHighLevel and GitHub signed in)

You have my browser. Do these jobs in order. After each job, report what you did and what the page showed. Stop and ask before anything that is not on this list. Never delete a record that is not named here. Do not paste or print any password or API key.

Context: the new site is already built and deployed from the GitHub repo GHDAgency/GHDAgency.github.io (branch `main`). The spec files are in the repo: `ghl/booking-form.md`, `LAUNCH.md`. Rich has approved going live now. The VSL video is skipped for the moment.

## Job 1: GoHighLevel (build the booking flow)
Read `ghl/booking-form.md` in the repo for the full wording. Then:
1. Calendar "Revenue Map Session": duration 30 minutes, minimum scheduling notice 25 hours.
2. Custom contact fields: Lifetime value, Average sale, Sources, Leads per month, CRM.
3. Edit workflow "Website: Revenue Map application": remove the qualification branch so everyone goes to the calendar.
4. Create workflow "Time held" (trigger: Customer Booked Appointment): send the "time held" email and text, wait 12 hours and send the reminder if the contact does not have tag `confirmed`, then at 24 hours after booking cancel the appointment and send the "released" email if still not `confirmed`. The confirm link is `https://ghdagency.ai/confirm/?email={{contact.email}}&first_name={{contact.first_name}}&last_name={{contact.last_name}}&phone={{contact.phone}}`.
5. Create workflow "Website: confirm" (trigger: Inbound Webhook): find the contact by email, save the five answers (`lifetime_value`, `average_sale`, `sources`, `leads_per_month`, `crm`) to the custom fields and a contact note, add tag `confirmed`, set the appointment status to Confirmed.
6. Copy the inbound webhook URL exactly and send it to me. Do not post it anywhere else.

## Job 2: GitHub Pages custom domain
In the repo GHDAgency/GHDAgency.github.io, Settings, Pages: set Custom domain to `ghdagency.ai` and save. (The DNS check will fail until Job 3 is done; that is expected.) Do not turn on Enforce HTTPS yet.

## Job 3: GoDaddy DNS (ghdagency.ai, DNS, DNS Records). Rich has approved these exact changes.
1. Delete `A  @  162.159.140.166`.
2. Add four `A` records, Name `@`, TTL 10 minutes: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153.
3. Edit the `www` CNAME: value `ghdagency.github.io`, TTL 10 minutes.
4. DO NOT touch any `NS`, `SOA`, `MX` or `TXT` record, or the CNAMEs `links`, `email.admin`, `vidiantool`, `_domainconnect`.
5. Report the DNS records table afterwards (a screenshot).

## Job 4: finish
1. Back in GitHub Settings, Pages: when the DNS check passes, tick Enforce HTTPS (it can take up to an hour to appear).
2. Open https://ghdagency.ai and https://www.ghdagency.ai in the browser and report what loads. Also open /services/, /about/, /apply/, and /about-us (it should redirect).
