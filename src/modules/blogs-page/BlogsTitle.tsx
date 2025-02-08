import { Heading } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const BlogsTitle = () => {
  const { t } = useCustomTranslation();

  return (
    <Heading
      id="blog-title"
      text={t(TranslationsEnums.BLOG_PAGE, "title")}
      variant="1"
      size="3xl"
      color="black"
      weight="semibold"
      className="text-center mb-8 mx-auto"
    />
  );
};

export default BlogsTitle;
