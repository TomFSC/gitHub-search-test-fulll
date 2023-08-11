import { MouseEventHandler } from "react";
import Button from "../../../reusable-ui/Button";
import "./header.css";

interface HeaderProps {
  isEditMode: boolean;
  onClick: MouseEventHandler;
}

function Header({ isEditMode, onClick }: HeaderProps) {
  return (
    <div data-testid="header" className="header">
      <h1>GitHub Search</h1>
      <Button
        className={isEditMode ? "header-btn active" : "header-btn"}
        label="Edit Mode"
        onClick={onClick}
      />
    </div>
  );
}

export default Header;
