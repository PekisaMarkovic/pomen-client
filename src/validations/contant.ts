import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

export const CONTACT_VALIDATION = yupResolver(
  Yup.object({
    name: Yup.string().typeError("name").required("name"),
    message: Yup.string().typeError("message").required("message"),
    email: Yup.string().email("email").typeError("email").required("email")
  })
);
