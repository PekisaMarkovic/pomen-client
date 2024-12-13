import { File } from "@/interfaces/file";
import { Cemetery } from "@/interfaces/cementery";

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
  location: { x: number; y: number };
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  cemeteryId: number;
  cemetery: Cemetery;
  userId: number;
  //   user: User;
  //   getherings: Gethering[];
  //   tributes: Tribute[];
  //   qrcode: Qrcode;
  //   orders: Order[];
  certificateProfileId: number;
  profileImage: File;
  files: File[];
}

export interface SearchCertificateDto {
  page: number;
  limit: number;
  cityId?: number;
  cemeteryId?: number;
  firstName?: string;
  lastName?: string;
}
