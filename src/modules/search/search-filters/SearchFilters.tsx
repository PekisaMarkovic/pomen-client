"use client";

import { DropdownCementeryDto } from "@/interfaces/cementery";
import { DropdownCityDto } from "@/interfaces/cities";
import SearchFiltersForm from "@/modules/search/search-filters/partials/SearchFiltersForm";
import SearchFiltersFormContent from "./partials/SearchFiltersFormContent";

type Props = {
  citiesOptions: DropdownCityDto[];
  cemeteriesOptions: DropdownCementeryDto[];
};

const SearchFilters = ({ cemeteriesOptions, citiesOptions }: Props) => {
  return (
    <SearchFiltersForm
      cemeteriesOptions={cemeteriesOptions}
      citiesOptions={citiesOptions}
    >
      <SearchFiltersFormContent
        cemeteriesOptions={cemeteriesOptions}
        citiesOptions={citiesOptions}
      />
    </SearchFiltersForm>
  );
};

export default SearchFilters;
