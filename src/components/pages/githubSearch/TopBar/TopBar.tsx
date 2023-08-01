import "./topbar.css";

function TopBar({ onClick, isEditMode }: any) {
  return (
    <div className="topbar">
      <h1>GitHub Search</h1>
      <button onClick={onClick}>{isEditMode ? "X" : "EditMode"}</button>
    </div>
  );
}

export default TopBar;
