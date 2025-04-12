import { FontSize } from "@/interfaces/general";

export const fontSizes = (size: FontSize) => {
  switch (size) {
    case "xs":
      return "text-xs";
    case "sm":
      return "text-sm";
    case "base":
      return "text-base";
    case "lg":
      return "text-lg";
    case "xl":
      return "text-xl";
    case "2xl":
      return "text-2xl";
    case "3xl":
      return "text-3xl";
    case "4xl":
      return "text-4xl";
    case "5xl":
      return "text-5xl";
    case "6xl":
      return "text-6xl";
    case "7xl":
      return "text-7xl";
    case "8xl":
      return "text-8xl";
    case "9xl":
      return "text-9xl";
    default:
      return "text-base";
  }
};
