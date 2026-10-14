# Design System Do and Don't List

## Component Usage

### Do:
- Use shadcn/ui components as the base for all UI elements
- Customize components through props and CSS variables only
- Extend components by composition when needed
- Use the design system tokens for all styling values
- Follow the existing component patterns and APIs
- Import components from `@/components/ui/` path
- Use variants and sizes consistently across the application

### Don't:
- Create custom CSS overrides or one-off styling
- Hard-code color, spacing, or typography values
- Re-implement components that already exist in shadcn/ui
- Use !important in CSS (except for very specific cases)
- Create duplicate components with slight variations
- Modify the base shadcn/ui component files directly
- Use inline styles for anything that can be achieved with tokens

## Token Usage

### Do:
- Use CSS variables for all color values (`var(--color-primary-500)`)
- Use CSS variables for all spacing values (`var(--spacing-4)`)
- Use CSS variables for all typography values (`var(--font-size-lg)`)
- Use CSS variables for all shadow values (`var(--shadow-md)`)
- Reference tokens consistently throughout the application
- Update tokens in the central location when changes are needed
- Use the Tailwind configuration that maps to CSS variables

### Don't:
- Use hard-coded hex colors (`#ff7c40`)
- Use hard-coded pixel values (`16px`, `1rem`)
- Use hard-coded font sizes (`18px`)
- Use hard-coded shadow values (`0 1px 3px 0 rgba(0,0,0,0.1)`)
- Create one-off token values for specific components
- Duplicate token definitions in multiple locations

## Layout and Composition

### Do:
- Use the provided layout primitives (Card, Sheet, Dialog, etc.)
- Compose complex components from simpler primitives
- Use consistent padding and spacing patterns
- Follow the established grid and layout systems
- Use responsive design principles with Tailwind's responsive prefixes
- Create reusable component compositions for common patterns

### Don't:
- Create custom layout solutions from scratch
- Use absolute positioning for layout (except for specific cases)
- Invent new spacing systems or grid layouts
- Create inconsistent padding/margin values
- Break the established visual hierarchy
- Ignore responsive design considerations

## Accessibility

### Do:
- Use semantic HTML elements when appropriate
- Ensure all interactive elements are keyboard accessible
- Provide adequate color contrast (WCAG AA minimum)
- Use proper ARIA labels and attributes
- Ensure touch targets are at least 44x44px
- Test with screen readers and assistive technologies
- Follow the accessibility patterns in shadcn/ui components

### Don't:
- Rely solely on color to convey information
- Create keyboard traps or inaccessible interactions
- Use insufficient color contrast ratios
- Remove or hide focus outlines without alternatives
- Create tiny or difficult-to-touch interactive elements
- Ignore accessibility testing in development process

## Naming Conventions

### Do:
- Use clear, descriptive names for components and props
- Follow camelCase for JavaScript/TypeScript identifiers
- Use kebab-case for CSS classes and HTML attributes
- Use PascalCase for component names and TypeScript interfaces
- Use UPPER_SNAKE_CASE for constants and configuration values
- Follow established naming patterns in the codebase
- Name components after their primary function or purpose

### Don't:
- Use ambiguous or unclear names
- Mix naming conventions inconsistently
- Use overly verbose or unnecessarily short names
- Create names that conflict with existing identifiers
- Use language-specific idioms that don't translate well
- Abbreviate words unnecessarily (unless universally understood)

## Performance Considerations

### Do:
- Lazy load components when appropriate
- Use React.memo for expensive render computations
- Split code at logical boundaries
- Optimize images and assets
- Use useCallback and useMemo judiciously
- Monitor bundle size and loading performance
- Follow Next.js optimization best practices

### Don't:
- Prematurely optimize without measuring
- Over-abstraction that hurts readability
- Block the main thread with long-running computations
- Load unnecessary dependencies
- Ignore performance budgets and metrics
- Create unnecessary re-renders through poor state management
