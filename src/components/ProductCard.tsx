import { CardT } from "../types";
import like from "./../assets/icons/like.svg";

type ProductCardProps = {
  card: CardT;
};

const ProductCard = ({ card }: ProductCardProps) => {
  return (
    <div className="product">
      <img src={card.img} title={card.title} alt={card.title} />
      <button className="like-button">
        <img src={like} />
      </button>
      <div className="product-description">
        <h4 className="product-title">{card.title}</h4>
        <p className="product-useability">{card.useability}</p>
        <p className="product-colors">{card.specific}</p>
        <p className="product-price">{card.price} грн.</p>
      </div>
    </div>
  );
};

export default ProductCard;
