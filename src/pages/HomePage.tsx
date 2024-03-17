import HotProducts from "../blocks/HotProducts";
import CataloguePrewiev from "../blocks/CataloguePreview";
import SaleSubscribe from "../blocks/SaleSubscribe";
import CustomerReviews from "../blocks/CustomerReviews";
import MainSlider from "../blocks/MainSlider";

import { mainSliderImages, mainSliderSetting } from "../constans/mainSlider";
import { mockProducts, productsSliderSettings } from "../constans/productSlider";

const HomePage = () => {
  return (
    <>
      <MainSlider images={mainSliderImages} sliderSettings={mainSliderSetting} />
      <div className="container">
        <CataloguePrewiev />
        <HotProducts products={mockProducts} sliderSettings={productsSliderSettings} />
        <SaleSubscribe />
        <CustomerReviews />
      </div>
    </>
  );
};

export default HomePage;
