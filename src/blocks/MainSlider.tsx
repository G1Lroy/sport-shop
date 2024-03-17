import SliderComponent from "../components/SliderComponent";
import { Settings } from "react-slick";

type MainSliderProps = {
  images: string[];
  sliderSettings: Settings;
};

const MainSlider = ({ images, sliderSettings }: MainSliderProps) => {
  // Create image nodes for slider
  const sliderContent = images.map((image) => <img src={image} />);
  return (
    <div className="slider-wrapper-full">
      <SliderComponent content={sliderContent} settings={sliderSettings} />
    </div>
  );
};

export default MainSlider;
