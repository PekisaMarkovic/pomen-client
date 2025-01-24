import { DropdownCementeryDto } from "@/interfaces/cementery";
import { DropdownCityDto } from "@/interfaces/cities";
import { SelectOption } from "@/interfaces/general";

export function mapSingleCitiesOptionsToSelectOptins({
  cityId,
  name,
  slug,
}: DropdownCityDto): SelectOption {
  return {
    id: `${cityId}`,
    name,
    value: slug,
  };
}

export function mapCitiesOptionsToSelectOptins(
  array: DropdownCityDto[]
): SelectOption[] {
  return array.map(mapSingleCitiesOptionsToSelectOptins);
}

export function mapSingleCemeteryOptionsToSelectOptins({
  cemeteryId,
  name,
  slug,
}: DropdownCementeryDto): SelectOption {
  return {
    id: `${cemeteryId}`,
    name,
    value: slug,
  };
}

export function mapCemeteryOptionsToSelectOptins(
  array: DropdownCementeryDto[]
): SelectOption[] {
  return array.map(mapSingleCemeteryOptionsToSelectOptins);
}

export function filterCemeteryOptionsByCityId(
  array: DropdownCementeryDto[],
  id?: number | string
): DropdownCementeryDto[] {
  if (id) return array.filter((obj) => obj.cityId === Number(id));

  return array;
}
