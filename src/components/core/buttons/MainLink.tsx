import { ReactNode } from "react";
import { Size, Variant } from "./MainButton";
import { style } from "./style";
import Link from "next/link";

type Props = {
  className?: string;
  text: string | ReactNode;
  size: Size;
  variant: Variant;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  href: string;
  target?: "_blank" | "_top" | "_parent" | "_self";
};

const MainLink = ({
  href,
  size,
  text,
  variant,
  leftIcon,
  rightIcon,
  disabled = false,
  target,
  className = "",
}: Props) => {
  return (
    <Link
      href={href}
      className={`${style({
        size,
        variant,
        disabled,
      })} ${className}`}
      target={target}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </Link>
  );
};

export default MainLink;
