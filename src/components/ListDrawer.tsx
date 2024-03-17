type ListDrawerProps = {
  list: string[];
  listTitleText: string;
  variant?: "no-links" | "images";
};

const ListDrawer = ({ list, listTitleText, variant }: ListDrawerProps) => {
  
  const renderListItem = (listItem: string, variant: "no-links" | "images") => {
    switch (variant) {
      case "no-links":
        return listItem;
      case "images":
        return (
          <a href="#!">
            <img src={listItem} alt={listItem} />
          </a>
        );
      default:
        return <a href="#!">{listItem}</a>;
    }
  };

  return (
    <div className="drawer">
      <p className="drawer-title">{listTitleText}</p>
      <ul className={`drawer-list ${variant ?? ""}`}>
        {list.map((listItem) => (
          <li className="drawer-list-item" title={variant !== "images" ? listItem : "Social"} key={listItem}>
            {renderListItem(listItem, variant!)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListDrawer;
