import { ChangeEventHandler } from "react";

import { InputTypes } from "../../../ts/constants";
import "./Input.css";

interface InputProps {
  className: string;
  placeholder: string;
  onChange: ChangeEventHandler;
  value: string;
}

function Input({ className, placeholder, onChange, value }: InputProps) {
  return (
    <input
      className={className}
      type={InputTypes.TEXT}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default Input;
