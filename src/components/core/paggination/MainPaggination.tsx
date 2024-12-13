import PagginationArrow from "@/components/core/paggination/partials/PagginationArrow";
import PagginationDots from "@/components/core/paggination/partials/PagginationDots";
import SinglePage from "@/components/core/paggination/partials/SinglePage";
import { useSearchParams } from "next/navigation";

type Props = {
  totalPages: number;
};

const PagginationWithoutUrl = ({ totalPages }: Props) => {
  const searchParams = useSearchParams();
  const page = searchParams.get("page");
  const currentPage = Number(page) || 1;

  const generateLinks = () => {
    const links = [];

    if (totalPages <= 3) {
      for (let i = 1; i <= totalPages; i++) {
        links.push(
          <SinglePage key={i} isActive={currentPage === i} page={i} />
        );
      }
      return links;
    }

    if (currentPage < 3) {
      for (let i = 1; i <= 3; i++) {
        links.push(
          <SinglePage key={i} isActive={currentPage === i} page={i} />
        );
      }
      links.push(<PagginationDots key="dots" />);
      links.push(
        <SinglePage
          key={totalPages}
          isActive={currentPage === totalPages}
          page={totalPages}
        />
      );
      return links;
    }

    if (currentPage >= 3 && currentPage <= totalPages - 2) {
      links.push(<SinglePage key={1} isActive={currentPage === 1} page={1} />);
      links.push(<PagginationDots key="dots-start" />);
      links.push(
        <SinglePage
          key={currentPage - 1}
          isActive={false}
          page={currentPage - 1}
        />
      );
      links.push(<SinglePage key={currentPage} isActive page={currentPage} />);
      links.push(
        <SinglePage
          key={currentPage + 1}
          isActive={false}
          page={currentPage + 1}
        />
      );
      links.push(<PagginationDots key="dots-end" />);
      links.push(
        <SinglePage
          key={totalPages}
          isActive={currentPage === totalPages}
          page={totalPages}
        />
      );
      return links;
    }

    if (currentPage > totalPages - 2) {
      links.push(<SinglePage key={1} isActive={currentPage === 1} page={1} />);
      links.push(<PagginationDots key="dots" />);
      for (let i = totalPages - 2; i <= totalPages; i++) {
        links.push(
          <SinglePage key={i} isActive={currentPage === i} page={i} />
        );
      }
      return links;
    }
  };

  return (
    <div>
      {totalPages > 0 && (
        <ul className="flex gap-x-2 list-none">
          <PagginationArrow
            disabled={currentPage === 1}
            reverse
            page={currentPage - 1}
          />
          {generateLinks()}
          <PagginationArrow
            disabled={currentPage === totalPages}
            reverse={false}
            page={currentPage + 1}
          />
        </ul>
      )}
    </div>
  );
};

export default PagginationWithoutUrl;
