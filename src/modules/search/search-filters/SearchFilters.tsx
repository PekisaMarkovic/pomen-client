"use client";

import { SearchLoopIcon } from "@/app/icons/general";
import { SingleSelect } from "@/components/core";
import { DropdownCementeryDto } from "@/interfaces/cementery";
import { DropdownCityDto } from "@/interfaces/cities";
import InputSearch from "@/modules/landing-page/hero-section/partials/InputSearch";
import SearchFiltersForm from "@/modules/search/search-filters/partials/SearchFiltersForm";
import {
  mapCemeteryOptionsToSelectOptins,
  mapCitiesOptionsToSelectOptins,
} from "@/utils/dto-mappers";
import { useTranslations } from "next-intl";

const translationResource = "search";

type Props = {
  citiesOptions: DropdownCityDto[];
  cemeteriesOptions: DropdownCementeryDto[];
};

const SearchFilters = ({ cemeteriesOptions, citiesOptions }: Props) => {
  const t = useTranslations(translationResource);

  return (
    <SearchFiltersForm
      cemeteriesOptions={cemeteriesOptions}
      citiesOptions={citiesOptions}
    >
      <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex w-full bg-white rounded-xl items-center border-1 border-solid border-black">
          <div className="grid grid-cols-2 w-full">
            <div className="py-1 pr-1 pl-4">
              <InputSearch
                name="firstName"
                placeholder={t("filters.firstName")}
              />
            </div>
            <div className="border-l-1 boder-l-solid boder-l-black py-1 pr-1 pl-4">
              <InputSearch
                name="lastName"
                placeholder={t("filters.lastName")}
              />
            </div>
          </div>

          <SearchLoopIcon className="hidden sm:block py-1" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <SingleSelect
            isLabelHidden
            name="city"
            options={mapCitiesOptionsToSelectOptins(citiesOptions)}
            label={t("filters.city")}
            placeholder={t("filters.cityPlh")}
          />

          <SingleSelect
            isLabelHidden
            name="cemetery"
            options={mapCemeteryOptionsToSelectOptins(cemeteriesOptions)}
            label={t("filters.cemetery")}
            placeholder={t("filters.cemeteryPlh")}
          />
        </div>
      </div>
    </SearchFiltersForm>
  );
};

export default SearchFilters;
