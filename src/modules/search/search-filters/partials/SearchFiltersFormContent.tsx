"use client";

import { SearchLoopIcon } from "@/app/icons/general";
import { SingleSelect } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { DropdownCementeryDto } from "@/interfaces/cementery";
import { DropdownCityDto } from "@/interfaces/cities";
import { SelectOption } from "@/interfaces/general";
import InputSearch from "@/modules/landing-page/hero-section/partials/InputSearch";
import {
  filterCemeteryOptionsByCityId,
  mapCemeteryOptionsToSelectOptins,
  mapCitiesOptionsToSelectOptins,
} from "@/utils/dto-mappers";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";

const translationResource = "search";

type Props = {
  citiesOptions: DropdownCityDto[];
  cemeteriesOptions: DropdownCementeryDto[];
};

const SearchFiltersFormContent = ({
  cemeteriesOptions,
  citiesOptions,
}: Props) => {
  const { setValue } = useFormContext();
  const { t } = useCustomTranslation();
  const cityValues = useWatch({ name: "city" }) as SelectOption;

  useEffect(() => {
    if (cityValues?.id) {
      setValue("cemetery", {});
    }
  }, [cityValues]);

  return (
    <div className="px-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="flex w-full bg-white rounded-xl items-center border-1 border-solid border-black">
        <div className="grid grid-cols-2 w-full">
          <div className="py-1 pr-1 pl-4">
            <InputSearch
              name="firstName"
              placeholder={t(TranslationsEnums.SEARCH, "filters.firstName")}
            />
          </div>
          <div className="border-l-1 boder-l-solid boder-l-black py-1 pr-1 pl-4">
            <InputSearch
              name="lastName"
              placeholder={t(TranslationsEnums.SEARCH, "filters.lastName")}
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
          label={t(TranslationsEnums.SEARCH, "filters.city")}
          placeholder={t(TranslationsEnums.SEARCH, "filters.cityPlh")}
        />

        <SingleSelect
          isLabelHidden
          name="cemetery"
          options={mapCemeteryOptionsToSelectOptins(
            filterCemeteryOptionsByCityId(cemeteriesOptions, cityValues?.id)
          )}
          label={t(TranslationsEnums.SEARCH, "filters.cemetery")}
          placeholder={t(TranslationsEnums.SEARCH, "filters.cemeteryPlh")}
        />
      </div>
    </div>
  );
};

export default SearchFiltersFormContent;
