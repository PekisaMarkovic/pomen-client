import Heading from "@/components/core/typography/Heading";
import SinglePron from "@/modules/our-guide/PronsQR/partials/SinglePron";
import { generateArrayOfLen } from "@/utils/array";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const PronsQR = () => {
  const { t } = useCustomTranslation();

  const infos = generateArrayOfLen(3);

  return (
    <section
      aria-labelledby="cta-details"
      className="bg-black px-6 py-8 md:flex md:justify-center"
    >
      <div className="p-6 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <Heading
          id="prons-qr-title"
          text={t(TranslationsEnums.OUR_GUIDE, "prons-qr.title")}
          variant="3"
          size="2xl"
          color="white"
          weight="semibold"
          className="text-center"
        />

        <div className="grid grid-cols-1 gap-6 mt-5">
          {infos.map((el) => (
            <SinglePron
              text={t(TranslationsEnums.OUR_GUIDE, `prons-qr.info[${el}].text`)}
              title={t(
                TranslationsEnums.OUR_GUIDE,
                `prons-qr.info[${el}].title`
              )}
              key={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PronsQR;
