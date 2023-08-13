import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Title from "../../../reusable-ui/Title";
import Button from "../../../reusable-ui/Button";

import "./header.css";

function Header() {
  const { isEditMode, handleEditMode } = useContext(SearchContext);
  const buttonIconClassName = isEditMode
    ? "fa-solid fa-right-from-bracket"
    : "fa-solid fa-user-pen";

  return (
    <div data-testid="header" className="header">
      <Title label="GitHub Search" />
      <Button
        className={isEditMode ? "header-btn active" : "header-btn"}
        label={"Edit Mode"}
        Icon={<i className={buttonIconClassName}></i>}
        onClick={handleEditMode}
      />
    </div>
  );
}

export default Header;
