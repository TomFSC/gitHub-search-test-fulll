import { MouseEventHandler, useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import Input from "../../../../reusable-ui/Input/Input";
import Icon from "../../../../reusable-ui/Icon";

import {
  ClassNames,
  Icons,
  USER_SEARCH_PLACEHOLDER,
} from "../../../../../ts/constants";
import "./Search.css";

interface SearchProps {
  onClick: MouseEventHandler;
  hasIcon: boolean;
}

function Search({ onClick, hasIcon }: SearchProps) {
  const { handleChange, searchValue, isMobile } = useContext(SearchContext);

  const searchContainerClassName = isMobile
    ? ClassNames.SEARCH_CONTAINER_SMALL
    : ClassNames.SEARCH_CONTAINER_LARGE;

  return (
    <div className={searchContainerClassName}>
      <Input
        className={ClassNames.SEARCH_INPUT}
        placeholder={USER_SEARCH_PLACEHOLDER}
        value={searchValue}
        onChange={handleChange}
      />
      {hasIcon && (
        <Icon className={Icons.SOLID_CIRCLE_XMARK} onClick={onClick} />
      )}
    </div>
  );
}

export default Search;
