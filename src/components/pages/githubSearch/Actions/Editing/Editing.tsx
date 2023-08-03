import { ChangeEventHandler, MouseEventHandler } from "react";
import "./editing.css";
import Checkbox from "../../../../reusable-ui/Checkbox";
import { getActionsIcons } from "./actionsIconsConfig";
import Icons from "./Icons";

interface EditingProps {
  nbOfSelectedUsers: number;
  onChange: ChangeEventHandler;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
  isAllChecked: boolean;
}

function Editing({
  nbOfSelectedUsers,
  onChange,
  onDelete,
  onDuplicate,
  isAllChecked,
}: EditingProps) {
  const actionsIcons = getActionsIcons(onDuplicate, onDelete);
  return (
    <div className="editing">
      <div className="check-all">
        <Checkbox onChange={onChange} checked={isAllChecked} />
        <div className="selected-users-count">
          <span className="count">{nbOfSelectedUsers}</span>{" "}
          {nbOfSelectedUsers > 1 ? "elements selected" : "element selected"}
        </div>
      </div>
      <Icons actionsIcons={actionsIcons} />
    </div>
  );
}

export default Editing;
