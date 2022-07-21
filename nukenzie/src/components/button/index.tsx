import React, { ButtonHTMLAttributes } from "react";
import StyledButton from "./style";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  tipo: "rosa" | "cinza";
  tamanho?: string | "50px";
  texto: string | "50";
}

const Button: React.FC<ButtonProps> = ({ texto, ...props }) => {
  return <StyledButton {...props}>{texto}</StyledButton>;
};

export default Button;
