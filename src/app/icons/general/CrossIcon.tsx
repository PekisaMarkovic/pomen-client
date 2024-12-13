export interface FacebookProps extends React.SVGProps<SVGSVGElement> {
  type: "WHITE" | "DARK";
}
const CrossIcon = (props: FacebookProps) => {
  const color = props.type === "WHITE" ? "#fff" : "#000";

  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1 15L8 8L15 15M15 1L7.99867 8L1 1"
        stroke={color}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export default CrossIcon;
