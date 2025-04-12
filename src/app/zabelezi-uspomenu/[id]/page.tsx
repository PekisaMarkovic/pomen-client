import GeneralLayout from "@/components/layouts/GeneralLayout";
import { Metadata } from "next";

export type CreateCertificateParams = {
  id: string;
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

  return <GeneralLayout>{JSON.stringify(id)}</GeneralLayout>;
};

export default CreateCertificate;
