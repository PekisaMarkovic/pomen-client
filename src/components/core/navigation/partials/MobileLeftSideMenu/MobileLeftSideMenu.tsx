import { CrossIcon } from "@/app/icons/general";
import NavigationLink from "@/components/core/navigation/partials/Links/NavigationLink";
import { NAVIGATION_LINKS } from "@/components/constants/navigation";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

type Props = { handleClose: () => void };

const MobileLeftSideMenu = ({ handleClose }: Props) => {
  const { t } = useCustomTranslation();

  return (
    <div className="fixed w-9/12 sm:w-1/2 top-0 bottom-0 right-0 bg-white z-10 shadow-side-menu">
      <div className="py-4 px-6 flex flex-row-reverse">
        <CrossIcon
          className="cursor-pointer"
          type="DARK"
          onClick={handleClose}
        />
      </div>
      <div className="py-4 px-6 flex flex-col">
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

export default MobileLeftSideMenu;
