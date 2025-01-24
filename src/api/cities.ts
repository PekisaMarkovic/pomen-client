import { DropdownCityDto } from "@/interfaces/cities";
import { apiForServerSide } from "@/api/axios";
import { redirect } from "next/navigation";
import ROUTES from "@/components/constants/a-routes";

const RESOURCE_URL = "cities";

export const getCitiesOptions = async () => {
  try {
    const { data } = await apiForServerSide.get<DropdownCityDto[]>(
      `${RESOURCE_URL}/options`
    );
    return data;
  } catch (e) {
    return redirect(ROUTES.ERROR);
  }
};
