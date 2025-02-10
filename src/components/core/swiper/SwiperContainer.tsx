"use client";

import { Arrow } from "@/app/icons/general";
import { PropsWithChildren } from "react";
import Slider from "react-slick";

type Props = {
  speed?: number;
  autoplaySpeed?: number;
  slideCount: number;
};

const SwiperContainer = ({
  children,
  speed = 500,
  slideCount,
  autoplaySpeed = 3000
}: PropsWithChildren<Props>) => {
  // Ensure slidesToShow is not greater than available slides
  const slidesToShow = Math.min(3, slideCount);
  const slidesToScroll = Math.min(3, slideCount);

  const settings = {
    dots: slideCount > 1, // Show dots only if more than 1 slide
    infinite: slideCount > slidesToShow, // Disable infinite scroll if not enough slides
    speed,
    slidesToShow,
    slidesToScroll,
    autoplay: slideCount > slidesToShow, // Disable autoplay if not enough slides
    autoplaySpeed,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 550,
        settings: {
          slidesToShow: Math.min(1, slideCount),
          slidesToScroll: Math.min(1, slideCount),
          infinite: slideCount > 1,
          dots: slideCount > 1
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: Math.min(2, slideCount),
          slidesToScroll: Math.min(2, slideCount),
          infinite: slideCount > 2,
          dots: slideCount > 1
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(3, slideCount),
          slidesToScroll: Math.min(3, slideCount),
          infinite: slideCount > 3,
          dots: slideCount > 1
        }
      }
    ],
    nextArrow:
      slideCount > slidesToShow ? (
        <div>
          <Arrow type="RIGHT" />
        </div>
      ) : (
        <></>
      ),
    prevArrow:
      slideCount > slidesToShow ? (
        <div>
          <Arrow type="LEFT" />
        </div>
      ) : (
        <></>
      )
  };

  return <Slider {...settings}>{children}</Slider>;
};

export default SwiperContainer;
