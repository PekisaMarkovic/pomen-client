"use client";

import { createNewMessage } from "@/api/contact";
import { InputText, InputTextarea, MainButton } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { useState } from "react";
import { FieldValues, SubmitHandler, useFormContext } from "react-hook-form";
import { toast } from "react-toastify";

const ContactFormContent = () => {
  const [btnDisabled, setButtonDisabled] = useState<boolean>(false);
  const { t } = useCustomTranslation();
  const { handleSubmit, reset } = useFormContext();
  const messsages = {
    success: t(TranslationsEnums.GENERAL, "successMessage"),
    error: t(TranslationsEnums.GENERAL, "errorMessage")
  };

  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    setButtonDisabled(true);
    try {
      await createNewMessage({
        email: values.email,
        message: values.message,
        name: values.name
      });

      toast(messsages.success);
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
        name="name"
        label={t(TranslationsEnums.LANDING_PAGE, "contact-us.fields.name")}
        placeholder={t(
          TranslationsEnums.LANDING_PAGE,
          "contact-us.fields.namePlh"
        )}
      />

      <InputText
        isRequired
        name="email"
        label={t(TranslationsEnums.LANDING_PAGE, "contact-us.fields.email")}
        placeholder={t(
          TranslationsEnums.LANDING_PAGE,
          "contact-us.fields.emailPlh"
        )}
      />

      <InputTextarea
        name="message"
        isRequired
        label={t(TranslationsEnums.LANDING_PAGE, "contact-us.fields.message")}
        placeholder={t(
          TranslationsEnums.LANDING_PAGE,
          "contact-us.fields.messagePlh"
        )}
        maxChar={480}
      />

      <MainButton
        disabled={btnDisabled}
        noHoverEffect
        htmlType="submit"
        text={t(TranslationsEnums.LANDING_PAGE, "contact-us.btn")}
        variant="secondary"
        size="full"
      />
    </form>
  );
};

export default ContactFormContent;
