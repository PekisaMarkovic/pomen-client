"use client";

import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import InputSearch from "@/modules/landing-page/hero-section/partials/InputSearch";
import { SearchLoopIcon } from "@/app/icons/general";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const HeroSearchForm = ({ children }: PropsWithChildren) => {
  const methods = useForm({});

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const HeroSearch = () => {
  const { t } = useCustomTranslation();

  return (
    <HeroSearchForm>
      <div className="hidden md:flex w-full bg-white rounded-xl mb-12 items-center py-1 pr-1 pl-4">
        <div className="flex-1">
          <InputSearch
            name="search"
            placeholder={t(TranslationsEnums.LANDING_PAGE, "hero.plh")}
          />
        </div>
        <SearchLoopIcon />
      </div>
    </HeroSearchForm>
  );
};

export default HeroSearch;
