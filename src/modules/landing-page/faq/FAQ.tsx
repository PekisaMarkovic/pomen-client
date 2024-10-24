import Heading from "@/components/core/typography/Heading";
import { useTranslations } from "next-intl";
import SingleFAQ from "./partials/SingleFAQ";
import { generateArrayOfLen } from "@/utils/array";

const translationResource = "landing";

const FAQ = () => {
  const t = useTranslations(translationResource);

  const infos = generateArrayOfLen(5);

  return (
    <section
      aria-labelledby="faq-details"
      className="px-6 py-8 flex flex-col gap-y-6"
    >
      <Heading
        id="faq-title"
        text={t("faq.title")}
        variant="3"
        size="2xl"
        color="black"
        weight="semibold"
        className="text-center"
      />

      <div className="flex flex-col gap-y-2.5">
        {infos.map((el) => (
          <SingleFAQ
            text={t(`faq.info[${el}].text`)}
            title={t(`faq.info[${el}].title`)}
            key={el}
          />
        ))}
      </div>
    </section>
  );
};

export default FAQ;
