import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Search from "../../../reusable-ui/Search";
import EditPanel from "./EditPanel/EditPanel";

import { USER_SEARCH_PLACEHOLDER } from "../../../../ts/constants";
import "./actions.css";

function Actions() {
  const { isEditMode, searchValue, handleSearch } = useContext(SearchContext);

  return (
    <section>
      <Search
        placeholder={USER_SEARCH_PLACEHOLDER}
        onChange={handleSearch}
        value={searchValue}
      />
      {isEditMode && <EditPanel />}
    </section>
  );
}

export default Actions;
