import MobileNavigation from "@/components/core/navigation/partials/MobileNavigation";
import TabletNavigation from "./partials/TabletNavigation";
import DesktopNavigation from "./partials/DesktopNavigation";

const MainNavigation = () => {
  return (
    <nav>
      <MobileNavigation />
      <TabletNavigation />
      <DesktopNavigation />
    </nav>
  );
};

export default MainNavigation;
