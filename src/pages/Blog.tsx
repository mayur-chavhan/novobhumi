import { motion } from "framer-motion";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const blogPosts = [
    {
      title: "10 Best Vegetables to Grow in Cocopeat for Indian Climate",
      excerpt: "Discover which vegetables thrive in cocopeat and are perfectly suited for India's diverse climate zones, from tomatoes to leafy greens.",
      author: "Priya Sharma",
      date: "March 15, 2024",
      category: "Growing Guide",
      readTime: "5 min read"
    },
    {
      title: "Why Cocopeat is the Sustainable Choice for Modern Gardeners",
      excerpt: "Learn how switching to cocopeat can reduce your environmental impact while improving your garden's health and productivity.",
      author: "Raj Patel",
      date: "March 10, 2024",
      category: "Sustainability",
      readTime: "7 min read"
    },
    {
      title: "Balcony Gardening Made Easy with Cocopeat",
      excerpt: "Transform your small balcony into a thriving garden using cocopeat. Perfect for urban gardeners with limited space.",
      author: "Anita Desai",
      date: "March 5, 2024",
      category: "Urban Gardening",
      readTime: "6 min read"
    },
    {
      title: "Monsoon Gardening Tips: Managing Water with Cocopeat",
      excerpt: "How cocopeat helps manage excess moisture during monsoon while preventing waterlogging and root rot in your plants.",
      author: "Vikram Singh",
      date: "February 28, 2024",
      category: "Seasonal Tips",
      readTime: "5 min read"
    },
    {
      title: "From Seed to Harvest: Complete Guide to Growing Tomatoes",
      excerpt: "Step-by-step guide to growing juicy, flavorful tomatoes in cocopeat, from seed selection to harvesting.",
      author: "Meera Krishnan",
      date: "February 20, 2024",
      category: "Growing Guide",
      readTime: "10 min read"
    },
    {
      title: "Composting 101: Creating the Perfect Cocopeat Mix",
      excerpt: "Learn how to create nutrient-rich growing medium by combining cocopeat with homemade compost for optimal plant growth.",
      author: "Arjun Reddy",
      date: "February 15, 2024",
      category: "Soil Health",
      readTime: "8 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-earth pt-32 pb-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Gardening <span className="text-gradient">Blog</span>
          </h1>
          <p className="text-xl text-gray-700 leading-relaxed">
            Expert tips, guides, and inspiration for your gardening journey
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.article
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl shadow-xl overflow-hidden group hover:shadow-2xl transition-all duration-300"
            >
              <div className="bg-gradient-to-br from-primary-500 to-primary-600 h-48 flex items-center justify-center">
                <div className="text-white text-center p-6">
                  <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full text-sm font-semibold mb-4">
                    {post.category}
                  </span>
                  <h2 className="text-2xl font-bold line-clamp-2">
                    {post.title}
                  </h2>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-700 mb-4 line-clamp-3">{post.excerpt}</p>
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <User size={16} />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    <span>{post.date}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-primary-600 font-semibold">
                    {post.readTime}
                  </span>
                  <button className="flex items-center gap-2 text-primary-600 font-semibold hover:gap-3 transition-all">
                    Read More
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mt-16 bg-gradient-to-br from-primary-600 to-primary-700 rounded-3xl shadow-xl p-8 text-white text-center"
        >
          <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-lg mb-6">
            Get weekly gardening tips, seasonal guides, and exclusive offers delivered to your inbox
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 outline-none"
            />
            <button className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Blog;
