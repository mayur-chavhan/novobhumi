import { motion, type MotionValue } from "framer-motion";
import type { DecorativeElement } from "./constants";

interface DecorativeIllustrationProps {
  element: DecorativeElement;
  parallaxY: MotionValue<number>;
  parallaxYSlow: MotionValue<number>;
  parallaxYFast: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

export function DecorativeIllustration({
  element,
  parallaxY,
  parallaxYSlow,
  parallaxYFast,
  shouldReduceMotion,
}: DecorativeIllustrationProps) {
  const getParallaxValue = () => {
    if (shouldReduceMotion) return 0;
    switch (element.parallaxType) {
      case 'slow':
        return parallaxYSlow;
      case 'fast':
        return parallaxYFast;
      default:
        return parallaxY;
    }
  };

  return (
    <motion.img
      src={element.src}
      alt=""
      aria-hidden="true"
      className={element.className}
      style={{ y: getParallaxValue() }}
      animate={
        shouldReduceMotion || !element.animation
          ? undefined
          : element.animation
      }
      transition={
        element.duration
          ? {
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }
          : undefined
      }
    />
  );
}
