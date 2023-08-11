import { MouseEventHandler } from "react";
interface ButtonProps {
  className: string;
  label: string | JSX.Element;
  onClick?: MouseEventHandler;
}

function Button({ className, label, onClick }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default Button;
