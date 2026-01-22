import Hero from "../components/sections/Hero";
import BenefitsSection from "../components/sections/BenefitsSection";
import Comparison from "../components/sections/Comparison";
import Testimonials from "../components/sections/Testimonials";
import Products from "../components/sections/Products";
import CallToAction from "../components/sections/CallToAction";
import ComingSoon from "../components/sections/ComingSoon";

const Home = () => {
  return (
    <>
      <Hero />
      <BenefitsSection />
      <Comparison />
      <Products />
      <Testimonials />
      <CallToAction />
      <ComingSoon />
    </>
  );
};

export default Home;
