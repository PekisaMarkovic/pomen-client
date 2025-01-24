"use client";

import ContactFormContent from "@/modules/landing-page/contact-us/partials/ContactFormContent";
import { CONTACT_VALIDATION } from "@/validations/contant";
import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";

const ContactUsFormWrapper = ({ children }: PropsWithChildren) => {
  const methods = useForm({ resolver: CONTACT_VALIDATION });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const ContactUsForm = () => {
  return (
    <ContactUsFormWrapper>
      <ContactFormContent />
    </ContactUsFormWrapper>
  );
};

export default ContactUsForm;
