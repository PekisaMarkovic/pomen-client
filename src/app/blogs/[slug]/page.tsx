import { getBlogBySlug, getBlogsSitemap } from "@/api/blogs";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import { BlogContentTypeEnum } from "@/interfaces/blogs";
import BlogContentSection from "@/modules/blogs-page/BlogContentSection";
import { trimStringSEODescription } from "@/utils/string";
import { Metadata } from "next";
import { cache } from "react";
import ogImage from "@/app/assets/seo/or-image.webp";

const cashGetBlog = cache(async (slug: string) => {
  return getBlogBySlug(slug);
});

export type ProfilParams = {
  slug: string;
};

type Props = {
  params: ProfilParams;
};

export async function generateStaticParams() {
  const sitemap = await getBlogsSitemap();

  return sitemap.map((opt) => opt.slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = params;
  const blog = await cashGetBlog(slug);
  const title = blog.contents.find(
    (cont) => cont.type === BlogContentTypeEnum.TITLE
  );

  const allText = blog.contents
    .map((cont) => {
      if (cont.type === BlogContentTypeEnum.TITLE) {
        return "";
      } else {
        const parags: string[] = [];

        cont.paragraphs.map((par) => {
          parags.push(par.text);
        });

        return parags.join(" ");
      }
    })
    .join(" ");

  const image = blog.contents.find((cont) => cont.blogContentImage);

  return {
    title: `Blog - ${title?.paragraphs[0]?.text || ""}`,
    description: trimStringSEODescription(allText),
    openGraph: {
      images: [{ url: image?.blogContentImage.url || ogImage.src }]
    }
  };
}

const Blog = async ({ params }: Props) => {
  const { slug } = params;
  const blog = await cashGetBlog(slug);

  return (
    <GeneralLayout>
      {[...blog.contents]
        .sort((a, b) => a.order - b.order)
        .map((content) => (
          <BlogContentSection content={content} key={content.blogContentId} />
        ))}
      <div className="mb-24" />
    </GeneralLayout>
  );
};

export default Blog;
