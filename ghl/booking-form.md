# GHL booking flow (agreed 2026-10-06)

Replaces the earlier two-step survey. Everyone books first. The five questions come after the time is held, and the time is released if they are not answered in 24 hours.

## The flow

1. **Short form** on `/v4/apply/`. First name, last name, mobile, business email, business name, website, and the SMS/email consent checkbox. Submit posts to the existing GHL webhook ("Website: Revenue Map application") and sends the visitor to the calendar with name, email and phone prefilled.
2. **Calendar.** They pick a time. GHL holds it (an appointment with status Unconfirmed).
3. **"Your time is held" email and text** (copy below). The email carries a thumbnail of Rich's video and a button to the confirm page.
4. **Confirm page** `/v4/confirm/?email={{contact.email}}&first_name={{contact.first_name}}&last_name={{contact.last_name}}&phone={{contact.phone}}`. Rich's video, then five questions. Submit posts to a second GHL webhook ("Website: confirm").
5. **Confirmed.** The workflow tags the contact `confirmed`, sets the appointment to Confirmed, and sends the invoice email (`paid-invoice-email.html`, subject "Your Revenue Map Session is paid in full").
6. **Not confirmed in 24 hours.** The workflow cancels the appointment (this frees the slot) and sends the "released" message.

## What must be set in GHL

- **Calendar "Revenue Map Session":** duration **30 minutes** (it was built as 60). Minimum scheduling notice **25 hours**, so a 24-hour hold always ends before the appointment starts. Weekday hours as built.
- **Workflow A, "Website: Revenue Map application"** (exists): create or update the contact, tag `revenue map lead`, note with the answers. Remove the qualification branch. Everyone goes to the calendar.
- **Workflow B, "Time held"** (new). Trigger: Customer Booked Appointment. Steps: send the email and text below, wait 12 hours, if tag `confirmed` is absent send the reminder, wait until 24 hours after booking, if tag `confirmed` is still absent cancel the appointment and send the released message.
- **Workflow C, "Website: confirm"** (new). Trigger: inbound webhook. Steps: find the contact by email, save the five answers to custom fields and a note, tag `confirmed`, update the appointment status to Confirmed, send the invoice email.
- **Site:** put Workflow C's webhook address into `confirmForm.webhook` in `src/directions/copy.ts`, and the video's embed address into `confirmForm.vsl`. Until then the confirm page shows a placeholder frame and the submit shows an error.

## Fields to create (custom fields on the contact)

| Field | Source question |
|---|---|
| Lifetime value | What is a customer worth to you over their lifetime? ($) |
| Average sale | What is your average sale price? ($) |
| Sources | How do you get business today? (multi-select) |
| Leads per month | About how many leads or inquiries do you get in a typical month? |
| CRM | What CRM or software do you use today? |

Questions 4 and 5 are proposed and can be swapped.

## Copy

### Right after booking (on screen in GHL's confirmation, if possible)
> **Congratulations, your time is held.**
> It isn't confirmed yet. Check your email to confirm within 24 hours.

### Email: your time is held
**Subject:** Your time is held. Confirm within 24 hours.

> Hi {{contact.first_name}},
>
> Your time is held for {{appointment.start_time}}. It isn't confirmed yet.
>
> Watch this one-minute video from me, then answer five quick questions. If I don't have them in 24 hours, the time is released so someone else can have it.
>
> [ video thumbnail linking to the confirm page ]
> **[ Confirm My Session ]**
>
> Rich Diaz
> GHD Agency

### Text
> {{contact.first_name}}, your time with Rich is held but not confirmed. Watch the video and answer 5 quick questions within 24 hours: {{confirm link}}. Reply STOP to opt out.

### Reminder (12 hours, only if not confirmed)
**Subject:** Your held time is released in 12 hours.

> Hi {{contact.first_name}}, your time for {{appointment.start_time}} is still held, and I need your answers to keep it. It takes two minutes. [ Confirm My Session ]

### Released
**Subject:** Your held time was released.

> Hi {{contact.first_name}}, I didn't get your answers, so I released your time. If you still want it, pick a new one here: [ calendar link ].

### Video script (about 60 seconds, Rich on camera, one take, no slides)
Say it like you are talking to one owner across a table. Do not mention the invoice or any price.

> **Hook.** "It's Rich. Your time is held, and I want to keep it for you. But it's not confirmed yet, and here's why that matters.
>
> **The problem.** "Inside almost every business there's money sleeping. Customers who called once and never got a real follow-up. Leads that went cold. A database nobody touches. I call it the Sleeping Giant, and my whole job is to wake it.
>
> **What the call is.** "On our call I put real numbers on what's slipping away, in time and in dollars. I use our software, and I come in with your numbers already in front of me. No pitch deck. No generic call.
>
> **The ask.** "So before we talk, I need five quick answers. What a customer is worth to you over their lifetime. Your average sale. How business finds you today. How many leads you get in a month. And what CRM you use. It takes two minutes.
>
> **The friction.** "I release any time that isn't confirmed after 24 hours, so someone else can have it. And if you're not ready to look at your numbers, don't book it.
>
> **The close.** "Answer the five questions right below this video. I'll see you on the call."

Teleprompter version (one line per breath):
It's Rich. Your time is held, and I want to keep it for you.
It isn't confirmed yet, and here's why that matters.
Inside almost every business there's money sleeping.
Customers who called once and never got a real follow-up.
Leads that went cold. A database nobody touches.
I call it the Sleeping Giant, and my job is to wake it.
On our call I put real numbers on what's slipping away, in time and in dollars.
I come in with your numbers already in front of me. No pitch deck. No generic call.
Before we talk, I need five quick answers.
What a customer is worth to you over their lifetime.
Your average sale. How business finds you today.
How many leads you get in a month. And what CRM you use.
Two minutes.
I release any time that isn't confirmed after 24 hours, so someone else can have it.
And if you're not ready to look at your numbers, don't book it.
Answer the five questions right below this video. I'll see you on the call.

Recording notes: landscape, eye level, good light, plain background. Host it unlisted on YouTube or Vimeo and send the embed link.

## Invoice
Sent only after the confirm step. `paid-invoice-email.html`: Revenue Map Session $997 and Written Growth Plan $500, paid by Rich Diaz, balance $0. The session length is not printed on the invoice.
