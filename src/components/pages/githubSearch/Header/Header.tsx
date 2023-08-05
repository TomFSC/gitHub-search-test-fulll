import { Dispatch, SetStateAction } from "react";
import HeaderBtn from "./HeaderBtn";
import "./header.css";

interface HeaderProps {
  isEditMode: boolean;
  setIsEditMode: Dispatch<SetStateAction<boolean>>;
}

function Header({ isEditMode, setIsEditMode }: HeaderProps) {
  const handleClick = () => {
    setIsEditMode(!isEditMode);
  };

  return (
    <div className="header">
      <h1>GitHub Search</h1>
      <HeaderBtn
        className={isEditMode ? "header-btn active" : "header-btn"}
        label="Edit Mode"
        onClick={handleClick}
      />
    </div>
  );
}

export default Header;
