import { DropdownCementeryDto } from "@/interfaces/cementery";
import { DropdownCityDto } from "@/interfaces/cities";
import {
  mapSingleCitiesOptionsToSelectOptins,
  mapSingleCemeteryOptionsToSelectOptins,
} from "@/utils/dto-mappers";

export function checkCityInitValue(
  value: string,
  citiesOptions: DropdownCityDto[]
) {
  if (!value) return {};

  const find = citiesOptions.find((opt) => opt.slug === value);

  return find ? mapSingleCitiesOptionsToSelectOptins(find) : {};
}

export function checIsValueValidCitySlugAndReturnCityId(
  value: string,
  citiesOptions: DropdownCityDto[]
) {
  if (!value) return "";

  const find = citiesOptions.find((opt) => opt.slug === value);

  return find ? mapSingleCitiesOptionsToSelectOptins(find).id : "";
}

export function checkCemeteryInitValue(
  value: string,
  cemeteriesOptions: DropdownCementeryDto[]
) {
  if (!value) return {};

  const find = cemeteriesOptions.find((opt) => opt.slug === value);

  return find ? mapSingleCemeteryOptionsToSelectOptins(find) : {};
}

export function checIsValueValidCemeterySlugAndReturnCityId(
  value: string,
  citiesOptions: DropdownCementeryDto[]
) {
  if (!value) return "";

  const find = citiesOptions.find((opt) => opt.slug === value);

  return find ? mapSingleCemeteryOptionsToSelectOptins(find).id : "";
}
