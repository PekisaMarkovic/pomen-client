import Heading from "@/components/core/typography/Heading";
import { generateArrayOfLen } from "@/utils/array";
import { useTranslations } from "next-intl";
import SingleDetail from "./SingleDetail";

const translationResource = "landing";

const ApplicationOverview = () => {
  const t = useTranslations(translationResource);

  const infos = generateArrayOfLen(3);

  return (
    <section
      aria-labelledby="application-details"
      className="px-6 py-14 flex flex-col gap-y-6"
    >
      <Heading
        id="application-details-title"
        text={t("applicationDetails.title")}
        variant="2"
        size="2xl"
        color="black"
        weight="semibold"
        className="text-center"
      />

      <div className="flex flex-col gap-y-6">
        {infos.map((el) => (
          <SingleDetail
            text={t(`applicationDetails.info[${el}].text`)}
            title={t(`applicationDetails.info[${el}].title`)}
            key={el}
          />
        ))}
      </div>
    </section>
  );
};

export default ApplicationOverview;
