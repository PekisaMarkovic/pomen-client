import Burger from "@/app/icons/navigation/Burger";
import Search from "@/app/icons/navigation/Search";

const MobileNavigation = () => {
  return (
    <div className="flex justify-between bg-white py-4 px-6">
      <Search className="cursor-pointer" />
      <Burger className="cursor-pointer" />
    </div>
  );
};

export default MobileNavigation;
