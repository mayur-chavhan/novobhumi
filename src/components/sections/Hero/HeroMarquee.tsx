import { motion } from "framer-motion";
import { MARQUEE_IMAGES } from "./constants";
import { MarqueeImage } from "./MarqueeImage";

export function HeroMarquee() {
  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative"
      >
        {/* Gradient fade on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-r from-primary-50 to-transparent z-[2] pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-16 lg:w-24 bg-gradient-to-l from-primary-50 to-transparent z-[2] pointer-events-none" />

        {/* Marquee container */}
        <div className="flex gap-3 animate-marquee hover:pause-marquee py-2 sm:gap-4 sm:py-3 lg:gap-6 lg:py-4">
          {/* First set of images */}
          {MARQUEE_IMAGES.map((image, index) => (
            <MarqueeImage key={`marquee-1-${index}`} image={image} />
          ))}
          {/* Duplicate set for seamless loop */}
          {MARQUEE_IMAGES.map((image, index) => (
            <MarqueeImage key={`marquee-2-${index}`} image={image} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
