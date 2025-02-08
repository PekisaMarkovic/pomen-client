"use client";

import { debounce } from "@/utils/debounce";
import { useRouter, useSearchParams } from "next/navigation";
import { PropsWithChildren, useCallback, useEffect } from "react";
import { FormProvider, useForm, useWatch } from "react-hook-form";

const SearchFiltersForm = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const methods = useForm({
    defaultValues: {
      searchTerm: searchParams.get("s") || ""
    }
  });
  const { control } = methods;

  const values = useWatch({ control });

  const updateQueryParams = useCallback(
    debounce((values: any) => {
      const params = new URLSearchParams();

      if (values.searchTerm) params.set("s", values.searchTerm);

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
