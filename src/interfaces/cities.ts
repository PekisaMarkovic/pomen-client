import { Nullable } from "@/interfaces/general";

export interface DropdownCityDto {
  cityId: number;
  name: string;
  slug: string;
  countryId: number;
}

export interface City {
  cityId: number;
  name: string;
  slug: string;
  code: string;
  createdAt: Date;
  updatedAt: Nullable<Date>;
  deletedAt: Nullable<Date>;
  countryId: number;
}
