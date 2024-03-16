import { CardT } from "../types";

type ProductCardProps = {
  card: CardT;
};

const ProductCard = ({ card }: ProductCardProps) => {
  return (
    <div className="card">
      <img src={card.img} alt={card.title} />
      <div className="card-description">
        <h3 className="card-title">{card.title}</h3>
        <p className="card-colors">{card.specific}</p>
        <p className="card-useability">{card.useability}</p>
        <p className="card-price">{card.price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
