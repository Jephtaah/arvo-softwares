# Arvo Reach Milestones Documentation

This directory contains detailed milestone documentation for the Arvo Reach project, based on the Product Requirements Document (PRD). The PRD outlines a phased approach to building Arvo Reach, with each phase ending at a gate that must be passed before the next phase begins.

## Milestone Overview

### Phase 0: Foundation and Design System
- **Focus**: Building the design system as the foundation
- **Key Components**: shadcn/ui setup, design tokens, component library
- **Gate**: Design system completed and approved

### Phase 1: Accounts and Onboarding
- **Focus**: User authentication, profile creation, and onboarding flow
- **Key Components**: Google/Microsoft OAuth, CV processing, mailbox connection, Email Template Studio
- **Gate**: Complete onboarding flow functional (under 15 minutes)

### Phase 2: Discovery and Enrichment
- **Focus**: Lead generation and data processing pipeline
- **Key Components**: Signal discovery, in-house enrichment, matching/scoring, DeepSeek writing pipeline
- **Gate**: Shared discovery system and enrichment pipeline functional

### Phase 3: Writing, Designs and Sending
- **Focus**: Core outreach functionality
- **Key Components**: Email Template Studio completion, DeepSeek pipeline with fact checking, sending/follow-up systems
- **Gate**: Email sending and follow-up systems operational

### Phase 4: Safeguards and Dashboard
- **Focus**: Safety systems, user visibility, and control
- **Key Components**: Sender safety systems, dashboard, activity log, job seeker to-do list, legal pages
- **Gate**: Safety systems and dashboard fully functional

### Phase 5: Verification and Private Beta
- **Focus**: External validation and testing
- **Key Components**: Google/Microsoft app verification, private beta with invited users
- **Gate**: Verification completed and private beta validated

### Phase 6: Open Launch
- **Focus**: Public availability and scale
- **Key Components**: Open signup, global daily cap enforcement, system stability monitoring
- **Gate**: Open launch successfully executed

### After Launch: Post-Launch Items
- **Focus**: Enhancements and expansions post-launch
- **Key Components**: Automatic form filling, expanded mailbox support, advanced features
- **Note**: No gate - these items are implemented after launch based on priority and feedback

## Development Principles

All phases adhere to the Compulsory Build Rules outlined in the PRD Section 5:
1. shadcn/ui is the only component library
2. Design system is built first and followed strictly
3. No one-off styling - all colors, radii, shadows, and fonts come from design tokens
4. Composed components are assembled only from shadcn primitives
5. Review gate checks for hand-built shadcn replacements and non-design-system usage

## Technology Stack
- **App**: Next.js (App Router) with TypeScript and Tailwind CSS, hosted on Vercel
- **UI**: shadcn/ui only, driven by the design system
- **Database**: Neon (PostgreSQL) with strict per-user isolation
- **Background Work**: Durable job queue (Inngest or QStash equivalent)
- **Writing**: DeepSeek (via thin provider layer)
- **Mailboxes**: Gmail API and Microsoft Graph through OAuth
- **File Storage**: Encrypted object store for CVs and email logos

## Usage

Each milestone file contains:
- Detailed gate criteria for completion
- Comprehensive task breakdown
- Acceptance criteria
- Dependencies and risks
- Estimated effort allocations

Teams should use these documents to:
1. Plan sprints and development efforts
2. Track progress toward phase gates
3. Ensure all required components are built before proceeding
4. Maintain consistency with PRD requirements and technical standards

## Note on Phase 5
As noted in the PRD: "Phase 5 is mostly waiting on outside reviewers, not building." This phase focuses on Google and Microsoft app verification processes and private beta testing rather than active feature development.

## Note on After Launch
The After Launch stage holds post-launch enhancements that are not blocking for initial release. These items represent planned improvements to be implemented after the core system is stable and running in production.