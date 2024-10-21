import { MouseEventHandler } from "react";

export interface BurgerProps extends React.SVGProps<SVGSVGElement> {
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Burger = ({ onClick, ...rest }: BurgerProps) => {
  return (
    <svg
      width="18"
      height="14"
      viewBox="0 0 18 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...rest}
    >
      <path
        d="M1 13H16.75M1 7H16.75M1 1H16.75"
        stroke="black"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default Burger;
