import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Button from "../../../reusable-ui/Button";

import "./header.css";

function Header() {
  const { isEditMode, handleEditMode } = useContext(SearchContext);
  return (
    <div data-testid="header" className="header">
      <h1>GitHub Search</h1>
      <Button
        className={isEditMode ? "header-btn active" : "header-btn"}
        label="Edit Mode"
        onClick={handleEditMode}
      />
    </div>
  );
}

export default Header;
