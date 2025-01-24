import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
} from "@/interfaces/general";
import { fontSizes } from "@/utils/style/font-sizes";
import { fontWeights } from "@/utils/style/font-weights";
import { spacing } from "@/utils/style/spacings";
import { formatText } from "@/utils/style/format-text";
import { textColor } from "@/utils/style/text-color";
import { MouseEventHandler, ReactNode } from "react";

type Props = {
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  className?: string;
  fontFamily?: FontFamily;
  size?: FontSize;
  color?: Color;
  noWrap?: boolean;
  preWrap?: boolean;
  handleOnClick?: MouseEventHandler<HTMLDivElement>;
  weight?: FontWeight;
  isRequired?: boolean;
  pl?: Spacing;
  pr?: Spacing;
  textTransform?: "uppercase" | "lowercase";
} & (
  | {
      text: string;
      children?: never;
    }
  | {
      text?: never;
      children: ReactNode;
    }
);

const Paragraph = ({
  text,
  children,
  leftIcon,
  rightIcon,
  className,
  fontFamily = "popins",
  size = "xs",
  color = "white",
  noWrap,
  preWrap,
  handleOnClick,
  weight = "normal",
  isRequired = false,
  pl,
  pr,
  textTransform,
}: Props) => {
  return (
    <div
      className={`flex gap-x-3 items-center overflow-hidden ${spacing(
        "padding",
        { l: pl, r: pr }
      )}`}
      onClick={handleOnClick}
    >
      {leftIcon}

      <p
        className={`font-${fontFamily} ${fontSizes(size)} ${textColor(color)} ${
          className || ""
        } ${fontWeights(weight)} ${formatText({
          noWrap,
          preWrap,
          textTransform,
        })}`}
      >
        {text}
        {isRequired && <span className="text-red">*</span>}
        {children}
      </p>

      {rightIcon}
    </div>
  );
};

export default Paragraph;
