import { motion } from "framer-motion";
import { Layers, CloudRainWind, Bug } from "lucide-react";
import { SproutText } from "./SproutText";

const problems = [
  {
    icon: Layers,
    title: "It compacts into concrete",
    body: "Garden soil is built for open ground. Confined to a pot, it packs down within weeks — roots suffocate, water pools on top, and growth stalls.",
  },
  {
    icon: CloudRainWind,
    title: "It drains poorly, then rots roots",
    body: "Heavy clay-rich soil holds water in all the wrong ways. On a terrace with no earth below to wick it away, soggy pots quietly kill plants from the roots up.",
  },
  {
    icon: Bug,
    title: "It arrives with unwanted guests",
    body: "Dug-up soil carries fungus gnats, weed seeds and soil-borne disease straight onto your balcony — problems that follow every pot you fill with it.",
  },
];

const ProblemSection = () => {
  return (
    <section className="texture-grain texture-fibers relative overflow-hidden bg-soil-900 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-earth-400">
          The problem with soil
        </p>
        <SproutText
          as="h2"
          text="Garden soil was never meant for pots."
          className="max-w-3xl font-display text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-earth-200/80">
          Terrace and balcony growing asks something different of a growing
          medium. Three ways ordinary soil lets container gardeners down:
        </p>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {problems.map(({ icon: Icon, title, body }, i) => (
            <motion.article
              key={title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-3xl border border-soil-700 bg-soil-800/80 p-8"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-earth-800 text-earth-300">
                <Icon size={24} aria-hidden="true" />
              </span>
              <h3 className="mt-5 font-display text-xl font-semibold text-cream">{title}</h3>
              <p className="mt-3 leading-relaxed text-earth-200/70">{body}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
