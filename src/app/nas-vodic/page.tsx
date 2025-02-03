import GeneralLayout from "@/components/layouts/GeneralLayout";
import FAQ from "@/modules/landing-page/faq/FAQ";
import JoinUs from "@/modules/our-guide/JoinUs";
import OurGuideHeroSection from "@/modules/our-guide/OurGuideHeroSection";
import PronsQR from "@/modules/our-guide/PronsQR/PronsQR";
import StepByStep from "@/modules/our-guide/step-by-step/StepByStep";
import WhyQRcode from "@/modules/our-guide/WhyQRcode";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Naš Vodič",
  description:
    "Inovacija koja pružaju nove mogućnosti za očuvanje uspomena na naše najmilije. Moderan način za očuvanje sećanja, omogućavajući posetiocima brz pristup profilu."
};

const OurGuide = () => {
  return (
    <GeneralLayout>
      <OurGuideHeroSection />
      <WhyQRcode />
      <StepByStep />
      <PronsQR />
      <FAQ />
      <JoinUs />
    </GeneralLayout>
  );
};

export default OurGuide;
