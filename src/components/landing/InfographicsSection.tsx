import { useState } from "react";
import { motion } from "framer-motion";
import { ImageOff } from "lucide-react";
import { SproutText } from "./SproutText";

const infographics = [
  {
    title: "5 kg → 75 L",
    body: "See how one small brick blooms into enough medium for fifteen 12-inch pots.",
    file: "expansion-diagram.png",
    prompt:
      "Infographic illustration, clean flat design, showing a compressed brown cocopeat brick on the left with arrows and water droplets, expanding into 75 litres of fluffy light-brown cocopeat in a bucket on the right, labels '5 kg brick' and '75 L after soaking', warm earthy green and brown palette, white background, minimal gardening-product marketing style.",
  },
  {
    title: "Why Novobhumi wins",
    body: "A side-by-side look at low-EC, triple-washed cocopeat versus ordinary market options.",
    file: "comparison-chart.png",
    prompt:
      "Side-by-side comparison infographic, flat modern design, left side a clean labelled NovoBhumi cocopeat brick with green checkmarks for low EC, triple washed, pH balanced, right side a messy regular cocopeat brick with brown X marks for high salt, unwashed, inconsistent, earthy green and cream palette, white background, clear typography.",
  },
  {
    title: "One brick, many gardens",
    body: "Seed trays, potting mix, hydroponics and terrace grow bags — all from the same brick.",
    file: "use-cases-illustration.png",
    prompt:
      "Four-panel infographic illustration for cocopeat uses: seed germination in tray, potting mix in pot, hydroponics in net pot, terrace garden in grow bag, flat botanical illustration style, warm greens and browns, white background, each panel with a small icon and label, friendly gardening aesthetic.",
  },
  {
    title: "From husk to harvest",
    body: "The full journey: coconut husk harvested, aged & sieved, triple-washed, pressed, then expanded.",
    file: "product-journey.png",
    prompt:
      "Circular process infographic: coconut husk → aged & sieved → triple washed → compressed brick → expanded in garden, flat earthy illustration style, warm brown and green palette, white background, arrows connecting each step, clean minimal icons.",
  },
];

function InfographicCard({
  title,
  body,
  file,
  prompt,
  index,
}: (typeof infographics)[number] & { index: number }) {
  const [loaded, setLoaded] = useState(true);
  const src = `/infographics/${file}`;

  return (
    <motion.figure
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="overflow-hidden rounded-3xl border border-earth-200 bg-white shadow-soft"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-earth-50">
        {loaded ? (
          <img
            src={src}
            alt={title}
            onError={() => setLoaded(false)}
            className="h-full w-full object-contain p-4"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center p-6 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-earth-100 text-earth-500">
              <ImageOff size={22} aria-hidden="true" />
            </div>
            <p className="mt-3 text-sm font-semibold text-soil-800">{title}</p>
            <p className="mt-1 text-xs text-soil-500">
              Generate <code className="rounded bg-earth-100 px-1 py-0.5">{file}</code> and drop it here.
            </p>
          </div>
        )}
      </div>
      <figcaption className="p-5">
        <h3 className="font-display text-lg font-semibold text-soil-900">{title}</h3>
        <p className="mt-1 text-sm leading-relaxed text-soil-600">{body}</p>
        {!loaded && (
          <p className="mt-3 line-clamp-3 text-xs italic text-earth-600" title={prompt}>
            Prompt hint: {prompt}
          </p>
        )}
      </figcaption>
    </motion.figure>
  );
}

const InfographicsSection = () => {
  return (
    <section className="texture-grain relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
          Visual guides
        </p>
        <SproutText
          as="h2"
          text="Novobhumi at a glance."
          className="max-w-3xl font-display text-3xl font-semibold leading-tight text-soil-900 sm:text-4xl lg:text-5xl"
        />
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-soil-600">
          Drop AI-generated infographics into the folder below and this grid updates automatically.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {infographics.map((item, i) => (
            <InfographicCard key={item.file} {...item} index={i} />
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-earth-200 bg-earth-50 p-5 text-sm text-soil-700">
          <p>
            <strong>Folder:</strong>{" "}
            <code className="rounded bg-white px-1.5 py-0.5 font-medium">public/infographics/</code>
          </p>
          <p className="mt-1 text-soil-600">
            Generate each image using Google Nano / Gemini with the prompts in{" "}
            <code className="rounded bg-white px-1.5 py-0.5 font-medium">public/infographics/README.md</code>
            , then save them with the exact filenames above.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InfographicsSection;
