import { mockRewievs, rewievsSliderSettings } from "../constans/rewievsSlider";
import { generateSlides } from "../utils/generateSlides";
import SliderComponent from "../components/SliderComponent";
import ReviewCard from "../components/ReviewCard";

const CustomerReviews = () => {
  // CREATE rewievs cards[] for slider, from Mock rewies object
  // CHECK generateSlides func for context =)

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
