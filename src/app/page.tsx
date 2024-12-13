import GeneralLayout from "@/components/layouts/GeneralLayout";
import ApplicationOverview from "@/modules/landing-page/application-overview/ApplicationOverview";
import ContactUs from "@/modules/landing-page/contact-us/ContactUs";
import CtaOverview from "@/modules/landing-page/CtaOverview";
import FAQ from "@/modules/landing-page/faq/FAQ";
import FunctionalityOverview from "@/modules/landing-page/functionality/FunctionalityOverview";
import HeroSection from "@/modules/landing-page/hero-section/HeroSection";
import RatingSwiper from "@/modules/landing-page/ratings/RatingSwiper";

const Home = () => {
  return (
    <GeneralLayout>
      <HeroSection />
      <ApplicationOverview />
      <FunctionalityOverview />
      <RatingSwiper />
      <CtaOverview />
      <ContactUs />
      <FAQ />
    </GeneralLayout>
  );
};

export default Home;
