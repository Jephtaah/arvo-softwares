# Phase 1: Accounts and Onboarding

## Gate Criteria
- Complete user authentication system (Google/Microsoft OAuth)
- Full onboarding flow implemented and testable
- User data persistence working (Neon PostgreSQL)
- Email Template Studio functional with live preview
- All onboarding steps savable and resumable
- Sample email review and autopilot activation working

## Technology Stack
This phase implements the account and onboarding systems using the specified PRD technology stack:
- **Database**: Neon PostgreSQL for secure, isolated user data storage
- **Authentication**: Next.js API routes with Google OAuth 2.0 and Microsoft OAuth 2.0
- **Framework**: Next.js (App Router) with TypeScript for pages and API routes
- **UI**: shadcn/ui components styled with Tailwind CSS (from Phase 0 design system)
- **State Management**: React state and Next.js routing for onboarding flow
- **Storage**: Encrypted object store for CVs, logos, and uploaded files

## Overview
Phase 1 implements the user-facing account system and onboarding flow as described in PRD sections 7-9. This phase covers user sign-up, role selection, profile creation, mailbox connection, email template design, autopilot rules configuration, and sample review - all designed to be completed in under 15 minutes.

## Detailed Tasks

### 1. Authentication System
- [ ] Implement Google OAuth 2.0 authentication via Next.js API routes
- [ ] Implement Microsoft OAuth 2.0 authentication via Next.js API routes
- [ ] Create secure session management (encrypted cookies/JWT)
- [ ] Set up user isolation middleware (ensure RLS policies)
- [ ] Implement sign-in/sign-out flows
- [ ] Create auth protected routes and API endpoints
- [ ] Set up environment variables for OAuth credentials
- [ ] Implement token refresh mechanism
- [ ] Add security headers and CSRF protection
- [ ] Create audit log entries for auth events

### 2. User Data Model and Database
- [ ] Create users table (PRD section 16):
  - Account info, role (job_seeker/agency), status, current_safe_cap
- [ ] Create mailbox_connections table:
  - Provider, address, encrypted_tokens, health metrics
- [ ] Create profiles table:
  - Parsed CV or services, portfolio links, case studies, confirmed fact list, tone_settings
- [ ] Create email_templates table:
  - Saved designs as structured settings, with the one autopilot uses
- [ ] Create autopilot_rules table:
  - Score threshold, limits, hours, exclusions, signal choices, size limit
- [ ] Set up Neon PostgreSQL connection with proper SSL
- [ ] Implement Row Level Security (RLS) for user data isolation
- [ ] Create database migration scripts
- [ ] Set up connection pooling and timeout handling

### 3. Onboarding Flow Implementation
#### Step 1: Sign Up
- [ ] Create sign-up page with Google/Microsoft buttons using shadcn/ui
- [ ] Handle OAuth callbacks and user creation in Next.js API routes
- [ ] Set initial user status and defaults
- [ ] Create audit log entry for sign-up

#### Step 2: Role Selection
- [ ] Create role choice interface (job seeker vs agency/design studio)
- [ ] Store role in user profile
- [ ] Show different subsequent steps based on role selection

#### Step 3: Profile Creation
##### Job Seeker Path:
- [ ] CV upload handler (PDF/Word) with virus scanning
- [ ] CV text extraction service (using Apache Tika or similar)
- [ ] Portfolio/GitHub/LinkedIn/personal site link collectors
- [ ] Skill/title/experience extraction and confirmation UI
- [ ] Target role, seniority, location, remote preference selectors
- [ ] Deal-breaker configurator (keywords, companies to avoid)
- [ ] Fact list generator from CV data (for DeepSeek use)
- [ ] User confirmation/edit interface for fact list

##### Agency Path:
- [ ] Services description textarea
- [ ] Portfolio site URL collectors (2-5 fields)
- [ ] Case study creator (title, industry, challenge, action, result) - 2 to 5 instances
- [ ] Ideal client profile configurator
- [ ] Regions multi-selector
- [ ] Fact list generator from case studies/services
- [ ] User confirmation/edit interface for fact list

#### Step 4: Targeting Configuration
- [ ] Company size limit configurator (with suggested 50)
- [ ] Industries multi-selector (with search/filter)
- [ ] Regions multi-selector (with map integration option)
- [ ] Signals to follow checkboxes (role-based defaults):
  - Job seekers: Job posts
  - Agencies: Hiring, funding, launch signals
- [ ] Excluded companies/domains/industries input
- [ ] Save/load targeting presets

#### Step 5: Mailbox Connection
- [ ] Gmail OAuth implementation (scopes: gmail.send, gmail.readonly for thread detection)
- [ ] Microsoft Graph OAuth implementation (scopes: mail.send, mail.read)
- [ ] Connection status indicator with health metrics
- [ ] Disconnect/reconnect functionality
- [ ] Custom domain support detection (Google Workspace/M365)
- [ ] Token encryption at rest
- [ ] Mailbox health monitoring (rate limits, errors)
- [ ] Audit log entries for connection/disconnection events

#### Step 6: Email Template Studio
- [ ] Left panel controls implementation (per PRD section 8):
  - Layout selector (Plain, Light, Card - with role-based defaults)
  - Accent color picker (with contrast validation and auto-suggest)
  - Font selector (email-safe stacks only)
  - Text size/spacing toggle (Compact, Comfortable)
  - Logo/photo uploader (with size/type validation)
  - Signature builder (from profile data + custom links)
  - CTA button configurator (text, link, enabled/disabled)
  - Footer toggles and styling options (sender details + unsubscribe - cannot be removed)
  - Follow-up design selector (Same, Lighter variant)
- [ ] Right panel live preview:
  - Uses actual renderer (same as production sends)
  - Shows desktop/mobile views
  - Shows light/dark mode toggles
  - Uses sample lead data + user profile
  - Updates in <500ms per PRD NFR section 17
- [ ] Deliverability hints system (plain vs styled warnings)
- [ ] Test email sender (to self, limited to 3/day, doesn't count toward cap)
- [ ] Multiple named template saving/loading
- [ ] Reset to default functionality

#### Step 7: Autopilot Rules
- [ ] Rule configurators with safe defaults (per PRD section 9):
  - Minimum match score slider (default 70)
  - Daily sending limit selector (default 5, tied to safe cap)
  - Sending days/hours configurator (default weekdays 9-17)
  - Company size limit display/override
  - Signals to follow review/modify
  - Excluded lists review/modify
  - Tone configurator (formal/casual, short/detailed)
  - Follow-up toggle (default on)
  - Email design selector (from saved templates)
  - Pause all control (always visible)
- [ ] Rule validation and conflict detection
- [ ] Plain language rule descriptions
- [ ] Save/resume functionality after each step

#### Step 8: Sample Review
- [ ] Sample lead generator (based on user targeting)
- [ ] DeepSeek integration for sample email generation
- [ ] Fact check integration for sample validation
- [ ] Email rendering using selected template
- [ ] Tone adjustment controls (formal/casual, short/detailed)
- [ ] Regenerate sample button
- [ ] Clear visual indication this is a sample only

#### Step 9: Autopilot Activation
- [ ] Dashboard redirect with clear Pause/Resume control
- [ ] Autopilot status indicator
- [ ] Initial rule summary display
- [ ] Quick links to Edit Rules and Email Template Studio
- [ ] First-run tips/help system

### 4. Supporting Systems
- [ ] Implement fact list management service
- [ ] Create tone adjustment service (for sample review)
- [ ] Set up file storage for CVs and logos (encrypted object store)
- [ ] Implement audit logging for all onboarding steps
- [ ] Create onboarding progress tracking (allow leave/resume)
- [ ] Set up validation schemas for all user inputs
- [ ] Implement loading states and skeleton UIs
- [ ] Create error handling and retry mechanisms
- [ ] Add accessibility features (keyboard nav, screen reader support)
- [ ] Implement responsive design for all onboarding steps
- [ ] Set up analytics tracking for onboarding funnel
- [ ] Create help/tooltips system throughout onboarding

### 5. Email Template Studio Deep Dive
- [ ] Create template settings schema matching PRD section 8 table
- [ ] Implement layout renderer:
  - Plain: minimal styling, looks like hand-typed
  - Light: accent line + signature block
  - Card: header band with name + optional button
- [ ] Build color contrast validator (WCAG AA)
- [ ] Create font safety checker (email-safe fonts only)
- [ ] Implement logo/resizer with file size limits
- [ ] Build signature assembler with link limits (max 3)
- [ ] Create CTA button builder with URL validation
- [ ] Implement footer builder (required sender details + unsubscribe)
- [ ] Create follow-up variant generator (lighter version of main template)
- [ ] Build test email sender via Gmail/Microsoft APIs
- [ ] Implement template import/export functionality
- [ ] Create template sharing disablement (privacy protection)

## Acceptance Criteria
- User can complete sign-up in under 2 minutes
- Onboarding flow can be completed in under 15 minutes (PRD goal)
- All user data is properly isolated by user ID in Neon PostgreSQL
- CV and case study data is securely processed and stored
- Mailbox connections work for both Gmail and Outlook (including custom domains)
- Email Template Studio preview matches actual sent emails
- All onboarding steps save progress and can be resumed
- Sample email generation works with tone adjustment and regeneration
- Autopilot can be activated with clear visual feedback
- No personal data is exposed to other users
- All OAuth tokens are encrypted at rest
- Audit logs capture all significant user actions
- System handles network failures gracefully
- Responsive design works on mobile and desktop
- Accessibility compliance (WCAG AA) throughout onboarding flow

## Dependencies
- Phase 0: Design system must be complete and approved
- External: Google and Microsoft developer accounts for OAuth setup
- External: File storage service configuration (AWS S3, Cloudflare R2, etc.)

## Estimated Effort
- 3-4 weeks for a small team (2-3 backend developers, 2 frontend developers)

## Risks and Mitigations
- Risk: OAuth integration complexity
  Mitigation: Use established libraries (NextAuth.js, Auth.js); start with sandbox credentials
- Risk: CV parsing inaccuracies
  Mitigation: Provide manual correction UI; use multiple parsing libraries; set clear expectations
- Risk: Mailbox connection failures
  Mitigation: Comprehensive error handling; clear user guidance; fallback to manual IMAP/SMTP later
- Risk: Template rendering inconsistencies across email clients
  Mitigation: Use table-based inline CSS; test with Litmus or similar; start with safe defaults
- Risk: Onboarding drop-off due to complexity
  Mitigation: Progressive disclosure; clear progress indicators; ability to save/resume; optional tooltips