import { CustomArrow } from "../components/CustomArrow";
import { CardT } from "../types";
import product1 from "./../assets/products/product1.png";
import product2 from "./../assets/products/product2.png";
import product3 from "./../assets/products/product3.png";
import arrowSmall from "./../assets/icons/arrow-smal.svg";

export const mockProducts: CardT[] = [
  { img: product1, title: "Термобілизна для бодібілдерів", useability: "male", specific: 2, price: 4000 },
  { img: product2, title: "Майка для бодібілдерів", useability: "female", specific: 6, price: 1100 },
  { img: product3, title: "Ланцюжок для бодібілдерів", useability: "accessory", specific: "30 кг.", price: 2000 },
  { img: product1, title: "Термобілизна для бодібілдерів", useability: "male", specific: 2, price: 4000 },
  { img: product2, title: "Майка для бодібілдерів", useability: "female", specific: 6, price: 1100 },
  { img: product3, title: "Ланцюжок для бодібілдерів", useability: "accessory", specific: "30 кг.", price: 2000 },
  { img: product1, title: "Термобілизна для бодібілдерів", useability: "male", specific: 2, price: 4000 },
  { img: product2, title: "Майка для бодібілдерів", useability: "female", specific: 6, price: 1100 },
  { img: product3, title: "Ланцюжок для бодібілдерів", useability: "accessory", specific: "30 кг.", price: 2000 },
];
export const productsSliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: <CustomArrow arrow={arrowSmall} />,
  nextArrow: <CustomArrow arrow={arrowSmall} />,
  appendDots: () => <></>,
  afterChange: (currentSlide: number) => currentSlide,
};
