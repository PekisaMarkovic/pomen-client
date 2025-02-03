import { getCertificateOptions } from "@/api/certificates";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = typeof window !== "undefined" ? window.location.origin : "";
  const certificateOptions = await getCertificateOptions();

  const certificates: MetadataRoute.Sitemap = certificateOptions.map((opt) => ({
    url: `${host}/profil/${opt.slug}`,
    changeFrequency: "monthly",
    priority: 1,
    images: [opt.image]
  }));

  return [
    {
      url: host,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 1
    },
    ...certificates,
    {
      url: `${host}/pretraga`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: `${host}/nas-vodic`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${host}/blog`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5
    }
  ];
}
