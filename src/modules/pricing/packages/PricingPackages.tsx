import { getPricings } from "@/api/pricings";
import SinglePackage from "@/modules/pricing/packages/single-package/SinglePackage";
import PricingBackgroundImage from "@/modules/pricing/packages/single-package/PricingBackgroundImage";

const PricingPackages = async () => {
  const pricings = await getPricings();

  const packages = pricings.items
    .filter((pck) => pck.price)
    .sort((a, b) => a.price - b.price);

  return (
    <section
      aria-labelledby="why-qr"
      className="relative flex flex-col justify-center px-6"
    >
      <div className="absolute -z-1 bg-overlay inset-0 w-full h-full object-cover" />

      <PricingBackgroundImage />
      <div className="pb-12 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {packages.map((pckg) => (
            <SinglePackage pckg={pckg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingPackages;
