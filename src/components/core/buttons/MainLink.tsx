import { ReactNode } from "react";
import { Size, Variant } from "@/components/core/buttons/MainButton";
import { style } from "@/components/core/buttons/style";
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
  noHoverEffect?: boolean;
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
  noHoverEffect = false,
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
        noHoverEffect,
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
