import { getRequestConfig } from "next-intl/server";

export enum TranslationsEnums {
  GENERAL = "general",
  LANDING_PAGE = "landing-page",
  OUR_GUIDE = "our-guide",
  BLOG_PAGE = "blogs",
  REFUND_POLICY = "refund-policy",
  RRIVACY_POLICY = "privacy-policy",
  TERMS_OF_SERVICE = "terms-of-service",
  PRICING = "pricing",
  SEARCH = "search",
  CERTIFICATE = "certificate",
  LEAD = "lead",
  ERROR = "error"
}

export default getRequestConfig(async () => {
  // Provide a static locale, fetch a user setting,
  // read from `cookies()`, `headers()`, etc.
  const locale = "sr";
  const keys = Object.values(TranslationsEnums);

  const messages: Record<string, any> = {};

  const promises = keys.map(
    (key) => import(`../translations/${locale}/${key}.json`)
  );

  const results = await Promise.all(promises);

  results.forEach((result) => Object.assign(messages, result));

  return {
    locale,
    messages
  };
});
