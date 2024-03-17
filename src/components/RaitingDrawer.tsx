

type RatingDrawerProps = {
  rating: number;
};
//  download error for star icons from figma, i use symbols

const RatingDrawer = ({ rating }: RatingDrawerProps) => {
  const roundedRating = Math.round(rating);
  
  const stars = [];
  for (let i = 0; i < 5; i++) {
    if (i < roundedRating) {
      stars.push(<span key={i}>&#9733;</span>); // Full
    } else {
      stars.push(<span key={i}>&#9734;</span>); // Empty
    }
  }
  
  return <div>{stars}</div>;
};

export default RatingDrawer;
