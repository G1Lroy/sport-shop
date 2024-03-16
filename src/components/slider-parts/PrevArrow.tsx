import arrow from "./../../assets/arrow.svg";
export const PrevArrow = (props: any) => {
  const { className, onClick, style } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        zIndex: 100,
        left: "50px",
      }}
      onClick={onClick}
    >
      <img src={arrow} />
    </div>
  );
};
