import EditOptions from "./EditOptions";

import "./editPanel.css";
import SelectUsers from "./SelectUsers/SelectUsers";

function EditPanel() {
  return (
    <div data-testid="edit-panel" className="edit-panel">
      <SelectUsers />
      <EditOptions />
    </div>
  );
}

export default EditPanel;
