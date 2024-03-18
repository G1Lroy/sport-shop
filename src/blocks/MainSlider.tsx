import Slider from "react-slick";
import { mainSliderImages, mainSliderSetting } from "../constans/mainSlider";

const MainSlider = () => {
  return (
    <div className="slider-wrapper-full">
      <Slider {...mainSliderSetting}>
        {mainSliderImages.map((item, index) => (
          <div key={index}>
            <img src={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
