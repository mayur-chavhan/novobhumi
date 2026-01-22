## ADDED Requirements

### Requirement: Responsive Top Navigation

The experience SHALL display a branded, sticky navigation bar that surfaces primary section anchors and a persistent "Buy from Amazon" call-to-action across supported devices.

#### Scenario: Desktop navigation layout

- **GIVEN** the viewport width is at least 1024px
- **WHEN** the page is loaded
- **THEN** the navigation bar SHALL show the logo at the left, section links spaced horizontally, and a highlighted "Buy from Amazon" button aligned right.

#### Scenario: Mobile navigation toggle

- **GIVEN** the viewport width is below 768px
- **WHEN** the user opens the navigation toggle
- **THEN** the navigation SHALL present an accessible menu (screen-reader labeled) with the logo, vertically stacked links, and the "Buy from Amazon" button inside the menu.

#### Scenario: Anchor link routing

- **WHEN** a navigation link is activated
- **THEN** the viewport SHALL scroll or jump to the corresponding page section (e.g., Hero, Benefits, Products, Contact) without obscuring section headings beneath the sticky bar.

#### Scenario: Sticky behavior and focus order

- **WHEN** the user scrolls the page
- **THEN** the navigation bar SHALL remain fixed to the top without obscuring content
- **AND** keyboard focus order SHALL include the logo, menu toggle/links, and call-to-action in logical sequence.
