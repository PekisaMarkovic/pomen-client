import Link from "next/link";
import { ReactNode } from "react";

type Props = {
  text: string | ReactNode;
  href: string;
  align?: "LEFT" | "RIGHT" | "CENTER";
};

const NavigationLink = ({ text, href, align = "LEFT" }: Props) => {
  const alignText = () => {
    switch (align) {
      case "RIGHT":
        return "text-right";

      case "CENTER":
        return "text-center";

      default:
        return "text-left";
    }
  };
  return (
    <Link
      href={href}
      className={`py-2 text-lg text-black font-normal hover:font-normal hover:font-semibold hover:underline ${alignText()}`}
    >
      {text}
    </Link>
  );
};

export default NavigationLink;
