# Implementation Tasks

## 1. Research & Asset Preparation

- [x] 1.1 Research open-source illustration sources (unDraw, Storyset, Humaaans, DrawKit)
- [x] 1.2 Select 8-12 gardening-themed illustrations (plants, vegetables, tools, watering can)
- [x] 1.3 Download and optimize assets (SVG preferred, or compress to <50KB per PNG)
- [x] 1.4 Document license requirements and attribution in code comments
- [x] 1.5 Organize assets in `/assets/hero-illustrations/` directory
- [x] 1.6 Create asset manifest file listing all illustrations and their intended positions

## 2. Copy Development

- [x] 2.1 Draft 3 headline alternatives focusing on transformation, convenience, and sustainability
- [x] 2.2 Write matching descriptions for each headline (2-3 sentences each)
- [x] 2.3 Create copy constants in `src/constants/heroCopy.ts` with variant structure
- [x] 2.4 Get stakeholder feedback on copy options
- [x] 2.5 Select primary variant and document alternatives for future A/B testing

## 3. Animation Infrastructure

- [x] 3.1 Create custom hook `useMousePosition` for tracking cursor within element bounds
- [x] 3.2 Create custom hook `use3DTilt` that calculates perspective transform from mouse position
- [x] 3.3 Add Tailwind perspective utilities to `tailwind.config.js` if needed
- [x] 3.4 Implement scroll position tracking for parallax calculations
- [x] 3.5 Test hooks in isolation with basic demo component

## 4. Hero Section Redesign

- [x] 4.1 Refactor Hero.tsx component structure for new layout
- [x] 4.2 Implement 3D tilt effect on product showcase card with mouse tracking
- [x] 4.3 Add floating animation to product image with subtle vertical motion
- [x] 4.4 Integrate new headline and description with selected copy variant
- [x] 4.5 Position background decorative illustrations in corners (top-left, bottom-right)
- [x] 4.6 Add 4-6 floating illustration elements around product area
- [x] 4.7 Implement continuous subtle animation loops for decorative elements
- [x] 4.8 Add parallax scroll effect to background illustrations

## 5. Responsive & Accessibility

- [x] 5.1 Test 3D tilt effect across viewport sizes (disable on mobile <768px)
- [x] 5.2 Adjust illustration positions and sizes for tablet and mobile breakpoints
- [x] 5.3 Verify `prefers-reduced-motion` disables all 3D and parallax effects
- [x] 5.4 Ensure decorative images have empty alt tags (aria-hidden if purely decorative)
- [x] 5.5 Test keyboard navigation and focus states remain unaffected
- [x] 5.6 Verify color contrast remains WCAG AA compliant with new elements

## 6. Performance Optimization

- [x] 6.1 Apply `will-change` CSS to animated elements
- [x] 6.2 Use `transform` and `opacity` only for animations (no layout properties)
- [x] 6.3 Implement lazy loading for non-critical decorative images
- [x] 6.4 Test frame rate with Chrome DevTools Performance monitor (target 60fps)
- [x] 6.5 Profile memory usage and verify no leaks in animation loops
- [x] 6.6 Optimize SVG files with SVGO or similar tools
- [x] 6.7 Test on mid-range mobile device (or throttle in DevTools)

## 7. Testing & Validation

- [x] 7.1 Visual regression testing across Chrome, Safari, Firefox
- [x] 7.2 Test on actual iOS and Android devices
- [x] 7.3 Verify animations work smoothly with trackpad, mouse, and touch
- [x] 7.4 Check Lighthouse performance score (target >90)
- [x] 7.5 Get stakeholder approval on final design and animations
- [x] 7.6 Test with slow 3G network throttling
- [x] 7.7 Validate HTML structure and semantic correctness

## 8. Documentation & Cleanup

- [x] 8.1 Add code comments explaining animation logic and asset sources
- [x] 8.2 Document copy variants in README or separate doc
- [x] 8.3 Update CLAUDE.md with new hero section architecture notes
- [x] 8.4 Create brief animation guide for future developers
- [x] 8.5 Clean up any unused code or commented sections
- [x] 8.6 Run `npm run lint` and fix any new issues
- [x] 8.7 Run `npm run build` to verify production build succeeds
