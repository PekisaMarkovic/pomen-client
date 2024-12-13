import { NAVIGATION_LINKS } from "@/components/constants/navigation";
import NavigationLink from "@/components/core/navigation/partials/Links/NavigationLink";
import { useTranslations } from "next-intl";
import Logo from "@/app/icons/Logo";

const translationResource = "g";

const DesktopNavigation = () => {
  const t = useTranslations(translationResource);

  return (
    <div className="hidden xl:flex justify-between bg-white py-4 px-6">
      <div className="col-span-4">
        <Logo type="DARK" />
      </div>
      <div className="w-1/2 grid grid-cols-4 gap-x-8 items-center">
        {NAVIGATION_LINKS.map(({ href, text }) => (
          <NavigationLink text={t(text)} href={href} align="RIGHT" />
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
