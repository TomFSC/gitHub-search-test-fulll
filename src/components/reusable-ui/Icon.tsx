import { MouseEventHandler } from "react";

interface IconsProps {
  className: string;
  onClick: MouseEventHandler;
}

function Icon({ className, onClick }: IconsProps) {
  return (
    <span key={className} onClick={onClick}>
      <i className={className}></i>
    </span>
  );
}

export default Icon;
