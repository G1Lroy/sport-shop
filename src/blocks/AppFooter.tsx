import HeaderNav from "../components/HeaderNav";
import ListDrawer from "../components/ListDrawer";
import { menuItems } from "./AppHeader";
import tgIcon from "./../assets/icons/tg.svg";
import watsupIcon from "./../assets/icons/watsup.svg";
import instIcon from "./../assets/icons/inst.svg";

const contactList = ["098 900 09 09", "Пн - Пт 09:00 - 21:00", "Пн - Пт 09:00 - 21:00"];
const customersInfoList = ["Оплата і доставка", "Повернення", "Питання та відповіді"];
const accountList = ["Мої дані", "Історія замовлень", "Улюблені", "Розсилки"];
const aboutList = ["Про нас", "Новини", "Стати партнером", "Угода користувача"];
const social = [tgIcon, watsupIcon, instIcon];

const AppFooter = () => {
  return (
    <footer>
      <div className="footer-main container">
        <div className="social">
          <ListDrawer listTitleText="Контакт - центр" list={contactList} variant="no-links" />
          <ListDrawer listTitleText="" list={social} variant="images" />
        </div>
        <ListDrawer listTitleText="Покупцям" list={customersInfoList} />
        <ListDrawer listTitleText="Особистий кабінет" list={accountList} />
        <ListDrawer listTitleText="Про компанію" list={aboutList} />
      </div>
      <div className="footer-external">
        <div className="container">
          <HeaderNav menuItems={menuItems} />
          <p className="footer-company">© 2022 — 2023 IGNAT. Усі права захищені.</p>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
