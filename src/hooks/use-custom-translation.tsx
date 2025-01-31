import { TranslationsEnums } from "@/i18n/request";
import { useTranslations } from "next-intl";

const useCustomTranslation = () => {
  const customTranslation = (file: TranslationsEnums, key: string) => {
    const t = useTranslations(file);

    return t(key);
  };

  return {
    t: customTranslation
  };
};

export default useCustomTranslation;
