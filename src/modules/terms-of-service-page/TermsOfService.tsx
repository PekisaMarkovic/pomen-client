import { Heading, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const TermsOfService = () => {
  const { t } = useCustomTranslation();

  return (
    <div className="flex flex-col gap-4 pb-24">
      <Heading
        id="terms-of-use-title"
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "title")}
        variant="1"
        size="3xl"
        color="black"
        weight="semibold"
        className="text-center mb-8 mx-auto"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text1")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text2")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text3")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text4")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text5")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text6")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text7")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text8")}
        weight="light"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text9")}
        weight="medium"
        size="sm"
        color="black"
      />
      <Paragraph
        text={t(TranslationsEnums.TERMS_OF_SERVICE, "text10")}
        weight="light"
        size="sm"
        color="black"
      />
    </div>
  );
};

export default TermsOfService;
