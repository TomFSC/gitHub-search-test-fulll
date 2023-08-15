import { useContext } from "react";
import { SearchContext } from "../../../../../context/SearchContext";
import EditOptions from "./EditOptions/EditOptions";
import SelectUsers from "./SelectUsers/SelectUsers";

import { ClassNames } from "../../../../../ts/constants";
import "./EditPanel.css";

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
