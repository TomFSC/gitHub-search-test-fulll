import { ChangeEventHandler } from "react";

interface CheckboxProps {
  className?: string;
  onChange: ChangeEventHandler;
  checked: boolean;
}

function Checkbox({ className, onChange, checked }: CheckboxProps) {
  return (
    <input
      className={className}
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
  );
}

export default Checkbox;
