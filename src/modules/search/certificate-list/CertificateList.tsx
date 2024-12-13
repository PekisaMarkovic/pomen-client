import { Certificate } from "@/interfaces/cemeteries";
import CertificateCard from "@/modules/search/certificate-list/partials/CertificateCard";
import { Heading } from "@/components/core";
import { useTranslations } from "next-intl";
import { DropdownCityDto } from "@/interfaces/cities";

type Props = {
  citiesOptions: DropdownCityDto[];
  certificates: Certificate[];
  total: number;
};
const translationResource = "search";

const CertificateList = ({ certificates, total, citiesOptions }: Props) => {
  const t = useTranslations(translationResource);

  return (
    <section aria-labelledby="people-list" className="px-4 mt-6">
      <Heading
        id="cta-title"
        text={`${total} ${t("filters.resultsForSearch")}`}
        variant="1"
        size="3xl"
        color="black"
        weight="normal"
        className="text-center"
      />
      <div className="flex flex-col mt-4">
        {certificates.map((certificate) => (
          <CertificateCard
            citiesOptions={citiesOptions}
            cetificate={certificate}
            key={certificate.certificateId}
          />
        ))}
      </div>
    </section>
  );
};

export default CertificateList;
