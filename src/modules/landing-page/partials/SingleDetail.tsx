import Paragraph from "@/components/typography/Paragraph";

interface SingleDetailProps {
  title: string;
  text: string;
}

const SingleDetail = ({ text, title }: SingleDetailProps) => {
  return (
    <div>
      <Paragraph text={title} weight="semibold" color="black" size="base" />

      <Paragraph text={text} weight="normal" color="black" size="base" />
    </div>
  );
};

export default SingleDetail;
