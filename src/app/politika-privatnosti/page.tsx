import GeneralLayout from "@/components/layouts/GeneralLayout";
import PrivacyPolicy from "@/modules/privacy-policy-page/PrivacyPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika Privatnosti - Platforma koja omogućava deljenje uspomena",
  description:
    "Saznajte kako prikupljamo, koristimo i štitimo vaše podatke. Vaša privatnost nam je važna – pročitajte našu politiku privatnosti"
};

const Page = () => {
  return (
    <GeneralLayout>
      <div className="md:flex md:justify-center">
        <div className="flex flex-col mb-4 md:w-9/12 lg:w-6/12">
          <PrivacyPolicy />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Page;
