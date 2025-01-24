import heroBg from "@/app/assets/landing/hero-bg.webp";
import Logo from "@/app/icons/Logo";
import Image from "next/image";
import HeroSearch from "@/modules/landing-page/hero-section/partials/HeroSearch";
import { Heading, MainLink, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const HeroSection = () => {
  const { t } = useCustomTranslation();

  return (
    <section
      className="relative overflow-hidden md:flex md:justify-center"
      aria-labelledby="hero-heading"
    >
      <div className="p-6 xl:p-12 flex flex-col items-center mb-4 md:w-9/12 lg:w-6/12">
        <Logo type="WHITE" />

        <div className="my-7 flex flex-col gap-y-3.5 items-center">
          <Heading
            id="hero-heading"
            text={t(TranslationsEnums.LANDING_PAGE, "hero.title")}
            variant="1"
            size="2xl"
            color="white"
            weight="semibold"
            className="text-center text-3xl md:text-4xl xl:text-6xl"
          />

          <Paragraph
            text={t(TranslationsEnums.LANDING_PAGE, "hero.subtitle")}
            weight="light"
            size="base"
            className="text-center"
          />
        </div>

        <HeroSearch />

        <div className="w-full flex flex-col md:flex-row gap-4">
          <MainLink
            href="#"
            text={t(TranslationsEnums.LANDING_PAGE, "hero.button")}
            variant="primary"
            size="full"
          />

          <MainLink
            href="#"
            text={t(TranslationsEnums.LANDING_PAGE, "hero.button2")}
            variant="alt"
            size="full"
          />
        </div>
      </div>
      <Image
        className="absolute -z-1 inset-0 w-full h-full object-cover"
        width={1360}
        height={768}
        src={heroBg}
        alt={t(TranslationsEnums.LANDING_PAGE, "hero.text")}
      />
    </section>
  );
};

export default HeroSection;
