import { Paragraph, Heading } from "@/components/core";
import { Gethering } from "@/interfaces/gethering";
import { formatDateDayMonthYear, formatTimeOption } from "@/utils/date";

type Props = {
  gethering: Gethering;
};

const SingleGethering = ({ gethering }: Props) => {
  const { address, getheringDate, hour } = gethering;

  return (
    <article className="px-2">
      <div className="px-2.5 py-5 border-1 border-solid border-black rounded-sm h-26">
        <div className="flex flex-col justify-center mb-4">
          <Heading
            text={`${formatDateDayMonthYear(getheringDate)} ${formatTimeOption(
              hour
            )}`}
            variant="4"
            size="base"
            color="black"
            weight="semibold"
            className="text-center"
          />
        </div>
        <Paragraph text={address} weight="light" size="base" color="black" />
      </div>
    </article>
  );
};

export default SingleGethering;
