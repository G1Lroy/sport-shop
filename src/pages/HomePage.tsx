import HotProducts from "../blocks/HotProducts";
import CataloguePrewiev from "../blocks/CataloguePreview";
import SaleSubscribe from "../blocks/SaleSubscribe";
import CustomerReviews from "../blocks/CustomerReviews";
import MainSlider from "../blocks/MainSlider";



const HomePage = () => {
  return (
    <>
      <MainSlider />
      <div className="container">
        <CataloguePrewiev />
        <HotProducts />
        <SaleSubscribe />
        <CustomerReviews />
      </div>
    </>
  );
};

export default HomePage;
