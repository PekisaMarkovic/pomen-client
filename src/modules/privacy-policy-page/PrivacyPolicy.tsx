import { Heading, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const PrivacyPolicy = () => {
  const { t } = useCustomTranslation();

  return (
    <div className="flex flex-col gap-4 pb-24">
      <Heading
        id="privacy-policy-title"
        text={t(TranslationsEnums.RRIVACY_POLICY, "title")}
        variant="1"
        size="3xl"
        color="black"
        weight="semibold"
        className="text-center mb-8 mx-auto"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text1")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text2")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text3")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text4")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text5")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text6")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text7")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.RRIVACY_POLICY, "text8")}
        weight="light"
        size="sm"
        color="black"
      />
    </div>
  );
};

export default PrivacyPolicy;
