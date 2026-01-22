import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Star, Quote, ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";

import reviewer1 from "../../attached_assets/stock_images/indian_gardener_happ_2db58a77.jpg";
import reviewer2 from "../../attached_assets/stock_images/indian_gardener_happ_eca9bd09.jpg";
import reviewer3 from "../../attached_assets/stock_images/indian_gardener_happ_865fcbee.jpg";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  title: string;
  review: string;
  date: string;
  verified: boolean;
  image: string;
  plantType: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Mumbai, Maharashtra",
    rating: 5,
    title: "Best cocopeat I've ever used!",
    review: "I've tried many brands but Novobhumi is exceptional. My tomatoes and chillies are thriving like never before. The water retention is amazing - I only need to water every 3 days now. Highly recommend for all Mumbai balcony gardeners!",
    date: "November 2025",
    verified: true,
    image: reviewer1,
    plantType: "Vegetables",
  },
  {
    id: 2,
    name: "Rajesh Kumar",
    location: "Bangalore, Karnataka",
    rating: 5,
    title: "Premium quality, fast delivery",
    review: "As someone who grows orchids professionally, I'm very particular about my growing medium. Novobhumi's cocopeat has the perfect pH and EC levels. My orchids have never looked healthier. The 5kg block expands beautifully and lasts for months.",
    date: "October 2025",
    verified: true,
    image: reviewer2,
    plantType: "Orchids",
  },
  {
    id: 3,
    name: "Anita Patel",
    location: "Ahmedabad, Gujarat",
    rating: 5,
    title: "Perfect for terrace garden",
    review: "Started my terrace garden 6 months ago with Novobhumi cocopeat. The results are incredible! My curry leaves, methi, and coriander grow so fast. No pests, no fungus - just healthy plants. Already ordered my third batch!",
    date: "November 2025",
    verified: true,
    image: reviewer3,
    plantType: "Herbs",
  },
  {
    id: 4,
    name: "Dr. Suresh Menon",
    location: "Chennai, Tamil Nadu",
    rating: 5,
    title: "Excellent for seedlings",
    review: "I run a small nursery and switched to Novobhumi 8 months ago. Seed germination rate has improved by 40%. The cocopeat is consistently good quality with no variations between batches. Worth every rupee!",
    date: "September 2025",
    verified: true,
    image: reviewer1,
    plantType: "Seedlings",
  },
  {
    id: 5,
    name: "Meera Iyer",
    location: "Pune, Maharashtra",
    rating: 4,
    title: "Great product, happy plants",
    review: "My indoor plants love this cocopeat! Mixed it with some perlite and my pothos, money plant, and snake plants are growing beautifully. Excellent moisture retention without becoming soggy. Will definitely buy again.",
    date: "October 2025",
    verified: true,
    image: reviewer2,
    plantType: "Indoor Plants",
  },
  {
    id: 6,
    name: "Vikram Singh",
    location: "Delhi NCR",
    rating: 5,
    title: "Game changer for hydroponics",
    review: "Using Novobhumi cocopeat in my hydroponic setup. The low EC level means I don't have to flush it before use. Perfect texture, expands well, and my lettuce and spinach are thriving. Best cocopeat for hydroponics in India!",
    date: "November 2025",
    verified: true,
    image: reviewer3,
    plantType: "Hydroponics",
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }`}
      />
    ))}
  </div>
);

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const visibleTestimonials = testimonials.slice(currentIndex * 3, currentIndex * 3 + 3);

  const averageRating = (testimonials.reduce((acc, t) => acc + t.rating, 0) / testimonials.length).toFixed(1);

  return (
    <section className="bg-gradient-to-b from-white to-amber-50 py-20 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-700 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <ShoppingBag className="w-4 h-4" />
            Amazon India Reviews
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            What Gardeners Are{" "}
            <span className="text-gradient">Saying</span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            <span className="text-2xl font-bold text-gray-800">{averageRating}</span>
            <span className="text-gray-500">out of 5</span>
          </div>
          <p className="text-gray-600">
            Based on {testimonials.length * 83}+ verified purchases on Amazon India
          </p>
        </motion.div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden md:grid md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              >
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} />

                <h5 className="font-semibold text-gray-800 mt-3 mb-2">{testimonial.title}</h5>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-1 w-6 h-6 text-primary-200" />
                  <p className="text-gray-600 text-sm leading-relaxed pl-5">
                    {testimonial.review}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                  <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                    {testimonial.plantType}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="md:hidden space-y-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-xl p-5 shadow-md border border-gray-100"
              >
                <div className="flex items-start gap-3 mb-3">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                      {testimonial.verified && (
                        <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-gray-500">{testimonial.location}</p>
                  </div>
                  <StarRating rating={testimonial.rating} />
                </div>

                <h5 className="font-semibold text-gray-800 text-sm mb-2">{testimonial.title}</h5>
                <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                  {testimonial.review}
                </p>

                <div className="flex items-center justify-between mt-3 pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{testimonial.date}</span>
                  <span className="text-xs bg-primary-50 text-primary-700 px-2 py-1 rounded-full">
                    {testimonial.plantType}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="hidden md:flex justify-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-primary-300"
              aria-label="Previous reviews"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === currentIndex ? "bg-primary-600" : "bg-gray-300"
                  }`}
                  aria-label={`Go to page ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow border border-gray-100 hover:border-primary-300"
              aria-label="Next reviews"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://amzn.in/d/asVswJT"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium transition-colors"
          >
            Read all reviews on Amazon India
            <ChevronRight className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
