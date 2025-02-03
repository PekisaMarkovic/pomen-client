import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const host = "pomen.org";

  return {
    rules: {
      userAgent: "*",
      allow: "/"
    },
    sitemap: `${host}/sitemap.xml`
  };
}
