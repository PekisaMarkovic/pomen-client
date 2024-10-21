import { Size, Variant } from "./MainButton";

export const style = ({
  size,
  variant,
  disabled,
}: {
  size: Size;
  variant: Variant;
  disabled: boolean;
}): string => {
  const classes: string[] = [` flex items-center gap-x-1`];

  if (disabled) classes.push("cursor-not-allowed opacity-30");

  switch (size) {
    case "large":
      classes.push("py-4 px-8 text-sm rounded-xxxl");
      break;

    case "medium":
      classes.push("py-2 px-6 text-sm rounded-xxl-plus");
      break;

    case "small":
      classes.push("py-2 px-6 text-sm rounded-sm");

      break;

    case "extra-small":
      classes.push("py-1 px-4 text-sm rounded-sm");
      break;

    case "full":
      classes.push(
        "py-2 px-6 text-sm rounded-xxl-plus w-full flex items-center justify-center"
      );
      break;

    default:
      classes.push("py-2 px-6 text-sm rounded-xxl");
      break;
  }

  const variantDefault =
    "text-black bg-white border-white hover:border-black hover:text-white hover:bg-black border-1 border-solid";
  switch (variant) {
    case "primary":
      classes.push(variantDefault);
      break;

    case "secondary":
      classes.push(
        "text-white bg-transprent border-white hover:border-black hover:text-white hover:bg-black border-1 border-solid"
      );
      break;

    default:
      classes.push(variantDefault);
      break;
  }

  return classes.join(" ");
};
