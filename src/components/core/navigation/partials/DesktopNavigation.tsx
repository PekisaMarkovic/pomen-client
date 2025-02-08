import { NAVIGATION_LINKS } from "@/components/constants/navigation";
import NavigationLink from "@/components/core/navigation/partials/Links/NavigationLink";
import Logo from "@/app/icons/Logo";
import Link from "next/link";
import ROUTES from "@/components/constants/a-routes";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const DesktopNavigation = () => {
  const { t } = useCustomTranslation();

  return (
    <div className="hidden xl:flex justify-between bg-white py-4 px-6">
      <div className="col-span-4">
        <Link href={ROUTES.INDEX}>
          <Logo type="DARK" />
        </Link>
      </div>
      <div className="w-1/2 grid grid-cols-5 gap-x-8 items-center">
        {NAVIGATION_LINKS.map(({ href, text }, i) => (
          <NavigationLink
            text={t(TranslationsEnums.GENERAL, text)}
            href={href}
            align="RIGHT"
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default DesktopNavigation;
