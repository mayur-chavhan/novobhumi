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

const Home = () => {
  return (
    <>
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
