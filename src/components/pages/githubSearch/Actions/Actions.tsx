import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";
import Search from "../../../reusable-ui/Search";
import EditPanel from "./EditPanel/EditPanel";

import "./actions.css";

function Actions() {
  const { isEditMode, searchValue, handleSearch } = useContext(SearchContext);

  return (
    <div data-testid="actions-section" className="actions-section">
      <Search onChange={handleSearch} value={searchValue} />
      {isEditMode && <EditPanel />}
    </div>
  );
}

export default Actions;
