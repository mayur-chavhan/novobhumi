import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star, X } from "lucide-react";
import { BuyButton } from "../common/BuyButton";
import { AMAZON_AFFILIATE_LINK } from "../../constants/links";
import { getAverageRating } from "../../constants/testimonials";
import brickImage from "../../assets/novobhumi-cocopeat-5kg-block.png";

/**
 * Persistent bottom bar that appears once the hero CTA scrolls out of view,
 * so a "Buy Now" is always one tap away. Hides again once the footer scrolls
 * into view so it never covers footer content (social links, copyright).
 */
const StickyBuyBar = () => {
  const [pastHero, setPastHero] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setPastHero(window.scrollY > window.innerHeight * 0.9);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;
    const observer = new IntersectionObserver(([entry]) => setFooterVisible(entry.isIntersecting));
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  const visible = pastHero && !footerVisible && !dismissed;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 96 }}
          animate={{ y: 0 }}
          exit={{ y: 96 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-x-0 bottom-0 z-40 pb-[env(safe-area-inset-bottom)]"
          role="complementary"
          aria-label="Buy NovoBhumi cocopeat on Amazon"
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-2 border-t border-earth-200 bg-cream/95 px-3 py-2.5 shadow-[0_-8px_32px_-12px_rgba(23,17,12,0.25)] backdrop-blur-md sm:gap-3 sm:px-6 sm:py-3 lg:rounded-t-3xl lg:border-x">
            <div className="flex min-w-0 flex-1 items-center gap-3">
              <img
                src={brickImage}
                alt=""
                aria-hidden="true"
                className="hidden h-12 w-12 flex-none rounded-xl object-contain sm:block"
              />
              <div className="min-w-0">
                <p className="truncate text-sm font-display font-semibold text-soil-900 sm:text-base">
                  NovoBhumi Cocopeat Brick — 5 kg
                </p>
                <p className="hidden items-center gap-1.5 text-xs text-soil-600 sm:flex">
                  <Star size={13} className="fill-amber-500 text-amber-500" aria-hidden="true" />
                  {getAverageRating()} on Amazon · expands to 75 L
                </p>
              </div>
            </div>
            <div className="flex flex-none items-center gap-1.5 sm:gap-2">
              <span className="sm:hidden">
                <BuyButton href={AMAZON_AFFILIATE_LINK} size="sm" label="Buy Now" />
              </span>
              <span className="hidden sm:inline-flex">
                <BuyButton href={AMAZON_AFFILIATE_LINK} size="md" label="Buy Now on Amazon" />
              </span>
              <button
                type="button"
                onClick={() => setDismissed(true)}
                aria-label="Dismiss buy bar"
                className="flex h-11 w-11 flex-none items-center justify-center rounded-full text-soil-600 transition-colors hover:bg-earth-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-earth-500"
              >
                <X size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyBuyBar;
