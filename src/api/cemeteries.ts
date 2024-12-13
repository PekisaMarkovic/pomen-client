import { DropdownCementeryDto } from "@/interfaces/cementery";
import { apiForServerSide } from "@/api/axios";

const RESOURCE_URL = "cemeteries";

export const getCemeteriesOptions = async () => {
  try {
    const { data } = await apiForServerSide.get<DropdownCementeryDto[]>(
      `${RESOURCE_URL}/options`
    );
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
