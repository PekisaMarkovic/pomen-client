import ContactUsForm from "./partials/ContactUsForm";
import { useTranslations } from "next-intl";
import { Heading } from "@/components/core";

const translationResource = "landing";

const ContactUs = () => {
  const t = useTranslations(translationResource);

  return (
    <section
      aria-labelledby="faq-details"
      className="px-6 py-8 flex flex-col items-center gap-y-6"
    >
      <div className="px-4 py-4 flex flex-col gap-y-6 rounded-sm  shadow-contact md:w-9/12 lg:w-6/12">
        <Heading
          id="faq-title"
          text={t("contact-us.title")}
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
