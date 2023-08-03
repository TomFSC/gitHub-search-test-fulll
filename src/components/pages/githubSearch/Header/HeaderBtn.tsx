import { MouseEventHandler } from "react";

interface HeaderBtnProps {
  className: string;
  label: string;
  onClick: MouseEventHandler;
}

function HeaderBtn({ className, label, onClick }: HeaderBtnProps) {
  return (
    <button className={className} onClick={onClick}>
      {label}
    </button>
  );
}

export default HeaderBtn;
