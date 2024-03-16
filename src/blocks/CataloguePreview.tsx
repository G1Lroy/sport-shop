import Button from "../components/Button";
import prewiev from "./../assets/catalogue-preview.png";



const CataloguePrewiev = () => {
  return (
    <div className="catalogue-prewiev">
      <div className="typography">
        <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
        <p>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
        <Button text="До каталогу" variant="dark" />
      </div>
      <div className="catalogue-image">
        <img src={prewiev} />
      </div>
    </div>
  );
};

export default CataloguePrewiev;
