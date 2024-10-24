import { MouseEventHandler } from "react";

export interface ArrowProps extends React.SVGProps<SVGSVGElement> {
  type: "DOWN" | "LEFT" | "RIGHT" | "UP";
  onClick?: MouseEventHandler<SVGSVGElement>;
}

const Arrow = ({ onClick, type, ...rest }: ArrowProps) => {
  console.log(type);
  const direction = () => {
    switch (type) {
      case "UP":
        return "rotate-180";

      case "RIGHT":
        return "-rotate-90";

      case "LEFT":
        return "rotate-90";

      default:
        return "";
    }
  };

  return (
    <svg
      width="11"
      height="8"
      viewBox="0 0 11 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={onClick}
      {...rest}
      className={direction()}
    >
      <path
        d="M5.17605 5.13207L8.83305 1.47507C8.8996 1.40198 8.98015 1.34299 9.06991 1.30159C9.15968 1.26018 9.25683 1.23721 9.35563 1.23403C9.45443 1.23084 9.55287 1.24751 9.64511 1.28305C9.73735 1.31859 9.82153 1.37227 9.89266 1.44092C9.96378 1.50957 10.0204 1.59179 10.0592 1.68272C10.098 1.77364 10.1181 1.87143 10.1184 1.97028C10.1188 2.06913 10.0992 2.16704 10.061 2.25821C10.0228 2.34938 9.96673 2.43197 9.89605 2.50107L9.87805 2.51907L5.69905 6.69907C5.56046 6.83763 5.37252 6.91547 5.17655 6.91547C4.98058 6.91547 4.79263 6.83763 4.65405 6.69907L0.475048 2.52007C0.40525 2.45264 0.349418 2.37212 0.31074 2.2831C0.272061 2.19409 0.251293 2.09834 0.249621 2.0013C0.24795 1.90426 0.265408 1.80784 0.300998 1.71755C0.336588 1.62726 0.389614 1.54487 0.457048 1.47507C0.524482 1.40527 0.605003 1.34944 0.694014 1.31076C0.783025 1.27208 0.878783 1.25132 0.97582 1.24964C1.07286 1.24797 1.16927 1.26543 1.25956 1.30102C1.34985 1.33661 1.43225 1.38964 1.50205 1.45707L1.52005 1.47507L5.17605 5.13207Z"
        fill="black"
        stroke="black"
        strokeWidth="0.5"
      />
    </svg>
  );
};

export default Arrow;
