import Logo from "@/app/icons/Logo";
import { FacebookIcon, InstagramIcon } from "@/app/icons/general";
import ROUTES from "@/components/constants/a-routes";
import { Paragraph, FooterLink } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const Footer = () => {
  const { t } = useCustomTranslation();

  return (
    <footer className="bg-black md:flex md:justify-center mt-auto">
      <div className="px-6 py-6 pb-8 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <div className="flex justify-between">
          <div className="flex flex-col gap-y-4">
            <FooterLink
              text={t(TranslationsEnums.LANDING_PAGE, "footer.about-us")}
              href={ROUTES.OUR_GUIDE}
            />
            <FooterLink
              text={t(TranslationsEnums.LANDING_PAGE, "footer.privacy-policy")}
              href={ROUTES.PRIVACY_POLICY}
            />
            <FooterLink
              text={t(TranslationsEnums.LANDING_PAGE, "footer.term-of-use")}
              href={ROUTES.TERMS_OF_USE}
            />
            <FooterLink
              text={t(TranslationsEnums.LANDING_PAGE, "footer.contact")}
              href={`${ROUTES.INDEX}/#contact`}
            />
          </div>
          <Logo type="WHITE" />
        </div>
        <div className="flex flex-col items-center gap-4 py-3 border-t-1 border-solir border-white mt-4">
          <div className="flex gap-x-8">
            <InstagramIcon type="WHITE" />
            <FacebookIcon type="WHITE" />
          </div>
          <Paragraph
            text={t(TranslationsEnums.LANDING_PAGE, "footer.copy")}
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
