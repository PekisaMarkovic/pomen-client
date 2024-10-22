import heroBg from "@/app/assets/landing/hero-bg.webp";
import Logo from "@/app/icons/Logo";
import MainLink from "@/components/core/buttons/MainLink";
import Heading from "@/components/core/typography/Heading";
import Paragraph from "@/components/core/typography/Paragraph";
import { useTranslations } from "next-intl";
import Image from "next/image";

const translationResource = "landing";

const HeroSection = () => {
  const t = useTranslations(translationResource);

  return (
    <section
      className="relative overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="p-6 flex flex-col items-center mb-4">
        <Logo type="WHITE" />

        <div className="my-7 flex flex-col gap-y-3.5 items-center">
          <Heading
            id="hero-heading"
            text={t("hero.title")}
            variant="1"
            size="3xl"
            color="white"
            weight="semibold"
            className="text-center"
          />

          <Paragraph
            text={t("hero.subtitle")}
            weight="light"
            size="base"
            className="text-center"
          />
        </div>

        <MainLink
          href="#"
          text={t("hero.button")}
          variant="primary"
          size="full"
        />
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

export default HeroSection;
