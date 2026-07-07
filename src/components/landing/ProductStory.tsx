import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Palmtree, Factory, Waves, Package, Sprout } from "lucide-react";
import { SproutText } from "./SproutText";

const steps = [
  {
    icon: Palmtree,
    title: "Coconut husk, harvested",
    body: "It starts as fibrous husk from coastal coconut farms — a by-product that would otherwise be discarded.",
  },
  {
    icon: Factory,
    title: "Aged & sieved",
    body: "The husk pith is aged, then sieved to remove long fibres and dust, leaving a fine, even-textured peat.",
  },
  {
    icon: Waves,
    title: "Triple-washed in fresh water",
    body: "Three fresh-water washes rinse out natural salts, bringing the EC below 0.5 mS/cm — gentle enough for seedlings.",
  },
  {
    icon: Package,
    title: "Compressed into a 5 kg brick",
    body: "The washed peat is hydraulically pressed into a dense, easy-to-ship brick — 75 litres of medium in a package you can carry in one hand.",
  },
  {
    icon: Sprout,
    title: "Expands in your garden",
    body: "Add water, and the brick blooms back into loose, fluffy cocopeat — ready for pots, grow bags and hydroponic channels.",
  },
];

const ProductStory = () => {
  const listRef = useRef<HTMLOListElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.75", "end 0.65"],
  });
  // The timeline "grows" downward like a root as you scroll through the steps
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section id="products" className="texture-grain relative overflow-hidden bg-earth-50 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
          From husk to harvest
        </p>
        <SproutText
          as="h2"
          text="The journey inside every brick."
          className="max-w-3xl font-display text-3xl font-semibold leading-tight text-soil-900 sm:text-4xl lg:text-5xl"
        />

        <ol ref={listRef} className="relative mt-16 max-w-3xl">
          {/* Growing timeline root */}
          <div aria-hidden="true" className="absolute bottom-8 left-6 top-2 w-px bg-earth-200 sm:left-7" />
          <motion.div
            aria-hidden="true"
            style={shouldReduceMotion ? undefined : { scaleY: lineScale }}
            className="absolute bottom-8 left-6 top-2 w-px origin-top bg-primary-600 sm:left-7"
          />

          {steps.map(({ icon: Icon, title, body }, i) => (
            <motion.li
              key={title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-6 pb-12 pl-0 last:pb-0 sm:gap-8"
            >
              <span className="relative z-10 flex h-12 w-12 flex-none items-center justify-center rounded-full border border-earth-200 bg-cream text-earth-700 shadow-soft sm:h-14 sm:w-14">
                <Icon size={22} aria-hidden="true" />
              </span>
              <div className="pt-1">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-earth-500">
                  Step {i + 1}
                </p>
                <h3 className="mt-1 font-display text-xl font-semibold text-soil-900 sm:text-2xl">
                  {title}
                </h3>
                <p className="mt-2 max-w-lg leading-relaxed text-soil-600">{body}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default ProductStory;
