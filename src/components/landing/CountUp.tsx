import { useEffect, useRef } from "react";
import { animate, useInView, useReducedMotion } from "framer-motion";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

/**
 * Number that counts up when scrolled into view — like watching a
 * measuring jug fill with water.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.6,
  decimals = 0,
  prefix = "",
  suffix = "",
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (!inView) {
      node.textContent = `${prefix}${from.toFixed(decimals)}${suffix}`;
      return;
    }

    if (shouldReduceMotion) {
      node.textContent = `${prefix}${to.toFixed(decimals)}${suffix}`;
      return;
    }

    const controls = animate(from, to, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (value) => {
        node.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, decimals, prefix, suffix, shouldReduceMotion]);

  return (
    <span ref={ref} className={`tabular-nums ${className}`}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}
