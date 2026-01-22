## ADDED Requirements

### Requirement: Source Of Truth Brand Assets

The site SHALL use the latest logo and product imagery supplied under the project `assets/` directory in all hero and product showcase sections.

#### Scenario: Hero brand identity

- **WHEN** the hero section renders on any viewport
- **THEN** it SHALL display the provided logo asset with descriptive alternative text replacing the current text-only treatment.

#### Scenario: Product gallery refresh

- **WHEN** the product highlight cards render
- **THEN** each SHALL load the corresponding product photo from `assets/` with meaningful alt text and responsive sizing that maintains aspect ratio.

#### Scenario: Asset updates remain performant

- **WHEN** the updated assets are bundled for production
- **THEN** build artifacts SHALL remain optimized (no images over 500KB) and the site SHALL pass `npm run build` without asset-related errors.
