import "./header.css";

function Header({ onClick, isEditMode }: any) {
  return (
    <div className="header">
      <h1>GitHub Search</h1>
      <button onClick={onClick}>{isEditMode ? "X" : "EditMode"}</button>
    </div>
  );
}

export default Header;
