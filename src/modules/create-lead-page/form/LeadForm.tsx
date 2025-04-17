"use client";

import { PropsWithChildren } from "react";
import { FormProvider, useForm } from "react-hook-form";
import LeadFormContent from "@/modules/create-lead-page/form/LeadFormContent";
import { LEAD_VALIDATION } from "@/validations/lead";

type LeadFormProps = { pricingId: number };

const LeadFormWrapper = ({
  children,
  pricingId
}: PropsWithChildren<LeadFormProps>) => {
  const methods = useForm({
    defaultValues: { pricingId },
    resolver: LEAD_VALIDATION
  });

  return <FormProvider {...methods}>{children}</FormProvider>;
};

const LeadForm = ({ pricingId }: LeadFormProps) => {
  return (
    <LeadFormWrapper pricingId={pricingId}>
      <LeadFormContent />
    </LeadFormWrapper>
  );
};

export default LeadForm;
