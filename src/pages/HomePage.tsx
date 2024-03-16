import SliderComponent from "../components/SliderComponent";
import CataloguePrewiev from "../blocks/CataloguePreview";
import HotProducts from "../blocks/HotProducts";
import SaleSubscribe from "../blocks/SaleSubscribe";
import CustomerReviews from "../blocks/CustomerReviews";
import sliderImage from "./../assets/slider-image.jpg";
import { ReactNode } from "react";
import { PrevArrow } from "../components/slider-parts/PrevArrow";
import { NextArrow } from "../components/slider-parts/NextArrow";

const mainSliderImages = [sliderImage, sliderImage, sliderImage];
const mainSliderSetting = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: <PrevArrow />,
  nextArrow: <NextArrow />,
  appendDots: (dots: ReactNode) => (
    <div
      style={{
        bottom: 20,
      }}
    >
      <ul style={{ margin: "0px" }}> {dots} </ul>
    </div>
  ),
  customPaging: () => (
    <div
      style={{
        borderRadius: 5,
        width: 15,
        height: 3,
        background: "#626262",
      }}
    ></div>
  ),
};

const HomePage = () => {
  return (
    <>
      <SliderComponent content={mainSliderImages} settings={mainSliderSetting} />
      <div className="container">
        <CataloguePrewiev />
        <HotProducts />
        <SaleSubscribe />
        <CustomerReviews />
      </div>
    </>
  );
};

export default HomePage;
