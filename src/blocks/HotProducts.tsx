import ProductCard from "../components/ProductCard";
import SliderComponent from "../components/SliderComponent";
import { mockProducts, productsSliderSettings } from "../constans/productSlider";
import { generateSlides } from "../utils/generateSlides";

const HotProducts = () => {
  // CREATE product cards[] for slider, from Mock products object
  /* 
  I used a method that generates elements for the slider based on a given number. 
  This is necessary in order not to create arrays of 12 or 9 elements, 
  thereby maintaining the compactness of the mockRewievs and mockProducts files. 
  One reference is enough to create a set of sliders
  
  for a real case it will be enough to do: 
      sliderContent = data.map(item=> <ReactElement card={item}/>)
  */

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
