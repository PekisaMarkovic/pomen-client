"use client";

import { resources } from "@/translations/config";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";

i18n.use(initReactI18next).init({
  lng: "sr",
  ns: ["f", "b"],
  resources,
});

type TranslatedTextProps = {
  path: string;
  source: string;
};

const TranslatedText = ({ path, source }: TranslatedTextProps) => {
  const { t } = useTranslation([source]);

  return t(path);
};

export default TranslatedText;
