"use client";

import { SearchLoopIcon } from "@/app/icons/general";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import InputSearch from "@/modules/landing-page/hero-section/partials/InputSearch";

const SearchFiltersFormContent = () => {
  const { t } = useCustomTranslation();

  return (
    <div className="grid grid-cols-1 mt-3 mb-10">
      <div className="flex w-full bg-white rounded-xl items-center border-1 border-solid border-black">
        <div className="grid w-full">
          <div className="py-1 pr-1 pl-4">
            <InputSearch
              name="searchTerm"
              placeholder={t(TranslationsEnums.SEARCH, "filters.searchTerm")}
            />
          </div>
        </div>

        <SearchLoopIcon className="hidden sm:block py-1" />
      </div>
    </div>
  );
};

export default SearchFiltersFormContent;
