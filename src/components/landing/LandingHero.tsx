import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Droplets, Leaf, Waves, Star, ArrowDown } from "lucide-react";
import { SproutText } from "./SproutText";
import { BuyButton } from "../common/BuyButton";
import { AMAZON_AFFILIATE_LINK } from "../../constants/links";
import { testimonials, getAverageRating, REVIEWS_MULTIPLIER } from "../../constants/testimonials";
import brickImage from "../../assets/novobhumi-cocopeat-5kg-block.png";

const trustBadges = [
  { icon: Droplets, label: "Low EC < 0.5 mS/cm" },
  { icon: Leaf, label: "100% organic coir" },
  { icon: Waves, label: "Triple pre-washed" },
];

const LandingHero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // The brick gently swells and drifts as you scroll away — a hint of the expansion to come
  const brickScale = useTransform(scrollYProgress, [0, 1], [1, 1.18]);
  const brickY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const totalReviews = testimonials.length * REVIEWS_MULTIPLIER;

  return (
    <section
      ref={sectionRef}
      id="home"
      className="texture-grain relative flex min-h-dvh items-center overflow-hidden bg-cream pt-24 sm:pt-28"
    >
      {/* Blurred leaf bokeh — sunlight through a canopy */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -top-20 right-[8%] h-72 w-72 rounded-full bg-primary-200/40 blur-3xl" />
        <div className="absolute bottom-[12%] left-[4%] h-56 w-56 rounded-full bg-earth-200/50 blur-3xl" />
        <div className="absolute top-[35%] right-[35%] h-40 w-40 rounded-full bg-primary-100/60 blur-2xl" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-6 px-4 pb-16 sm:px-6 sm:pb-20 lg:grid-cols-2 lg:items-center lg:gap-8 lg:px-8">
        {/* Intro — headline + lead copy, always first */}
        <motion.div
          style={shouldReduceMotion ? undefined : { opacity: contentOpacity }}
          className="lg:col-start-1 lg:row-start-1"
        >
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-earth-200 bg-earth-50 px-4 py-1.5 text-sm font-medium text-earth-700"
          >
            <Leaf size={15} className="text-primary-600" aria-hidden="true" />
            Pressed from pure coconut husk
          </motion.p>

          <SproutText
            as="h1"
            text="One brick. 75 litres of living soil."
            className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-soil-900 sm:text-5xl lg:text-6xl"
          />

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="mt-6 max-w-xl text-lg leading-relaxed text-soil-600"
          >
            NovoBhumi's 5&nbsp;kg cocopeat brick soaks up water and blooms into
            75&nbsp;litres of soft, airy growing medium — pre-washed, low-EC and
            ready for your terrace, balcony or hydroponic setup.
          </motion.p>
        </motion.div>

        {/* Product showcase — shows right below the headline on mobile, right column on desktop */}
        <div className="relative mx-auto w-full max-w-md lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:max-w-none lg:self-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div
              aria-hidden="true"
              className="absolute inset-x-6 bottom-2 top-10 rounded-[2.5rem] bg-gradient-to-br from-earth-100 via-earth-50 to-primary-50 shadow-soft"
            />
            <motion.img
              src={brickImage}
              alt="NovoBhumi 5kg organic cocopeat brick"
              width={640}
              height={640}
              fetchPriority="high"
              style={shouldReduceMotion ? undefined : { scale: brickScale, y: brickY }}
              className="relative z-10 mx-auto w-full drop-shadow-2xl"
            />

            {/* Product stats — placed below the image so the brick stays fully visible */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="relative z-20 mt-4 flex justify-center gap-3 sm:gap-4"
            >
              <div className="rounded-2xl border border-earth-200 bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur-sm">
                <p className="font-display text-xl font-semibold text-earth-700">5 kg</p>
                <p className="text-xs font-medium uppercase tracking-wide text-soil-600">compressed brick</p>
              </div>
              <div className="rounded-2xl border border-primary-200 bg-white/90 px-4 py-2.5 shadow-soft backdrop-blur-sm">
                <p className="font-display text-xl font-semibold text-primary-700">75 L</p>
                <p className="text-xs font-medium uppercase tracking-wide text-soil-600">after soaking</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Actions — CTA, rating, trust badges, always last */}
        <motion.div
          style={shouldReduceMotion ? undefined : { opacity: contentOpacity }}
          className="lg:col-start-1 lg:row-start-2"
        >
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <BuyButton
              href={AMAZON_AFFILIATE_LINK}
              size="lg"
              label="Buy on Amazon"
              className="w-full justify-center sm:w-auto"
            />
            <a
              href="#expansion"
              className="inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-full px-5 py-3 font-semibold text-earth-700 transition-colors duration-200 hover:bg-earth-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-earth-500 sm:w-auto"
            >
              See the expansion
              <ArrowDown size={18} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="mt-5 flex items-center gap-2 text-sm text-soil-600 sm:mt-6"
          >
            <span className="flex" aria-hidden="true">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="fill-amber-500 text-amber-500" />
              ))}
            </span>
            <span>
              <strong className="text-soil-800">{getAverageRating()}</strong> from{" "}
              {totalReviews}+ Amazon reviews
            </span>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-5 flex flex-wrap gap-3 sm:mt-6"
          >
            {trustBadges.map(({ icon: Icon, label }) => (
              <li
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-primary-200 bg-white/70 px-4 py-2 text-sm font-medium text-primary-800"
              >
                <Icon size={16} className="text-primary-600" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </section>
  );
};

export default LandingHero;
