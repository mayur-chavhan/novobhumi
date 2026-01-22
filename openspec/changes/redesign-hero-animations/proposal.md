# Redesign Hero Section with Advanced Animations

## Why

The current hero section uses basic fade and slide animations that don't create enough visual engagement or showcase the premium nature of Novobhumi cocopeat products. To increase conversion rates and time-on-page, we need a more immersive hero experience with 3D interactive animations, catchier messaging, and thematic gardening illustrations that emotionally connect with home gardeners.

## What Changes

- Replace basic fade/slide animations with 3D tilt and float effects that respond to mouse movement and scroll
- Implement interactive hover states with perspective transforms on hero elements
- Add decorative gardening-themed cartoon illustrations (plants, vegetables) in background and around product
- Integrate open-source illustration assets (unDraw, Storyset, or similar) with proper attribution
- Suggest 2-3 alternative headline and description combinations with stronger emotional hooks
- Enhance product showcase area with floating decorative elements
- Add subtle parallax effects to background decorative elements
- Maintain performance with optimized animation loops and reduced motion preferences

## Impact

- **Affected specs**: `hero-section` (new capability)
- **Affected code**:
  - `src/components/Hero.tsx` - Complete animation system rewrite
  - New assets folder structure for illustrations
  - Potential new utility hooks for 3D tilt/mouse tracking
  - Tailwind config may need perspective utilities
- **Dependencies**: Open-source illustration research and asset preparation
- **Performance considerations**: Animation optimizations for mobile devices
- **Breaking changes**: None (visual enhancement only)
