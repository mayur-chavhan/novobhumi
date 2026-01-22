import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export function ScrollDownButton() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.a
      href="#benefits"
      className="absolute bottom-8 left-1/2 z-30 hidden -translate-x-1/2 flex-col items-center gap-2 text-primary-700 transition hover:text-primary-800 lg:flex"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.5 }}
      whileHover={{ scale: 1.1 }}
    >
      <span className="text-sm font-semibold">Scroll to explore</span>
      <motion.div
        animate={shouldReduceMotion ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur"
      >
        <ChevronDown size={28} strokeWidth={2.5} />
      </motion.div>
    </motion.a>
  );
}
