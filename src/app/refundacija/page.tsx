import GeneralLayout from "@/components/layouts/GeneralLayout";
import RefundPolicy from "@/modules/refund-policy-page/RefundPolicy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refundacija - Platforma koja omogućava deljenje uspomena",
  description:
    "Saznajte sve o našoj politici refundacije. Pogledajte uslove pod kojima možete zatražiti povrat novca i saznajte više o postupku refundacije."
};

const Page = () => {
  return (
    <GeneralLayout>
      <div className="md:flex md:justify-center">
        <div className="flex flex-col mb-4 md:w-9/12 lg:w-6/12">
          <RefundPolicy />
        </div>
      </div>
    </GeneralLayout>
  );
};

export default Page;
