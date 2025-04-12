import {
  BasicPackageIcon,
  PremiumPackageIcon,
  StandardPackageIcon
} from "@/app/icons/pricing";
import ROUTES from "@/components/constants/a-routes";
import { MainLink, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { IPricing, PricingPackagesEnums } from "@/interfaces/pricings";
import Link from "next/link";

const basic = [
  "Metalna QR kod pločica (aluminijum, crno-bela, UV otporna)",
  "Stranica sa biografijom (do 1000 karaktera)",
  "Do 10 fotografija",
  "Bez mogućnost dodavanja video klipa",
  "Lokacija grobnog mesta (Google mapa)",
  "Tekući račun za donacije (za one koji nisu prisustvovali sahrani)",
  "Sekcija za ostavljanje poruka sećanja",
  "Pretraga po imenu/prezimenu na sajtu"
];

const standard = [
  "Kvalitetna QR kod pločica (aluminijum ili čelik)",
  "Biografija (do 3000 karaktera)",
  "Do 15 fotografija",
  "Mogućnost dodavanja video klipa do 3",
  "Lokacija grobnog mesta (Google mapa)",
  "Tekući račun za donacije (za one koji nisu prisustvovali sahrani)",
  "Sekcija za poruke sećanja i komentare",
  "Pretraga po imenu/prezimenu na sajtu"
];

const premium = [
  "Premium QR kod pločica (gravura na mermeru ili inoxu)",
  "Detaljna biografija (do 5000 karaktera)",
  "Do 25 fotografija",
  "Mogućnost dodavanja video klipa do 9",
  "Lokacija grobnog mesta (Google mapa)",
  "Tekući račun za donacije (za one koji nisu prisustvovali sahrani)",
  "Sekcija za poruke i uspomene",
  "Pretraga po imenu/prezimenu na sajtu"
];

type SinglePackageProps = {
  pckg: IPricing;
};

const SinglePackage = ({ pckg }: SinglePackageProps) => {
  const { t } = useCustomTranslation();

  const showIcon = () => {
    switch (pckg.plan) {
      case PricingPackagesEnums.BASIC:
        return <BasicPackageIcon height="50" width="50" />;

      case PricingPackagesEnums.PREMIUM:
        return <PremiumPackageIcon height="50" width="50" />;

      case PricingPackagesEnums.STANDARD:
        return <StandardPackageIcon height="50" width="50" />;
    }
  };

  const showContent = () => {
    switch (pckg.plan) {
      case PricingPackagesEnums.BASIC:
        return basic;

      case PricingPackagesEnums.PREMIUM:
        return premium;

      case PricingPackagesEnums.STANDARD:
        return standard;

      default:
        return [];
    }
  };

  return (
    <div className="flex flex-col items-center gap-y-5 px-4 py-5 bg-overlay-dark rounded-sm">
      {showIcon()}

      <Paragraph
        text={t(TranslationsEnums.PRICING, `plan.${pckg.plan}`)}
        weight="semibold"
        color="white"
        size="2xl"
      />

      <Paragraph text={`${pckg.price}`} color="white" size="7xl" />

      <Paragraph
        text={"Ukljucuje"}
        color="white"
        size="base"
        className="mb-2"
      />

      <div className="w-full flex flex-col gap-4">
        {showContent().map((par) => (
          <div className="h-16 flex gap-2">
            <div>
              <Paragraph text={"-"} color="white" size="base" />
            </div>
            <div>
              <Paragraph text={par} color="white" size="base" />
            </div>
          </div>
        ))}
      </div>

      <MainLink
        href={`${ROUTES.CREATE_CERTIFICATE}/${pckg.pricingId}`}
        text={t(TranslationsEnums.PRICING, "btn")}
        variant="primary"
        size="full"
      />
    </div>
  );
};

export default SinglePackage;
