import "./topbar.css";

function TopBar({ onClick, isEditMode }: any) {
  return (
    <div className="topbar">
      GitHub Search
      <button onClick={onClick}>{isEditMode ? "X" : "EditMode"}</button>
    </div>
  );
}

export default TopBar;
