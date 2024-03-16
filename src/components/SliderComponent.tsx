import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ReactNode } from "react";
import React from "react";

type SliderComponentProps = {
  content: string[] | ReactNode[];
  settings: Settings;
};

const SliderComponent = ({ content, settings }: SliderComponentProps) => {
  return (
    <Slider {...settings}>
      {content.map((item, index) => (
        <div key={index}>{React.isValidElement(item) ? item : <img src={item as string} />}</div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
