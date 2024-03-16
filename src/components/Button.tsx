import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  variant: "dark" | "bright";
}

const Button = ({ text, variant, ...props }: ButtonProps) => {
  return (
    <button className={`general-button ${variant}`} {...props}>
      {text}
    </button>
  );
};

export default Button;
