import {
  LandingHero,
  ProblemSection,
  ProductStory,
  ExpansionDemo,
  UseCasesSection,
  QualityProof,
  AmazonReviews,
  FinalCTA,
  StickyBuyBar,
} from "../components/landing";
import { SEO } from "../components/common";

const Home = () => {
  return (
    <>
      <SEO
        title="Novobhumi - Premium Cocopeat for Indian Gardening Enthusiasts | Buy Online"
        description="Buy premium cocopeat online in India. Novobhumi offers 100% natural, eco-friendly growing medium for vegetables, herbs, and plants. Superior water retention, pH balanced, and pest-free."
        path="/"
      />
      <LandingHero />
      <ProblemSection />
      <ProductStory />
      <ExpansionDemo />
      <UseCasesSection />
      <QualityProof />
      <AmazonReviews />
      <FinalCTA />
      <StickyBuyBar />
    </>
  );
};

export default Home;
