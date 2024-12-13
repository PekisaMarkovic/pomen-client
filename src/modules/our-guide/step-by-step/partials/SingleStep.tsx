import { Paragraph } from "@/components/core";
import SubStep from "@/modules/our-guide/step-by-step/partials/SubStep";

type Props = {
  index: number;
  title: string;
  text: string;
  subSteps?: { title: string; text: string }[];
};

const SingleStep = ({ index, text, title, subSteps }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-2">
        <Paragraph
          text={`${index}.`}
          weight="semibold"
          size="base"
          color="black"
        />

        <Paragraph text={title} weight="semibold" color="black" size="base" />
      </div>

      <Paragraph text={text} weight="light" color="black" size="base" />

      {subSteps && (
        <>
          {subSteps.map((sub, i) => (
            <SubStep text={sub.text} title={sub.title} key={i} />
          ))}
        </>
      )}
    </div>
  );
};

export default SingleStep;
