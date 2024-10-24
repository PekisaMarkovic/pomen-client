import { ReactNode } from "react";
import { fontSizes } from "./style/font-sizes";
import {
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
} from "@/interfaces/general";
import { fontWeights } from "./style/font-weights";

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
  id,
}: Props) => {
  const textColor = `text-${color}`;
  const paddingLeft = pl ? `pl-${pl}` : "";
  const paddingRight = pr ? `pr-${pr}` : "";
  const txtTransform = textTransform || "";

  const checkVariant = () => {
    switch (variant) {
      case "1":
        return (
          <h1
            id={id}
            className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${fontWeights(
              weight
            )} ${fontSizes(
              size
            )} ${textColor} flex gap-x-3 items-center ${className}`}
          >
            {leftIcon}
            {text}
            {rightIcon}
          </h1>
        );
      case "2":
        return (
          <h2
            id={id}
            className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${fontWeights(
              weight
            )} ${fontSizes(
              size
            )} ${textColor} uppercase flex gap-x-3 items-center ${className}`}
          >
            {leftIcon}
            {text}
            {rightIcon}
          </h2>
        );
      case "3":
        return (
          <h3
            id={id}
            className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${fontWeights(
              weight
            )} ${fontSizes(
              size
            )} ${textColor} flex gap-x-3 items-center ${className}`}
          >
            {leftIcon}
            {text}
            {rightIcon}
          </h3>
        );
      case "4":
        return (
          <h4
            id={id}
            className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${fontWeights(
              weight
            )} ${fontSizes(
              size
            )} ${textColor} flex gap-x-3 items-center ${className}`}
          >
            {leftIcon}
            {text}
            {rightIcon}
          </h4>
        );

      case "5":
        return (
          <h5
            id={id}
            className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} ${fontWeights(
              weight
            )} ${fontSizes(
              size
            )} ${textColor} flex gap-x-3 items-center ${className}`}
          >
            {leftIcon}
            {text}
            {rightIcon}
          </h5>
        );

      default:
        return (
          <h1
            id={id}
            className={`font-${fontFamily} ${paddingLeft} ${paddingRight} ${txtTransform} text-black gap-x-3 text-sm ${className}`}
          >
            {leftIcon}
            {text}
            {rightIcon}
          </h1>
        );
    }
  };
  return <>{checkVariant()}</>;
};

export default Heading;
