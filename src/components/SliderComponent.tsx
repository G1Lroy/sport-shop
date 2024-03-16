import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
import React from "react";

type SliderComponentProps = {
  content: string[] | ReactNode[];
  settings: {};
};

const SliderComponent = ({ content, settings }: SliderComponentProps) => {
  return (
    <div className="slider-wrapper">
      <Slider {...settings}>
        {content.map((item, index) => (
          <div key={index}>{React.isValidElement(item) ? item : <img src={item as string} />}</div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
