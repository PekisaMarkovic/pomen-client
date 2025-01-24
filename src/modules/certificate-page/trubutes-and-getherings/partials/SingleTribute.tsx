import { Heading, Paragraph } from "@/components/core";
import { Tribute } from "@/interfaces/tribute";
import Image from "next/image";

type Props = {
  tribute: Tribute;
};

const SingleTribute = ({ tribute }: Props) => {
  const { firstName, lastName, description, email } = tribute;
  return (
    <article className="px-2">
      <div className="px-2.5 py-5 border-1 border-solid border-black rounded-sm h-80">
        <div className="flex flex-col justify-center">
          <Heading
            text={`${firstName} ${lastName}`}
            variant="3"
            size="base"
            color="black"
            weight="semibold"
            className="text-center"
          />
          <Heading
            text={email}
            variant="4"
            size="base"
            color="black"
            weight="semibold"
            className="text-center"
          />
        </div>
        <Paragraph
          text={description}
          weight="light"
          size="base"
          color="black"
        />
      </div>
    </article>
  );
};

export default SingleTribute;
