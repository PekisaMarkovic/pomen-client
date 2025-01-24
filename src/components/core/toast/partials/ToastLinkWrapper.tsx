import Link from "next/link";
import { ReactNode } from "react";

export type LinkProps = {
  link?: string;
  children: ReactNode;
};

const LinkWrapper = ({ children, link }: LinkProps) => {
  return (
    <>
      {link ? (
        <Link href={link} target="_blank">
          {children}
        </Link>
      ) : (
        <>{children}</>
      )}
    </>
  );
};
export default LinkWrapper;
