import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Search from "./Search/Search";
import EditPanel from "./EditPanel/EditPanel";

import { isNotEmptyString } from "../../../../helpers/string";
import "./actions.css";

function Actions() {
  const { isEditMode, searchValue, handleClearSearchValue } =
    useContext(SearchContext);

  const hasIcon = isNotEmptyString(searchValue);

  return (
    <section>
      <Search hasIcon={hasIcon} onClick={handleClearSearchValue} />
      {isEditMode && <EditPanel />}
    </section>
  );
}

export default Actions;
