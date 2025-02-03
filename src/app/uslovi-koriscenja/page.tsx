import GeneralLayout from "@/components/layouts/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Uslovi Korišćenja - Platforma omogućava kreiranje memorijalnih profila, deljenje uspomena",
  description:
    "Pregledajte uslove korišćenja naše platforme. Saznajte pravila, obaveze i prava korisnika prilikom korišćenja naših usluga."
};

const Page = () => {
  return (
    <GeneralLayout>
      <p>Uslovi koriscenja</p>
    </GeneralLayout>
  );
};

export default Page;
