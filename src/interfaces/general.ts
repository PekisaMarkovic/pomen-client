export type Nullable<T> = T | null;

export type Spacing =
  | "0"
  | "1"
  | "2"
  | "3"
  | "4"
  | "5"
  | "6"
  | "7"
  | "8"
  | "9"
  | "10";

export type FontFamily = "popins" | "montserrat";

export type FontSize =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl"
  | "5xl"
  | "6xl"
  | "7xl"
  | "8xl"
  | "9xl";

export type FontWeight =
  | "thin"
  | "extralight"
  | "light"
  | "normal"
  | "medium"
  | "semibold"
  | "bold"
  | "extrabold"
  | "black";

export type TestimonialsLayoutVariantType =
  | "AGENCY"
  | "TALENT"
  | "EDIT_TALENT"
  | "EDIT_CASE_STUDY"
  | "NEW_CASE_STUDY";

export type SelectOption = {
  id: string;
  name: string;
  value: string;
  checked?: boolean;
};

export type Color = "white" | "black";

export interface Paginated<T> {
  items: T[];
  meta: {
    totalItems: number;
    itemCount: number;
    itemsPerPage: number;
    totalPages: number;
    currentPage: number;
  };
}

export interface LocationPoint {
  x: number;
  y: number;
}
