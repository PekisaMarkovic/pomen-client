import MobileNavigation from "@/components/core/navigation/partials/MobileNavigation";
import TabletNavigation from "@/components/core/navigation/partials/TabletNavigation";
import DesktopNavigation from "@/components/core/navigation/partials/DesktopNavigation";

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
