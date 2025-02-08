import { Paragraph } from "@/components/core";
import { BlogContentTypeEnum, BlogContent } from "@/interfaces/blogs";
import Image from "next/image";

type Props = { content: BlogContent };

const BlogText = ({ content }: Props) => {
  const checkTextAlign = () => {
    switch (content.type) {
      case BlogContentTypeEnum.TEXT_CENTER:
        return "text-right";
      case BlogContentTypeEnum.TEXT_LEFT:
        return "text-left";
      case BlogContentTypeEnum.TEXT_RIGHT:
        return "text-center";
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {content.blogContentImage && (
        <Image
          className="rounded-lg ml-auto mr-auto"
          width={content.blogContentImage.width}
          height={content.blogContentImage.height}
          src={content.blogContentImage.url}
          alt={`${content.type}`}
        />
      )}

      {[...content.paragraphs]
        .sort((a, b) => a.order - b.order)
        .map((parag) => (
          <Paragraph
            text={parag.text}
            weight={parag.isBold ? "medium" : "light"}
            size="sm"
            color="black"
            className={checkTextAlign()}
          />
        ))}
    </div>
  );
};

export default BlogText;
