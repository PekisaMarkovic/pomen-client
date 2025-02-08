import {
  getCertificateBySlug,
  getCertificateOptions
} from "@/api/certificates";
import { getFilesBySlug } from "@/api/files";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import CertificateMainInfo from "@/modules/certificate-page/CertificateMainInfo";
import Memories from "@/modules/certificate-page/memories/Memories";
import PersonBiography from "@/modules/certificate-page/PersonBiography";
import TrubutesAndGetherings from "@/modules/certificate-page/trubutes-and-getherings/TrubutesAndGetherings";
import { trimStringSEODescription } from "@/utils/string";
import { Metadata } from "next";
import { cache } from "react";

const cashGetCertificate = cache(async (id: string) => {
  return getCertificateBySlug(id);
});

export type ProfilParams = {
  id: string;
};

type Props = {
  params: ProfilParams;
};

export async function generateStaticParams() {
  const certificateOptions = await getCertificateOptions();

  return certificateOptions.map((opt) => opt.slug);
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = params;
  const certificate = await cashGetCertificate(id);

  return {
    title: `Profil - ${certificate.firstName} ${certificate.lastName}`,
    description: trimStringSEODescription(certificate.biography),
    openGraph: {
      images: [{ url: certificate.profileImage?.url }]
    }
  };
}

const Profil = async ({ params }: Props) => {
  const { id } = params;
  const certificate = await cashGetCertificate(id);
  const { videos, images } = await getFilesBySlug(id);
  const {
    dateOfBirth,
    dateOfDeath,
    firstName,
    lastName,
    placeOfBirth,
    placeOfDeath,
    profileImage,
    cemetery,
    biography,
    location,
    tributes,
    getherings
  } = certificate;

  return (
    <GeneralLayout>
      <CertificateMainInfo
        imageUrl={profileImage?.url || ""}
        fullCemeteryName={`${cemetery.address}, ${cemetery.name}, ${
          certificate.cemetery.city?.name || ""
        }`}
        dateOfBirth={dateOfBirth}
        dateOfDeath={dateOfDeath}
        firstName={firstName}
        lastName={lastName}
        placeOfBirth={placeOfBirth}
        placeOfDeath={placeOfDeath}
        location={location}
      />

      <PersonBiography biography={biography} />

      <Memories videos={videos} images={images} />

      <TrubutesAndGetherings tributes={tributes} getherings={getherings} />
    </GeneralLayout>
  );
};

export default Profil;
