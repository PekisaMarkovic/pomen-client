import { FontWeight } from "@/interfaces/general";

export const fontWeights = (weight: FontWeight) => {
  switch (weight) {
    case "thin":
      return "font-thin";
    case "light":
      return "font-light";
    case "normal":
      return "font-normal";
    case "medium":
      return "font-medium";
    case "semibold":
      return "font-semibold";
    case "bold":
      return "font-bold";
    case "extrabold":
      return "font-extrabold";
    case "black":
      return "font-black";
    default:
      return "font-normal";
  }
};
