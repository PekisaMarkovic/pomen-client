import { MouseEventHandler } from "react";

export interface SearchProps extends React.SVGProps<SVGSVGElement> {
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Search = ({ onClick, ...rest }: SearchProps) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...rest}
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.50001 1.91687e-08C7.1446 0.000115492 5.80887 0.324364 4.60427 0.945694C3.39966 1.56702 2.3611 2.46742 1.57525 3.57175C0.789389 4.67609 0.279019 5.95235 0.0867177 7.29404C-0.105584 8.63574 0.0257587 10.004 0.469788 11.2846C0.913817 12.5652 1.65766 13.7211 2.63925 14.6557C3.62084 15.5904 4.81171 16.2768 6.11252 16.6576C7.41333 17.0384 8.78635 17.1026 10.117 16.8449C11.4477 16.5872 12.6975 16.015 13.762 15.176L17.414 18.828C17.6026 19.0102 17.8552 19.111 18.1174 19.1087C18.3796 19.1064 18.6304 19.0012 18.8158 18.8158C19.0012 18.6304 19.1064 18.3796 19.1087 18.1174C19.111 17.8552 19.0102 17.6026 18.828 17.414L15.176 13.762C16.164 12.5086 16.7792 11.0024 16.9511 9.41573C17.123 7.82905 16.8448 6.22602 16.1482 4.79009C15.4517 3.35417 14.3649 2.14336 13.0123 1.29623C11.6597 0.449106 10.096 -0.000107143 8.50001 1.91687e-08ZM2.00001 8.5C2.00001 6.77609 2.68483 5.12279 3.90382 3.90381C5.1228 2.68482 6.7761 2 8.50001 2C10.2239 2 11.8772 2.68482 13.0962 3.90381C14.3152 5.12279 15 6.77609 15 8.5C15 10.2239 14.3152 11.8772 13.0962 13.0962C11.8772 14.3152 10.2239 15 8.50001 15C6.7761 15 5.1228 14.3152 3.90382 13.0962C2.68483 11.8772 2.00001 10.2239 2.00001 8.5Z"
        fill="black"
      />
    </svg>
  );
};

export default Search;