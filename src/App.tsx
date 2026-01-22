import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToHash from "./components/ScrollToHash";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import GardeningTips from "./pages/GardeningTips";
import HowToUse from "./pages/HowToUse";
import FAQ from "./pages/FAQ";
import Blog from "./pages/Blog";
import Benefits from "./pages/Benefits";
import MayurAdmin from "./pages/MayurAdmin";
import { ConfigProvider } from "./context/ConfigContext";
import { AuthProvider } from "./context/AuthContext";

function AppContent() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/mayur-admin');

  if (isAdminRoute) {
    return (
      <AuthProvider>
        <Routes>
          <Route path="/mayur-admin" element={<MayurAdmin />} />
        </Routes>
      </AuthProvider>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-earth">
      <Navbar />
      <main>
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
        <Footer />
      </main>
    </div>
  );
}

function App() {
  return (
    <ConfigProvider>
      <Router>
        <ScrollToHash />
        <AppContent />
      </Router>
    </ConfigProvider>
  );
}

export default App;
