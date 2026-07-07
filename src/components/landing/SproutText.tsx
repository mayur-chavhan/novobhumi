import { motion, useReducedMotion } from "framer-motion";
import type { ElementType } from "react";

interface SproutTextProps {
  text: string;
  /** Tag to render, defaults to h2 */
  as?: ElementType;
  className?: string;
  /** Delay before the first word sprouts, in seconds */
  delay?: number;
}

/**
 * Headline that "sprouts" in word by word — each word rises out of a
 * clipped baseline like a seedling breaking soil.
 */
export function SproutText({ text, as: Tag = "h2", className = "", delay = 0 }: SproutTextProps) {
  const shouldReduceMotion = useReducedMotion();
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag className={className} aria-label={text}>
      {words.map((word, i) => (
        <span key={i} className="inline-block overflow-hidden pb-[0.12em] -mb-[0.12em] align-bottom" aria-hidden="true">
          <motion.span
            className="inline-block"
            initial={{ y: "110%", rotate: 4, opacity: 0 }}
            whileInView={{ y: 0, rotate: 0, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: delay + i * 0.06,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? " " : ""}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
