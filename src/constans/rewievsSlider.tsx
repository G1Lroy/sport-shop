import { CustomArrow } from "../components/CustomArrow";
import { ReviewT } from "../types";
import arrowSmall from "./../assets/icons/arrow-smal.svg";
import userAvatar from "./../assets/avatar.jpg";

const mockText =
  "Дуже задоволений якістю обслуговування і самою продукцією. Купували термобілизну у подарунок, друзі...";
export const mockRewievs: ReviewT[] = [
  {
    avatar: userAvatar,
    raiting: 4,
    userName: "Жора Ремінгтон",
    text: mockText,
  },
];
export const rewievsSliderSettings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplaySpeed: 4000,
  slidesToShow: 4,
  slidesToScroll: 4,
  prevArrow: <CustomArrow arrow={arrowSmall} />,
  nextArrow: <CustomArrow arrow={arrowSmall} />,
  afterChange: (currentSlide: number) => currentSlide,
};
