import GeneralLayout from "@/components/layouts/GeneralLayout";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Politika Privatnosti",
  description:
    "Saznajte kako prikupljamo, koristimo i štitimo vaše podatke. Vaša privatnost nam je važna – pročitajte našu politiku privatnosti"
};

const Page = () => {
  return (
    <GeneralLayout>
      <p>Politika Privatnosti</p>
    </GeneralLayout>
  );
};

export default Page;
