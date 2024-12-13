import { Paragraph } from "@/components/core";
import { Arrow } from "@/app/icons/general";

type Props = {
  title: string;
  text: string;
};
const SubStep = ({ text, title }: Props) => {
  return (
    <div className="flex flex-col gap-y-2">
      <div className="flex gap-2">
        <div className="mt-1.5">
          <Arrow type="RIGHT" />
        </div>

        <div>
          <Paragraph text={title} weight="semibold" color="black" size="base" />
          <Paragraph text={text} weight="light" color="black" size="base" />
        </div>
      </div>
    </div>
  );
};

export default SubStep;
