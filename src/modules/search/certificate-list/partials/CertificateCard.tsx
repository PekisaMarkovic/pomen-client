import { UserPlaceholder } from "@/app/icons/general";
import ROUTES from "@/components/constants/a-routes";
import { Paragraph } from "@/components/core";
import { Certificate } from "@/interfaces/cemeteries";
import { DropdownCityDto } from "@/interfaces/cities";
import { formatDateDayMonthYear } from "@/utils/date";
import Image from "next/image";
import Link from "next/link";

type Props = { cetificate: Certificate; citiesOptions?: DropdownCityDto[] };

const CertificateCard = ({ cetificate, citiesOptions = [] }: Props) => {
  const {
    slug,
    firstName,
    lastName,
    biography,
    dateOfBirth,
    placeOfBirth,
    dateOfDeath,
    placeOfDeath,
    cemetery
  } = cetificate;
  const city = citiesOptions.find(
    (opt) => opt.cityId == cetificate?.cemetery?.cityId
  );

  return (
    <Link href={`${ROUTES.PROFILE}/${slug}`}>
      <article className="flex gap-1 border-b-1 border-solid border-b-light-grey py-3 md:py-4 lg:py-6 hover:cursor-pointer hover:bg-hover-grey px-2">
        <div>
          {cetificate.profileImage?.url ? (
            <div className="w-14 h-14">
              <Image
                src={cetificate.profileImage?.url}
                alt={`${firstName} ${lastName} ${biography}`}
                height={56}
                width={56}
                className="rounded-full overflow-hidden"
              />
            </div>
          ) : (
            <div className="w-14 h-14 rounded-full overflow-hidden">
              <UserPlaceholder />
            </div>
          )}
        </div>
        <div>
          <Paragraph
            text={`${firstName} ${lastName}`}
            weight="semibold"
            size="2xl"
            color="black"
          />

          <Paragraph
            text={`${formatDateDayMonthYear(
              dateOfBirth
            )}, ${placeOfBirth} - ${formatDateDayMonthYear(
              dateOfDeath
            )}, ${placeOfDeath}`}
            size="base"
            color="grey"
            className="mt-1"
          />

          <Paragraph
            text={`${cemetery.name}, ${cemetery?.address}, ${city?.name}`}
            size="base"
            color="grey"
          />

          <Paragraph
            text={biography}
            size="base"
            color="grey"
            className="mt-2"
          />
        </div>
      </article>
    </Link>
  );
};

export default CertificateCard;
