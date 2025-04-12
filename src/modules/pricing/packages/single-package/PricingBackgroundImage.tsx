import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import Image from "next/image";
import functinalityBg from "@/app/assets/landing/hands-and-flowers.webp";
import { Heading } from "@/components/core";

const PricingBackgroundImage = () => {
  const { t } = useCustomTranslation();

  return (
    <>
      <Heading
        id="privacy-policy-title"
        text={t(TranslationsEnums.PRICING, "title")}
        variant="1"
        size="3xl"
        color="white"
        weight="semibold"
        className="text-center my-12 mx-auto"
      />

      <Image
        className="absolute -z-2 inset-0 w-full h-full object-cover"
        width={4096}
        height={2734}
        src={functinalityBg}
        alt={t(TranslationsEnums.OUR_GUIDE, "why-qr.alt")}
      />
    </>
  );
};

export default PricingBackgroundImage;
