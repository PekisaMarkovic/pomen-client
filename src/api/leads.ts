import { CreateLead } from "@/interfaces/lead";
import { apiForServerSide } from "./axios";
import ROUTES from "@/components/constants/a-routes";
import { redirect } from "next/navigation";

const RESOURCE_URL = "leads";

export const createLead = async (body: CreateLead) => {
  try {
    const { data } = await apiForServerSide.post(`${RESOURCE_URL}`, body);
    return data;
  } catch (e) {
    if (e) {
      return redirect(ROUTES.ERROR);
    } else {
      return redirect(ROUTES.ERROR);
    }
  }
};
