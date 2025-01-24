"use client";

import { DropdownCementeryDto } from "@/interfaces/cementery";
import { DropdownCityDto } from "@/interfaces/cities";
import { SelectOption } from "@/interfaces/general";
import { debounce } from "@/utils/debounce";
import { useSearchParams, useRouter } from "next/navigation";
import { PropsWithChildren, useEffect, useCallback } from "react";
import {
  FormProvider,
  useForm,
  useFormContext,
  useWatch,
} from "react-hook-form";
import {
  checkCityInitValue,
  checkCemeteryInitValue,
} from "@/modules/search/search-filters/util/check-form-values";

type Props = {
  citiesOptions: DropdownCityDto[];
  cemeteriesOptions: DropdownCementeryDto[];
};

const SearchFiltersForm = ({
  children,
  cemeteriesOptions,
  citiesOptions,
}: PropsWithChildren<Props>) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const methods = useForm({
    defaultValues: {
      firstName: searchParams.get("f") || "",
      lastName: searchParams.get("l") || "",
      city: checkCityInitValue(searchParams.get("c") || "", citiesOptions),
      cemetery: checkCemeteryInitValue(
        searchParams.get("ce") || "",
        cemeteriesOptions
      ),
    },
  });
  const { control } = methods;

  const values = useWatch({ control });

  const updateQueryParams = useCallback(
    debounce((values: any) => {
      const params = new URLSearchParams();

      const cityOption = values.city as SelectOption;
      const cemeteryOption = values.cemetery as SelectOption;

      const city = citiesOptions.find(
        (opt) => `${opt.cityId}` === cityOption?.id
      );
      const cemetery = cemeteriesOptions.find(
        (opt) => `${opt.cemeteryId}` === cemeteryOption?.id
      );

      if (values.firstName) params.set("f", values.firstName);
      if (values.lastName) params.set("l", values.lastName);
      if (city) {
        params.set("c", cityOption.value);
      }
      if (cemetery) {
        params.set("ce", cemeteryOption.value);
      }

      router.push(`?${params.toString()}`);
    }, 300),
    [router]
  );

  useEffect(() => {
    updateQueryParams(values);
  }, [values, updateQueryParams]);

  return <FormProvider {...methods}>{children}</FormProvider>;
};

export default SearchFiltersForm;
