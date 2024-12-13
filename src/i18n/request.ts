import { getRequestConfig } from "next-intl/server";

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "sr";

  const translations = async () => {
    const generalTranslation = await await import(
      `../translations/${locale}/general.json`
    );

    const landingPageTranslation = await await import(
      `../translations/${locale}/landing-page.json`
    );

    const ourGuidePageTranslation = await await import(
      `../translations/${locale}/our-guide.json`
    );

    const ourSearchPageTranslation = await await import(
      `../translations/${locale}/search.json`
    );

    return {
      ...generalTranslation,
      ...landingPageTranslation,
      ...ourGuidePageTranslation,
      ...ourSearchPageTranslation,
    };
  };

  return {
    locale,
    messages: await translations(),
  };
});
