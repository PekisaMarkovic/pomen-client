import { Heading, MainLink, Paragraph } from "@/components/core";
import { useTranslations } from "next-intl";

const translationResource = "landing";

const CtaOverview = () => {
  const t = useTranslations(translationResource);

  return (
    <section
      aria-labelledby="cta-details"
      className="bg-black px-6 py-8 md:flex md:justify-center"
    >
      <div className="flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <div className="flex flex-col gap-y-2.5 items-center">
          <Heading
            id="cta-title"
            text={t("cta.title")}
            variant="3"
            size="2xl"
            color="white"
            weight="semibold"
            className="text-center"
          />

          <Paragraph
            text={t("cta.subtitle")}
            weight="light"
            size="base"
            color="white"
            className="text-center"
          />
        </div>

        <div className="flex flex-col md:flex-row gap-2.5">
          <MainLink
            href="#"
            text={t("cta.btn1")}
            variant="primary"
            size="full"
          />

          <MainLink
            href="#"
            text={t("cta.btn2")}
            variant="secondary"
            size="full"
          />
        </div>
      </div>
    </section>
  );
};

export default CtaOverview;
