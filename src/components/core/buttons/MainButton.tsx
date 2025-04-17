import { ReactNode } from "react";
import { style } from "@/components/core/buttons/style";
import { InfiniteLoader } from "@/app/icons/general";

export type Variant = "secondary" | "primary" | "alt";

export type Size = "extra-small" | "small" | "medium" | "large" | "full";

type Props = {
  className?: string;
  text: string;
  ariaLabel?: string;
  size: Size;
  variant: Variant;
  htmlType?: "button" | "submit" | "reset";
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
  noHoverEffect?: boolean;
  onClick?: () => void;
};

const MainButton = ({
  className = "",
  text,
  onClick,
  htmlType = "button",
  size,
  variant,
  leftIcon,
  rightIcon,
  ariaLabel,
  noHoverEffect = false,
  disabled = false
}: Props) => {
  return (
    <button
      aria-label={ariaLabel || text}
      onClick={onClick}
      type={htmlType}
      className={`${style({
        size,
        variant,
        noHoverEffect,
        disabled
      })} ${className}`}
      disabled={disabled}
    >
      {disabled ? (
        <InfiniteLoader />
      ) : (
        <>
          {leftIcon}
          {text}
          {rightIcon}
        </>
      )}
    </button>
  );
};

export default MainButton;
