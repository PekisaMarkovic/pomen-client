import GeneralLayout from "@/components/layouts/GeneralLayout";
import ApplicationOverview from "@/modules/landing-page/application-overview/ApplicationOverview";
import CtaOverview from "@/modules/landing-page/CtaOverview";
import FAQ from "@/modules/landing-page/faq/FAQ";
import FunctionalityOverview from "@/modules/landing-page/functionality/FunctionalityOverview";
import HeroSection from "@/modules/landing-page/HeroSection";
import RatingSwiper from "@/modules/landing-page/Ratings/RatingSwiper";

const Home = () => {
  return (
    <GeneralLayout>
      <HeroSection />
      <ApplicationOverview />
      <FunctionalityOverview />
      <RatingSwiper />
      <CtaOverview />
      <FAQ />
    </GeneralLayout>
  );
};

export default Home;
