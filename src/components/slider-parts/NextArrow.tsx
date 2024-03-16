import arrow from "./../../assets/arrow.svg";
export const NextArrow = (props: any) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 100,
        right: "50px",
      }}
      onClick={onClick}
    >
      <img src={arrow} />
    </div>
  );
};
