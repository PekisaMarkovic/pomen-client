import { Heading } from "@/components/core";
import React from "react";

type Props = { title: string };

const BlogTitle = ({ title }: Props) => {
  return (
    <Heading
      id="certificate-name"
      text={title}
      variant="1"
      size="3xl"
      color="black"
      weight="semibold"
      className="text-center mb-4"
    />
  );
};

export default BlogTitle;
