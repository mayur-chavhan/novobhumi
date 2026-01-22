## ADDED Requirements

### Requirement: Immersive Product Hero

The hero section SHALL spotlight the flagship product image alongside primary messaging and layered 3D-style motion effects that reinforce Novobhumi's premium positioning.

#### Scenario: Product focal point with motion layers

- **WHEN** the hero renders on desktop or tablet viewports
- **THEN** the product image from `assets/` SHALL appear centered or right-aligned with supporting copy, and animated accent layers (e.g., rotating particles/rings via Framer Motion) SHALL orbit without obscuring the product.

#### Scenario: Accessible motion preferences

- **WHEN** the user has `prefers-reduced-motion` enabled
- **THEN** the hero SHALL render a static presentation (no continuous animations) while maintaining layout integrity.

#### Scenario: Mobile stacking

- **WHEN** the viewport width is below 768px
- **THEN** the hero SHALL stack copy above the product image, ensure the animation adapts without overflow, and keep the primary call-to-action visible without horizontal scrolling.
