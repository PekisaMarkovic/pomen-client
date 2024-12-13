import { Certificate, SearchCertificateDto } from "@/interfaces/cemeteries";
import { apiForServerSide } from "@/api/axios";
import { Paginated } from "@/interfaces/general";

const RESOURCE_URL = "certificates";

export const searchCertificates = async (body: SearchCertificateDto) => {
  try {
    const { data } = await apiForServerSide.post<Paginated<Certificate>>(
      `${RESOURCE_URL}/search`,
      body
    );
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
