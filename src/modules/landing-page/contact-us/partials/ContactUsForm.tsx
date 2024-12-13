"use client";

import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslations } from "next-intl";
import { MainButton, InputTextarea, InputText } from "@/components/core";

const translationResource = "landing";

const ContactUsFormWrapper = ({ children }: PropsWithChildren) => {
  const methods = useForm({});

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const ContactUsForm = () => {
  const t = useTranslations(translationResource);

  return (
    <ContactUsFormWrapper>
      <div className="flex flex-col gap-6">
        <InputText
          isRequired
          name="name"
          label={t("contact-us.fields.name")}
          placeholder={t("contact-us.fields.namePlh")}
        />

        <InputText
          isRequired
          name="email"
          label={t("contact-us.fields.email")}
          placeholder={t("contact-us.fields.emailPlh")}
        />

        <InputTextarea
          name="message"
          isRequired
          label={t("contact-us.fields.message")}
          placeholder={t("contact-us.fields.messagePlh")}
          maxChar={480}
        />

        <MainButton
          noHoverEffect
          htmlType="submit"
          text={t("contact-us.btn")}
          variant="secondary"
          size="full"
        />
      </div>
    </ContactUsFormWrapper>
  );
};

export default ContactUsForm;
