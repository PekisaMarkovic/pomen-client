import { getCemeteriesOptions } from "@/api/cemeteries";
import { searchCertificates } from "@/api/certificates";
import { getCitiesOptions } from "@/api/cities";
import { MainPaggination } from "@/components/core";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import CertificateList from "@/modules/search/certificate-list/CertificateList";
import SearchFilters from "@/modules/search/search-filters/SearchFilters";
import {
  checIsValueValidCemeterySlugAndReturnCityId,
  checIsValueValidCitySlugAndReturnCityId
} from "@/modules/search/search-filters/util/check-form-values";
import { Metadata } from "next";

const limit = 10;

export const metadata: Metadata = {
  title: "Pretrega - Platforma koja omogućava deljenje uspomena",
  description:
    "Pretražite memorijalne profile i pronađite uspomene na voljene osobe. Pregledajte biografije, slike, porodične veze i mesta počinka na jednom mestu."
};

export default async function Page({
  searchParams
}: {
  searchParams: Record<string, string | undefined>;
}) {
  const citiesOptions = await getCitiesOptions();
  const cemeteriesOptions = await getCemeteriesOptions();
  const firstName = searchParams?.f || "";
  const lastName = searchParams?.l || "";
  const city = searchParams?.c || "";
  const cityId = checIsValueValidCitySlugAndReturnCityId(city, citiesOptions);
  const cemetery = searchParams?.ce || "";
  const cemeteryId = checIsValueValidCemeterySlugAndReturnCityId(
    cemetery,
    cemeteriesOptions
  );
  const page = Number(searchParams?.page) || 1;

  const certificates = await searchCertificates({
    page,
    limit,
    firstName,
    ...(lastName ? { lastName } : {}),
    ...(cityId ? { cityId: Number(cityId) } : {}),
    ...(cemeteryId ? { cemeteryId: Number(cemeteryId) } : {})
  });

  return (
    <GeneralLayout>
      <SearchFilters
        cemeteriesOptions={cemeteriesOptions}
        citiesOptions={citiesOptions}
      />
      <div className="md:flex md:justify-center">
        <div className="flex flex-col mb-4 md:w-9/12 lg:w-6/12">
          <CertificateList
            citiesOptions={citiesOptions}
            certificates={certificates.items}
            total={certificates.meta.totalItems}
          />
          <div className="flex justify-center p-4">
            <MainPaggination totalPages={certificates.meta.totalPages} />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
}
