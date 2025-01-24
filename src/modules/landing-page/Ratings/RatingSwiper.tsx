import { Heading, SwiperContainer } from "@/components/core";
import { generateArrayOfLen } from "@/utils/array";
import person1 from "@/app/assets/landing/slider/person-1.png";
import person2 from "@/app/assets/landing/slider/person-2.png";
import person3 from "@/app/assets/landing/slider/person-3.png";
import person4 from "@/app/assets/landing/slider/person-4.png";
import person5 from "@/app/assets/landing/slider/person-5.png";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import SingleRating from "@/modules/landing-page/ratings/parr/SingleRating";

const images = [person1, person2, person4, person3, person5];

const RatingSwiper = () => {
  const { t } = useCustomTranslation();

  const infos = generateArrayOfLen(5);

  return (
    <section
      aria-labelledby="ratings-details"
      className="bg-white p-6 py-8 flex flex-col gap-y-6 overflow-hidden"
    >
      <Heading
        id="ratings-title"
        text={t(TranslationsEnums.LANDING_PAGE, "ratings.title")}
        variant="3"
        size="2xl"
        color="black"
        weight="semibold"
        className="text-center"
      />
      <SwiperContainer>
        {infos.map((el, index) => (
          <SingleRating
            text={t(TranslationsEnums.LANDING_PAGE, `ratings.info[${el}].text`)}
            lastName={t(
              TranslationsEnums.LANDING_PAGE,
              `ratings.info[${el}].lastName`
            )}
            firstName={t(
              TranslationsEnums.LANDING_PAGE,
              `ratings.info[${el}].firstName`
            )}
            img={images[index]}
            alt={t(TranslationsEnums.LANDING_PAGE, `ratings.info[${el}].alt`)}
            key={el}
          />
        ))}
      </SwiperContainer>
    </section>
  );
};

export default RatingSwiper;
