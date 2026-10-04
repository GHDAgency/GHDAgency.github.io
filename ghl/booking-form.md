# GHL booking survey (approved wording, 2026-10-03)

Build as a 2-step GHL Survey. Every field required. Embed code goes on the site; all four "Grow My Revenue" buttons point to it.

## Step 1: "Let's see where your revenue is slipping."
- First name
- Last name
- Mobile number
- Business email
- Business name
- Website

## Step 2: "A few quick questions so your call is worth your time."
1. What industry are you in? Auto Dealerships / Optometry & Vision Care / Elective Aesthetics / Trades & Home Services / Other
2. What's your annual revenue? Under $1M / $1M to $3M / $3M to $10M / $10M+
3. What's your role? Owner / Partner / General Manager / Other
4. Where do you think revenue is slipping? Leads wait too long for a reply / Leads never get followed up / Appointments don't show / Past customers don't come back / Not sure, that's why I'm here
5. When do you want this fixed? Now / In the next 90 days / Just exploring
6. Checkbox: I agree to receive calls and texts from GHD Agency about my inquiry. Message and data rates may apply. Reply STOP to opt out.

## Routing (recommended: $1M+ revenue AND Now or next 90 days)
- Qualified: redirect to the GHL Revenue Map calendar.
- Not qualified: "Thanks, {{contact.first_name}}. We'll review your answers and reach out within one business day."

## After booking
Workflow trigger "Customer Booked Appointment" sends `paid-invoice-email.html`.
Subject: Your Revenue Map Session is paid in full
Signature image: pending from Rich.
