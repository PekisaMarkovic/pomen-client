import Search from "@/app/icons/navigation/Search";
import Burger from "@/components/core/navigation/partials/Burger/Burger";

const MobileNavigation = () => {
  return (
    <div className="md:hidden flex justify-between bg-white py-4 px-6">
      <Search className="cursor-pointer" />
      <Burger />
    </div>
  );
};

export default MobileNavigation;
