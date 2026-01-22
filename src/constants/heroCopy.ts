/**
 * Hero section copy variants for A/B testing
 *
 * Each variant targets a different emotional appeal:
 * - transformation: Aspirational outcome and garden transformation
 * - convenience: Time-saving and ease of use
 * - sustainability: Environmental impact and eco-consciousness
 */

export interface HeroCopyVariant {
  headline: string;
  description: string;
  badge: string;
}

export const heroCopyVariants = {
  transformation: {
    headline: "Grow Your Greens: Complete Soil Replacement for Your Home Gardens and Farming",
    description: "Novobhumi cocopeat gives your plants the perfect growing environment—naturally moist, aerated roots that grow stronger and healthier with less effort. Watch balcony herbs flourish and vegetable gardens burst with life, even through India's intense summer heat.",
    badge: "Trusted by 5,000+ home growers across India"
  },
  convenience: {
    headline: "Lush Gardens, Zero Guesswork—Just Add Water",
    description: "Forget complicated soil mixes and daily watering struggles. Our premium cocopeat expands in minutes, retains moisture for days, and keeps your plants perfectly hydrated. Spend less time maintaining and more time enjoying your garden.",
    badge: "5-minute setup, weeks of benefits"
  },
  sustainability: {
    headline: "Grow More, Waste Less—The Sustainable Gardener's Secret",
    description: "Made from 100% natural coconut husks, Novobhumi cocopeat is renewable, reusable, and reduces water consumption by 40%. Join thousands of Indian gardeners choosing an eco-friendly alternative that's better for plants and the planet.",
    badge: "100% natural, 100% sustainable"
  }
} as const;

/**
 * Active variant - change this to switch between copy options
 * Recommended: Start with 'transformation' for emotional impact
 */
export const activeHeroCopy: HeroCopyVariant = heroCopyVariants.transformation;
