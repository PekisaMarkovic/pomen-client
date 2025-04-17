"use client";

import { createLead } from "@/api/leads";
import ROUTES from "@/components/constants/a-routes";
import { InputText, InputTextarea, MainButton } from "@/components/core";
import DateSelect from "@/components/core/select/DateSelect";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { CreateLead } from "@/interfaces/lead";
import { formatToIsoDate } from "@/utils/date";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

const LeadFormContent = () => {
  const [btnDisabled, setButtonDisabled] = useState<boolean>(false);
  const { t } = useCustomTranslation();
  const { handleSubmit, reset } = useFormContext();
  const router = useRouter();

  const messsages = {
    success: t(TranslationsEnums.GENERAL, "successMessage"),
    error: t(TranslationsEnums.GENERAL, "errorMessage")
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    const { dateOfBirth, dateOfDeath, ...rest } = values;

    setButtonDisabled(true);
    try {
      await createLead({
        dateOfBirth: formatToIsoDate(dateOfBirth),
        dateOfDeath: formatToIsoDate(dateOfDeath),
        ...rest
      } as CreateLead);

      toast(messsages.success);
      router.push(ROUTES.INDEX);
    } catch {
      toast(messsages.error);
    } finally {
      setButtonDisabled(false);
      reset();
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
      <InputText
        isRequired
        name="firstNameForCertificate"
        label={t(TranslationsEnums.LEAD, "fields.firstNameForCertificate")}
        placeholder={t(
          TranslationsEnums.LEAD,
          "fields.firstNameForCertificatePlh"
        )}
      />

      <InputText
        isRequired
        name="lastNameForCertificate"
        label={t(TranslationsEnums.LEAD, "fields.lastNameForCertificate")}
        placeholder={t(
          TranslationsEnums.LEAD,
          "fields.lastNameForCertificatePlh"
        )}
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <DateSelect
          isRequired
          name="dateOfBirth"
          label={t(TranslationsEnums.LEAD, "fields.dateOfBirth")}
          placeholder={t(TranslationsEnums.LEAD, "fields.dateOfBirthPlh")}
        />

        <DateSelect
          isRequired
          name="dateOfDeath"
          label={t(TranslationsEnums.LEAD, "fields.dateOfDeath")}
          placeholder={t(TranslationsEnums.LEAD, "fields.dateOfDeathPlh")}
        />
      </div>

      <div className="h-px w-full bg-black my-6" />

      <InputText
        isRequired
        name="firstName"
        label={t(TranslationsEnums.LEAD, "fields.firstName")}
        placeholder={t(TranslationsEnums.LEAD, "fields.firstNamePlh")}
      />

      <InputText
        isRequired
        name="lastName"
        label={t(TranslationsEnums.LEAD, "fields.lastName")}
        placeholder={t(TranslationsEnums.LEAD, "fields.lastNamePlh")}
      />

      <InputText
        isRequired
        name="email"
        label={t(TranslationsEnums.LEAD, "fields.email")}
        placeholder={t(TranslationsEnums.LEAD, "fields.emailPlh")}
      />

      <InputText
        isRequired
        name="phoneNumber"
        label={t(TranslationsEnums.LEAD, "fields.phoneNumber")}
        placeholder={t(TranslationsEnums.LEAD, "fields.phoneNumberPlh")}
      />

      <InputText
        isRequired
        name="addressOrder"
        label={t(TranslationsEnums.LEAD, "fields.addressOrder")}
        placeholder={t(TranslationsEnums.LEAD, "fields.addressOrderPlh")}
      />

      <InputTextarea
        name="note"
        label={t(TranslationsEnums.LEAD, "fields.note")}
        placeholder={t(TranslationsEnums.LEAD, "fields.notePlh")}
        maxChar={480}
      />

      <MainButton
        disabled={btnDisabled}
        noHoverEffect
        htmlType="submit"
        text={t(TranslationsEnums.LEAD, "btn")}
        variant="secondary"
        size="full"
      />
    </form>
  );
};

export default LeadFormContent;

// dateOfBirth: Yup.date().required("dateOfBirth").typeError("dateOfBirth"),
// dateOfDeath: Yup.date().required("dateOfDeath").typeError("dateOfDeath")
