import { motion } from "framer-motion";
import { Sprout, Flower2, FlaskConical, Sun } from "lucide-react";
import { SproutText } from "./SproutText";
import { VideoLoop } from "./VideoLoop";

const useCases = [
  {
    icon: Sprout,
    title: "Seed germination",
    body: "Fine, sterile and salt-free — seeds push through cocopeat far more easily than dense soil.",
    tip: "Use 100% cocopeat in seedling trays",
    video: "seed-germination",
  },
  {
    icon: Flower2,
    title: "Potting mix",
    body: "Blend with compost and perlite for a light, moisture-steady mix that never compacts in pots.",
    tip: "Mix 40% cocopeat · 40% compost · 20% perlite",
    video: "potting-mix",
  },
  {
    icon: FlaskConical,
    title: "Hydroponics",
    body: "Low EC out of the bag means no pre-flushing — drop it straight into net pots and channels.",
    tip: "Use as-is, no rinsing needed",
    video: "hydroponics",
  },
  {
    icon: Sun,
    title: "Terrace gardens",
    body: "A fraction of soil's weight when dry, so your slab carries beds and grow bags safely.",
    tip: "Fill grow bags 60% cocopeat, top with mulch",
    video: "terrace-garden",
  },
];

const UseCasesSection = () => {
  return (
    <section className="texture-grain relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
          One brick, many gardens
        </p>
        <SproutText
          as="h2"
          text="Wherever you grow, it works."
          className="max-w-3xl font-display text-3xl font-semibold leading-tight text-soil-900 sm:text-4xl lg:text-5xl"
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map(({ icon: Icon, title, body, tip, video }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group overflow-hidden rounded-3xl border border-earth-200 bg-white shadow-soft transition-shadow duration-300 hover:shadow-lifted"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <VideoLoop
                  srcMp4={`/videos/usecase-${video}.mp4`}
                  srcWebm={`/videos/usecase-${video}.webm`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  fallback={
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-earth-100 via-primary-50 to-earth-200">
                      <Icon size={44} className="text-earth-500" aria-hidden="true" />
                    </div>
                  }
                />
              </div>
              <div className="p-6">
                <h3 className="flex items-center gap-2 font-display text-lg font-semibold text-soil-900">
                  <Icon size={18} className="text-primary-600" aria-hidden="true" />
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-soil-600">{body}</p>
                <p className="mt-4 rounded-xl bg-earth-50 px-3 py-2 text-xs font-medium text-earth-700">
                  {tip}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
