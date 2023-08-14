import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Title from "../../../reusable-ui/Title";
import Button from "../../../reusable-ui/Button";

import {
  Icons,
  HEADER_TITLE,
  Labels,
  ClassNames,
} from "../../../../ts/constants";
import "./header.css";

function Header() {
  const { isEditMode, handleToggleEditMode, isMobile } =
    useContext(SearchContext);

  const buttonIconClassName = isEditMode
    ? Icons.SOLID_RIGHT_FROM_BRACKET
    : Icons.SOLID_USER_PEN;
  const icon = <i className={buttonIconClassName}></i>;

  return (
    <header className={isMobile ? "header-small" : "header-large"}>
      <Title label={HEADER_TITLE} />
      <Button
        className={
          isEditMode
            ? ClassNames.HEADER_BUTTON_ACTIVE
            : ClassNames.HEADER_BUTTON
        }
        label={isMobile ? "" : Labels.HEADER_BUTTON}
        Icon={icon}
        onClick={handleToggleEditMode}
      />
    </header>
  );
}

export default Header;
