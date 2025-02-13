import { Heading, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const RefundPolicy = () => {
  const { t } = useCustomTranslation();

  return (
    <div className="flex flex-col gap-4 pb-24">
      <Heading
        id="refund-policy-title"
        text={t(TranslationsEnums.REFUND_POLICY, "title")}
        variant="1"
        size="3xl"
        color="black"
        weight="semibold"
        className="text-center mb-8 mx-auto"
      />
      <Paragraph
        text={t(TranslationsEnums.REFUND_POLICY, "text1")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.REFUND_POLICY, "text2")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.REFUND_POLICY, "text3")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.REFUND_POLICY, "text4")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.REFUND_POLICY, "text5")}
        weight="light"
        size="sm"
        color="black"
      />
    </div>
  );
};

export default RefundPolicy;
