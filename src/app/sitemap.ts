import { getBlogsSitemap } from "@/api/blogs";
import { getCertificateOptions } from "@/api/certificates";
import type { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const host = "pomen.org";
  const certificateOptions = await getCertificateOptions();
  const blogForSitemap = await getBlogsSitemap();

  const certificates: MetadataRoute.Sitemap = certificateOptions.map((opt) => ({
    url: `${host}/profil/${opt.slug}`,
    changeFrequency: "monthly",
    priority: 1,
    images: [opt.image]
  }));

  const blogs: MetadataRoute.Sitemap = blogForSitemap.map((opt) => ({
    url: `${host}/blogs/${opt.slug}`,
    changeFrequency: "monthly",
    priority: 0.5,
    images: [opt.image]
  }));

  return [
    {
      url: host,
      changeFrequency: "yearly",
      priority: 1
    },
    ...certificates,
    {
      url: `${host}/pretraga`,
      changeFrequency: "yearly",
      priority: 0.8
    },
    {
      url: `${host}/nas-vodic`,
      changeFrequency: "yearly",
      priority: 0.5
    },
    {
      url: `${host}/blogs`,
      changeFrequency: "yearly",
      priority: 0.5
    },
    ...blogs
  ];
}
