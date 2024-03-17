import SubscribeForm from "../components/SubscribeForm";

const SaleSubscribe = () => {
  return (
    <div className="subscribe">
      <div className="subscribe-inner">
        <h2 className="subscribe-title">Спіймай всі акції!</h2>
        <p className="subscribe-text">
          Підписуйся на Email розсилку і отримуй інформацію про всі акції, які будуть з`влятись у нашому магазині. А у
          нас їх багато :D
        </p>
        <SubscribeForm />
      </div>
    </div>
  );
};

export default SaleSubscribe;
