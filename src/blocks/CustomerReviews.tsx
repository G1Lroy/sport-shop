import { mockRewievs, rewievsSliderSettings } from "../constans/rewievsSlider";
import { generateSlides } from "../utils/generateSlides";
import SliderComponent from "../components/SliderComponent";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  // CREATE rewievs cards[] for slider, from Mock rewies object
  /* 
  I used a method that generates elements for the slider based on a given number. 
  This is necessary in order not to create arrays of 12 or 9 elements, 
  thereby maintaining the compactness of the mockRewievs and mockProducts files. 
  One reference is enough to create a set of sliders

  for a real case it will be enough to do: 
      sliderContent = data.map(item=> <ReactElement card={item}/>)
  */

  const sliderContent = generateSlides({
    mockData: mockRewievs,
    ReactComponent: ReviewCard,
    numberOfCards: 12,
  });

  return (
    <div className="slider-wrapper-products customer-reviews">
      <SliderComponent
        content={sliderContent}
        settings={rewievsSliderSettings}
        sliderHeadertext="Відгуги наших клієнтів"
      />
    </div>
  );
};

export default CustomerReviews;
