import { apiForServerSide } from "@/api/axios";
import { NewMessage } from "@/interfaces/general";

const RESOURCE_URL = "contacts";

export const createNewMessage = async (body: NewMessage) => {
  try {
    const { data } = await apiForServerSide.post(`${RESOURCE_URL}`, body);
    return data;
  } catch (e) {
    return Promise.reject(e);
  }
};
