import { searchBlogs } from "@/api/blogs";
import { MainPaggination } from "@/components/core";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import BlogCard from "@/modules/blogs-page/blog-card/BlogCard";
import BlogsTitle from "@/modules/blogs-page/BlogsTitle";
import SearchBlogsFilters from "@/modules/blogs-page/search-filters/SearchBlogsFilters";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Platforma koja omogućava deljenje uspomena",
  description:
    "Istražite naš blog posvećen sećanjima, pričama i tradicijama. Otkrijte inspirativne članke o očuvanju uspomena, značaju porodičnih veza i mestima počinka. Podelite sećanja i pronađite utehu kroz priče koje ostaju zauvek."
};

const limit = 10;

const Page = async ({
  searchParams
}: {
  searchParams: Record<string, string | undefined>;
}) => {
  const searchTerm = searchParams?.s || "";
  const page = Number(searchParams?.page) || 1;

  const blogs = await searchBlogs({
    page,
    limit,
    title: searchTerm,
    isPublished: true
  });

  return (
    <GeneralLayout>
      <div className="md:flex md:justify-center">
        <div className="flex flex-col mb-4 md:w-9/12 lg:w-6/12">
          <BlogsTitle />
          <SearchBlogsFilters />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {blogs.items.map((blog) => (
              <BlogCard blog={blog} key={blog.blogId} />
            ))}
          </div>
          <div className="flex justify-center p-4">
            <MainPaggination totalPages={blogs.meta.totalPages} />
          </div>
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Page;
