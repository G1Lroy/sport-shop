export const CustomArrow = (props: any) => {
  const { className, onClick, style, arrow } = props;
  return (
    <div className={className} style={style} onClick={onClick}>
      <img src={arrow} />
    </div>
  );
};
