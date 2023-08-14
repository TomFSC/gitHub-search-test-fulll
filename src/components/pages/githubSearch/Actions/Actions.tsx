import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Search from "../../../reusable-ui/Search";
import EditPanel from "./EditPanel/EditPanel";

import { ClassNames, USER_SEARCH_PLACEHOLDER } from "../../../../ts/constants";
import "./actions.css";

function Actions() {
  const {
    isEditMode,
    searchValue,
    handleChange,
    handleClearSearchValue,
    isMobile,
  } = useContext(SearchContext);

  return (
    <section>
      <Search
        className={
          isMobile
            ? ClassNames.SEARCH_CONTAINER_SMALL
            : ClassNames.SEARCH_CONTAINER_LARGE
        }
        placeholder={USER_SEARCH_PLACEHOLDER}
        onChange={handleChange}
        onClick={handleClearSearchValue}
        value={searchValue}
        hasIcon={true}
      />
      {isEditMode && <EditPanel />}
    </section>
  );
}

export default Actions;
