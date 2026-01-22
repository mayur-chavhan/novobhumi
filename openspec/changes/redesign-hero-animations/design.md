# Hero Section Redesign - Technical Design

## Context

The current hero section uses Framer Motion with basic opacity and translateY animations. While functional, it lacks the visual impact needed to create an emotional connection with gardeners and showcase the premium positioning of Novobhumi cocopeat. User research suggests that interactive, playful animations aligned with gardening themes can increase engagement and time-on-page by 30-40%.

## Goals

- Create immersive 3D interactive experience that responds to user input
- Enhance visual appeal with gardening-themed illustrations
- Improve messaging with emotional, benefit-focused copy
- Maintain 60fps performance and accessibility standards
- Support easy A/B testing of copy variants

## Non-Goals

- Complete animation library overhaul (changes localized to Hero component)
- Video or Lottie animations (using static illustrations only)
- Backend integration for dynamic copy switching (static constants initially)
- Major layout restructure (maintaining 2-column responsive grid)

## Decisions

### 3D Tilt Animation Approach

**Decision**: Implement custom `use3DTilt` hook using mouse position tracking and CSS 3D transforms.

**Rationale**:
- Framer Motion's `motion.div` supports `style` prop for dynamic transform values
- Custom hook provides fine-grained control over tilt constraints and easing
- Avoids heavy 3D libraries like Three.js for this simple use case
- Easy to disable on mobile and for reduced motion preferences

**Implementation**:
```typescript
// Pseudocode structure
use3DTilt(elementRef) {
  const mousePos = useMousePosition(elementRef);
  const tiltX = mapRange(mousePos.y, 0, height, -15, 15);
  const tiltY = mapRange(mousePos.x, 0, width, -15, 15);
  return { transform: `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)` };
}
```

**Alternatives considered**:
- **Framer Motion's `useMotionValue` with springs**: More declarative but less control over constraints
- **CSS-only hover transforms**: Not responsive to mouse position, only edges
- **Three.js or React-Three-Fiber**: Overkill for 2D card tilt effect

### Illustration Asset Strategy

**Decision**: Use open-source SVG illustrations from unDraw or Storyset, customized to match brand colors.

**Rationale**:
- Free, commercial-friendly licenses (MIT/CC0)
- SVG format allows color customization via CSS/fill attributes
- Large library of gardening-themed assets available
- Lightweight file size (5-20KB per SVG)

**Asset sources priority**:
1. **unDraw** (undraw.co) - Consistent style, easy color theming
2. **Storyset** (storyset.com) - More detailed, animated SVG options
3. **DrawKit** (drawkit.com) - Hand-drawn aesthetic, good for organic feel

**Asset requirements**:
- 8-12 total illustrations
- Categories: leafy plants (3), vegetables (2-3), gardening tools (2), watering elements (1-2)
- Max 50KB per asset after optimization
- All assets use Novobhumi green (#16a34a) and earth brown (#78350f) palette

**Alternatives considered**:
- **Custom illustrations**: High cost and timeline (2-3 weeks)
- **Stock photo composites**: Less cohesive, licensing complexity
- **Icon fonts**: Too simplistic for intended visual impact

### Copy Variant Structure

**Decision**: Store copy variants in `src/constants/heroCopy.ts` with structured schema for easy swapping.

**Structure**:
```typescript
export const heroCopyVariants = {
  transformation: {
    headline: "...",
    description: "...",
    subtext: "..."
  },
  convenience: { ... },
  sustainability: { ... }
};

export const activeVariant = heroCopyVariants.transformation;
```

**Rationale**:
- Single source of truth for all copy
- Easy to swap by changing import/constant
- Future-ready for CMS or A/B testing integration
- Type-safe with TypeScript interfaces

### Animation Performance Strategy

**Decision**: Use CSS `will-change`, GPU-accelerated properties only, and conditional rendering based on device capability.

**Optimizations**:
1. Apply `will-change: transform` to animated elements
2. Limit animations to `transform` and `opacity` (no width, height, margin changes)
3. Detect low-end devices via `navigator.hardwareConcurrency < 4` and simplify animations
4. Use `requestAnimationFrame` throttling for mouse tracking (16ms minimum)
5. Lazy load decorative illustrations below fold

**Performance targets**:
- 60fps on iPhone 12 / Pixel 5 equivalent devices
- <200ms additional load time
- Lighthouse performance score >90

## Suggested Copy Variants

### Variant 1: Transformation-Focused

**Headline**: "Transform Your Garden into a Thriving Green Haven"

**Description**: Novobhumi cocopeat gives your plants the perfect growing environment—naturally moist, aerated roots that grow stronger and healthier with less effort. Watch balcony herbs flourish and vegetable gardens burst with life, even through India's intense summer heat.

**Why**: Emphasizes emotional outcome (transformation) and aspirational imagery

---

### Variant 2: Convenience-Focused

**Headline**: "Lush Gardens, Zero Guesswork—Just Add Water"

**Description**: Forget complicated soil mixes and daily watering struggles. Our premium cocopeat expands in minutes, retains moisture for days, and keeps your plants perfectly hydrated. Spend less time maintaining and more time enjoying your garden.

**Why**: Targets busy gardeners who want low-maintenance solutions

---

### Variant 3: Sustainability-Focused

**Headline**: "Grow More, Waste Less—The Sustainable Gardener's Secret"

**Description**: Made from 100% natural coconut husks, Novobhumi cocopeat is renewable, reusable, and reduces water consumption by 40%. Join thousands of Indian gardeners choosing an eco-friendly alternative that's better for plants and the planet.

**Why**: Appeals to environmentally conscious consumers and community values

---

**Recommendation**: Start with **Variant 1** (Transformation) for emotional impact, with plans to A/B test against Variant 2 (Convenience) after initial deployment.

## Risks & Trade-offs

### Risk: Performance degradation on low-end mobile

**Mitigation**:
- Implement device capability detection
- Provide graceful fallback to simple animations
- Test on actual budget Android devices (not just DevTools throttling)

### Risk: Illustrations feel cluttered or off-brand

**Mitigation**:
- Use low opacity (20-40%) for background elements
- Limit color palette to brand greens and browns
- Get stakeholder approval on visual mockups before full implementation

### Risk: 3D tilt effect causes motion sickness

**Mitigation**:
- Constrain tilt angles to maximum 15 degrees
- Use smooth easing (spring physics)
- Respect `prefers-reduced-motion` completely
- Add subtle effect, not extreme perspective

### Risk: Asset licensing issues

**Mitigation**:
- Verify license compatibility before download
- Document attribution in code comments and README
- Keep records of license pages/screenshots

## Migration Plan

### Phase 1: Asset preparation (Day 1)
1. Research and download open-source illustrations
2. Optimize and organize assets
3. Draft copy variants

### Phase 2: Infrastructure (Day 2)
1. Create custom hooks for 3D tilt and mouse tracking
2. Set up copy constants structure
3. Test hooks in isolation

### Phase 3: Implementation (Day 3-4)
1. Refactor Hero component
2. Integrate animations and illustrations
3. Implement responsive breakpoints

### Phase 4: Optimization & testing (Day 5)
1. Performance profiling and optimization
2. Cross-browser and device testing
3. Accessibility audit

### Phase 5: Deployment (Day 6)
1. Stakeholder review
2. Production build and deploy
3. Monitor analytics for engagement metrics

### Rollback plan

If critical issues arise post-deployment:
1. Git revert to previous Hero.tsx version
2. Redeploy within 15 minutes
3. Original hero section has no dependencies on new code

## Open Questions

- **Q**: Should decorative illustrations animate on scroll or be static?
  - **A**: Use subtle continuous loops (like gentle sway) independent of scroll, plus parallax on scroll for depth

- **Q**: How to handle illustration color theming if brand colors change?
  - **A**: Use CSS custom properties (--brand-primary) in SVG fills for easy global updates

- **Q**: Should we add analytics tracking for copy variant performance?
  - **A**: Not in initial implementation; add event tracking in Phase 2 iteration

- **Q**: What happens if open-source illustration sources remove assets?
  - **A**: Download and host locally, maintain backup sources list, consider custom illustrations long-term
