import { Nullable } from "@/interfaces/general";

export interface Tribute {
  tributeId: number;
  firstName: string;
  lastName: string;
  description: string;
  email: string;
  createdAt: Date;
  updatedAt: Nullable<Date>;
  deletedAt: Date;
  status: TributeStatusEnum;
  certificateId: number;
}

export enum TributeStatusEnum {
  ALLOWED = "allowed",
  DENIED = "denied",
  PENDING = "pending"
}
