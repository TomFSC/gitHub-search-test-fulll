import { MouseEventHandler } from "react";
import HeaderBtn from "./HeaderBtn";
import "./header.css";

interface HeaderProps {
  isEditMode: boolean;
  onClick: MouseEventHandler;
}

function Header({ isEditMode, onClick }: HeaderProps) {
  return (
    <div data-testid="header" className="header">
      <h1>GitHub Search</h1>
      <HeaderBtn
        className={isEditMode ? "header-btn active" : "header-btn"}
        label="Edit Mode"
        onClick={onClick}
      />
    </div>
  );
}

export default Header;
