export interface File {
  fileId: number;
  height: number;
  publicId: string;
  width: number;
  url: string;
  fileExtension: string;
  type: FileTypeEnum;
}

export enum FileTypeEnum {
  IMAGE = "image",
  VIDEO = "video",
  DOCUMENT = "document"
}

export interface CertificateFiles {
  profile: File;
  images: File[];
  videos: File[];
  document: File[];
}
