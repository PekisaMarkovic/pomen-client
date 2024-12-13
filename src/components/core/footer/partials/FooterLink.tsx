import Link from "next/link";

type Props = {
  href: string;
  text: string;
};

const FooterLink = ({ href, text }: Props) => {
  return (
    <Link href={href} className="text-white underline">
      {text}
    </Link>
  );
};

export default FooterLink;
