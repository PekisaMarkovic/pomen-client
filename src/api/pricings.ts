import { apiForServerSide } from "@/api/axios";
import { redirect } from "next/navigation";
import ROUTES from "@/components/constants/a-routes";
import { IPricing } from "@/interfaces/pricings";
import { Paginated } from "@/interfaces/general";

const RESOURCE_URL = "pricings";

export const getPricings = async () => {
  try {
    const { data } = await apiForServerSide.get<Paginated<IPricing>>(
      `${RESOURCE_URL}`
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
