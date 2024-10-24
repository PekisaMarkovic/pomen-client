"use client";

import Arrow from "@/app/icons/general/Arrow";
import { PropsWithChildren } from "react";
import Slider from "react-slick";

const SwiperContainer = ({ children }: PropsWithChildren) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

    autoplay: true,
    autoplaySpeed: 3000,
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
