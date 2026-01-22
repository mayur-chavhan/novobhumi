import { motion } from "framer-motion";
import { activeHeroCopy } from "../../../constants/heroCopy";
import { STAT_CARDS } from "./constants";
import { HeroCTAButtons } from "./HeroCTAButtons";
import { HeroProductShowcase } from "./HeroProductShowcase";
import { StatsCard } from "./StatsCard";

interface HeroContentProps {
  isDesktop?: boolean;
}

export function HeroContent({ isDesktop = false }: HeroContentProps) {
  // Desktop layout - original structure
  if (isDesktop) {
    return (
      <div className="space-y-6">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-700"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
          </span>
          {activeHeroCopy.badge}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold leading-tight text-gray-900 xl:text-5xl"
        >
          {activeHeroCopy.headline}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg leading-relaxed text-gray-600"
        >
          {activeHeroCopy.description}
        </motion.p>

        {/* CTA buttons */}
        <HeroCTAButtons />

        {/* Stats cards */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="grid gap-3 sm:grid-cols-3"
        >
          {STAT_CARDS.map((card) => (
            <StatsCard key={card.label} card={card} />
          ))}
        </motion.div>
      </div>
    );
  }

  // Mobile layout - optimized structure with product image in the middle
  return (
    <div className="space-y-5">
      {/* Badge - smaller on mobile */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="inline-flex items-center gap-2 rounded-full bg-primary-100 px-3 py-1.5 text-xs font-medium text-primary-700"
      >
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary-500" />
        </span>
        {activeHeroCopy.badge}
      </motion.div>

      {/* Title - optimized for mobile readability */}
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="text-2xl font-bold leading-snug text-gray-900 sm:text-3xl"
      >
        {activeHeroCopy.headline}
      </motion.h1>

      {/* Product Image - positioned after title for mobile */}
      <HeroProductShowcase isMobile={true} />

      {/* Short description for mobile */}
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.15 }}
        className="text-sm leading-relaxed text-gray-600 sm:text-base"
      >
        {activeHeroCopy.description}
      </motion.p>

      {/* CTA buttons - full width on mobile */}
      <HeroCTAButtons isMobile={true} />

      {/* Stats cards - horizontal scroll on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.25 }}
        className="flex gap-2 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide sm:grid sm:grid-cols-3 sm:gap-3 sm:overflow-visible sm:mx-0 sm:px-0"
      >
        {STAT_CARDS.map((card) => (
          <div key={card.label} className="flex-shrink-0 snap-start w-[140px] sm:w-auto">
            <StatsCard card={card} compact />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
