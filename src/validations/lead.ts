import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";

dayjs.extend(customParseFormat);

const format = "DD/MM/YYYY";

const todayString = dayjs();

export const LEAD_VALIDATION = yupResolver(
  Yup.object({
    pricingId: Yup.number().typeError("pricing").required("pricing"),
    firstNameForCertificate: Yup.string()
      .typeError("firstNameForCertificate")
      .required("firstNameForCertificate"),
    lastNameForCertificate: Yup.string()
      .typeError("lastNameForCertificate")
      .required("lastNameForCertificate"),
    addressOrder: Yup.string()
      .typeError("addressOrder")
      .required("addressOrder"),
    phoneNumber: Yup.string().typeError("phoneNumber").required("phoneNumber"),
    firstName: Yup.string().typeError("firstName").required("firstName"),
    lastName: Yup.string().typeError("lastName").required("lastName"),
    note: Yup.string().typeError("note").optional(),
    email: Yup.string().email("email").typeError("email").required("email"),
    dateOfBirth: Yup.string()
      .required("dateOfBirth")
      .typeError("dateOfBirth")
      .when([], (__, schema) => {
        return schema.test(
          "not-in-future",
          "dateOfBirthCannotBeInFuture",
          function (value) {
            const selectedDate = dayjs(value, format);
            const today = dayjs(todayString, format);

            if (value) {
              return selectedDate.isBefore(today);
            }
            return true;
          }
        );
      }),
    dateOfDeath: Yup.string()
      .required("dateOfDeath")
      .typeError("dateOfDeath")
      .when([], (__, schema) => {
        return schema.test(
          "not-in-future",
          "dateOfDeathCannotBeInFuture",

          function (value) {
            const selectedDate = dayjs(value, format);
            const today = dayjs(todayString, format);

            if (value) {
              return selectedDate.isBefore(today);
            }
            console.log("ovde");
            return true;
          }
        );
      })
      .when("dateOfBirth", (dateOfBirth: any, schema: any) => {
        return schema.test(
          "is-after-birth",
          "dateOfDeathMustBeAfterDateOfBirth",
          function (dateOfDeath: any) {
            if (dateOfBirth.length && dateOfDeath) {
              const date1 = dayjs(dateOfBirth[0], format);
              const date2 = dayjs(dateOfDeath, format);

              if (date2.isSame(date1)) return true;

              return date2.isAfter(date1);
            }
            return true;
          }
        );
      })
  })
);
