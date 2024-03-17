type HeaderNavProps = {
  menuItems: { link: string; title: string }[];
};

const HeaderNav = ({ menuItems }: HeaderNavProps) => {
  return (
    <nav>
      <ul className="nav">
        {menuItems.map((item) => (
          <li key={item.title}>
            <a href={item.link}>{item.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default HeaderNav;
