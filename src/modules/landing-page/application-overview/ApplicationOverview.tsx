import ROUTES from "@/components/constants/a-routes";
import { Heading, NavigationLink, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import SingleDetail from "@/modules/landing-page/application-overview/SingleDetail";
import { generateArrayOfLen } from "@/utils/array";

const ApplicationOverview = () => {
  const { t } = useCustomTranslation();

  const infos = generateArrayOfLen(3);

  return (
    <section
      aria-labelledby="application-details"
      className="md:flex md:justify-center"
    >
      <div className="px-6 py-14 xl:px-12 grid grid-cols-1 lg:grid-cols-2 gap-6 md:w-9/12 lg:w-6/12">
        <div>
          <Heading
            id="application-details-title"
            text={t(TranslationsEnums.LANDING_PAGE, "applicationDetails.title")}
            variant="2"
            size="2xl"
            color="black"
            weight="semibold"
            className="mb-4"
          />

          <Paragraph
            text={t(TranslationsEnums.LANDING_PAGE, "applicationDetails.text")}
            color="black"
            size="base"
            className="mb-2"
          />

          <NavigationLink
            href={ROUTES.OUR_GUIDE}
            text={t(TranslationsEnums.LANDING_PAGE, "applicationDetails.btn")}
          />
        </div>

        <div className="grid grid-cols-1 gap-y-6">
          {infos.map((el) => (
            <SingleDetail
              text={t(
                TranslationsEnums.LANDING_PAGE,
                `applicationDetails.info[${el}].text`
              )}
              title={t(
                TranslationsEnums.LANDING_PAGE,
                `applicationDetails.info[${el}].title`
              )}
              key={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ApplicationOverview;
