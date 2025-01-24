import { City } from "@/interfaces/cities";
import { Nullable } from "@/interfaces/general";

export interface Cemetery {
  cemeteryId: number;
  address: string;
  slug: string;
  name: string;
  location: { x: number; y: number };
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  cityId: number;
  city?: Nullable<City>;
}

export interface DropdownCementeryDto {
  cityId: number;
  name: string;
  slug: string;
  cemeteryId: number;
}
