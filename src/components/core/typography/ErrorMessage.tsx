import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

export type Variant = "input" | "select" | "upload" | "custom";

type Props = {
  message?: string;
  name?: string | null;
  variant?: Variant;
};
const ErrorMessage = ({ name, variant, message }: Props) => {
  const { t } = useCustomTranslation();

  if (message)
    return <span className="font-montserrat text-sm text-red">{message}</span>;

  return (
    <>
      {name && (
        <span className="font-montserrat text-sm text-red">
          {t(TranslationsEnums.ERROR, `${variant}`)}
          {t(TranslationsEnums.ERROR, `fields.${name}`)}
        </span>
      )}
    </>
  );
};

export default ErrorMessage;
