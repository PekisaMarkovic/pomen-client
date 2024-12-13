import Link from "next/link";

type Props = {
  page: number;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
  isActive: boolean;
};
const SinglePage = ({ isActive, page }: Props) => {
  return (
    <Link
      href={`?page=${page}`}
      key={page}
      className={`cursor-pointer fonts-poppins py-1 px-2 ${
        isActive ? "bg-green text-black" : "bg-lighy-grey text-grey"
      } rounded-sm`}
    >
      {page}
    </Link>
  );
};

export default SinglePage;
