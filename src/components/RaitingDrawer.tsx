type RatingDrawerProps = {
  rating: number;
};

const RatingDrawer = ({ rating }: RatingDrawerProps) => {
  const roundedRating = Math.round(rating);
  const maxStars = 5;
  const stars = [];
  for (let i = 0; i < maxStars; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i}>&#9733;</span>); // Full
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty
    }
  }

  return <div>{stars}</div>;
};

export default RatingDrawer;
