import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/layout/ScrollToHash";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { SEO } from "./components/common";
import { ConfigProvider } from "./context/ConfigContext";
import Home from "./pages/Home";

// Lazy load secondary pages for better initial load performance
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const GardeningTips = lazy(() => import("./pages/GardeningTips"));
const HowToUse = lazy(() => import("./pages/HowToUse"));
const FAQ = lazy(() => import("./pages/FAQ"));
const Blog = lazy(() => import("./pages/Blog"));
const Benefits = lazy(() => import("./pages/Benefits"));

// Loading fallback component
function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary-200 border-t-primary-600" />
    </div>
  );
}

// Simple 404 page
function NotFound() {
  return (
    <>
      <SEO
        title="Page Not Found"
        description="Sorry, the page you are looking for does not exist. Return to Novobhumi's homepage for premium cocopeat products and gardening guides."
        path="/404"
        noindex
      />
      <div className="min-h-[60vh] bg-gradient-earth pt-32 pb-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-700 mb-8">Page not found</p>
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-primary-600 px-6 py-3 text-white font-semibold hover:bg-primary-700 transition"
          >
            Go back home
          </a>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <HelmetProvider>
      <ConfigProvider>
        <Router>
          <ScrollToHash />
          <div className="min-h-screen bg-gradient-earth">
            <Navbar />
            <main>
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<AboutUs />} />
                  <Route path="/benefits" element={<Benefits />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/tips" element={<GardeningTips />} />
                  <Route path="/how-to-use" element={<HowToUse />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/blog" element={<Blog />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
              <Footer />
            </main>
            {/* Scroll to top button - shown after scrolling 400px */}
            <ScrollToTop />
          </div>
        </Router>
      </ConfigProvider>
    </HelmetProvider>
  );
}

export default App;
