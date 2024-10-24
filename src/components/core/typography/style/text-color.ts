import { Color } from "@/interfaces/general";

export const textColor = (color: Color) => {
  switch (color) {
    case "black":
      return "text-black";
    case "white":
      return "text-white";

    default:
      return "text-black";
  }
};
