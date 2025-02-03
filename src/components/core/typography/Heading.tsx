import { ReactNode } from "react";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing
} from "@/interfaces/general";
import { textColor as textColorPicker } from "@/utils/style/text-color";
import { fontSizes } from "@/utils/style/font-sizes";
import { fontWeights } from "@/utils/style/font-weights";

type Variant = "1" | "2" | "3" | "4" | "5";

type Props = {
  text: string;
  className?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  variant: Variant;
  fontFamily?: FontFamily;
  size?: FontSize;
  color?: Color;
  weight?: FontWeight;
  pl?: Spacing;
  pr?: Spacing;
  textTransform?: "uppercase" | "lowercase";
  id?: string;
};

const Heading = ({
  text,
  leftIcon,
  rightIcon,
  variant,
  className,
  fontFamily = "popins",
  size = "2xl",
  color = "black",
  weight = "normal",
  pl,
  pr,
  textTransform,
  id
}: Props) => {
  const textColor = textColorPicker(color);
  const textWeight = fontWeights(weight);
  const textSize = fontSizes(size);
  const paddingLeft = pl ? `pl-${pl}` : "";
  const paddingRight = pr ? `pr-${pr}` : "";
  const txtTransform = textTransform || "";

  const variants: Record<Variant, ReactNode> = {
    "1": (
      <h1
        id={id}
        className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${textWeight} ${textSize} ${textColor} flex gap-x-3 items-center ${className}`}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </h1>
    ),
    "2": (
      <h2
        id={id}
        className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${textWeight} ${textSize} ${textColor} uppercase flex gap-x-3 items-center ${className}`}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </h2>
    ),
    "3": (
      <h3
        id={id}
        className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${textWeight} ${textSize} ${textColor} flex gap-x-3 items-center ${className}`}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </h3>
    ),
    "4": (
      <h4
        id={id}
        className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${textWeight} ${textSize} ${textColor} flex gap-x-3 items-center ${className}`}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </h4>
    ),
    "5": (
      <h5
        id={id}
        className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${textWeight} ${textSize} ${textColor} flex gap-x-3 items-center ${className}`}
      >
        {leftIcon}
        {text}
        {rightIcon}
      </h5>
    )
  };

  return variants[variant];
};

export default Heading;
