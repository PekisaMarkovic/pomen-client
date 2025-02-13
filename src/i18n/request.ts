import { getRequestConfig } from "next-intl/server";

export enum TranslationsEnums {
  GENERAL = "general",
  LANDING_PAGE = "landing",
  OUR_GUIDE = "our-guide",
  BLOG_PAGE = "blogs",
  REFUND_POLICY = "refund-policy",
  RRIVACY_POLICY = "privacy-policy",
  TERMS_OF_SERVICE = "terms-of-service",
  SEARCH = "search",
  CERTIFICATE = "certificate",
  ERROR = "error"
}

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "sr";

  const translations = async () => {
    const generalTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.GENERAL}.json`
    );

    const landingPageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.LANDING_PAGE}-page.json`
    );

    const blogPageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.BLOG_PAGE}.json`
    );

    const ourGuidePageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.OUR_GUIDE}.json`
    );

    const ourRefundPlicyPageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.REFUND_POLICY}.json`
    );

    const ourPrivacyPolicyPageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.RRIVACY_POLICY}.json`
    );

    const ourSearchPageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.SEARCH}.json`
    );

    const ourTermsOfServicePageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.TERMS_OF_SERVICE}.json`
    );

    const certificatePageTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.CERTIFICATE}.json`
    );

    const errorTranslation = await await import(
      `../translations/${locale}/${TranslationsEnums.ERROR}.json`
    );

    return {
      ...generalTranslation,
      ...landingPageTranslation,
      ...ourGuidePageTranslation,
      ...ourSearchPageTranslation,
      ...certificatePageTranslation,
      ...blogPageTranslation,
      ...ourPrivacyPolicyPageTranslation,
      ...errorTranslation,
      ...ourRefundPlicyPageTranslation,
      ...ourTermsOfServicePageTranslation
    };
  };

  return {
    locale,
    messages: await translations()
  };
});
