import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SEO } from "../components/common";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is cocopeat?",
      answer: "Cocopeat is a natural fiber extracted from coconut husks. It's a sustainable, eco-friendly growing medium that retains water while providing excellent aeration for plant roots. It's an ideal alternative to traditional peat moss."
    },
    {
      question: "How do I prepare cocopeat before use?",
      answer: "Place the compressed block in a large container, add 4-5 liters of water, wait 10-15 minutes for it to expand, then fluff it with your hands or a fork. Mix with compost (70:30 ratio) for best results before planting."
    },
    {
      question: "Can cocopeat be used alone or should it be mixed?",
      answer: "While cocopeat can be used alone, we recommend mixing it with compost or organic fertilizer in a 70:30 ratio for optimal plant nutrition. For seed starting, you can use pure cocopeat. For vegetables and flowering plants, mixing provides better results."
    },
    {
      question: "How many times can I reuse cocopeat?",
      answer: "Cocopeat can be reused 3-4 times if properly maintained. After each harvest, remove old roots, fluff the medium, and add fresh compost. This makes it very cost-effective and environmentally friendly."
    },
    {
      question: "What plants grow well in cocopeat?",
      answer: "Almost all plants thrive in cocopeat! It's excellent for vegetables (tomatoes, peppers, lettuce), herbs, flowers, houseplants, and even hydroponic systems. Its pH balance (5.5-6.8) suits most plant varieties."
    },
    {
      question: "How much water does cocopeat hold?",
      answer: "Cocopeat can absorb and retain 8-10 times its dry weight in water. This means less frequent watering while preventing waterlogging. It releases water gradually to plant roots as needed."
    },
    {
      question: "Is cocopeat better than regular soil?",
      answer: "Cocopeat offers several advantages: better water retention, superior aeration, disease-free medium, consistent quality, and sustainability. It works best when mixed with soil or compost rather than as a complete replacement."
    },
    {
      question: "How do I store unused cocopeat?",
      answer: "Store dry, unused cocopeat in a cool, dry place in an airtight container. If you've already hydrated it, you can dry it out in the sun and store it, or keep it moist in a sealed container for future use within a few weeks."
    },
    {
      question: "Does cocopeat contain nutrients?",
      answer: "Cocopeat has minimal nutritional value on its own. Its primary role is as a growing medium providing excellent structure, aeration, and water retention. You'll need to add compost, organic fertilizers, or nutrients for plant growth."
    },
    {
      question: "Will cocopeat attract pests?",
      answer: "No, quality cocopeat like Novobhumi's is sterilized and pest-free. It doesn't attract insects or contain weed seeds. This makes it much cleaner and safer than regular garden soil for container gardening."
    },
    {
      question: "What is the pH level of cocopeat?",
      answer: "Novobhumi cocopeat maintains a pH level between 5.5-6.8, which is ideal for most plants. This slightly acidic to neutral range supports optimal nutrient uptake and healthy plant growth."
    },
    {
      question: "How long does a 5kg block last?",
      answer: "One 5kg compressed block expands to approximately 70-80 liters of cocopeat when hydrated. This is enough for multiple large pots or a good-sized raised bed, depending on your gardening needs. Since it's reusable, it can serve you for an entire year or more."
    }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <SEO
        title="Cocopeat FAQs"
        description="Get answers to all your cocopeat questions. Learn about preparation, reuse, pH levels, water retention, plant suitability, and storage from Novobhumi experts."
        path="/faq"
      />
      <script type="application/ld+json">
        {JSON.stringify(faqSchema)}
      </script>
      <div className="min-h-screen bg-gradient-earth pt-32 pb-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Everything you need to know about cocopeat
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  size={24}
                  className={`text-primary-600 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? "max-h-96" : "max-h-0"
                }`}
              >
                <div className="px-6 pb-5 text-gray-700 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
          <p className="text-lg mb-6">
            We're here to help! Contact our gardening experts for personalized advice.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
    </>
  );
};

export default FAQ;
