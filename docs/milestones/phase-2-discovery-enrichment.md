# Phase 2: Discovery and Enrichment

## Gate Criteria
- Signal discovery system running and populating shared signals table
- In-house enrichment pipeline functional and caching data
- Matching and scoring algorithm producing accurate results
- Lead state management system working
- Performance benchmarks met (shared discovery keeps external requests flat as users grow)

## Technology Stack
This phase implements the discovery and enrichment systems using the specified PRD technology stack:
- **Framework**: Next.js (App Router) with TypeScript for API routes and background processing
- **Database**: Neon PostgreSQL for shared tables (signals, companies, contacts) with proper indexing
- **Background Processing**: Durable job queue (Inngest/QStash or equivalent) for enrichment pipelines
- **API Layer**: Next.js API routes for signal ingestion, enrichment, and matching services
- **Caching**: Redis or equivalent for company enrichment cache (30-day TTL)
- **External APIs**: HTTP clients for signal sources (RemoteOK, We Work Remotely, Hacker News, Product Hunt, ATS systems)

## Overview
Phase 2 implements the core lead generation system as described in PRD sections 10-11. This phase covers signal discovery (job posts, funding, launches), in-house enrichment (company data, contact finding, email generation, verification), matching and scoring, and the DeepSeek writing pipeline with fact checking. The key innovation is shared discovery serving all users through caching, keeping external requests roughly flat as user count grows.

## Detailed Tasks

### 1. Signal Discovery System
- [ ] Create shared signals table (PRD section 16):
  - Shared, de-duplicated public signals with source links
  - Source link and date storage
  - Automatic discarding/down-scoring of signals older than 14 days
- [ ] Implement job post discovery:
  - RemoteOK RSS/API integration
  - We Work Remotely RSS/API integration
  - Hacker News "Who is hiring" thread parser (monthly)
  - Public job-board feeds integration (Greenhouse, Lever, Ashby ATS)
  - Company careers pages crawler (for known startup companies)
- [ ] Implement funding discovery:
  - Free RSS feeds from startup news sites (TechCrunch, VentureBeat, etc.)
  - Public announcement parsers (Press releases, blog posts)
- [ ] Implement launch/rebrand discovery:
  - Product Hunt API integration
  - Show HN thread parser (from Hacker News)
- [ ] Build signal deduplication system (by URL, content similarity)
- [ ] Create signal age-based scoring (recency factor: 30 points max)
- [ ] Implement signal source terms of use checking
- [ ] Set up respectful crawling (robots.txt, rate limiting, public pages only)
- [ ] Create signal ingestion pipeline with error handling
- [ ] Build signal API endpoints for matching system
- [ ] Implement signal monitoring and health dashboard

### 2. In-House Enrichment Pipeline
- [ ] Create companies table (PRD section 16):
  - Shared enrichment cache by domain (30-day TTL)
- [ ] Create contacts table (PRD section 16):
  - People and email addresses with confidence levels
- [ ] Build company data enrichment:
  - Website scraper (about, team, contact, careers pages)
  - Description extraction and summarization
  - Size hints extraction (from team pages, LinkedIn, etc.)
  - Tech stack hints extraction (from job posts, tech pages)
  - Employee count estimation (with confidence levels)
- [ ] Build contact enrichment:
  - Team page parsing for founders, hiring managers, heads of design/engineering
  - Public profile linking (LinkedIn, Twitter, etc.)
  - Role detection and confidence scoring
- [ ] Build email enrichment:
  - Published address detection and validation
  - Email pattern generation from person name + domain (first.last, first_last, etc.)
  - Confidence scoring for generated emails
- [ ] Implement mailbox verification:
  - DNS MX record checking
  - SMTP connection testing (where allowed)
  - Catch-all domain detection and handling
  - Lightweight mailbox validation (without sending actual email)
- [ ] Create enrichment caching system (30-day TTL by domain)
- [ ] Build enrichment queue system with priority handling
- [ ] Implement respectful enrichment (robots.txt, rate limiting, public pages only)
- [ ] Create enrichment monitoring and health dashboard
- [ ] Set up enrichment data validation and quality scoring

### 3. Matching and Scoring Algorithm
- [ ] Create matches table (PRD section 16):
  - Scored lead combinations for each user
- [ ] Implement scoring factors (PRD section 10.4):
  - Signal recency (30 points max) - from signal age
  - Fit with user's target roles/services (30 points max):
    - For job seekers: match signal to target roles, seniority, location preferences
    - For agencies: match signal to offered services, ideal client profile
  - Email confidence (25 points max) - from enrichment pipeline
  - Company size and region fit (15 points max):
    - Company size vs user's limit
    - Region match with user's targeting
- [ ] Build deduplication system:
  - Prevent contacting same company twice by same user
  - Prevent duplicate open emails to same company per user
- [ ] Create minimum score filtering (user-configurable, default 70)
- [ ] Implement scoring optimization (caching, batching)
- [ ] Build score explanation system (for transparency in activity log)
- [ ] Create matching pipeline with backpressure handling
- [ ] Implement real-time vs batch matching options
- [ ] Build matching API endpoints for lead queue system

### 4. DeepSeek Writing Pipeline
- [ ] Create messages table (PRD section 16):
  - Every email written, checked and sent, with state and thread IDs
- [ ] Create message_events table (PRD section 16):
  - Sent, bounced, replied, unsubscribed events
- [ ] Build DeepSeek provider layer (thin abstraction for model switching)
- [ ] Implement context builder for PRD section 11.3:
  - User's confirmed facts
  - Lead's signal and source link
  - Public company details from enrichment
  - User's tone settings (formal/casual, short/detailed)
- [ ] Build DeepSeek generation call (PRD section 11.3.2):
  - Structured output: subject, opening line (cites signal), 1-2 body paragraphs
  - Low-pressure closing question, optional P.S.
  - Facts used IDs return
  - Text-only output (no HTML/styling)
- [ ] Implement fact check system (PRD section 11.3.3):
  - Second DeepSeek call at low temperature
  - Detailed prompt for claim-by-claim validation
  - Cross-referencing against:
    - User's confirmed fact list
    - Lead signal and source
    - Public company data
  - Pass/fail determination with specific failure reasons
  - Rule-based validation integration:
    - Length limits (too long/short)
    - Spam phrase detection
    - Deceptive subject line detection (RE: FW:, fake urgency)
    - Link validation (count, destination, shortening services)
    - Required footer detail validation
  - Structured failure reporting for retry logic
- [ ] Implement retry logic (PRD section 11.3.5):
  - Single retry attempt with failure reasons attached to context
  - Prompt adjustment based on specific failures
  - Final discard on second failure with detailed logging
  - Never-send guarantee for twice-failed emails
  - Metrics collection on failure rates and reasons
- [ ] Build writing rules enforcement system:
  - Anti-hallucination guards:
    - Experience invention prevention
    - Client/customer fabrication prevention
    - Result/number/metric falsification prevention
    - Relationship pretension prevention
  - Length enforcement (~120 words target, hard limit)
  - Structure enforcement:
    - One specific observation about company (from signal)
    - One relevant fact about sender (from fact list)
    - One easy, low-pressure ask
  - Role-specific content enforcement:
    - Job seeker: interest explanation in role + relevant background
    - Agency: noticed detail about company + relevant case study
  - Subject line integrity:
    - Honest and specific representation
    - No fake replies/forwards (RE:/, FW:/ without actual thread)
    - No false urgency or scarcity tactics
    - Clear identification of purpose
- [ ] Implement cost control systems (PRD section 11.4):
  - Per-user daily generation limit enforcement
  - Company summary caching (by domain, TTL-based)
  - Prompt optimization and token minimization
  - Platform-wide monthly budget monitoring
  - Automatic generation slowdown before budget exceeded
  - Usage tracking and reporting per user
- [ ] Finalize privacy-preserving data sending (PRD section 11.5):
  - Minimum necessary data transmission to LLM API
  - PII stripping and minimization strategies
  - Plain language disclosure during onboarding
  - Detailed explanation in privacy policy
  - Audit logging of LLM API calls (without storing full context)
  - Provider layer for model switching if legal review requires
- [ ] Build quality control systems (PRD section 11.6):
  - Fixed test leads/profiles for prompt regression testing
  - Weekly sent email audit for truthfulness and tone
  - Fact-check failure rate tracking as product metric

### 5. Email Rendering System
- [ ] Build template renderer (PRD section 8.6):
  - Server-side rendering of DeepSeek output into user's template
  - Production of HTML with inlined styles (Gmail/Outlook compatible)
  - Production of plain-text version (always included)
  - Consistent styling with user's design choices
  - Prevention of broken/unsafe markup from model
- [ ] Implement renderer rules enforcement (PRD section 8.7):
  - No tracking pixels or remote stylesheets
  - Reply detection from mailbox (not open tracking)
  - Max one image, no attachments
  - Links limited to signature, optional button, unsubscribe link
  - Required footer with sender details and unsubscribe line
  - Prevention of saving templates that fail rules
- [ ] Build email ID/storage system (thread and message IDs for conversation tracking)
- [ ] Create email queuing system for sending pipeline
- [ ] Implement email preview system (matching Template Studio preview exactly)
- [ ] Build email localization system (future-proofing for i18n)

### 6. Lead State Management
- [ ] Define and implement lead state machine (PRD section 12.2):
  - Matched → Written → Checked → Sent → Followed up → Replied → Closed
  - Terminal states: Skipped (fact check/rule failure), Bounced, Unsubscribed
- [ ] Build state transition triggers and validation
- [ ] Create activity log implementation (PRD section 14.4):
  - Each lead: signal, match score, state, email as sent
  - User visibility into exactly what autopilot is doing and why
- [ ] Implement state-based UI filters and views
- [ ] Build state transition audit logging
- [ ] Create state-based notification system (for Replied state)
- [ ] Implement state data retention policies

### 7. Infrastructure and Performance
- [ ] Set up durable job queue (Inngest/QStash or similar) for per-user operations
- [ ] Implement idempotent job design (prevents double sends on retry)
- [ ] Build rate limiting system (respects Gmail/Outlook daily limits)
- [ ] Create sending schedule system (user's chosen days/hours with random gaps)
- [ ] Implement burst prevention (no sending in bursts)
- [ ] Build shared caching layer (Redis or similar) for:
  - Signal data
  - Company enrichment (30-day TTL)
  - Contact data
  - Model responses
- [ ] Implement database indexing strategy for performance
- [ ] Build connection pooling for external services
- [ ] Create monitoring and alerting for pipeline health
- [ ] Set up automated scaling signals (queue depth, response times)
- [ ] Implement graceful degradation for external service failures

### 8. Testing and Validation
- [ ] Create synthetic signal generators for testing
- [ ] Build enrichment test suites with known-good data
- [ ] Create matching algorithm validation tests
- [ ] Build DeepSeek pipeline test fixtures (known inputs/outputs)
- [ ] Implement end-to-end lead flow tests
- [ ] Create performance benchmarks:
  - Shared discovery keeps external requests flat as users grow
  - Enrichment cache hit rate >80% for active domains
  - Matching latency <2s per lead
  - Email generation latency <5s per email
- [ ] Build A/B testing framework for scoring algorithms
- [ ] Create fact-check accuracy measurement system
- [ ] Implement spam complaint simulation testing
- [ ] Create load testing scenarios (1000+ concurrent users)

## Acceptance Criteria
- Signal discovery system ingests from all PRD-listed sources
- Signals older than 14 days are automatically scored lower or discarded
- In-house enrichment produces company data, contacts, and emails with confidence scores
- Mailbox verification works where domains allow it
- Matching algorithm correctly implements all four scoring factors
- Duplicate prevention works (no repeat contacts, no duplicate open emails)
- DeepSeek pipeline generates emails from user facts and signal data only
- Fact check catches hallucinations and prevents sending invalid emails
- Renderer produces Gmail/Outlook compliant HTML+text emails
- All renderer rules are enforced (no tracking, proper links, required footer)
- Lead state machine tracks all states correctly
- Activity log shows complete lead journey with sent email content
- Shared discovery keeps external API calls roughly flat as user base grows
- Enrichment caching achieves target hit rates
- System handles rate limits and external service failures gracefully
- Performance benchmarks met under expected load
- All user data remains properly isolated
- Audit trails capture all significant system actions

## Dependencies
- Phase 0: Design system must be complete
- Phase 1: User accounts and profiles must be functional
- External: APIs for signal sources (RemoteOK, We Work Remotely, HN, Product Hunt, ATS systems)
- External: DeepSeek API access (or alternative LLM provider)
- External: Email sending APIs (Gmail API, Microsoft Graph)
- External: Enrichment data sources (company websites, public profiles)
- External: Durable job queue service (Inngest/QStash or equivalent)
- External: Caching service (Redis or equivalent) for enrichment cache

## Estimated Effort
- 4-5 weeks for a small team (2 backend engineers focused on pipelines, 1 frontend/admin engineer, 1 DevOps/infrastructure)

## Risks and Mitigations
- Risk: Signal sources change or become unavailable
  Mitigation: Multiple redundant sources; modular source plugins; in-house enrichment as fallback
- Risk: Enrichment inaccuracies leading to poor matches
  Mitigation: Confidence scoring; user feedback loops; manual override capabilities
- Risk: DeepSeek hallucinations despite fact checking
  Mitigation: Multi-layer validation; conservative thresholds; human audit sampling
- Risk: Email deliverability issues
  Mitigation: Strict rendering rules; spam testing; warm-up procedures; feedback loops
- Risk: Performance degradation as user base grows
  Mitigation: Shared discovery; aggressive caching; database indexing; queue monitoring
- Risk: Legal/compliance issues with data usage
  Mitigation: Terms of use checking; public data only; minimal data sharing; privacy by design
- Risk: Model cost overruns on free tier
  Mitigation: Per-user limits; caching; prompt optimization; budget monitoring with auto-slowdown