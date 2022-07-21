import React, { InputHTMLAttributes, useState } from "react";
import { StyledInput, Styledlabel } from "./style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  tamanho?: string | "50px";
}

const Input: React.FC<InputProps> = ({ label, tamanho, ...props }) => {
  const [value, setValue] = useState("");
  return (
    <Styledlabel>
      {value.length > 0 && label}
      <StyledInput
        {...props}
        placeholder={label}
        value={value}
        onChange={(e: any) => setValue(e.target.value)}
      />
    </Styledlabel>
  );
};

export default Input;
