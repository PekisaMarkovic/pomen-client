import { Heading, SwiperContainer } from "@/components/core";
import useCustomTranslation from "@/hooks/use-custom-translation";
import { TranslationsEnums } from "@/i18n/request";
import { File } from "@/interfaces/file";
import SingleMemory from "@/modules/certificate-page/memories/partials/SingleMemory";

type Props = {
  images: File[];
  videos: File[];
};

const Memories = ({ videos, images }: Props) => {
  const { t } = useCustomTranslation();

  return (
    <section
      aria-labelledby="memries"
      className="bg-white p-6 py-8 flex flex-col gap-y-6 overflow-hidden"
    >
      {!!images.length && (
        <>
          <div className="flex items-center justify-center">
            <Heading
              id="ratings-title"
              text={t(TranslationsEnums.CERTIFICATE, "memories.images")}
              variant="3"
              size="2xl"
              color="black"
              weight="semibold"
              className="text-center"
            />
          </div>
          <SwiperContainer>
            {images.map((img, index) => (
              <SingleMemory memory={img} key={index} />
            ))}
          </SwiperContainer>
        </>
      )}

      {!!videos.length && (
        <>
          <div className="flex items-center justify-center">
            <Heading
              id="ratings-title"
              text={t(TranslationsEnums.CERTIFICATE, "memories.videos")}
              variant="3"
              size="2xl"
              color="black"
              weight="semibold"
              className="text-center"
            />
          </div>

          <SwiperContainer speed={700} autoplaySpeed={3500}>
            {videos.map((video, index) => (
              <SingleMemory memory={video} key={index} />
            ))}
          </SwiperContainer>
        </>
      )}
    </section>
  );
};

export default Memories;
