import get from "lodash.get";
import { useFormContext } from "react-hook-form";
import { ErrorMessage } from "@/components/core";
import { ReactNode } from "react";
import { CheckIcon, UnCheckIcon } from "@/app/icons/general";

type Props = {
  handleOnClick: () => void;
  label: ReactNode;
  checked: boolean;
  noHover?: boolean;
  name: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  disabled?: boolean;
};

const CheckboxOption = ({
  handleOnClick,
  label,
  checked,
  noHover = false,
  name,
  leftIcon,
  rightIcon,
  disabled
}: Props) => {
  const {
    formState: { errors }
  } = useFormContext();
  const errorObj = get(errors, `${name}.checked`);

  const error =
    errorObj && errorObj.message ? (errorObj.message as string) : null;

  return (
    <div className="relative">
      <div
        className={`flex items-center gap-x-1 px-4 py-2.5 ${
          disabled ? "cursor-not-allowed" : "cursor-pointer"
        } ${noHover ? "" : "hover:bg-light-grey-transparent"}`}
        onClick={handleOnClick}
      >
        <div>{checked ? <CheckIcon /> : <UnCheckIcon />}</div>
        <p className="font-poppins text-sm text-dark-grey">
          {leftIcon}
          {label}
          {rightIcon}
        </p>
      </div>
      <ErrorMessage name={error} variant="select" />
    </div>
  );
};

export default CheckboxOption;
