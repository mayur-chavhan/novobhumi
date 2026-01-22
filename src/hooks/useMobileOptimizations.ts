import { useState, useEffect } from 'react';
import { useReducedMotion } from 'framer-motion';

/**
 * Detects if the device is mobile based on screen width and touch capability
 */
export const useIsMobile = (breakpoint: number = 768): boolean => {
  const [isMobile, setIsMobile] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.innerWidth < breakpoint;
  });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < breakpoint);
    };

    // Check on mount
    checkMobile();

    // Listen for resize
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, [breakpoint]);

  return isMobile;
};

/**
 * Detects if the device has touch capability
 */
export const useIsTouchDevice = (): boolean => {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(
      'ontouchstart' in window || 
      navigator.maxTouchPoints > 0
    );
  }, []);

  return isTouch;
};

/**
 * Combined hook for mobile optimizations
 * Returns whether to reduce/disable animations for better performance
 */
export const useMobileOptimizations = () => {
  const isMobile = useIsMobile();
  const isTouch = useIsTouchDevice();
  const prefersReducedMotion = useReducedMotion();

  // Reduce animations on mobile touch devices or if user prefers reduced motion
  const shouldReduceAnimations = prefersReducedMotion || (isMobile && isTouch);

  // Disable heavy effects (parallax, 3D transforms) on mobile
  const shouldDisableHeavyEffects = isMobile;

  return {
    isMobile,
    isTouch,
    prefersReducedMotion: prefersReducedMotion ?? false,
    shouldReduceAnimations,
    shouldDisableHeavyEffects,
  };
};

/**
 * Returns optimized animation variants based on device
 */
export const useOptimizedAnimation = (
  fullAnimation: object,
  reducedAnimation: object = { opacity: 1 }
) => {
  const { shouldReduceAnimations } = useMobileOptimizations();
  return shouldReduceAnimations ? reducedAnimation : fullAnimation;
};
