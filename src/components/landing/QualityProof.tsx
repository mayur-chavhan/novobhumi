import { motion } from "framer-motion";
import { Sprout, Minus } from "lucide-react";
import { SproutText } from "./SproutText";
import { CountUp } from "./CountUp";

const comparisonRows = [
  {
    metric: "EC (salt) level",
    novobhumi: "Below 0.5 mS/cm — seedling-safe",
    regular: "1.5–3.0 mS/cm, needs repeated flushing",
    good: true,
  },
  {
    metric: "Washing",
    novobhumi: "Triple-washed in fresh water",
    regular: "Often unwashed or brine-washed",
    good: true,
  },
  {
    metric: "pH",
    novobhumi: "5.8–6.5, ready to plant",
    regular: "Varies batch to batch",
    good: true,
  },
  {
    metric: "Sand & impurities",
    novobhumi: "Sieved — under 3%",
    regular: "Up to 15% sand and fibre waste",
    good: true,
  },
  {
    metric: "Expansion",
    novobhumi: "5 kg → 75 L, consistent",
    regular: "Unpredictable, often 50–60 L",
    good: true,
  },
  {
    metric: "Batch consistency",
    novobhumi: "Lab-checked every batch",
    regular: "No testing, quality drifts",
    good: true,
  },
];

const stats = [
  { value: 75, suffix: " L", label: "expanded volume per brick" },
  { value: 0.5, prefix: "< ", decimals: 1, label: "mS/cm electrical conductivity" },
  { value: 8, suffix: "×", label: "its weight in water retained" },
];

const QualityProof = () => {
  return (
    <section id="benefits" className="texture-grain relative overflow-hidden bg-earth-50 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
          Low-EC, lab-checked
        </p>
        <SproutText
          as="h2"
          text="Not all cocopeat is washed equal."
          className="max-w-3xl font-display text-3xl font-semibold leading-tight text-soil-900 sm:text-4xl lg:text-5xl"
        />
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-soil-600">
          Cheap cocopeat is often washed in seawater — the salts it carries burn
          young roots. Every NovoBhumi brick is fresh-water washed three times
          and tested before it ships.
        </p>

        {/* Count-up stats */}
        <dl className="mt-12 grid gap-6 sm:grid-cols-3">
          {stats.map(({ value, prefix, suffix, decimals, label }) => (
            <div key={label} className="flex flex-col rounded-3xl border border-earth-200 bg-white p-6 shadow-soft">
              <dt className="order-2 mt-1 text-sm font-medium text-soil-600">{label}</dt>
              <dd className="order-1">
                <CountUp
                  to={value}
                  prefix={prefix}
                  suffix={suffix}
                  decimals={decimals ?? 0}
                  className="font-display text-4xl font-semibold text-primary-700"
                />
              </dd>
            </div>
          ))}
        </dl>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 overflow-hidden rounded-3xl border border-earth-200 bg-white shadow-soft"
        >
          <div className="overflow-x-auto">
            <table className="w-full min-w-[640px] text-left">
              <caption className="sr-only">
                NovoBhumi cocopeat compared with regular market cocopeat
              </caption>
              <thead>
                <tr className="border-b border-earth-200">
                  <th scope="col" className="px-6 py-5 text-sm font-semibold uppercase tracking-wide text-soil-600">
                    What matters
                  </th>
                  <th scope="col" className="bg-primary-50 px-6 py-5 font-display text-lg font-semibold text-primary-800">
                    NovoBhumi
                  </th>
                  <th scope="col" className="px-6 py-5 font-display text-lg font-semibold text-soil-600">
                    Regular cocopeat
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map(({ metric, novobhumi, regular }) => (
                  <tr key={metric} className="border-b border-earth-100 last:border-0">
                    <th scope="row" className="px-6 py-4 text-sm font-semibold text-soil-800">
                      {metric}
                    </th>
                    <td className="bg-primary-50/60 px-6 py-4 text-sm text-soil-800">
                      <span className="flex items-start gap-2">
                        <Sprout size={16} className="mt-0.5 flex-none text-primary-600" aria-hidden="true" />
                        {novobhumi}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-soil-600">
                      <span className="flex items-start gap-2">
                        <Minus size={16} className="mt-0.5 flex-none text-earth-400" aria-hidden="true" />
                        {regular}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default QualityProof;
