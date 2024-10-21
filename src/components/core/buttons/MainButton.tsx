import { ReactNode } from "react";
import { style } from "./style";

export type Variant = "secondary" | "primary";

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
  disabled = false,
}: Props) => {
  return (
    <button
      aria-label={ariaLabel || text}
      onClick={onClick}
      type={htmlType}
      className={`${style({
        size,
        variant,
        disabled,
      })} ${className}`}
      disabled={disabled}
    >
      {leftIcon}
      {text}
      {rightIcon}
    </button>
  );
};

export default MainButton;
