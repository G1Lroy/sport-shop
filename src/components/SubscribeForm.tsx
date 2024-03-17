import Button from "./Button";

const SubscribeForm = () => {
  return (
    <form className="subscribe-form" onSubmit={(e) => e.preventDefault()}>
      <input placeholder="ВВЕДІТЬ" type="email" />
      <Button type="submit" text="Підписатись" variant="bright" />
    </form>
  );
};

export default SubscribeForm;
