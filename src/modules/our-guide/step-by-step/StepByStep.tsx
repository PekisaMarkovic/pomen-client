import { Heading } from "@/components/core";
import { generateArrayOfLen } from "@/utils/array";
import SingleStep from "@/modules/our-guide/step-by-step/partials/SingleStep";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const StepByStep = () => {
  const { t } = useCustomTranslation();

  const infos = generateArrayOfLen(4);

  return (
    <section
      aria-labelledby="application-details"
      className="md:flex md:justify-center"
    >
      <div className="px-6 py-14 xl:px-12 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12">
        <Heading
          id="step-by-step-title"
          text={t(TranslationsEnums.OUR_GUIDE, "step-by-step.title")}
          variant="2"
          size="2xl"
          color="black"
          weight="semibold"
        />

        <div className="flex flex-col gap-y-8">
          <SingleStep
            index={1}
            title={t(TranslationsEnums.OUR_GUIDE, "step-by-step.info.title")}
            text={t(TranslationsEnums.OUR_GUIDE, "step-by-step.info.text")}
          />

          <div className="xl:w-1/2">
            <SingleStep
              index={2}
              title={t(TranslationsEnums.OUR_GUIDE, "step-by-step.main.title")}
              text={t(TranslationsEnums.OUR_GUIDE, "step-by-step.main.text")}
              subSteps={infos.map((i) => ({
                text: t(
                  TranslationsEnums.OUR_GUIDE,
                  `step-by-step.main.list[${i}].text`
                ),
                title: t(
                  TranslationsEnums.OUR_GUIDE,
                  `step-by-step.main.list[${i}].title`
                )
              }))}
            />
          </div>

          <SingleStep
            index={3}
            title={t(TranslationsEnums.OUR_GUIDE, "step-by-step.footer.title")}
            text={t(TranslationsEnums.OUR_GUIDE, "step-by-step.footer.text")}
          />
        </div>
      </div>
    </section>
  );
};

export default StepByStep;
