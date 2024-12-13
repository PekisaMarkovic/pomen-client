import functinalityBg from "@/app/assets/landing/hands-and-flowers.webp";
import { Heading } from "@/components/core";
import { generateArrayOfLen } from "@/utils/array";
import { useTranslations } from "next-intl";
import Image from "next/image";
import SingleFunctionality from "@/modules/landing-page/functionality/partials/SingleFunctionality";

const translationResource = "landing";

const FunctionalityOverview = () => {
  const t = useTranslations(translationResource);

  const infos = generateArrayOfLen(5);

  return (
    <section
      aria-labelledby="application-details"
      className="relative md:flex md:justify-center"
    >
      <div className="absolute -z-1 bg-overlay inset-0 w-full h-full object-cover" />

      <Image
        className="absolute -z-2 inset-0 w-full h-full object-cover"
        width={4096}
        height={2734}
        src={functinalityBg}
        alt={t("functionality.alt")}
      />
      <div className="p-6 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <Heading
          id="application-details-title"
          text={t("functionality.title")}
          variant="3"
          size="2xl"
          color="white"
          weight="semibold"
          className="text-center"
        />

        <div className="flex flex-col md:grid md:grid-cols-2  xl:grid-cols-3 gap-6 mt-5">
          {infos.map((el) => (
            <SingleFunctionality
              text={t(`functionality.info[${el}].text`)}
              title={t(`functionality.info[${el}].title`)}
              key={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FunctionalityOverview;
