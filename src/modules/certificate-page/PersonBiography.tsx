import { Heading, Paragraph } from "@/components/core";
import Image from "next/image";
import functinalityBg from "@/app/assets/landing/hands-and-flowers.webp";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

type Props = { biography: string };

const PersonBiography = ({ biography }: Props) => {
  const { t } = useCustomTranslation();

  return (
    <div className="relative flex flex-col justify-center items-center">
      <div className="absolute -z-1 bg-overlay inset-0 w-full h-full object-cover" />

      <Image
        className="absolute -z-2 inset-0 w-full h-full object-cover"
        width={4096}
        height={2734}
        src={functinalityBg}
        alt={t(TranslationsEnums.LANDING_PAGE, "functionality.alt")}
      />

      <div className="p-6 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12 items-center">
        <Heading
          id="person-bio"
          text={t(TranslationsEnums.CERTIFICATE, "biography.title")}
          variant="2"
          size="2xl"
          color="white"
          weight="semibold"
          className="text-center mb-4"
        />

        <div className="flex flex-col gap-y-2.5 px-2.5 py-5 bg-overlay-dark rounded-sm whitespace-pre-wrap">
          <Paragraph text={biography} color="white" size="base" preWrap />
        </div>
      </div>
    </div>
  );
};

export default PersonBiography;
