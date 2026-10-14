# Arvo Reach — Product Requirements Document

Oct 14, 2026 · @Jeff

Arvo Reach is a free web app that runs targeted outreach on autopilot: job seekers reach startups that are hiring now, and agencies and design studios reach small companies that likely need their work. Each user designs their own email style and sets a few rules. Arvo Reach then finds companies with a recent, public need, writes a personal email with DeepSeek from the user's own CV or case studies, sends it from the user's Gmail or Outlook mailbox, follows up once, and notifies the user when someone replies.

## 1. How Arvo Reach Works

&#91;embedded content: end-to-end flow · 10 steps\]

The user does four things once. Autopilot then repeats five steps every day and tells the user only when someone replies. The highlighted step is the safety core: no email goes out unless the second pass confirms every claim in it.

## 2. Problem and Opportunity

Outreach fails when it is a volume game. A message that arrives at the right moment, shows the sender understood the company, and comes from a healthy mailbox gets answered; a mass message gets ignored and damages the sender's reputation.

- **Job seekers** send generic applications that disappear. Many startup roles never reach big job boards, and hiring at small companies often runs through a founder's inbox. Finding the role, the right person, and the right words takes hours.
- **Agencies and design studios** depend on referrals. Cold outreach underperforms because it is untargeted, badly timed, and generic.
- **Both** need a way to act on a company's need while it is fresh, without spending their day on it.

Startups and small companies publish public signals of need: a job post, a funding announcement, a product launch. These are enough to decide who to contact and what to say. Language models can now write a specific, personal message cheaply, but unreviewed AI writing can invent facts. Arvo Reach's opportunity is to combine signal-based targeting with strictly grounded, validated writing, and offer it free to anyone who can set it up in minutes.

## 3. Goals, Non-Goals and Success Metrics

**Goals**

- A user goes from sign-up to autopilot running in under 15 minutes, with no daily work afterward beyond reading reply notifications.
- Every email is specific to a real, recent signal and truthful to the sender's own profile.
- Every user's mailbox stays healthy: sending slows or stops before reputation is damaged.
- The whole product runs on free-tier or self-built infrastructure at community scale.

**Non-goals**

- Charging users or building billing.
- Targeting large companies or enterprises.
- Sending from shared platform domains or from Arvo's own infrastructure on a user's behalf.
- Buying lead lists, or contacting anyone based on private data.
- Automatic filling of application forms at launch (see 14).
- Mailboxes other than Gmail and Outlook at launch (see 9).

**Success metrics** (initial targets, to be validated after launch)

| Metric | Target | How it is measured |
| --- | --- | --- |
| Time from sign-up to autopilot on | Under 15 minutes | Onboarding timestamps |
| Onboarding completion | At least 60% | Users who start vs. turn autopilot on |
| Reply rate, job seekers | At least 10% | Replies / emails sent |
| Reply rate, agencies | At least 5% | Replies / emails sent |
| Bounce rate | Under 3% | Bounces / emails sent |
| Unsubscribe rate | Under 2% | Unsubscribes / emails sent |
| Emails stopped by the fact check | Falling week over week | Failed checks / emails generated |
| Users still on autopilot after 30 days | At least 50% | Active rules after 30 days |

## 4. Users: Job Seekers and Agencies

Every user chooses one role during onboarding. The role decides the questions asked, the signals followed, and how emails are written. Both roles assume a non-technical user who wants to set things up once and let it run.

|  | Job seeker | Agency or design studio |
| --- | --- | --- |
| Who | Developer, designer, marketer or other professional looking for a role at a startup or small company | Small agency, studio or freelancer selling services such as web development, design or branding |
| Provides | CV, portfolio and profile links, target roles, locations, remote preference, deal-breakers | Services offered, portfolio sites, 2 to 5 case studies, ideal client profile, regions |
| Wants | Conversations with hiring founders and managers without sending applications by hand | A steady flow of conversations with companies that likely need their work now |
| Signals followed | Recent job posts at startups and small companies | Hiring, funding and launch signals, chosen per user |
| Email says | Why this role, and one or two relevant facts from the user's own experience | What the user noticed about the company, and one relevant case study |
| Success looks like | Replies and interviews | Replies and booked calls |

## 5. Compulsory Build Rules

These rules apply to every phase and every screen. A change that breaks one is not merged.

1. **shadcn/ui is the only component library.** Every element shadcn provides is imported from shadcn, added with the shadcn CLI into the project's components/ui folder. It is never recreated, re-implemented, or imitated by hand.
2. **The design system is built first.** Before any feature screen, the team studies this PRD end to end and builds the design system in section 6 covering every component and pattern the product needs.
3. **The design system is followed strictly.** Feature screens use only the components, tokens, spacing, type scale and page templates it defines. Anything missing is added to the design system and reviewed first, then used.
4. **Composed components** (those shadcn does not ship, such as a stepper or file dropzone) are assembled only from shadcn primitives, live in one dedicated folder, and are documented in the design system before use.
5. **No one-off styling.** Colors, radii, shadows and fonts come from design tokens. Hard-coded hex values and arbitrary pixel values do not appear in feature code.
6. **Review gate.** Every pull request is checked against two questions: does it hand-build something shadcn provides, and does it use anything not in the design system.

**Fixed stack.** Arvo Reach is a Next.js (App Router) app with TypeScript and Tailwind CSS, using Neon (PostgreSQL) as its only database. Nothing in the build swaps these out without the product owner's approval (see 16).

## 6. Design System

The design system is the first thing built and the only source of UI decisions afterward. Its direction is **warm and friendly, built for non-technical users**: soft warm surfaces, rounded shapes, generous space, plain language, and calm confirmations instead of alarming ones.

**Screens it must cover.** Sign-in; role choice; every onboarding step (profile, targeting, mailbox, rules, email design, sample review); dashboard; activity log; replies; job seeker to-do list; Email Template Studio; settings and account deletion; pause and safety states; the internal admin and design-system pages.

**Tokens** (proposed, finalized in the first phase; all expressed as shadcn theme variables)

- Color: warm neutral surfaces, one friendly primary accent, soft success, warning and error colors. Light theme by default; a dark theme from the same variables. All text and controls meet WCAG AA contrast.
- Type: one humanist sans-serif, with a fixed scale for headings, body, captions and a small mono style for technical values only.
- Shape and space: a larger-than-default corner radius, a 4/8-point spacing scale, soft low-contrast shadows, restrained motion.
- Voice: plain words. "Daily sending limit", not "throttle"; "Paused to protect your inbox", not "circuit breaker tripped".

**Component inventory.** Everything below is a shadcn component imported as-is, except the composed row.

| Group | Components | Used for |
| --- | --- | --- |
| Foundations | Button, Badge, Separator, Avatar, Skeleton, Tooltip | Everywhere |
| Forms | Form, Input, Textarea, Label, Select, Checkbox, RadioGroup, Switch, Slider, ToggleGroup, Command, Popover | Onboarding, rules, template settings |
| Layout | Card, Sidebar, Tabs, Accordion, Collapsible, ScrollArea, Breadcrumb, Sheet | App shell, dashboard, settings |
| Data | Table, Pagination, Chart, Progress | Activity log, metrics, limits |
| Feedback | Alert, Sonner, Dialog, AlertDialog | Confirmations, pause, deletion, errors |
| Navigation | DropdownMenu, Sidebar, Breadcrumb | Account menu, main navigation |
| Composed from the primitives above | Onboarding Stepper (Progress, Card), File Dropzone (Input, Card), Choice Card (RadioGroup, Card), Color Picker (Popover, Input, ToggleGroup), Lead Card (Card, Badge), Health Meter (Progress, Badge), Rule Summary (Card, Badge), Email Preview Frame (Card, ScrollArea, ToggleGroup), Empty State (Card, Button) | Onboarding, Template Studio, dashboard |

**What the design system delivers.** An internal page (for example /design-system) showing every component in every state: default, hover, focus, disabled, loading, error and empty. It also holds documented tokens and type scale, page templates (app shell, onboarding step, settings page, table page, detail view), a short do-and-don't list, and sign-off from the product owner before feature work begins.

## 7. Onboarding

Onboarding is a guided flow shown with the Onboarding Stepper. It saves after every step so a user can leave and return, and it is designed to finish in under 15 minutes.

1. **Sign up** with Google or Microsoft.
2. **Choose a role:** job seeker or agency/design studio.
3. **Tell us about you.**
   - Job seeker: upload a CV (PDF or Word); add portfolio, GitHub, LinkedIn and personal site links; check the skills, titles and experience Arvo Reach extracted; choose target roles, seniority, locations, remote preference and deal-breakers.
   - Agency: describe services; add portfolio sites; add 2 to 5 case studies (title, industry, challenge, action, result); describe the ideal client and regions.
4. **Set targeting:** maximum company size (the user's own limit), industries, regions, and which signals to follow (see 10).
5. **Connect a mailbox:** Gmail or Outlook, through a consent screen (see 9).
6. **Design your email:** pick a layout and set colors, font, signature and logo in the Email Template Studio, with a live preview (see 8).
7. **Set autopilot rules:** safe defaults are pre-filled (see 9).
8. **Review a sample:** Arvo Reach shows an email written from the user's own information in their chosen design. The user can adjust tone (formal or casual, short or detailed) and regenerate.
9. **Turn on autopilot.** The dashboard opens with a clear Pause control.

## 8. Email Template Studio

Every user designs how their emails look in the Email Template Studio. The studio is a settings screen with controls on the left and a live preview on the right, available during onboarding and any time afterward. Users get design control without being able to break deliverability or compliance.

**What users can configure**

| Setting | Options | Default | Limit |
| --- | --- | --- | --- |
| Layout | Plain (looks like a hand-typed email), Light (simple accent line and signature block), Card (header band with name and optional button) | Plain for job seekers; Light for agencies | Three layouts at launch |
| Accent color | Any color from the color picker | Primary token | Must pass a contrast check; the studio suggests a fix if it fails |
| Font | A short list of email-safe font stacks | System sans-serif | Fonts must render in Gmail and Outlook |
| Text size and spacing | Compact, comfortable | Comfortable | Two values |
| Logo or photo | One small image | None | One image, small file size, sent inline |
| Signature | Name, title, company, phone, website, up to three profile links | Filled from onboarding | Three links maximum |
| Button | One optional call-to-action button, such as "Book a call" or "View my portfolio" | Off | One button, one link |
| Footer | Sender details and unsubscribe line, with styling options | On | Cannot be removed |
| Follow-up design | Same as first email, or a lighter variant | Same | Applies to the one follow-up |

**Studio behavior**

- The preview uses the same renderer as real sends and the user's own profile plus a sample lead, in desktop and mobile widths and light and dark mode.
- The studio shows a plain-language deliverability hint: plain emails are more likely to reach the inbox than heavily styled ones. It warns, but does not block, when a user picks a richer layout.
- Users can send a test email to themselves from their connected mailbox. Test sends do not count toward the daily cap and are limited to three a day.
- Users can save more than one named design and choose which one autopilot uses. Reset to the default is always one click.

**How design and AI fit together**

DeepSeek writes only the words: a subject and a few short text fields returned as structured data (see 11). It never writes HTML or styling. A server-side renderer places those fields into the user's template and produces two parts, HTML with inlined styles built to display correctly in Gmail and Outlook, and a plain-text version that is always included. This keeps every email consistent with the user's design and removes any chance of the model producing broken or unsafe markup.

**Rules the renderer enforces**

- No tracking pixels and no remote stylesheets. Reply detection comes from the mailbox, not from open tracking.
- At most one image, and no attachments.
- Links limited to the signature, the optional button, and the unsubscribe link.
- The footer with sender details and unsubscribe link is always present.
- A template that fails any rule cannot be saved as the autopilot design.

## 9. Accounts, Mailbox Connection and Autopilot Rules

**Accounts**

- Users sign in with Google or Microsoft only. No passwords are stored.
- Every table is isolated by user, so no user can see another user's profile, messages or rules.
- Users can export their data and delete their account from settings. Deletion removes the CV, parsed profile, mailbox tokens, templates and message content.

**Mailbox connection**

- Users connect Gmail or Outlook through an OAuth consent screen. Mailboxes on custom domains work when they are hosted on Google Workspace or Microsoft 365, for example outreach@arvosoftware.site.
- Emails are sent through the Gmail API or Microsoft Graph, so they come from the user's real address and appear in their Sent folder.
- Replies are detected by reading threads that Arvo Reach started. No other mail is read.
- Tokens are stored encrypted. Users can disconnect at any time, which revokes access.
- Mailboxes hosted anywhere else are not supported at launch. Generic SMTP and IMAP support comes after launch.
- Google and Microsoft require app verification before public use, and reading mail triggers a stricter Google security review. Until it is complete, the app may be limited to a small number of test users, so verification starts early in the roadmap.

**Autopilot rules**

Users set these in plain language. Every rule has a safe default.

| Rule | What it controls | Default |
| --- | --- | --- |
| Minimum match score | Only leads at or above this score are written to and sent | 70 |
| Daily sending limit | Emails per day, never above the user's current safe cap (see 13) | 5 |
| Sending days and hours | When emails may go out, in the user's time zone | Weekdays, 9:00 to 17:00 |
| Company size limit | Maximum employees for a company to count as small | User sets it; suggested 50 |
| Signals to follow | Which signals create leads (see 10) | Role-based defaults |
| Excluded companies, domains, industries | Never contacted | None |
| Tone | Formal or casual, short or detailed | Casual, short |
| Follow-up | One follow-up if there is no reply after about 5 days | On |
| Email design | Which saved design autopilot uses (see 8) | Role-based default |
| Pause all | Stops every send immediately; Resume restarts | Always visible |

## 10. Lead Discovery and Enrichment

Signals are discovered **once for the whole platform** and then matched to users. No user triggers their own crawling. This is what lets free data sources serve many users. Each source is checked against its terms of use before it is added, and only public information is used.

**Signals**

| Signal | Public sources | Used by |
| --- | --- | --- |
| Job posts | RemoteOK, We Work Remotely, Hacker News "Who is hiring" threads, public job-board feeds of common applicant-tracking systems (Greenhouse, Lever, Ashby), company careers pages | Job seekers; agencies who follow hiring signals |
| Funding | Free RSS feeds from startup news sites and public announcements | Agencies |
| Launches and rebrands | Product Hunt, Show HN | Agencies |

Every signal stores its source link and date. Signals older than 14 days are discarded or heavily down-scored.

**Enrichment** is built in-house, free, and cached by company domain for at least 30 days. Users never supply API keys.

1. **Company data:** read the company's own website (about, team, contact and careers pages) for a description, size hints and stack hints. Companies above the user's size limit are skipped.
2. **Contact:** find the right person from the team page and public profiles: a founder, a hiring manager, or a head of design or engineering.
3. **Email:** use a published address when there is one; otherwise generate common patterns from the person's name and the company domain.
4. **Verification:** confirm the domain has mail servers and run a lightweight mailbox check where the server allows it. Catch-all domains are treated as lower confidence. An address that cannot be verified is not sent to.
5. **Respect:** follow robots.txt, rate-limit all crawling, and use public pages only.

**Matching and scoring.** Each signal, company and contact combination gets a score from 0 to 100 for each user:

| Factor | Maximum points |
| --- | --- |
| Signal recency | 30 |
| Fit with the user's target roles or services | 30 |
| Email confidence | 25 |
| Company size and region fit | 15 |

Only leads at or above the user's minimum score are queued. A company a user has already contacted is never contacted again by that user, and one user never has two open emails to the same company.

## 11. Email Writing with DeepSeek

DeepSeek writes every email and also reads the CV during onboarding. It is called from the server only, through a thin provider layer so the model can be swapped later without changing the product. No email is reviewed by a person before it goes out, so truthfulness is enforced by design, not by hope.

**Facts first.** At onboarding the CV, portfolio and case studies are turned into a list of short, separate facts about the user (a skill, a project, a result, a client). The user confirms or edits the list. Only facts on this list may appear in emails.

**The writing pipeline**

1. **Context:** the user's confirmed facts, the lead's signal and source link, public company details, and the user's tone settings.
2. **Generate:** DeepSeek returns structured fields: a subject, an opening line that cites the signal, one or two short body paragraphs, a low-pressure closing question, an optional P.S., and the IDs of the facts it used. It returns text only, never HTML (see 8).
3. **Fact check:** a second DeepSeek call at low temperature compares every claim in the draft against the fact list and the signal and returns pass or fail with reasons. Rule checks run alongside it: length, spam phrases, deceptive subject lines, links, and required footer details.
4. **Render:** passing fields are placed into the user's template.
5. **If it fails:** one retry with the reasons attached. If it fails again, the email is discarded, logged, and never sent.

**Writing rules**

- Never invent experience, clients, results, numbers, or a relationship with the company.
- Short: about 120 words or fewer, one specific observation about the company, one relevant fact about the sender, one easy ask.
- Job seeker emails explain interest in the role. Agency emails lead with what was noticed and one relevant case study.
- Subject lines are honest and specific, with no fake replies or forwards.

**Cost control.** Because the product is free, each user has a daily generation limit, company summaries are cached and reused, prompts stay short, and a platform-wide monthly budget slows generation automatically before it is exceeded.

**Privacy of the model call.** CV facts and lead details are sent to DeepSeek's API, so only the minimum fields are sent. Users are told this plainly during onboarding and in the privacy policy. Where DeepSeek's API processes data, and what that means for users in regions with transfer rules, needs a legal review before public launch (see 20). The provider layer allows a move to another or self-hosted model if that review requires it.

**Quality control.** A fixed set of test leads and profiles is run on every prompt change. A weekly sample of sent emails is audited for truthfulness and tone, and the fact-check failure rate is tracked as a product metric.

## 12. Sending, Follow-Ups and Replies

**Sending**

- Each user has their own schedule, run by a durable job queue (for example Inngest or QStash) rather than one shared cron job. Every job is idempotent, so a retry can never send twice.
- Emails go out only inside the user's chosen days and hours, with random gaps between sends and never in bursts. Gmail and Outlook daily limits are respected.
- Each sent email stores its thread and message IDs so replies and follow-ups stay in the same conversation.

**Lead states.** Every lead moves through the same states, visible in the activity log: Matched, Written, Checked, Sent, Followed up, Replied, Closed. A lead can also end as Skipped (failed the fact check or a rule), Bounced, or Unsubscribed.

**Follow-up**

- If there is no reply, Arvo Reach sends one follow-up about 5 days later in the same thread, inside sending hours and limits. It is written and fact-checked like the first email and uses the design chosen for follow-ups (see 8).
- After the follow-up, nothing more is sent to that lead.
- The follow-up is skipped if the lead replied, bounced, unsubscribed, or was suppressed in the meantime.

**When a lead replies**

- All follow-ups to that lead stop immediately.
- The lead moves to Replied and the user is notified in the app and by email, with a link to the thread in their own mailbox.
- Automatic out-of-office replies are recognized and do not count as replies.

**Bounces and unsubscribes**

- Delivery failures are detected from the mailbox, added to the suppression list, and counted toward the user's sender health.
- The unsubscribe link in every email opens a simple hosted page. One click adds the address to suppression at once and permanently.
- Replies that clearly ask to stop (matched by simple rules) are treated as unsubscribes and the user is told.

## 13. Sender Safety and Abuse Prevention

Signup is open and sending is fully automatic, so safeguards are part of the product, not an add-on. Gmail and Outlook do not report spam complaints back to Arvo Reach, so sender health is judged from bounces, unsubscribes, stop requests and mailbox-provider errors.

| Safeguard | Rule |
| --- | --- |
| Per-user safe cap | New users start at 5 emails a day. The cap rises step by step, to a maximum of 25, after clean weeks (bounces under 3%, no stop-request spikes). It never rises while a user is paused or flagged. |
| Global daily cap | A platform-wide ceiling on total sends, shared fairly so one heavy user cannot use up everyone's allowance. |
| New mailbox delay | No sending until at least 24 hours after a mailbox is connected. |
| Auto-pause | Sending stops automatically when bounces pass 3% of the last 50 sends, when the unsubscribe and stop-request rate passes 2%, when the mailbox provider returns a sending-limit or suspicious-activity error, or when more than 30% of generated emails fail the fact check. The user sees a plain explanation and the steps to resume. |
| Global suppression list | Addresses and domains that unsubscribed, bounced, or asked not to be contacted are blocked for every user. A public form lets any company ask not to be contacted. |
| Content rules | No deceptive subject lines, impersonation, or identical copy sent in bulk. Every email is written from the sender's own facts and the lead's signal. |
| Admin controls | An internal view lets operators pause one user or the entire platform immediately, see health metrics, and remove users who misuse the service. |
| Terms of use | Each user is the sender and responsible for lawful use. The terms list prohibited uses and are shown during onboarding in plain language. |

## 14. Dashboard and Job Seeker To-Do List

**Dashboard.** A calm home screen where the first thing visible is whether autopilot is running.

- Autopilot status with a large Pause and Resume control.
- This week: companies found, emails sent, follow-ups pending, replies.
- Replies list, newest first, each linking to the thread in the user's mailbox.
- Activity log: each lead, the signal that triggered it, the match score, the state, and the email as sent, so users can see exactly what autopilot is doing and why.
- Sender health meter showing the day's sending limit used and the mailbox's health.
- Rules summary with an edit link, and a shortcut to the Email Template Studio.

**Job seeker to-do list.** Many roles can only be applied to through a form or an applicant-tracking link. Those roles appear in a to-do list instead of being emailed. Each item shows the role, the company, the apply link, a ready-to-paste cover note, and suggested answers to common form questions, all written from the user's confirmed facts and fact-checked like emails (see 11). Users mark items done.

**After launch: automatic form filling.** Filling standard Greenhouse, Lever and Ashby forms for the user is a later phase. It needs a separate browser-automation worker that cannot run on serverless hosting, and it is fragile: forms change, CAPTCHAs block it, and some sites' terms restrict it. It ships only after the email loop is proven and users ask for it.

## 15. Compliance and Privacy

Each user is the sender of their emails, and Arvo Reach is designed to make lawful sending the default. A lawyer reviews the terms, privacy policy and regional rules below before public launch.

**Email rules**

- Every email shows the sender's real name and address and a valid postal address, which each user supplies during onboarding. Headers and subject lines are never misleading.
- Every email carries a working unsubscribe link that is honored immediately and permanently, across all users.
- Only public business contact information is used. No purchased lists and no private data.
- Some regions require prior consent for cold email, including parts of the EU for individual addresses and Canada. At launch, recipients in regions where consent is required are excluded unless legal review says otherwise.

**People contacted.** Any recipient can ask for their data to be deleted through a public form. Their address is removed and added to the global suppression list.

**User data**

- CVs, profiles, templates and messages are private to the user, used only to write their own outreach, and never shown to other users.
- Users can export or delete everything at any time. Message and lead content is kept for 12 months and then deleted; the suppression list is kept so that opt-outs are never lost.
- CV and lead details sent to the writing model are limited to what the task needs (see 11).

**Security**

- Mailbox tokens and uploaded files are encrypted. Mailbox access uses the narrowest scopes that work.
- Secrets live in environment variables, never in code.
- An audit log records every send, pause, rule change, admin action and deletion.

## 16. Architecture

&#91;embedded content: architecture · 4 tiers\]

The web app talks only to API routes. Discovery and enrichment are shared by all users, while matching, writing, sending and health checks run per user through the job queue. The writing service is highlighted because it is the only part that calls the language model.

**Technology stack**

- **App:** Next.js (App Router) with TypeScript and Tailwind CSS, hosted on Vercel. API routes serve the web app and the job queue.
- **UI:** shadcn/ui only, driven by the design system (see 5 and 6).
- **Database:** Neon (PostgreSQL), the only database, with strict per-user isolation.
- **Background work:** a durable job queue (for example Inngest or QStash) for per-user schedules, retries and rate limits.
- **Writing:** DeepSeek, called from the server through a thin provider layer (see 11).
- **Mailboxes:** Gmail API and Microsoft Graph through OAuth (see 9).
- **File storage:** an encrypted object store for CVs and email logos.
- **Later:** a separate worker service for browser automation if form filling is built.

**Main data tables.** Every table that holds user content carries the owning user's ID, and shared tables hold only public information.

| Table | What it holds |
| --- | --- |
| users | Account, role (job seeker or agency), status, current safe cap |
| mailbox\_connections | Provider, address, encrypted tokens, health |
| profiles | Parsed CV or services, portfolio links, case studies, confirmed fact list, tone settings |
| email\_templates | Saved designs as structured settings, with the one autopilot uses |
| autopilot\_rules | Score threshold, limits, hours, exclusions, signal choices, size limit |
| signals | Shared, de-duplicated public signals with source links |
| companies | Shared enrichment cache by domain |
| contacts | People and email addresses with a confidence level |
| matches | Scored lead combinations for each user |
| messages | Every email written, checked and sent, with state and thread IDs |
| message\_events | Sent, bounced, replied, unsubscribed |
| todo\_applications | Form-only roles with prepared answers |
| suppression | Global and per-user do-not-contact entries |
| platform\_limits | Global caps and current usage |
| model\_usage | Per-user and platform model calls and cost |
| audit\_log | Sends, pauses, rule changes, admin actions, deletions |

## 17. Non-Functional Requirements

- **Performance:** the dashboard loads in under 2 seconds; onboarding steps respond in under 1 second, except CV reading, which shows progress. The template preview updates in under 500 milliseconds after a change.
- **Reliability:** every external call retries with backoff; sending is idempotent; a failed job never blocks other users' queues.
- **Scalability:** built for thousands of users sending small daily volumes. Shared discovery and per-domain caching keep outside requests roughly flat as users grow.
- **Security:** encrypted tokens and files, least-privilege mailbox scopes, strict per-user data isolation, and secrets kept out of code.
- **Accessibility:** keyboard and screen-reader support through shadcn's accessible components, and WCAG AA contrast in the design tokens.
- **Responsive:** every screen, including the Template Studio, works on phones and desktops.
- **Observability:** logs and error tracking for every job, per-user sender health, and platform dashboards for caps, queue depth and model cost.
- **Language:** English at launch.

## 18. Roadmap

&#91;embedded content: roadmap · 7 phases, 7 gates\]

Each phase ends at a gate, shown as a diamond, and the next phase does not start until it passes. The highlighted phase is the one that depends on outside reviewers, so its paperwork starts in phase 1 while the team builds.

## 19. Risks and Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Google and Microsoft app verification takes longer than planned | Public launch is blocked | Start verification in the first phases; run a private beta with test users meanwhile |
| Users' mailboxes are damaged by sending | Loss of trust, harm to users | Low starting caps, warm-up, auto-pause, suppression, admin controls |
| The model invents facts in emails | Embarrassing or harmful sends | Confirmed fact list, strict grounding, second-pass fact check, discard on failure |
| DeepSeek API data handling conflicts with privacy rules or user expectations | Legal exposure, lost trust | Minimal data sent, plain disclosure, legal review before launch, provider layer that allows a swap |
| Free data sources change or disappear | Fewer leads | Several sources, in-house enrichment, shared cache, source checks |
| Email address verification is inaccurate | Higher bounce rate | Confidence levels, skip unverified addresses, auto-pause on bounces |
| Website crawling is restricted or blocked | Missing data, terms issues | robots.txt, rate limits, public pages only |
| Model costs on a free product | Service becomes unaffordable | Per-user caps, caching, short prompts, monthly platform budget with automatic slowdown |
| Styled emails render badly in some mail apps | Poor first impression | Table-based inlined HTML, limited layouts, tests across common mail apps, plain default |
| Cold-email laws differ by region | Legal exposure | Region exclusions at launch, honest footers, legal review |

## 20. Decisions and Open Questions

**Decided by the product owner**

- The product is Arvo Reach, ArvoSoftwares' flagship app, free for everyone.
- It serves job seekers and agencies or design studios, who sign up with Google or Microsoft only.
- Targets are startups and small companies only, with each user setting their own size limit.
- Autopilot sends fully automatically within user-set rules, from the user's own Gmail or Outlook mailbox.
- DeepSeek writes the emails, and users configure how their emails look in the Email Template Studio.
- Enrichment is free and in-house, with no user-supplied API keys.
- Agencies choose from hiring, funding and launch signals.
- One automatic follow-up goes out after about 5 days if there is no reply. A reply notifies the user and stops all follow-ups.
- Signup is open with a global daily sending cap.
- The design is warm and friendly. shadcn components are imported and never recreated, and the design system is built first and followed strictly.

**Recommended, pending confirmation**

- Gmail and Outlook OAuth only at launch, with SMTP and IMAP afterward.
- Job seeker form-only roles go to a to-do list at launch, with automatic form filling later.
- Per-user caps in addition to the global cap.
- A durable job queue instead of a single cron job, and shared central signal discovery.
- A plain email layout as the default for job seekers.

**Proposed numbers, to tune after launch:** starting cap 5 a day rising to 25; default minimum score 70; auto-pause at 3% bounces; enrichment cache of 30 days; message data kept 12 months.

**Open questions**

- What is the platform-wide daily send cap, and how is it shared fairly?
- What is the daily DeepSeek budget per user, and what does the legal review of its data handling conclude?
- Should users get an optional mode to preview and edit emails before they send, even though autopilot is the default?
- Which regions and languages are supported at launch?
- Who writes and reviews the terms of use and privacy policy?
- Does Arvo have brand colors and a typeface to feed the design system?
- Should power users ever be able to supply custom email HTML, or do layouts stay fixed?
