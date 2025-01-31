import { DropdownCementeryDto } from "@/interfaces/cementery";
import { apiForServerSide } from "@/api/axios";
import { redirect } from "next/navigation";
import ROUTES from "@/components/constants/a-routes";

const RESOURCE_URL = "cemeteries";

export const getCemeteriesOptions = async () => {
  try {
    const { data } = await apiForServerSide.get<DropdownCementeryDto[]>(
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
