import { ChangeEventHandler, MouseEventHandler } from "react";
import Checkbox from "../../../../reusable-ui/Checkbox";
import EditOptions from "./EditOptions";

import { getActionsIcons } from "./actionsIconsConfig";
import "./editPanel.css";

interface EditPanelProps {
  nbOfSelectedUsers: number;
  onChange: ChangeEventHandler;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
  isAllChecked: boolean;
}

function EditPanel({
  nbOfSelectedUsers,
  onChange,
  onDelete,
  onDuplicate,
  isAllChecked,
}: EditPanelProps) {
  const actionsIcons = getActionsIcons(onDuplicate, onDelete);
  return (
    <div data-testid="edit-panel" className="edit-panel">
      <div className="check-all">
        <Checkbox onChange={onChange} checked={isAllChecked} />
        <div className="selected-users-count">
          <span data-testid="count" className="count">
            {nbOfSelectedUsers}{" "}
            {nbOfSelectedUsers > 1 ? "elements selected" : "element selected"}
          </span>
        </div>
      </div>
      <EditOptions actionsIcons={actionsIcons} />
    </div>
  );
}

export default EditPanel;
