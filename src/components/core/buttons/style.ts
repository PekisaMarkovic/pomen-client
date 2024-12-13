import { Size, Variant } from "./MainButton";

export const style = ({
  size,
  variant,
  disabled,
  noHoverEffect,
}: {
  size: Size;
  variant: Variant;
  noHoverEffect: boolean;
  disabled: boolean;
}): string => {
  const classes: string[] = [` flex items-center gap-x-1`];

  if (disabled) classes.push("cursor-not-allowed opacity-30");

  switch (size) {
    case "large":
      classes.push("py-4 px-8 text-sm rounded-xxl");
      break;

    case "medium":
      classes.push("py-2 px-6 text-sm rounded-xl-plus");
      break;

    case "small":
      classes.push("py-2 px-6 text-sm rounded-xs");

      break;

    case "extra-small":
      classes.push("py-1 px-4 text-sm rounded-xs");
      break;

    case "full":
      classes.push(
        "py-2 px-6 text-sm rounded-xs w-full flex items-center justify-center"
      );
      break;

    default:
      classes.push("py-2 px-6 text-sm rounded-xxl");
      break;
  }

  const hover = noHoverEffect ? "" : "hover:text-white hover:bg-transparent";

  const variantDefault = `text-black bg-white border-white ${hover} border-1 border-solid`;

  switch (variant) {
    case "primary":
      classes.push(variantDefault);
      break;

    case "alt":
      const hoverAlt = noHoverEffect
        ? ""
        : "hover:border-black hover:text-white hover:bg-black";

      classes.push(
        `text-white bg-transprent border-white ${hoverAlt} border-1 border-solid`
      );
      break;

    case "secondary":
      const hoverSecondary = noHoverEffect
        ? ""
        : "hover:border-white hover:text-white hover:bg-transparent";

      classes.push(
        `text-white bg-black border-black ${hoverSecondary} border-1 border-solid`
      );
      break;

    default:
      classes.push(variantDefault);
      break;
  }

  return classes.join(" ");
};
