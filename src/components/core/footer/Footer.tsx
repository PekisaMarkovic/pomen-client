import Logo from "@/app/icons/Logo";
import { useTranslations } from "next-intl";
import { FacebookIcon, InstagramIcon } from "@/app/icons/general";
import ROUTES from "@/components/constants/a-routes";
import { Paragraph, FooterLink } from "@/components/core";
const translationResource = "landing";

const Footer = () => {
  const t = useTranslations(translationResource);

  return (
    <footer className="bg-black md:flex md:justify-center">
      <div className="px-6 py-6 pb-8 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4">
            <FooterLink text={t("footer.about-us")} href={ROUTES.OUR_GUIDE} />
            <FooterLink text={t("footer.privacy-policy")} href="#" />
            <FooterLink text={t("footer.term-of-use")} href="#" />
            <FooterLink text={t("footer.contact")} href="#" />
          </div>
          <Logo type="WHITE" />
        </div>
        <div className="flex flex-col items-center gap-4 py-3 border-t-1 border-solir border-white mt-4">
          <div className="flex gap-x-8">
            <InstagramIcon type="WHITE" />
            <FacebookIcon type="WHITE" />
          </div>
          <Paragraph
            text={t("footer.copy")}
            weight="light"
            size="base"
            color="white"
            className="text-center"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
