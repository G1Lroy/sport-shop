import logo from "./../assets/Logo.svg";
import search from "./../assets/search.svg";
import heart from "./../assets/heart.svg";
import bag from "./../assets/bag.svg";

const menuItems = [
  { link: "#", title: "Новинки" },
  { link: "#", title: "Чоловіки" },
  { link: "#", title: "Жінки" },
  { link: "#", title: "Аксесуари" },
  { link: "#", title: "Акції" },
];

const AppHeader = () => {
  return (
    <header className="header">
      <div className="header-external">
        <div className="container">
          <div className="header-info">
            <div className="header-left">
              <a href="tel:098 900 09 09">098 900 09 09</a>
              <span className="divider"></span>
              <a href="#">Допомога</a>
            </div>
            <div className="header-right">
              <a href="#">Увійти</a>
              <span className="divider">/</span>
              <a href="#">Зареєструватися</a>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <menu className="header-menu">
          <a href="#">
            <img className="logo" src={logo} alt="Company logo" />
          </a>

          <nav>
            <ul className="nav">
              {menuItems.map((item) => (
                <li key={item.title}>
                  <a href={item.link}>{item.title}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="search">
            <form onSubmit={(e) => e.preventDefault()}>
              <button type="submit">
                <img src={search} />
              </button>
              <input type="text" />
            </form>
            <img src={heart} />
            <img src={bag} />
          </div>
        </menu>
      </div>
    </header>
  );
};

export default AppHeader;
