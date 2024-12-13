import { DropdownCityDto } from "@/interfaces/cities";
import { apiForServerSide } from "@/api/axios";

const RESOURCE_URL = "cities";

export const getCitiesOptions = async () => {
  try {
    const { data } = await apiForServerSide.get<DropdownCityDto[]>(
      `${RESOURCE_URL}/options`
    );
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
