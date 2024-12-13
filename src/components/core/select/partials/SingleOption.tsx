import { SelectOption } from "@/interfaces/general";
import { CheckIcon, UnCheckIcon } from "@/app/icons/general";
import { Paragraph } from "@/components/core";

type Props = {
  checked: boolean;
  handleOnClick: () => void;
  option: SelectOption;
  noWrap?: boolean;
};

const SingleOption = ({ checked, handleOnClick, option, noWrap }: Props) => (
  <div
    className="flex items-center gap-x-1 px-4 py-2.5 hover:bg-hover-grey"
    onClick={handleOnClick}
  >
    <div>{checked ? <CheckIcon /> : <UnCheckIcon />}</div>
    <div className="w-full overflow-hidden">
      <Paragraph size="sm" text={option.name} noWrap={noWrap} color="grey" />
    </div>
  </div>
);

export default SingleOption;
