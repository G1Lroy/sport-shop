import Button from "../components/Button";
import preview from "./../assets/catalogue-preview.png";

const CataloguePreview = () => {
  return (
    <div className="preview">
      <div className="preview-typography">
        <h2>Ми знаємо, що сподобається вашим “великим” друзям!</h2>
        <p>Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію термобілизни “Big warm”</p>
        <Button text="До каталогу" variant="dark" />
      </div>
      <div className="preview-image">
        <img src={preview} />
      </div>
    </div>
  );
};

export default CataloguePreview;
