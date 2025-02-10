import { Heading, SwiperContainer } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { Gethering } from "@/interfaces/gethering";
import { Tribute } from "@/interfaces/tribute";
import SingleTribute from "@/modules/certificate-page/trubutes-and-getherings/partials/SingleTribute";
import SingleGethering from "@/modules/certificate-page/trubutes-and-getherings/partials/SingleGethering";

type Props = {
  getherings: Gethering[];
  tributes: Tribute[];
};

const TrubutesAndGetherings = ({ getherings, tributes }: Props) => {
  const { t } = useCustomTranslation();

  return (
    <section
      aria-labelledby="tributes-and-getherings"
      className="bg-white p-6 py-8 flex flex-col gap-y-6 overflow-hidden"
    >
      {!!tributes.length && (
        <>
          <div className="flex items-center justify-center">
            <Heading
              id="ratings-title"
              text={t(TranslationsEnums.CERTIFICATE, "memories.tributes")}
              variant="3"
              size="2xl"
              color="black"
              weight="semibold"
              className="text-center"
            />
          </div>

          <SwiperContainer
            speed={1100}
            autoplaySpeed={4200}
            slideCount={tributes.length}
          >
            {tributes.map((tr, index) => (
              <SingleTribute tribute={tr} key={index} />
            ))}
          </SwiperContainer>
        </>
      )}

      {!!getherings.length && (
        <>
          <div className="flex items-center justify-center">
            <Heading
              id="ratings-title"
              text={t(TranslationsEnums.CERTIFICATE, "memories.getherings")}
              variant="3"
              size="2xl"
              color="black"
              weight="semibold"
              className="text-center"
            />
          </div>

          <SwiperContainer
            speed={900}
            autoplaySpeed={3800}
            slideCount={getherings.length}
          >
            {getherings.map((gd, index) => (
              <SingleGethering gethering={gd} key={index} />
            ))}
          </SwiperContainer>
        </>
      )}
    </section>
  );
};

export default TrubutesAndGetherings;
