import { CrossIcon } from "@/app/icons/general";
import NavigationLink from "../Links/NavigationLink";
import { useTranslations } from "next-intl";
import { NAVIGATION_LINKS } from "@/components/constants/navigation";

const translationResource = "g";

type Props = { handleClose: () => void };

const MobileLeftSideMenu = ({ handleClose }: Props) => {
  const t = useTranslations(translationResource);

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
        {NAVIGATION_LINKS.map(({ href, text }) => (
          <NavigationLink text={t(text)} href={href} align="RIGHT" />
        ))}
      </div>
    </div>
  );
};

export default MobileLeftSideMenu;
