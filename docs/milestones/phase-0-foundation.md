# Phase 0: Foundation and Design System

## Gate Criteria
- Design system completed and approved
- shadcn/ui properly installed and configured
- All tokens defined and documented
- Component inventory verified against PRD requirements
- Internal design system page (/design-system) showing all components in all states

## Technology Stack
This phase establishes the core technology stack as specified in the PRD:
- **Framework**: Next.js 14 (App Router) with TypeScript
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Project Setup**: Initial repository configuration, linting, and formatting tools
- **Foundation**: Git setup, environment configuration, and basic project structure

## Overview
Phase 0 establishes the technical and design foundation for Arvo Reach. This phase focuses exclusively on building the design system as mandated by the PRD's Compulsory Build Rules (section 5), which states: "The design system is built first. Before any feature screen, the team studies this PRD end to end and builds the design system in section 6 covering every component and pattern the product needs."

## Detailed Tasks

### 1. Project Setup
- [ ] Initialize Next.js 14 (App Router) project with TypeScript
- [ ] Configure Tailwind CSS with shadcn/ui preset
- [ ] Install and configure shadcn/ui components
- [ ] Set up ESLint and Prettier for code quality
- [ ] Configure TypeScript strict mode
- [ ] Set up Git repository with appropriate .gitignore
- [ ] Configure environment variables template (.env.example)

### 2. Design System Foundation
- [ ] Define color palette following PRD section 6.2:
  - Warm neutral surfaces
  - One friendly primary accent color
  - Soft success, warning, and error colors
  - Light theme by default with dark theme from same variables
  - All text and controls meet WCAG AA contrast
- [ ] Define typography system:
  - One humanist sans-serif font
  - Fixed scale for headings, body, captions
  - Small mono style for technical values only
- [ ] Define spacing and shape system:
  - Larger-than-default corner radius
  - 4/8-point spacing scale
  - Soft low-contrast shadows
  - Restrained motion specifications
- [ ] Define voice and tone guidelines:
  - Plain words preference (e.g., "Daily sending limit" not "throttle")
  - Calm, friendly language patterns

### 3. Component Implementation (per PRD section 6.3)
#### Foundations
- [ ] Button (all variants: default, destructive, outline, secondary, ghost, link)
- [ ] Badge (all variants: default, secondary, destructive, outline)
- [ ] Separator
- [ ] Avatar (with fallback and image variants)
- [ ] Skeleton
- [ ] Tooltip

#### Forms
- [ ] Form (with validation integration)
- [ ] Input (all types: text, email, password, number, etc.)
- [ ] Textarea
- [ ] Label
- [ ] Select
- [ ] Checkbox
- [ ] RadioGroup
- [ ] Switch
- [ ] Slider
- [ ] ToggleGroup
- [ ] Command
- [ ] Popover

#### Layout
- [ ] Card
- [ ] Sidebar
- [ ] Tabs
- [ ] Accordion
- [ ] Collapsible
- [ ] ScrollArea
- [ ] Breadcrumb
- [ ] Sheet

#### Data
- [ ] Table (with sorting, pagination capabilities)
- [ ] Pagination
- [ ] Chart (recharts or similar integration)
- [ ] Progress

#### Feedback
- [ ] Alert
- [ ] Sonner (toast notifications)
- [ ] Dialog
- [ ] AlertDialog

#### Navigation
- [ ] DropdownMenu
- [ ] Sidebar (with collapsible variants)
- [ ] Breadcrumb

### 4. Composed Components (per PRD section 6.3)
- [ ] Onboarding Stepper (using Progress, Card primitives)
- [ ] File Dropzone (using Input, Card primitives)
- [ ] Choice Card (using RadioGroup, Card primitives)
- [ ] Color Picker (using Popover, Input, ToggleGroup primitives)
- [ ] Lead Card (using Card, Badge primitives)
- [ ] Health Meter (using Progress, Badge primitives)
- [ ] Rule Summary (using Card, Badge primitives)
- [ ] Email Preview Frame (using Card, ScrollArea, ToggleGroup primitives)
- [ ] Empty State (using Card, Button primitives)

### 5. Design System Documentation
- [ ] Create internal design system page at `/design-system`
- [ ] Document all components in every state:
  - Default
  - Hover
  - Focus
  - Disabled
  - Loading
  - Error
  - Empty
- [ ] Document tokens and type scale with usage examples
- [ ] Define page templates:
  - App shell template
  - Onboarding step template
  - Settings page template
  - Table page template
  - Detail view template
- [ ] Create do-and-don't list for design system usage
- [ ] Obtain product owner sign-off before proceeding to Phase 1

### 6. Development Infrastructure
- [ ] Set up Storybook for component documentation and testing
- [ ] Configure Jest and React Testing Library for unit testing
- [ ] Set up E2E testing framework (Playwright or Cypress)
- [ ] Configure lint-staged and husky for pre-commit hooks
- [ ] Set up automated accessibility testing (axe-core)
- [ ] Configure build optimization (TurboPack if applicable)

### 7. Initial Architecture Setup
- [ ] Set up Next.js App Router structure
- [ ] Configure route groups for public vs protected routes
- [ ] Set up API route structure
- [ ] Configure database connection (Neon PostgreSQL) - prepare for Phase 1
- [ ] Set up authentication middleware scaffolding
- [ ] Configure error boundaries and loading states
- [ ] Set up logging and error tracking infrastructure

## Acceptance Criteria
- All shadcn/ui components from PRD section 6.3 are properly imported and customized via design system
- No custom CSS overrides or one-off styling exists in the codebase
- Design system page shows 100% of required components in all states
- All tokens are defined as CSS variables and used consistently
- Components follow accessibility guidelines (WCAG AA)
- No hardcoded color values, spacing values, or typography values in component code
- Project builds successfully with no TypeScript errors
- Storybook runs and documents all components
- Product owner has signed off on the design system

## Dependencies
- None (this is the foundation phase)

## Estimated Effort
- 2-3 weeks for a small team (2-3 developers + 1 designer)

## Risks and Mitigations
- Risk: Design system takes longer than expected
  Mitigation: Timebox component creation; prioritize core components first
- Risk: Integration issues with Next.js App Router
  Mitigation: Start with simple proof of concept; incrementally add complexity
- Risk: Token definitions don't cover all use cases
  Mitigation: Build extensible token system; plan for iterative refinement