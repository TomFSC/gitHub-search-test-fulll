import { MouseEventHandler } from "react";
interface ButtonProps {
  className: string;
  label: string | JSX.Element;
  onClick?: MouseEventHandler;
  Icon?: JSX.Element;
}

function Button({ className, label, onClick, Icon }: ButtonProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
      {Icon && Icon}
    </button>
  );
}

export default Button;
