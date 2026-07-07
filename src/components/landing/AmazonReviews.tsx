import { motion } from "framer-motion";
import { Star, BadgeCheck, ExternalLink } from "lucide-react";
import { SproutText } from "./SproutText";
import { CountUp } from "./CountUp";
import { testimonials, getAverageRating, REVIEWS_MULTIPLIER } from "../../constants/testimonials";
import { AMAZON_AFFILIATE_LINK } from "../../constants/links";

function Stars({ rating, size = 16 }: { rating: number; size?: number }) {
  return (
    <span className="flex" role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={size}
          aria-hidden="true"
          className={i < rating ? "fill-amber-500 text-amber-500" : "fill-earth-200 text-earth-200"}
        />
      ))}
    </span>
  );
}

const AmazonReviews = () => {
  const average = Number(getAverageRating());
  const totalReviews = testimonials.length * REVIEWS_MULTIPLIER;

  return (
    <section id="reviews" className="texture-grain relative overflow-hidden bg-cream py-24 sm:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-700">
              From Amazon customers
            </p>
            <SproutText
              as="h2"
              text="Gardeners across India trust it."
              className="max-w-2xl font-display text-3xl font-semibold leading-tight text-soil-900 sm:text-4xl lg:text-5xl"
            />
          </div>
          <div className="flex items-center gap-4 rounded-3xl border border-earth-200 bg-white px-6 py-4 shadow-soft">
            <CountUp
              to={average}
              decimals={1}
              className="font-display text-5xl font-semibold text-soil-900"
            />
            <div>
              <Stars rating={Math.round(average)} size={18} />
              <p className="mt-1 text-sm text-soil-600">
                {totalReviews}+ ratings on Amazon.in
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((review, i) => (
            <motion.blockquote
              key={review.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col rounded-3xl border border-earth-200 bg-white p-6 shadow-soft"
            >
              <div className="flex items-center justify-between gap-3">
                <Stars rating={review.rating} />
                {review.verified && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
                    <BadgeCheck size={13} aria-hidden="true" />
                    Verified Purchase
                  </span>
                )}
              </div>
              <p className="mt-4 font-display text-lg font-semibold text-soil-900">
                {review.title}
              </p>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-soil-600">
                {review.review}
              </p>
              <footer className="mt-5 border-t border-earth-100 pt-4 text-sm">
                <span className="font-semibold text-soil-800">{review.name}</span>
                <span className="text-soil-600"> · {review.location}</span>
                <p className="mt-0.5 text-xs text-earth-600">
                  Growing {review.plantType.toLowerCase()} · {review.date}
                </p>
              </footer>
            </motion.blockquote>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href={AMAZON_AFFILIATE_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] items-center gap-2 font-semibold text-primary-700 underline-offset-4 transition-colors hover:text-primary-800 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-600"
          >
            Read all reviews on Amazon.in
            <ExternalLink size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default AmazonReviews;
