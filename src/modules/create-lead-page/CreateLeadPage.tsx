import { Heading } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import LeadForm from "@/modules/create-lead-page/form/LeadForm";

type CreateLeadPageProps = {
  pricingId: number;
};

const CreateLeadPage = ({ pricingId }: CreateLeadPageProps) => {
  const { t } = useCustomTranslation();

  return (
    <section
      aria-labelledby="create-lead"
      className="relative flex flex-col justify-center px-6"
    >
      <div className="pb-12 flex flex-col gap-y-6 md:w-9/12 lg:w-6/12 w-full mx-auto">
        <Heading
          id="privacy-policy-title"
          text={t(TranslationsEnums.LEAD, "title")}
          variant="1"
          size="3xl"
          color="black"
          weight="semibold"
          className="text-center mb-8 mx-auto"
        />

        <LeadForm pricingId={pricingId} />
      </div>
    </section>
  );
};

export default CreateLeadPage;
