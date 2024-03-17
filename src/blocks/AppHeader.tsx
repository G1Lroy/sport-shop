import logo from "./../assets/icons/Logo.svg";

import heart from "./../assets/icons/heart.svg";
import bag from "./../assets/icons/bag.svg";
import SearchForm from "../components/SearchForm";
import HeaderNav from "../components/HeaderNav";

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

          <HeaderNav menuItems={menuItems} />

          <div className="search">
            <SearchForm />
            <img src={heart} />
            <img src={bag} />
          </div>
        </menu>
      </div>
    </header>
  );
};

export default AppHeader;
