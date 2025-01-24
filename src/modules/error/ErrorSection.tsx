import Logo from "@/app/icons/Logo";
import ROUTES from "@/components/constants/a-routes";
import { Heading, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import Link from "next/link";

type Props = {
  status?: string;
};

const ErrorSection = ({ status }: Props) => {
  const { t } = useCustomTranslation();

  return (
    <div className="flex flex-col gap-2 items-center justify-center p-4 h-full">
      <Link href={ROUTES.INDEX} className="mb-8">
        <Logo type="DARK" />
      </Link>

      {status && (
        <Heading
          id="error-number"
          text={`${status}`}
          variant="2"
          size="3xl"
          color="black"
          weight="semibold"
          className="text-center"
        />
      )}

      <Heading
        id="error-title"
        text={t(TranslationsEnums.GENERAL, "error.title")}
        variant="1"
        size="5xl"
        color="black"
        weight="bold"
        className="text-center my-4"
      />

      <Paragraph
        text={t(TranslationsEnums.GENERAL, "error.custom")}
        weight="light"
        size="lg"
        color="black"
        className="text-center mb-4"
      />
    </div>
  );
};

export default ErrorSection;
