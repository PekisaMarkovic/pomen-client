import { File } from "./file";
import { Nullable } from "./general";

export interface Blog {
  blogId: number;
  slug: string;
  createdAt: Date;
  updatedAt: Nullable<Date>;
  publishedAt: Nullable<Date>;
  deletedAt: Nullable<Date>;
  contents: BlogContent[];
}

export interface BlogContent {
  blogContentId?: number;
  createdAt: Date;
  updatedAt: Nullable<Date>;
  order: number;
  deletedAt: Nullable<Date>;
  paragraphs: BlogText[];
  blogId: number;
  blog: Blog;
  type: BlogContentTypeEnum;
  blogContentImageId: number;
  blogContentImage: File;
}

export interface BlogText {
  blogTextId?: number;
  text: string;
  order: number;
  createdAt: Date;
  updatedAt: Nullable<Date>;
  isBold: boolean;
  deletedAt: Nullable<Date>;
  blogContentId: number;
  blogContent: NonNullable<BlogContent>;
}

export enum BlogContentTypeEnum {
  TITLE = "title",
  TEXT_CENTER = "text.center",
  TEXT_LEFT = "text.left",
  TEXT_RIGHT = "text.right"
}
export interface BlogSitemap {
  blogId: number;
  slug: string;
  image: string;
  updatedAt: Nullable<Date>;
}

export interface SearchBlogs {
  page: number;
  limit: number;
  title: string;
  isPublished: boolean;
}
