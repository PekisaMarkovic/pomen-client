import MainLink from "@/components/core/buttons/MainLink";
import Heading from "@/components/core/typography/Heading";
import Paragraph from "@/components/core/typography/Paragraph";
import { useTranslations } from "next-intl";

const translationResource = "landing";

const CtaOverview = () => {
  const t = useTranslations(translationResource);

  return (
    <section
      aria-labelledby="cta-details"
      className="bg-black px-6 py-8 flex flex-col gap-y-6"
    >
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

      <div className="flex flex-col gap-y-2.5">
        <MainLink href="#" text={t("cta.btn1")} variant="primary" size="full" />

        <MainLink
          href="#"
          text={t("cta.btn2")}
          variant="secondary"
          size="full"
        />
      </div>
    </section>
  );
};

export default CtaOverview;
