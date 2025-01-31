import { getCertificateBySlug } from "@/api/certificates";
import { getFilesBySlug } from "@/api/files";
import GeneralLayout from "@/components/layouts/GeneralLayout";
import CertificateMainInfo from "@/modules/certificate-page/CertificateMainInfo";
import Memories from "@/modules/certificate-page/memories/Memories";
import PersonBiography from "@/modules/certificate-page/PersonBiography";
import TrubutesAndGetherings from "@/modules/certificate-page/trubutes-and-getherings/TrubutesAndGetherings";

export type ProfilParams = {
  id: string;
};

type Props = {
  params: ProfilParams;
};

const Profil = async ({ params }: Props) => {
  const { id } = params;
  const certificate = await getCertificateBySlug(id);
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
