import { Label, ErrorMessage } from "@/components/core";
import { useFormContext } from "react-hook-form";
import { Variant } from "@/components/core/typography/ErrorMessage";
import get from "lodash.get";
import { ChangeEventHandler } from "react";
import { Spacing } from "@/interfaces/general";
import { inputTextStyle } from "@/components/core/inputs/InputTextStyle";
import { spacing } from "@/utils/style/spacings";

export type InputVaraint = "default" | "simple";

type Props = {
  typeHtml?: "text" | "password";
  placeholder?: string;
  label?: string;
  labelTooltip?: string;
  isRequired?: boolean;
  name: string;
  initValue?: string;
  variant?: InputVaraint;
  disabled?: boolean;
  textCenter?: boolean;
  mt?: Spacing;
  mb?: Spacing;
  errorMessageType?: Variant;
};

const InputText = ({
  label,
  typeHtml = "text",
  placeholder,
  isRequired,
  name,
  initValue,
  variant = "default",
  disabled,
  textCenter,
  mb,
  mt,
  errorMessageType = "input",
}: Props) => {
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
    <div
      className={`flex flex-col relative ${spacing("margin", {
        t: mt,
        b: mb,
      })}`}
    >
      {variant === "default" && label && (
        <Label htmlFor={name} label={label} isRequired={isRequired} />
      )}

      <input
        autoComplete="off"
        {...register(name, { value: initValue || "" })}
        type={typeHtml}
        placeholder={placeholder}
        className={inputTextStyle({ error, textCenter, variant, disabled })}
        disabled={disabled}
        onChange={handleInputChange}
      />

      <ErrorMessage name={error} variant={errorMessageType} />
    </div>
  );
};

export default InputText;
