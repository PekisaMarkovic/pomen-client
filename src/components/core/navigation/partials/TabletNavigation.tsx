import { NAVIGATION_LINKS } from "@/components/constants/navigation";
import NavigationLink from "@/components/core/navigation/partials/Links/NavigationLink";
import { useTranslations } from "next-intl";

const translationResource = "g";

const TabletNavigation = () => {
  const t = useTranslations(translationResource);

  return (
    <div className="hidden md:flex xl:hidden justify-center bg-white py-4 px-6">
      <div className="w-9/12 grid grid-cols-4 gap-x-8">
        {NAVIGATION_LINKS.map(({ href, text }) => (
          <NavigationLink text={t(text)} href={href} align="RIGHT" />
        ))}
      </div>
    </div>
  );
};

export default TabletNavigation;
