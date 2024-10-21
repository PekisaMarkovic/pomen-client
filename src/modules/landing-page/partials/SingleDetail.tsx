import Paragraph from "@/components/core/typography/Paragraph";

interface SingleDetailProps {
  title: string;
  text: string;
}

const SingleDetail = ({ text, title }: SingleDetailProps) => {
  return (
    <div className="flex flex-col gap-y-2.5">
      <Paragraph text={title} weight="semibold" color="black" size="base" />

      <Paragraph text={text} weight="normal" color="black" size="base" />
    </div>
  );
};

export default SingleDetail;
