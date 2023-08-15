import { ChangeEventHandler } from "react";

import "./Checkbox.css";
import { InputTypes } from "../../../ts/constants";

interface CheckboxProps {
  className?: string;
  onChange: ChangeEventHandler;
  checked: boolean;
}

function Checkbox({ className, onChange, checked }: CheckboxProps) {
  return (
    <input
      className={className}
      type={InputTypes.CHECKBOX}
      onChange={onChange}
      checked={checked}
    />
  );
}

export default Checkbox;
