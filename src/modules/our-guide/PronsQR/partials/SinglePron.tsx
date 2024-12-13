import { Paragraph } from "@/components/core";

interface SinglePronProps {
  title: string;
  text: string;
}

const SinglePron = ({ text, title }: SinglePronProps) => {
  return (
    <div className="flex flex-col gap-y-2.5 px-2.5 py-5 border-1 border-solid border-white rounded-sm">
      <Paragraph text={title} weight="semibold" color="white" size="base" />

      <Paragraph text={text} color="white" size="base" />
    </div>
  );
};

export default SinglePron;
