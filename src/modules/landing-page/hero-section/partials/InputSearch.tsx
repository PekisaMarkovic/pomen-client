"use client";

import get from "lodash.get";
import { ChangeEventHandler } from "react";
import { useFormContext } from "react-hook-form";
import { Spacing } from "@/interfaces/general";
import ErrorMessage, {
  Variant,
} from "@/components/core/typography/ErrorMessage";

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
  let marginTop = "";
  let marginBottom = "";

  if (mt) {
    marginTop = `mt-${mt}`;
  }
  if (mb) {
    marginBottom = `mt-${mb}`;
  }
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
  };

  return (
    <div className={`flex flex-col relative ${marginTop} ${marginBottom}`}>
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
