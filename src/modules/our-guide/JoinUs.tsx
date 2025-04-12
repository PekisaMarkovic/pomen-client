import ROUTES from "@/components/constants/a-routes";
import { Heading, MainLink, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const JoinUs = () => {
  const { t } = useCustomTranslation();

  return (
    <section
      aria-labelledby="our-guide-details"
      className="px-6 py-8 md:flex md:justify-center"
    >
      <div className="flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <Heading
          id="join-us-title"
          text={t(TranslationsEnums.OUR_GUIDE, "join-us.title")}
          variant="3"
          size="2xl"
          color="black"
          weight="semibold"
        />

        <Paragraph
          text={t(TranslationsEnums.OUR_GUIDE, "join-us.text1")}
          weight="light"
          size="base"
          color="black"
        />

        <Paragraph
          text={t(TranslationsEnums.OUR_GUIDE, "join-us.text2")}
          weight="light"
          size="base"
          color="black"
        />

        <Paragraph
          text={t(TranslationsEnums.OUR_GUIDE, "join-us.text3")}
          weight="light"
          size="base"
          color="black"
        />

        <div className="w-full md:w-1/3">
          <MainLink
            href={ROUTES.CREATE_CERTIFICATE}
            text={t(TranslationsEnums.OUR_GUIDE, "join-us.btn")}
            variant="secondary"
            noHoverEffect
            size="full"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinUs;
