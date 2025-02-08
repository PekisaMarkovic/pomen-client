import { BlogContentTypeEnum, BlogContent } from "@/interfaces/blogs";
import BlogTitle from "@/modules/blogs-page/partials/BlogTitle";
import BlogText from "@/modules/blogs-page/partials/BlogText";

type Props = { content: BlogContent };

const BlogContentSection = ({ content }: Props) => {
  const { blogContentId } = content;

  const checkContentType = () => {
    switch (content.type) {
      case BlogContentTypeEnum.TITLE: {
        const title = content.paragraphs[0].text;
        return <BlogTitle title={title} />;
      }

      default:
        return <BlogText content={content} />;
    }
  };

  return (
    <section
      aria-labelledby={`blog-content-${blogContentId}`}
      className="px-6 py-8 md:flex md:justify-center"
    >
      <div className="flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        {checkContentType()}
      </div>
    </section>
  );
};

export default BlogContentSection;
