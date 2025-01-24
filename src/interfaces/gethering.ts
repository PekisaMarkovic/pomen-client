import { Nullable } from "@/interfaces/general";

export interface Gethering {
  getheringId: number;
  getheringDate: Date;
  hour: number;
  address: string;
  createdAt: Date;
  updatedAt: Nullable<Date>;
  deletedAt: Date;
  certificateId: number;
}
