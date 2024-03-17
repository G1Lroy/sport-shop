import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";

type SliderComponentProps = {
  content: React.ReactNode[];
  settings: Settings;
};

const SliderComponent = ({ content, settings }: SliderComponentProps) => {
  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
