import { CardT } from "../types";
import like from "./../assets/icons/like.svg";

type ProductCardProps = {
  card: CardT;
};

const ProductCard = ({ card }: ProductCardProps) => {
  return (
    <div className="card">
      <img src={card.img} title={card.title} alt={card.title} />
      <button className="like-button">
        <img src={like} />
      </button>
      <div className="card-description">
        <h4 className="card-title">{card.title}</h4>
        <p className="card-useability">{card.useability}</p>
        <p className="card-colors">{card.specific}</p>
        <p className="card-price">{card.price} грн.</p>
      </div>
    </div>
  );
};

export default ProductCard;
