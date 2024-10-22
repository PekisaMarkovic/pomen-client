import Paragraph from "@/components/core/typography/Paragraph";

interface SingleFunctionalityProps {
  title: string;
  text: string;
}

const SingleFunctionality = ({ text, title }: SingleFunctionalityProps) => {
  return (
    <div className="flex flex-col gap-y-2.5 px-2.5 py-5 bg-overlay-dark rounded-sm">
      <Paragraph text={title} weight="semibold" color="white" size="base" />

      <Paragraph text={text} color="white" size="base" />
    </div>
  );
};

export default SingleFunctionality;
