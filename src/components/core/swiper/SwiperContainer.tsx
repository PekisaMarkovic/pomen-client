"use client";

import { Arrow } from "@/app/icons/general";
import { PropsWithChildren } from "react";
import Slider from "react-slick";

type Props = {
  speed?: number;
  autoplaySpeed?: number;
};

const SwiperContainer = ({
  children,
  speed = 500,
  autoplaySpeed = 3000,
}: PropsWithChildren<Props>) => {
  const settings = {
    dots: true,
    infinite: true,
    speed,
    slidesToShow: 3,
    slidesToScroll: 3,

    autoplay: true,
    autoplaySpeed,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },

      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
    ],
    nextArrow: (
      <div>
        <Arrow type="RIGHT" />
      </div>
    ),
    prevArrow: (
      <div>
        <Arrow type="LEFT" />
      </div>
    ),
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SwiperContainer;
