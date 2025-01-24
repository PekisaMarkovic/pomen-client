import { Color } from "@/interfaces/general";

export const textColor = (color: Color) => {
  switch (color) {
    case "black":
      return "text-black";
    case "white":
      return "text-white";
    case "grey":
      return "text-grey";
    case "light-grey":
      return "text-light-grey";

    default:
      return "text-black";
  }
};
