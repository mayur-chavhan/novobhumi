import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useMobileOptimizations } from "../../hooks";
import {
  DecorativeIllustration,
  HeroContent,
  HeroMarquee,
  HeroProductShowcase,
  ScrollDownButton,
  BACKGROUND_DECORATIONS,
} from "./Hero/index";

const Hero = () => {
  const { isMobile, shouldReduceAnimations } = useMobileOptimizations();
  const sectionRef = useRef<HTMLElement>(null);

  // Parallax scroll effect for decorative elements - disabled on mobile
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  
  // Disable parallax on mobile for performance
  const parallaxY = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? [0, 0] : [0, -120]
  );
  const parallaxYSlow = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? [0, 0] : [0, -60]
  );
  const parallaxYFast = useTransform(
    scrollYProgress, 
    [0, 1], 
    isMobile ? [0, 0] : [0, -180]
  );

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative flex min-h-screen items-start justify-center overflow-hidden bg-gradient-earth px-4 pt-28 pb-8 scroll-mt-0 sm:px-6 sm:pt-32 sm:pb-16 lg:px-8 lg:pt-32 lg:pb-24"
    >
      {/* Gradient overlay */}
      <div
        className="absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-white/50 to-transparent"
        aria-hidden="true"
      />

      {/* Background decorative illustrations - hidden on mobile for performance */}
      {!isMobile && (
        <div className="hidden sm:block">
          {BACKGROUND_DECORATIONS.map((element, index) => (
            <DecorativeIllustration
              key={index}
              element={element}
              parallaxY={parallaxY}
              parallaxYSlow={parallaxYSlow}
              parallaxYFast={parallaxYFast}
              shouldReduceMotion={shouldReduceAnimations}
            />
          ))}
        </div>
      )}

      <div className="relative z-10 mx-auto w-full max-w-7xl flex flex-col">
        {/* Mobile/Tablet Layout: Single Column - HeroContent handles product image */}
        <div className="lg:hidden flex-1">
          <HeroContent isDesktop={false} />
        </div>

        {/* Desktop Layout: Two Column Grid */}
        <div className="hidden lg:grid lg:grid-cols-2 lg:items-center lg:gap-12 flex-1">
          {/* Left column: Content */}
          <HeroContent isDesktop={true} />

          {/* Right column: Product showcase with enhanced 3D tilt */}
          <HeroProductShowcase isMobile={false} />
        </div>

        {/* Cocopeat Showcase Marquee - below content on mobile */}
        <div className="mt-8 sm:mt-12 lg:mt-16">
          <HeroMarquee />
        </div>
      </div>

      {/* Scroll Down Button - hidden on mobile */}
      {!isMobile && (
        <div className="hidden sm:block">
          <ScrollDownButton />
        </div>
      )}
    </section>
  );
};

export default Hero;
