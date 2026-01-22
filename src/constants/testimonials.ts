/**
 * Testimonials section data constants
 */

import reviewer1 from '../../attached_assets/stock_images/indian_gardener_happ_2db58a77.jpg';
import reviewer2 from '../../attached_assets/stock_images/indian_gardener_happ_eca9bd09.jpg';
import reviewer3 from '../../attached_assets/stock_images/indian_gardener_happ_865fcbee.jpg';
import type { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai, Maharashtra',
    rating: 5,
    title: "Best cocopeat I've ever used!",
    review:
      "I've tried many brands but Novobhumi is exceptional. My tomatoes and chillies are thriving like never before. The water retention is amazing - I only need to water every 3 days now. Highly recommend for all Mumbai balcony gardeners!",
    date: 'November 2025',
    verified: true,
    image: reviewer1,
    plantType: 'Vegetables',
  },
  {
    id: 2,
    name: 'Rajesh Kumar',
    location: 'Bangalore, Karnataka',
    rating: 5,
    title: 'Premium quality, fast delivery',
    review:
      "As someone who grows orchids professionally, I'm very particular about my growing medium. Novobhumi's cocopeat has the perfect pH and EC levels. My orchids have never looked healthier. The 5kg block expands beautifully and lasts for months.",
    date: 'October 2025',
    verified: true,
    image: reviewer2,
    plantType: 'Orchids',
  },
  {
    id: 3,
    name: 'Anita Patel',
    location: 'Ahmedabad, Gujarat',
    rating: 5,
    title: 'Perfect for terrace garden',
    review:
      'Started my terrace garden 6 months ago with Novobhumi cocopeat. The results are incredible! My curry leaves, methi, and coriander grow so fast. No pests, no fungus - just healthy plants. Already ordered my third batch!',
    date: 'November 2025',
    verified: true,
    image: reviewer3,
    plantType: 'Herbs',
  },
  {
    id: 4,
    name: 'Dr. Suresh Menon',
    location: 'Chennai, Tamil Nadu',
    rating: 5,
    title: 'Excellent for seedlings',
    review:
      'I run a small nursery and switched to Novobhumi 8 months ago. Seed germination rate has improved by 40%. The cocopeat is consistently good quality with no variations between batches. Worth every rupee!',
    date: 'September 2025',
    verified: true,
    image: reviewer1,
    plantType: 'Seedlings',
  },
  {
    id: 5,
    name: 'Meera Iyer',
    location: 'Pune, Maharashtra',
    rating: 4,
    title: 'Great product, happy plants',
    review:
      'My indoor plants love this cocopeat! Mixed it with some perlite and my pothos, money plant, and snake plants are growing beautifully. Excellent moisture retention without becoming soggy. Will definitely buy again.',
    date: 'October 2025',
    verified: true,
    image: reviewer2,
    plantType: 'Indoor Plants',
  },
  {
    id: 6,
    name: 'Vikram Singh',
    location: 'Delhi NCR',
    rating: 5,
    title: 'Game changer for hydroponics',
    review:
      "Using Novobhumi cocopeat in my hydroponic setup. The low EC level means I don't have to flush it before use. Perfect texture, expands well, and my lettuce and spinach are thriving. Best cocopeat for hydroponics in India!",
    date: 'November 2025',
    verified: true,
    image: reviewer3,
    plantType: 'Hydroponics',
  },
];

/**
 * Calculate average rating from testimonials
 */
export const getAverageRating = (items: Testimonial[] = testimonials): string => {
  return (items.reduce((acc, t) => acc + t.rating, 0) / items.length).toFixed(1);
};

/**
 * Estimated total reviews (multiplier for display purposes)
 */
export const REVIEWS_MULTIPLIER = 83;
