import { SVGProps } from "react";

export interface FacebookProps extends SVGProps<SVGSVGElement> {
  type: "WHITE" | "DARK";
}
const FacebookIcon = (props: FacebookProps) => {
  const color = props.type === "WHITE" ? "#fff" : "#000";

  return (
    <svg
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M27.3334 14.0001C27.3334 6.64008 21.3601 0.666748 14.0001 0.666748C6.64008 0.666748 0.666748 6.64008 0.666748 14.0001C0.666748 20.4534 5.25341 25.8267 11.3334 27.0667V18.0001H8.66675V14.0001H11.3334V10.6667C11.3334 8.09341 13.4267 6.00008 16.0001 6.00008H19.3334V10.0001H16.6667C15.9334 10.0001 15.3334 10.6001 15.3334 11.3334V14.0001H19.3334V18.0001H15.3334V27.2667C22.0667 26.6001 27.3334 20.9201 27.3334 14.0001Z"
        fill={color}
      />
    </svg>
  );
};

export default FacebookIcon;
