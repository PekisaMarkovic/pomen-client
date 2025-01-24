import { Paragraph } from "@/components/core";

type Props = {
  value: string;
  label?: string;
  noWrap?: boolean;
};

const PersonalInformation = ({ label, value, noWrap }: Props) => {
  return (
    <div className="flex flex-col">
      {label ? (
        <Paragraph text={label} weight="light" size="sm" color="black" />
      ) : (
        <div className="h-5" />
      )}
      <Paragraph
        text={value}
        weight="semibold"
        size="lg"
        color="black"
        noWrap={noWrap}
      />
    </div>
  );
};

export default PersonalInformation;
