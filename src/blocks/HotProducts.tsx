import { Settings } from "react-slick";
import ProductCard from "../components/ProductCard";
import SliderComponent from "../components/SliderComponent";
import { useState } from "react";
import { CardT } from "../types";

type HotProductsProps = {
  cards: CardT[];
  sliderSettings: Settings;
};

const HotProducts = ({ cards, sliderSettings }: HotProductsProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  // CREATE product cards[] for slider, from Mock products object
  const sliderContent = cards.map((card) => <ProductCard card={card} />);
  
  // Update curr page after scrol slide
  const afterChange = (currentSlide: number) => setCurrentPage(Math.floor(currentSlide / 3) + 1);
  const displayPagination = () => `${currentPage} / ${cards.length / 3}`;

  return (
    <div className="hot-products">
      <h3>Найгарячіші товари</h3>
      <div className="pagination">{displayPagination()}</div>
      <div className="slider-wrapper-products">
        <SliderComponent content={sliderContent} settings={{ ...sliderSettings, afterChange }} />
      </div>
    </div>
  );
};

export default HotProducts;
