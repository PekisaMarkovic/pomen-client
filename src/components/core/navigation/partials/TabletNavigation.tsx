import { NAVIGATION_LINKS } from "@/components/constants/navigation";
import NavigationLink from "@/components/core/navigation/partials/Links/NavigationLink";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const TabletNavigation = () => {
  const { t } = useCustomTranslation();

  return (
    <div className="hidden md:flex xl:hidden justify-center bg-white py-4 px-6">
      <div
        className={`w-9/12 grid grid-cols-${NAVIGATION_LINKS.length} gap-x-8`}
      >
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

export default TabletNavigation;
