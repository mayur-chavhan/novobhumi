import { Truck, ShieldCheck, Leaf } from "lucide-react";
import { SproutText } from "./SproutText";
import { BuyButton } from "../common/BuyButton";
import { AMAZON_AFFILIATE_LINK } from "../../constants/links";

const assurances = [
  { icon: Truck, label: "Fulfilled by Amazon, delivered across India" },
  { icon: ShieldCheck, label: "Easy Amazon returns & buyer protection" },
  { icon: Leaf, label: "100% natural — safe for edibles" },
];

const FinalCTA = () => {
  return (
    <section className="texture-grain texture-fibers relative overflow-hidden bg-soil-900 py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6">
        <SproutText
          as="h2"
          text="Your garden, made by you, is waiting."
          className="font-display text-4xl font-semibold leading-tight text-cream sm:text-5xl"
        />
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-earth-200/80">
          One 5&nbsp;kg brick, a bucket of water, and thirty minutes — that's
          all it takes to start growing.
        </p>
        <div className="mt-9 flex justify-center">
          <BuyButton href={AMAZON_AFFILIATE_LINK} size="lg" label="Buy Now on Amazon" />
        </div>
        <ul className="mt-10 flex flex-col items-center gap-3 text-sm text-earth-200/80 sm:flex-row sm:justify-center sm:gap-8">
          {assurances.map(({ icon: Icon, label }) => (
            <li key={label} className="inline-flex items-center gap-2">
              <Icon size={16} className="text-primary-400" aria-hidden="true" />
              {label}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FinalCTA;
