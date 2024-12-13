import heroBg from "@/app/assets/landing/hero-bg.webp";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Logo from "@/app/icons/Logo";
import { Paragraph } from "@/components/core";

const translationResource = "our-guide";

const OurGuideHeroSection = () => {
  const t = useTranslations(translationResource);

  return (
    <section
      className="relative overflow-hidden md:flex md:justify-center"
      aria-labelledby="our-guide-hero-heading"
    >
      <div className="p-6 xl:p-12 flex gap-6 flex-col lg:flex-row lg:items-center mb-4 md:w-9/12 lg:w-6/12">
        <div>
          <Logo type="WHITE" />
        </div>

        <Paragraph text={t("hero.text")} weight="light" size="base" />
      </div>
      <Image
        className="absolute -z-1 inset-0 w-full h-full object-cover"
        width={1360}
        height={768}
        src={heroBg}
        alt={t("hero.alt")}
      />
    </section>
  );
};

export default OurGuideHeroSection;
