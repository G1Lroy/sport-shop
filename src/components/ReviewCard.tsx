import { ReviewT } from "../types";
import RatingDrawer from "./RaitingDrawer";

type ReviewCardProps = {
  card: ReviewT;
};

const ReviewCard = ({ card }: ReviewCardProps) => {

  return (
    <div className="review">
      <div className="wrapper">
        <img className="review-avatar" src={card.avatar} title={card.userName} alt={card.userName} />
        <div>
          <div className="review-raiting">
            {/*card.raiting*/}
            <RatingDrawer rating={Math.floor(Math.random() * 5)} />
          </div>
          <div className="review-user-name">{card.userName}</div>
        </div>
      </div>
      <p className="review-text">{card.text}</p>
    </div>
  );
};

export default ReviewCard;
