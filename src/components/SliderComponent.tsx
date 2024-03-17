import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { useState } from "react";

type SliderComponentProps = {
  content: React.ReactNode[];
  settings: Settings;
  sliderHeadertext: string;
};

const SliderComponent = ({ content, settings, sliderHeadertext }: SliderComponentProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const { slidesToScroll } = settings;

  const displayPagination = () => {
    return `${currentPage} / ${content.length / slidesToScroll!}`;
  };

  // Cb fn called afterChange "Event" in Slick slider
  const getCurrentSlide = (currentSlide: number) => {
    setCurrentPage(Math.floor(currentSlide / slidesToScroll!) + 1);
  };

  const sliderSettings = {
    ...settings,
    afterChange: getCurrentSlide,
  };

  return (
    <div className="slider-holder">
      <h3>{sliderHeadertext}</h3>
      <div className="pagination">{displayPagination()}</div>
      <Slider {...sliderSettings}>
        {content.map((item, index) => (
          <div key={index}> {item}</div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderComponent;
