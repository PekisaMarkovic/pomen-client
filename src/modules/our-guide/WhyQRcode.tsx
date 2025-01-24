import functinalityBg from "@/app/assets/landing/hands-and-flowers.webp";
import { Heading, Paragraph } from "@/components/core";
import { generateArrayOfLen } from "@/utils/array";
import Image from "next/image";
import SingleFunctionality from "@/modules/landing-page/functionality/partials/SingleFunctionality";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const WhyQRcode = () => {
  const { t } = useCustomTranslation();

  const infos = generateArrayOfLen(4);

  return (
    <section
      aria-labelledby="why-qr"
      className="relative md:flex md:justify-center"
    >
      <div className="absolute -z-1 bg-overlay inset-0 w-full h-full object-cover" />

      <Image
        className="absolute -z-2 inset-0 w-full h-full object-cover"
        width={4096}
        height={2734}
        src={functinalityBg}
        alt={t(TranslationsEnums.OUR_GUIDE, "why-qr.alt")}
      />
      <div className="p-6 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <Heading
          id="why-qr-title"
          text={t(TranslationsEnums.OUR_GUIDE, "why-qr.title")}
          variant="3"
          size="2xl"
          color="white"
          weight="semibold"
          className="text-center"
        />

        <Paragraph
          text={t(TranslationsEnums.OUR_GUIDE, "why-qr.text")}
          weight="light"
          size="base"
        />

        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 mt-5">
          {infos.map((el) => (
            <SingleFunctionality
              text={t(TranslationsEnums.OUR_GUIDE, `why-qr.info[${el}].text`)}
              title={t(TranslationsEnums.OUR_GUIDE, `why-qr.info[${el}].title`)}
              key={el}
            />
          ))}
        </div>

        <Paragraph
          text={t(TranslationsEnums.OUR_GUIDE, "why-qr.sub-text")}
          weight="light"
          size="base"
        />
      </div>
    </section>
  );
};

export default WhyQRcode;
