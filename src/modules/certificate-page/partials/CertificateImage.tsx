"use client";

import { File } from "@/interfaces/file";
import Image from "next/image";
import React, { useCallback, useState } from "react";

type Props = {
  profileImage: File;
  alt: string;
};

const CertificateImage = ({ alt, profileImage }: Props) => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = useCallback(() => {
    setOpen(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <>
      <Image
        onClick={handleOpen}
        width={146}
        height={146}
        src={profileImage.url}
        alt={alt}
        className="cursor-pointer"
      />

      {open && (
        <>
          <Image
            width={profileImage.width}
            height={profileImage.height}
            src={profileImage.url}
            alt={alt}
            className="fixed top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 z-[999] max-h-[90%] max-w-[90%]"
          />
          <div
            className="fixed top-0 left-0 w-full h-full z-[998] bg-[#00000050]"
            onClick={handleClose}
          />
        </>
      )}
    </>
  );
};

export default CertificateImage;
