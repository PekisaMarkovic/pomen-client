import { generateArrayOfLen } from "@/utils/array";
import { useTranslations } from "next-intl";
import SingleDetail from "@/modules/landing-page/application-overview/SingleDetail";
import { NavigationLink, Paragraph, Heading } from "@/components/core";
import ROUTES from "@/components/constants/a-routes";

const translationResource = "landing";

const ApplicationOverview = () => {
  const t = useTranslations(translationResource);

  const infos = generateArrayOfLen(3);

  return (
    <section
      aria-labelledby="application-details"
      className="md:flex md:justify-center"
    >
      <div className="px-6 py-14 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-y-6 md:w-9/12 lg:w-6/12">
        <div>
          <Heading
            id="application-details-title"
            text={t("applicationDetails.title")}
            variant="2"
            size="2xl"
            color="black"
            weight="semibold"
            className="text-center"
          />

          <Paragraph
            text={t("applicationDetails.text")}
            color="black"
            size="base"
            className="mt-2"
          />

          <NavigationLink
            href={ROUTES.OUR_GUIDE}
            text={t("applicationDetails.btn")}
          />
        </div>

        <div className="grid grid-cols-1 gap-y-6">
          {infos.map((el) => (
            <SingleDetail
              text={t(`applicationDetails.info[${el}].text`)}
              title={t(`applicationDetails.info[${el}].title`)}
              key={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationOverview;
