import GeneralLayout from "@/components/layouts/GeneralLayout";
import CreateLeadPage from "@/modules/create-lead-page/CreateLeadPage";
import { Metadata } from "next";

export type CreateCertificateParams = {
  id: number;
};

type Props = {
  params: CreateCertificateParams;
};

export const metadata: Metadata = {
  title: "Zabelezi uspomenu - Platforma koja omogućava deljenje uspomena",
  description: ""
};

const CreateCertificate = async ({ params }: Props) => {
  const { id } = params;

  return (
    <GeneralLayout>
      <CreateLeadPage pricingId={id} />
    </GeneralLayout>
  );
};

export default CreateCertificate;
