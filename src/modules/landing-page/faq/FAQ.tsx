import { Heading } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import SingleFAQ from "@/modules/landing-page/faq/partials/SingleFAQ";
import { generateArrayOfLen } from "@/utils/array";

const FAQ = () => {
  const { t } = useCustomTranslation();

  const infos = generateArrayOfLen(5);

  return (
    <section aria-labelledby="faq-details" className="flex justify-center">
      <div className="px-6 py-8 flex flex-col gap-y-6 w-full md:w-9/12 lg:w-6/12">
        <Heading
          id="faq-title"
          text={t(TranslationsEnums.LANDING_PAGE, "faq.title")}
          variant="3"
          size="2xl"
          color="black"
          weight="semibold"
          className="text-center"
        />

        <div className="flex flex-col gap-y-2.5">
          {infos.map((el) => (
            <SingleFAQ
              text={t(TranslationsEnums.LANDING_PAGE, `faq.info[${el}].text`)}
              title={t(TranslationsEnums.LANDING_PAGE, `faq.info[${el}].title`)}
              key={el}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
