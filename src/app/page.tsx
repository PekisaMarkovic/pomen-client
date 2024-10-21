import MainNavigation from "@/components/core/navigation/MainNavigation";
import ApplicationOverview from "@/modules/landing-page/ApplicationOverview";
import FunctionalityOverview from "@/modules/landing-page/FunctionalityOverview";
import HeroSection from "@/modules/landing-page/HeroSection";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <HeroSection />
      <ApplicationOverview />
      <FunctionalityOverview />
    </>
  );
};

export default Home;
