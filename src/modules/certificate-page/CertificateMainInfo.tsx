import { CertificateUser } from "@/app/icons/general";
import { Heading, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { LocationPoint } from "@/interfaces/general";
import PersonalInformation from "@/modules/certificate-page/partials/PersonalInformation";
import { formatDateDayMonthYear } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";
import heroBg from "@/app/assets/landing/hero-bg.webp";
import CertificateImage from "@/modules/certificate-page/partials/CertificateImage";
import { File } from "@/interfaces/file";

type Props = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
  placeOfBirth: string;
  placeOfDeath: string;
  fullCemeteryName: string;
  location?: LocationPoint;
  profileImage: File;
};

const CertificateMainInfo = ({
  fullCemeteryName,
  dateOfBirth,
  dateOfDeath,
  firstName,
  lastName,
  placeOfBirth,
  placeOfDeath,
  profileImage,
  location
}: Props) => {
  const { t } = useCustomTranslation();

  return (
    <div className="relative flex flex-col justify-center items-center p-4">
      <Image
        className="absolute -z-2 inset-0 w-full object-cover h-1/3"
        width={4096}
        height={2734}
        src={heroBg}
        alt={t(TranslationsEnums.LANDING_PAGE, "functionality.alt")}
      />

      <Heading
        id="certificate-name"
        text={`${firstName} ${lastName}`}
        variant="1"
        size="3xl"
        color="white"
        weight="semibold"
        className="text-center mb-4"
      />

      <div className="rounded-full overflow-hidden bg-medium-grey">
        {profileImage?.url ? (
          <CertificateImage
            profileImage={profileImage}
            alt={`${firstName} ${lastName} ${fullCemeteryName}`}
          />
        ) : (
          <CertificateUser />
        )}
      </div>

      <div className="flex flex-col items-center mt-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-8 xl:gap-16">
            <PersonalInformation
              label={t(
                TranslationsEnums.CERTIFICATE,
                "person-info.dateOfBirth"
              )}
              value={formatDateDayMonthYear(dateOfBirth)}
            />

            <PersonalInformation
              label={t(
                TranslationsEnums.CERTIFICATE,
                "person-info.dateOfDeath"
              )}
              value={formatDateDayMonthYear(dateOfDeath)}
            />
          </div>
          <div className="flex gap-8 xl:gap-16">
            <PersonalInformation
              label={t(
                TranslationsEnums.CERTIFICATE,
                "person-info.placeOfBirth"
              )}
              value={placeOfBirth}
            />

            <PersonalInformation
              label={t(
                TranslationsEnums.CERTIFICATE,
                "person-info.placeOfDeath"
              )}
              value={placeOfDeath}
            />
          </div>

          {location?.y && location?.x && (
            <div className="relative flex flex-col mb-20">
              <Paragraph
                text={t(TranslationsEnums.CERTIFICATE, "person-info.place")}
                weight="light"
                size="sm"
                color="black"
              />

              <Link
                href={`http://maps.google.co.uk/maps?q=${location?.y},${location?.x}`}
                target="_blank"
                className="absolute top-6"
              >
                <Paragraph
                  text={fullCemeteryName}
                  weight="semibold"
                  size="lg"
                  color="black"
                  noWrap
                />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificateMainInfo;
