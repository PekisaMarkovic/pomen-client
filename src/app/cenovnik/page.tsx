import GeneralLayout from "@/components/layouts/GeneralLayout";
import Pricing from "@/modules/pricing/Pricing";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cenovnik - Platforma koja omogućava deljenje uspomena",
  description:
    "Pregled dostupnih paketa i usluga za očuvanje uspomena na voljene osobe. Saznajte više o cenama i opcijama koje naša platforma nudi za kreiranje memorijalnih profila."
};

const PricingPage = () => {
  return (
    <GeneralLayout>
      <Pricing />
    </GeneralLayout>
  );
};

export default PricingPage;
