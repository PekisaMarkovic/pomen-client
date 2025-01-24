"use client";

import ROUTES from "@/components/constants/a-routes";
import ErrorMessage, {
  Variant,
} from "@/components/core/typography/ErrorMessage";
import { Spacing } from "@/interfaces/general";
import { spacing } from "@/utils/style/spacings";
import get from "lodash.get";
import { useRouter } from "next/navigation";
import { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";

type Props = {
  typeHtml?: "text" | "password";
  placeholder?: string;
  name: string;
  initValue?: string;
  disabled?: boolean;
  mt?: Spacing;
  mb?: Spacing;
  errorMessageType?: Variant;
};

const InputSearch = ({
  typeHtml = "text",
  placeholder,
  name,
  initValue,
  disabled,
  mb,
  mt,
  errorMessageType = "input",
}: Props) => {
  const router = useRouter();

  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();

  const errorObj = get(errors, name);

  const error =
    errorObj && errorObj.message ? (errorObj.message as string) : null;

  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (disabled) return;
    setValue(name, e.target.value);
    clearErrors(name);

    if (e.target.value.length >= 3) {
      router.push(`${ROUTES.SEARCH}?f=${e.target.value}`);
    }
  };

  return (
    <div
      className={`flex flex-col relative ${spacing("margin", {
        t: mt,
        b: mb,
      })}`}
    >
      <input
        autoComplete="off"
        {...register(name, { value: initValue || "" })}
        type={typeHtml}
        placeholder={placeholder}
        disabled={disabled}
        className="focus:outline-none"
        onChange={handleInputChange}
      />

      <ErrorMessage name={error} variant={errorMessageType} />
    </div>
  );
};

export default InputSearch;
