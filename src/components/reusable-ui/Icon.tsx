import { MouseEventHandler } from "react";

interface IconsProps {
  className: string;
  onClick: MouseEventHandler;
}

function Icon({ className, onClick }: IconsProps) {
  return (
    <span onClick={onClick}>
      <i className={className}></i>
    </span>
  );
}

export default Icon;
