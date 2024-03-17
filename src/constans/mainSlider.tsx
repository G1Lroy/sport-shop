import sliderImage from "./../assets/slider-image.jpg";
import { ReactNode } from "react";

import arrowBig from "./../assets/icons/arrow.svg";
import { CustomArrow } from "../components/CustomArrow";

export const mainSliderImages = [sliderImage, sliderImage, sliderImage];
export const mainSliderSetting = {
  dots: true,
  infinite: true,
  speed: 1500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,  // 5 sec
  prevArrow: <CustomArrow arrow={arrowBig} />,
  nextArrow: <CustomArrow arrow={arrowBig} />,
  appendDots: (dots: ReactNode) => <ul> {dots} </ul>,
  customPaging: () => <div className="main-slider-dots"></div>,
};
