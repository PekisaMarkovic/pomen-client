import { File } from "@/interfaces/file";
import { LocationPoint } from "@/interfaces/general";
import { Cemetery } from "@/interfaces/cementery";
import { Gethering } from "@/interfaces/gethering";
import { Tribute } from "@/interfaces/tribute";

export interface Certificate {
  certificateId: number;
  slug: string;
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  dateOfDeath: Date;
  placeOfBirth: string;
  placeOfDeath: string;
  timeOfDeath: number;
  biography: string;
  location: LocationPoint;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  cemeteryId: number;
  cemetery: Cemetery;
  userId: number;
  getherings: Gethering[];
  tributes: Tribute[];
  certificateProfileId: number;
  profileImage: File;
  files: File[];
  status?: CertificateStatusEnums;
}

export enum CertificateStatusEnums {
  DRAFT = "draft",
  COMPLATED = "completed",
  PUBLISHED = "published",
  SUSPENDED = "suspended"
}

export interface SearchCertificateDto {
  page: number;
  limit: number;
  cityId?: number;
  cemeteryId?: number;
  firstName?: string;
  lastName?: string;
  status?: CertificateStatusEnums;
}

export interface CertificateOptionsDto {
  image: string;
  name: string;
  slug: string;
  certificateId: string;
}
