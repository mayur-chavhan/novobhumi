## ADDED Requirements

### Requirement: 3D Interactive Animations

The hero section SHALL implement 3D tilt and float animations that respond to user mouse movement and scroll position, creating an immersive experience while respecting user motion preferences.

#### Scenario: Mouse movement creates 3D tilt effect

- **WHEN** user moves mouse over hero section
- **THEN** product card and text elements tilt with perspective transform following cursor position
- **AND** tilt angle is constrained to prevent disorientation (max 15 degrees)
- **AND** animation smoothly interpolates using spring physics

#### Scenario: Elements float with scroll

- **WHEN** user scrolls through hero section
- **THEN** decorative elements move at different speeds creating parallax depth
- **AND** product image floats vertically with subtle easing
- **AND** text layers maintain readability throughout animation

#### Scenario: Reduced motion preference respected

- **WHEN** user has prefers-reduced-motion enabled
- **THEN** all 3D tilt and float animations are disabled
- **AND** simple fade-in animations are used instead
- **AND** full content remains accessible

### Requirement: Decorative Gardening Illustrations

The hero section SHALL display cartoon-style gardening illustrations (plants, vegetables, gardening tools) positioned as background decorations and floating elements around the product showcase.

#### Scenario: Background decorative elements displayed

- **WHEN** hero section loads
- **THEN** subtle gardening illustrations appear in background corners
- **AND** illustrations use soft opacity (20-40%) to avoid overwhelming content
- **AND** elements are positioned using absolute positioning with responsive breakpoints

#### Scenario: Product area has floating decorations

- **WHEN** product showcase is visible
- **THEN** small plant and vegetable illustrations float around the cocopeat block image
- **AND** floating elements have subtle continuous animation loops
- **AND** decorations complement but don't obscure the product image

#### Scenario: Illustrations load efficiently

- **WHEN** page loads on mobile or slow connections
- **THEN** illustration assets are optimized SVGs or compressed PNGs
- **AND** non-critical decorative images use lazy loading
- **AND** page load time increases by less than 200ms

### Requirement: Enhanced Hero Copy

The hero section SHALL present alternative headline and description options that use emotional hooks, specific benefits, and action-oriented language to increase engagement and conversion.

#### Scenario: Headline options provided

- **WHEN** reviewing copy alternatives
- **THEN** at least 2-3 headline variations are available
- **AND** each headline is 8-12 words focused on transformation or outcome
- **AND** headlines test different emotional angles (convenience, growth success, sustainability)

#### Scenario: Description emphasizes benefits over features

- **WHEN** hero description is displayed
- **THEN** copy leads with emotional benefits before technical details
- **AND** description uses active voice and direct address ("you" language)
- **AND** text maintains scannable structure with clear value propositions

#### Scenario: Copy variants are A/B testable

- **WHEN** implementing multiple copy options
- **THEN** component structure allows easy swapping between variants
- **AND** copy is stored in constants or config for simple updates
- **AND** character counts remain within design constraints

### Requirement: Performance Optimization

The hero section animations SHALL maintain 60fps performance on mid-range mobile devices and degrade gracefully on low-end hardware.

#### Scenario: Animations use GPU acceleration

- **WHEN** 3D animations are active
- **THEN** transforms use transform and opacity properties only
- **AND** will-change hints are applied to animated elements
- **AND** animations avoid triggering layout reflows

#### Scenario: Animation complexity adapts to device capability

- **WHEN** running on low-end mobile devices
- **THEN** complex 3D effects are simplified or disabled
- **AND** floating decorations use lighter animation loops
- **AND** user experience remains smooth without jank

#### Scenario: Memory usage is bounded

- **WHEN** hero section is mounted for extended periods
- **THEN** animation loops don't cause memory leaks
- **AND** event listeners are properly cleaned up on unmount
- **AND** illustration assets are cached efficiently

### Requirement: Open-Source Asset Integration

The hero section SHALL use properly attributed open-source gardening illustrations from sources like unDraw, Storyset, or similar platforms.

#### Scenario: Assets are researched and documented

- **WHEN** selecting illustration sources
- **THEN** license compatibility is verified (MIT, CC0, or commercial-friendly)
- **AND** attribution requirements are documented in code comments
- **AND** asset sources are listed in README or design documentation

#### Scenario: Placeholder structure supports future assets

- **WHEN** illustrations are not yet finalized
- **THEN** component structure includes placeholder slots with dimensions
- **AND** CSS classes support easy asset swapping
- **AND** fallback displays gracefully if assets missing

#### Scenario: Assets follow brand guidelines

- **WHEN** integrating illustrations
- **THEN** color palette matches Novobhumi brand (greens, earth tones)
- **AND** illustration style is consistent across all decorative elements
- **AND** visual weight complements rather than competes with product imagery
