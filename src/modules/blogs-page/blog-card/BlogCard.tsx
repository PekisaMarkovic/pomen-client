import Image from "next/image";
import ogImage from "@/app/assets/seo/or-image.webp";
import { Heading, Paragraph } from "@/components/core";
import { Blog, BlogContentTypeEnum } from "@/interfaces/blogs";
import Link from "next/link";
import ROUTES from "@/components/constants/a-routes";
import { formatDateDayMonthYear } from "@/utils/date";
import { trimStringSEODescription } from "@/utils/string";

type Props = {
  blog: Blog;
};

const BlogCard = ({ blog }: Props) => {
  const titleContent = blog.contents.find(
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

  return (
    <Link
      href={`${ROUTES.BLOGS}/${blog.slug}`}
      className="mx-auto bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
    >
      <div className="relative">
        <Image
          src={image?.blogContentImage.url || ogImage}
          alt="Trading chart"
          width={400}
          height={250}
          className="w-full object-cover"
        />
      </div>
      <div className="p-5">
        <Heading
          text={titleContent?.paragraphs[0].text || ""}
          variant="2"
          size="xl"
          color="black"
          weight="bold"
          className="mt-3"
        />

        <Paragraph
          size="sm"
          text={trimStringSEODescription(allText)}
          color="grey"
          className="mt-2"
        />

        {blog.publishedAt && (
          <p className="mt-3 text-gray-400 text-sm">
            {formatDateDayMonthYear(blog.publishedAt)}
          </p>
        )}
      </div>
    </Link>
  );
};

export default BlogCard;
