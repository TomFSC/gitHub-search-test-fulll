import { useContext } from "react";
import { ClassNames } from "../../../../../ts/constants";
import EditOptions from "./EditOptions";

import SelectUsers from "./SelectUsers/SelectUsers";
import "./editPanel.css";
import { SearchContext } from "../../../../../context/SearchContext";

function EditPanel() {
  const { isMobile } = useContext(SearchContext);
  return (
    <div
      className={
        isMobile ? ClassNames.EDIT_PANEL_SMALL : ClassNames.EDIT_PANEL_LARGE
      }
    >
      <SelectUsers />
      <EditOptions />
    </div>
  );
}

export default EditPanel;
