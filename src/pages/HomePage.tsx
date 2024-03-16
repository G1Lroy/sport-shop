import SliderComponent from "../components/SliderComponent";
import HotProducts from "../blocks/HotProducts";
import CataloguePrewiev from "../blocks/CataloguePreview";
import SaleSubscribe from "../blocks/SaleSubscribe";
import CustomerReviews from "../blocks/CustomerReviews";

import { mainSliderImages, mainSliderSetting } from "../constans/mainSlider";
import { mockProducts, productsSliderSettings } from "../constans/productSlider";



const HomePage = () => {
  return (
    <>
      <div className="slider-wrapper-full">
        <SliderComponent content={mainSliderImages} settings={mainSliderSetting} />
      </div>
      <div className="container">
        <CataloguePrewiev />
        <HotProducts cards={mockProducts} sliderSettings={productsSliderSettings} />
        <SaleSubscribe />
        <CustomerReviews />
      </div>
    </>
  );
};

export default HomePage;
