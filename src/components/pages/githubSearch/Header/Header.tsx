import HeaderBtn from "./HeaderBtn";
import "./header.css";

function Header({ onClick, isEditMode }: any) {
  return (
    <div className="header">
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
