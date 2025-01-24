import Search from "@/app/icons/navigation/Search";
import ROUTES from "@/components/constants/a-routes";
import Burger from "@/components/core/navigation/partials/Burger/Burger";
import Link from "next/link";

const MobileNavigation = () => {
  return (
    <div className="md:hidden flex justify-between bg-white py-4 px-6">
      <Link href={ROUTES.SEARCH}>
        <Search className="cursor-pointer" />
      </Link>
      <Burger />
    </div>
  );
};

export default MobileNavigation;
