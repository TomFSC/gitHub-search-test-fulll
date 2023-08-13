import { ClassNames } from "../../../../../ts/constants";
import EditOptions from "./EditOptions";

import SelectUsers from "./SelectUsers/SelectUsers";
import "./editPanel.css";

function EditPanel() {
  return (
    <div className={ClassNames.EDIT_PANEL}>
      <SelectUsers />
      <EditOptions />
    </div>
  );
}

export default EditPanel;
