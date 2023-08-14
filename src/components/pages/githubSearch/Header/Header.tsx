import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Title from "../../../reusable-ui/Title";
import Button from "../../../reusable-ui/Button/Button";

import {
  Icons,
  HEADER_TITLE,
  Labels,
  ClassNames,
  EMPTY_STRING,
} from "../../../../ts/constants";
import "./Header.css";

function Header() {
  const { isEditMode, handleToggleEditMode, isMobile } =
    useContext(SearchContext);

  const buttonIconClassName = isEditMode
    ? Icons.SOLID_RIGHT_FROM_BRACKET
    : Icons.SOLID_USER_PEN;
  const icon = <i className={buttonIconClassName}></i>;

  return (
    <header
      className={isMobile ? ClassNames.HEADER_SMALL : ClassNames.HEADER_LARGE}
    >
      <Title label={HEADER_TITLE} />
      <Button
        className={isMobile ? ClassNames.BUTTON_SMALL : ClassNames.BUTTON_LARGE}
        label={isMobile ? EMPTY_STRING : Labels.HEADER_BUTTON}
        Icon={icon}
        onClick={handleToggleEditMode}
      />
    </header>
  );
}

export default Header;
