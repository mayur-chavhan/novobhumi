import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToHash from "./components/layout/ScrollToHash";
import { ScrollToTop } from "./components/common/ScrollToTop";
import { ConfigProvider } from "./context/ConfigContext";

// Lazy load pages for better initial load performance
const Home = lazy(() => import("./pages/Home"));
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

function App() {
  return (
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
              </Routes>
            </Suspense>
            <Footer />
          </main>
          {/* Scroll to top button - shown after scrolling 400px */}
          <ScrollToTop />
        </div>
      </Router>
    </ConfigProvider>
  );
}

export default App;
