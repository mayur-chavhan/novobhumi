import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

export interface MousePosition {
  x: number;
  y: number;
  relativeX: number; // 0 to 1, position relative to element width
  relativeY: number; // 0 to 1, position relative to element height
}

/**
 * Tracks mouse position within an element's bounds
 * Returns both absolute and relative (0-1) coordinates
 *
 * @param elementRef - Reference to the element to track mouse position within
 * @param throttleMs - Minimum milliseconds between updates (default 16ms = ~60fps)
 */
export const useMousePosition = (
  elementRef: RefObject<HTMLElement | null>,
  throttleMs: number = 16
): MousePosition => {
  const [mousePosition, setMousePosition] = useState<MousePosition>({
    x: 0,
    y: 0,
    relativeX: 0.5,
    relativeY: 0.5,
  });

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    let lastUpdate = 0;
    let rafId: number;

    const handleMouseMove = (event: MouseEvent) => {
      const now = Date.now();

      // Throttle updates using requestAnimationFrame and time check
      if (now - lastUpdate < throttleMs) return;

      rafId = requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        setMousePosition({
          x,
          y,
          relativeX: Math.max(0, Math.min(1, x / rect.width)),
          relativeY: Math.max(0, Math.min(1, y / rect.height)),
        });

        lastUpdate = now;
      });
    };

    const handleMouseLeave = () => {
      // Reset to center when mouse leaves
      setMousePosition({
        x: 0,
        y: 0,
        relativeX: 0.5,
        relativeY: 0.5,
      });
    };

    element.addEventListener('mousemove', handleMouseMove);
    element.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      element.removeEventListener('mousemove', handleMouseMove);
      element.removeEventListener('mouseleave', handleMouseLeave);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [elementRef, throttleMs]);

  return mousePosition;
};
