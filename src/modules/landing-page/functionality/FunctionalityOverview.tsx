import functinalityBg from "@/app/assets/landing/hands-and-flowers.webp";
import Heading from "@/components/core/typography/Heading";
import { generateArrayOfLen } from "@/utils/array";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SingleFunctionality from "./SingleFunctionality";

const translationResource = "landing";

const FunctionalityOverview = () => {
  const t = useTranslations(translationResource);

  const infos = generateArrayOfLen(5);

  return (
    <section
      aria-labelledby="application-details"
      className="relative p-6 flex flex-col gap-y-6 items-center"
    >
      <div className="absolute -z-1 bg-overlay inset-0 w-full h-full object-cover" />

      <Image
        className="absolute -z-2 inset-0 w-full h-full object-cover"
        width={4096}
        height={2734}
        src={functinalityBg}
        alt={t("functionality.alt")}
      />

      <Heading
        id="application-details-title"
        text={t("functionality.title")}
        variant="3"
        size="2xl"
        color="white"
        weight="semibold"
        className="text-center"
      />

      <div className="flex flex-col gap-y-6 mt-5">
        {infos.map((el) => (
          <SingleFunctionality
            text={t(`functionality.info[${el}].text`)}
            title={t(`functionality.info[${el}].title`)}
            key={el}
          />
        ))}
      </div>
    </section>
  );
};

export default FunctionalityOverview;
