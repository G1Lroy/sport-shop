import ProductCard from "../components/ProductCard";
import SliderComponent from "../components/SliderComponent";
import { mockProducts, productsSliderSettings } from "../constans/productSlider";
import { generateSlides } from "../utils/generateSlides";

const HotProducts = () => {
  // CREATE product cards[] for slider, from Mock products object
  // CHECK generateSlides func for context =)

  const sliderContent = generateSlides({
    mockData: mockProducts,
    ReactComponent: ProductCard,
    numberOfCards: 9,
  });

  return (
    <div className="slider-wrapper-products">
      <SliderComponent
        content={sliderContent}
        settings={productsSliderSettings}
        sliderHeadertext="Найгарячіші товари"
      />
    </div>
  );
};

export default HotProducts;
