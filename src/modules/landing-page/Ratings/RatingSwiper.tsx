import SwiperContainer from "@/components/core/swiper/SwiperContainer";
import Heading from "@/components/core/typography/Heading";
import { generateArrayOfLen } from "@/utils/array";
import { useTranslations } from "next-intl";
import SingleRating from "./partials/SingleRating";

const translationResource = "landing";

const RatingSwiper = () => {
  const t = useTranslations(translationResource);

  const infos = generateArrayOfLen(5);

  return (
    <section
      aria-labelledby="ratings-details"
      className="bg-white p-6 py-8 flex flex-col gap-y-6"
    >
      <Heading
        id="ratings-title"
        text={t("ratings.title")}
        variant="3"
        size="2xl"
        color="black"
        weight="semibold"
        className="text-center"
      />
      <SwiperContainer>
        {infos.map((el) => (
          <SingleRating
            text={t(`ratings.info[${el}].text`)}
            lastName={t(`ratings.info[${el}].lastName`)}
            firstName={t(`ratings.info[${el}].firstName`)}
            img={t(`ratings.info[${el}].img`)}
            alt={t(`ratings.info[${el}].alt`)}
            key={el}
          />
        ))}
      </SwiperContainer>
    </section>
  );
};

export default RatingSwiper;
