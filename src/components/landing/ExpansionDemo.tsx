import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Droplets } from "lucide-react";
import { VideoLoop } from "./VideoLoop";
import brickImage from "../../assets/novobhumi-cocopeat-5kg-block.png";

/**
 * Scroll-scrubbed expansion: pinned viewport while the user scrolls through
 * ~2 screen heights. The brick sinks, the vessel fills with loose cocopeat,
 * and a live litre counter climbs from 0 to 75.
 *
 * When /videos/expansion.mp4 (and optionally .webm) is supplied, the real
 * footage replaces the illustrated vessel automatically.
 */

function LitreCounter({ progress }: { progress: MotionValue<number> }) {
  const litres = useTransform(progress, (v) => `${Math.round(v * 75)}`);
  return (
    <motion.span className="font-display text-6xl font-semibold tabular-nums text-primary-700 sm:text-7xl">
      {litres}
    </motion.span>
  );
}

function ExpansionVisual({ progress }: { progress: MotionValue<number> }) {
  // Vessel fill rises with scroll; brick sinks and shrinks as it dissolves
  const fillScale = useTransform(progress, [0.05, 0.95], [0.06, 1]);
  const brickY = useTransform(progress, [0, 0.7], ["0%", "55%"]);
  const brickScale = useTransform(progress, [0, 0.7], [1, 0.72]);
  const brickOpacity = useTransform(progress, [0.55, 0.85], [1, 0]);
  const particleRise = useTransform(progress, [0.2, 1], [30, -26]);
  const particleOpacity = useTransform(progress, [0.15, 0.4], [0, 1]);

  return (
    <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
      {/* Vessel */}
      <div className="absolute inset-x-4 bottom-0 top-16 overflow-hidden rounded-b-[3rem] rounded-t-3xl border-2 border-earth-200 bg-gradient-to-b from-white/60 to-earth-100/60 backdrop-blur-sm">
        {/* Rising cocopeat fill */}
        <motion.div
          style={{ scaleY: fillScale }}
          className="absolute inset-x-0 bottom-0 h-full origin-bottom rounded-t-[2rem] bg-gradient-to-t from-earth-800 via-earth-600 to-earth-500"
        />
        {/* Loose particles drifting above the fill line */}
        <motion.div
          aria-hidden="true"
          style={{ y: particleRise, opacity: particleOpacity }}
          className="absolute inset-x-0 top-1/4 flex justify-around"
        >
          {[10, -6, 14, -12, 6, -2, 12].map((offset, i) => (
            <span
              key={i}
              style={{ transform: `translateY(${offset}px)` }}
              className={`block rounded-full ${i % 2 ? "bg-earth-500" : "bg-earth-400"} ${
                i % 3 === 0 ? "h-2.5 w-2.5" : "h-1.5 w-1.5"
              }`}
            />
          ))}
        </motion.div>
      </div>

      {/* Sinking brick */}
      <motion.img
        src={brickImage}
        alt=""
        aria-hidden="true"
        style={{ y: brickY, scale: brickScale, opacity: brickOpacity }}
        className="absolute inset-x-0 top-0 z-10 mx-auto w-3/5 drop-shadow-xl"
      />
    </div>
  );
}

const ExpansionDemo = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  return (
    <section ref={sectionRef} id="expansion" className="relative h-[250vh] bg-cream">
      <div className="texture-grain sticky top-0 flex min-h-dvh items-center overflow-hidden">
        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 px-4 py-24 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
              <Droplets size={16} aria-hidden="true" />
              Just add water
            </p>
            <h2 className="font-display text-3xl font-semibold leading-tight text-soil-900 sm:text-4xl lg:text-5xl">
              Watch 5 kg become
            </h2>
            <p className="mt-4 flex items-baseline gap-3">
              {shouldReduceMotion ? (
                <span className="font-display text-6xl font-semibold tabular-nums text-primary-700 sm:text-7xl">
                  75
                </span>
              ) : (
                <LitreCounter progress={scrollYProgress} />
              )}
              <span className="font-display text-3xl text-soil-600">litres</span>
            </p>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-soil-600">
              Soak the brick in roughly 20–25 litres of water. Within 30
              minutes it loosens into soft, fluffy cocopeat — enough to fill
              fifteen 12-inch pots. Keep scrolling to watch it grow.
            </p>
          </div>

          <VideoLoop
            srcMp4="/videos/expansion.mp4"
            srcWebm="/videos/expansion.webm"
            className="mx-auto aspect-[4/5] w-full max-w-sm rounded-3xl object-cover shadow-lifted"
            fallback={
              shouldReduceMotion ? (
                <img
                  src={brickImage}
                  alt="NovoBhumi cocopeat brick expanding in water"
                  className="mx-auto w-full max-w-sm"
                />
              ) : (
                <ExpansionVisual progress={scrollYProgress} />
              )
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ExpansionDemo;
