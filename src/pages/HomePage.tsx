import Slider from "../components/Slider";
import CataloguePrewiev from "../blocks/CataloguePreview";
import HotProducts from "../blocks/HotProducts";
import SaleSubscribe from "../blocks/SaleSubscribe";
import CustomerReviews from "../blocks/CustomerReviews";

type Props = {};

const HomePage = (props: Props) => {
  return (
    <>
      <Slider />
      <CataloguePrewiev />
      <HotProducts />
      <SaleSubscribe />
      <CustomerReviews />
    </>
  );
};

export default HomePage;
