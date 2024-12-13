import { Arrow } from "@/app/icons/general";
import Link from "next/link";

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  disabled: boolean;
  reverse: boolean;
  page: number;
};

const PagginationArrow = ({ disabled, page, reverse }: Props) => {
  return (
    <Link
      aria-disabled={disabled}
      href={disabled ? "#" : `?page=${page}`}
      className={`flex justify-center items-center fonts-poppins py-1 px-5 bg-lighy-grey text-dark-grey ${
        disabled ? "opacity-50 cursor-not-allowed" : "opacity-1 cursor-pointer"
      } rounded-sm`}
    >
      <Arrow type={reverse ? "LEFT" : "RIGHT"} />
    </Link>
  );
};

export default PagginationArrow;
