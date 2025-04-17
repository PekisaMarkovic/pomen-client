import ContactUsForm from "@/modules/landing-page/contact-us/partials/ContactUsForm";
import { Heading } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";

const ContactUs = () => {
  const { t } = useCustomTranslation();

  return (
    <section
      aria-labelledby="faq-details"
      className="px-6 py-8 flex flex-col items-center gap-y-6"
      id="contact"
    >
      <div className="px-4 py-4 flex flex-col gap-y-6 rounded-sm  shadow-contact md:w-9/12 lg:w-6/12 w-full">
        <Heading
          id="faq-title"
          text={t(TranslationsEnums.LANDING_PAGE, "contact-us.title")}
          variant="3"
          size="2xl"
          color="black"
          weight="semibold"
          className="text-center"
        />

        <ContactUsForm />
      </div>
    </section>
  );
};

export default ContactUs;
