import {
  Certificate,
  CertificateOptionsDto,
  SearchCertificateDto
} from "@/interfaces/cemeteries";
import { apiForServerSide } from "@/api/axios";
import { Paginated } from "@/interfaces/general";
import { redirect } from "next/navigation";
import ROUTES from "@/components/constants/a-routes";

const RESOURCE_URL = "certificates";

export const searchCertificates = async (body: SearchCertificateDto) => {
  try {
    const { data } = await apiForServerSide.post<Paginated<Certificate>>(
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

export const getCertificateBySlug = async (slug: string) => {
  try {
    const { data } = await apiForServerSide.get<Certificate>(
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

export const getCertificateOptions = async () => {
  try {
    const { data } = await apiForServerSide.get<CertificateOptionsDto[]>(
      `${RESOURCE_URL}/options`
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
