"use client";

import Arrow from "@/app/icons/general/Arrow";
import Paragraph from "@/components/core/typography/Paragraph";
import { useCallback, useState } from "react";

type SingleFAQProps = {
  title: string;
  text: string;
};

const SingleFAQ = ({ text, title }: SingleFAQProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  return (
    <article className="flex flex-col shadow-faq px-6 py-5 rounded-sm">
      <div
        className="flex items-center justify-between cursor-pointer"
        onClick={handleToggle}
      >
        <Paragraph text={title} weight="semibold" size="lg" color="black" />

        <Arrow type={isOpen ? "DOWN" : "RIGHT"} />
      </div>
      {isOpen && (
        <div className="mt-5">
          <Paragraph text={text} weight="light" size="lg" color="black" />
        </div>
      )}
    </article>
  );
};

export default SingleFAQ;
