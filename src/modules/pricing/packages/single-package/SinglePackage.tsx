import ROUTES from "@/components/constants/a-routes";
import { MainLink, Paragraph } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { IPricing, PricingPackagesEnums } from "@/interfaces/pricings";

const basic = [
  "Metalna QR kod pločica (aluminijum, crno-bela, UV otporna)",
  "Lokacija grobnog mesta (Google mapa)",
  "Pretraga po imenu, prezimenu, lokaciji na sajtu",
  "Mogucnost prikazivanja tekuceg račun za donacije (za one koji nisu prisustvovali sahrani)",
  "Stranica sa biografijom (do 1000 karaktera)",
  "Do 10 fotografija",
  "Bez mogućnost dodavanja video klipa",
  "Sekcija za poruke sećanja i posvete",
  "Bez sekcije za informacije o okupljanja",
  "Bez obavestenja o okupljanjima"
];

const standard = [
  "Kvalitetna QR kod pločica (aluminijum ili čelik)",
  "Lokacija grobnog mesta (Google mapa)",
  "Pretraga po imenu, prezimenu, lokaciji na sajtu",
  "Mogucnost prikazivanja tekuceg račun za donacije (za one koji nisu prisustvovali sahrani)",
  "Biografija (do 3000 karaktera)",
  "Do 15 fotografija",
  "Mogućnost dodavanja video klipa do 3",
  "Sekcija za poruke sećanja i posvete",
  "Sekcije za informacije o okupljanja",
  "Bez obavestenja o okupljanjima"
];

const premium = [
  "Premium QR kod pločica (gravura na mermeru ili inoxu)",
  "Lokacija grobnog mesta (Google mapa)",
  "Pretraga po imenu, prezimenu, lokaciji na sajtu",
  "Mogucnost prikazivanja tekuceg račun za donacije (za one koji nisu prisustvovali sahrani)",
  "Detaljna biografija (do 5000 karaktera)",
  "Do 25 fotografija",
  "Mogućnost dodavanja video klipa do 9",
  "Sekcija za poruke sećanja i posvete",
  "Sekcije za informacije o okupljanja",
  "Obavestenjima putem mejla i vibera o okupljanjima"
];

type SinglePackageProps = {
  pckg: IPricing;
};

const SinglePackage = ({ pckg }: SinglePackageProps) => {
  const { t } = useCustomTranslation();

  const showIcon = () => {
    switch (pckg.plan) {
      case PricingPackagesEnums.BASIC:
        return "🕯";

      case PricingPackagesEnums.PREMIUM:
        return "🌳";

      case PricingPackagesEnums.STANDARD:
        return "🔗";
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
      <Paragraph
        text={`${showIcon()}`}
        weight="semibold"
        color="white"
        size="5xl"
      />

      <Paragraph
        text={t(TranslationsEnums.PRICING, `plan.${pckg.plan}`)}
        weight="semibold"
        color="white"
        size="2xl"
      />

      <div className="flex items-center">
        <Paragraph text={`${pckg.price}`} color="white" size="6xl" />
        <Paragraph
          text={`/${t(TranslationsEnums.PRICING, `din`)}`}
          color="white"
          size="lg"
          className="opacity-[0.4]"
        />
      </div>

      <Paragraph
        text={"Ukljucuje"}
        color="white"
        size="base"
        className="mb-2"
      />

      <div className="w-full flex flex-col gap-4">
        {showContent().map((par, i) => (
          <div className="min-h-16 flex gap-2" key={i}>
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
        className="mt-auto"
      />
    </div>
  );
};

export default SinglePackage;
