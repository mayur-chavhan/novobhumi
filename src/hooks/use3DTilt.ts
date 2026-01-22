import { useMemo } from 'react';
import type { RefObject } from 'react';
import { useMousePosition } from './useMousePosition';
import { useReducedMotion } from 'framer-motion';

export interface TiltOptions {
  maxTiltX?: number; // Maximum rotation on X axis in degrees (default: 15)
  maxTiltY?: number; // Maximum rotation on Y axis in degrees (default: 15)
  perspective?: number; // CSS perspective value in pixels (default: 1000)
  scale?: number; // Scale factor on hover (default: 1.02)
  transitionSpeed?: number; // Transition duration in seconds (default: 0.3)
}

export interface TiltStyle {
  transform: string;
  transition: string;
}

/**
 * Creates a 3D tilt effect based on mouse position
 * Returns transform styles to apply to an element
 *
 * Respects prefers-reduced-motion and provides smooth spring-like easing
 *
 * @param elementRef - Reference to the element to tilt
 * @param options - Configuration options for tilt behavior
 */
export const use3DTilt = (
  elementRef: RefObject<HTMLElement | null>,
  options: TiltOptions = {}
): TiltStyle => {
  const {
    maxTiltX = 15,
    maxTiltY = 15,
    perspective = 1000,
    scale = 1.02,
    transitionSpeed = 0.3,
  } = options;

  const mousePos = useMousePosition(elementRef);
  const shouldReduceMotion = useReducedMotion();

  const tiltStyle = useMemo(() => {
    // Disable 3D effect if user prefers reduced motion
    if (shouldReduceMotion) {
      return {
        transform: 'none',
        transition: 'none',
      };
    }

    // Map relative mouse position (0-1) to tilt angles (-max to +max)
    // Center (0.5) = 0 degrees, edges map to max tilt
    const tiltX = (mousePos.relativeY - 0.5) * 2 * maxTiltX;
    const tiltY = (mousePos.relativeX - 0.5) * -2 * maxTiltY; // Negative for natural feel

    // Determine if mouse is hovering (not at center/default position)
    const isHovering = mousePos.relativeX !== 0.5 || mousePos.relativeY !== 0.5;
    const currentScale = isHovering ? scale : 1;

    return {
      transform: `perspective(${perspective}px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale(${currentScale})`,
      transition: `transform ${transitionSpeed}s cubic-bezier(0.4, 0, 0.2, 1)`,
    };
  }, [
    mousePos,
    shouldReduceMotion,
    maxTiltX,
    maxTiltY,
    perspective,
    scale,
    transitionSpeed,
  ]);

  return tiltStyle;
};

/**
 * Utility function to map a value from one range to another
 */
export const mapRange = (
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number
): number => {
  return ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;
};
