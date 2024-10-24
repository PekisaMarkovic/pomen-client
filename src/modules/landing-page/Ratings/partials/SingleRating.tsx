import Heading from "@/components/core/typography/Heading";
import Paragraph from "@/components/core/typography/Paragraph";
import Image from "next/image";

type SingleRatingProps = {
  firstName: string;
  lastName: string;
  text: string;
  img: string;
  alt: string;
};

const SingleRating = ({
  img,
  text,
  firstName,
  lastName,
  alt,
}: SingleRatingProps) => {
  return (
    <article className="px-2">
      <div className="px-2.5 py-5 border-1 border-solid border-black rounded-sm h-80">
        <div className="flex gap-x-4 mb-6">
          <Image
            width={53}
            height={53}
            src={img}
            alt={alt}
            className="rounded-full"
          />

          <div className="flex flex-col justify-center">
            <Heading
              text={firstName}
              variant="4"
              size="base"
              color="black"
              weight="semibold"
              className="text-center"
            />
            <Heading
              text={lastName}
              variant="4"
              size="base"
              color="black"
              weight="semibold"
              className="text-center"
            />
          </div>
        </div>
        <Paragraph text={text} weight="light" size="base" color="black" />
      </div>
    </article>
  );
};

export default SingleRating;
