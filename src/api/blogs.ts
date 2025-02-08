import { apiForServerSide } from "@/api/axios";
import ROUTES from "@/components/constants/a-routes";
import { BlogSitemap, Blog, SearchBlogs } from "@/interfaces/blogs";
import { Paginated } from "@/interfaces/general";
import { redirect } from "next/navigation";

const RESOURCE_URL = "blogs";

export const getBlogsSitemap = async () => {
  try {
    const { data } = await apiForServerSide.get<BlogSitemap[]>(
      `${RESOURCE_URL}/sitemap`
    );
    return data;
  } catch (e) {
    if (e) {
      return redirect(ROUTES.ERROR);
    } else {
      return redirect(ROUTES.ERROR);
    }
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    const { data } = await apiForServerSide.get<Blog>(
      `${RESOURCE_URL}/slug/${slug}`
    );
    return data;
  } catch (e) {
    if (e) {
      return redirect(ROUTES.ERROR);
    } else {
      return redirect(ROUTES.ERROR);
    }
  }
};

export const searchBlogs = async (body: SearchBlogs) => {
  try {
    const { data } = await apiForServerSide.post<Paginated<Blog>>(
      `${RESOURCE_URL}/search`,
      body
    );
    return data;
  } catch (e) {
    if (e) {
      return redirect(ROUTES.ERROR);
    } else {
      return redirect(ROUTES.ERROR);
    }
  }
};
