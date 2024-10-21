import MainNavigation from "@/components/core/navigation/MainNavigation";
import ApplicationDetails from "@/modules/landing-page/ApplicationDetails";
import HeroSection from "@/modules/landing-page/HeroSection";

const Home = () => {
  return (
    <>
      <MainNavigation />
      <HeroSection />
      <ApplicationDetails />
    </>
  );
};

export default Home;
