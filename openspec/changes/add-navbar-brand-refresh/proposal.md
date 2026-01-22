## Why

Visitors currently land on a static hero without navigation cues or the refreshed brand visuals that now exist in the design kit. We need a stylish, sticky navbar plus an immersive hero revamp that highlights the flagship product with light 3D-style motion, while replacing all placeholder logos and product imagery with the supplied assets under the root `assets/` folder.

## What Changes

- Add a responsive, animated top navigation bar with logo, section anchor links, and a dedicated "Buy from Amazon" primary action
- Revamp the hero section to showcase the product image with layered 3D-esque motion/particles driven by Framer Motion
- Integrate the provided logo and product photos from `assets/` across hero and product highlight surfaces, ensuring accessibility and performance
- Tune layout spacing, hover/focus states, and scroll interplay so navbar and hero work cohesively across breakpoints

## Impact

- Affected specs: `site-navigation`, `brand-visuals`, `hero-showcase`
- Affected code: `src/App.tsx`, `src/components/Hero.tsx`, `src/components/Products.tsx`, `src/components/Footer.tsx`, new navbar component (e.g., `src/components/Navbar.tsx`), shared motion helpers under `src/`
