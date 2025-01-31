import { apiForServerSide } from "@/api/axios";
import { CertificateFiles } from "@/interfaces/file";
import { redirect } from "next/navigation";
import ROUTES from "@/components/constants/a-routes";

const RESOURCE_URL = "files";

export const getFilesBySlug = async (slug: string) => {
  try {
    const { data } = await apiForServerSide.get<CertificateFiles>(
      `${RESOURCE_URL}/certificates/slug/${slug}`
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
