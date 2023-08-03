import { ChangeEventHandler, MouseEventHandler } from "react";
import "./editing.css";
import Checkbox from "../../../../reusable-ui/Checkbox";

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
  return (
    <div className="editing">
      <div className="check-all">
        <Checkbox onChange={onChange} checked={isAllChecked} />
        <div className="selected-users-count">
          <span className="count">{nbOfSelectedUsers}</span>{" "}
          {nbOfSelectedUsers > 1 ? "elements selected" : "element selected"}
        </div>
      </div>
      <div className="actions">
        <span onClick={onDuplicate}>
          <i className="fa-regular fa-copy"></i>
        </span>
        <span onClick={onDelete}>
          <i className="fa-regular fa-trash-can"></i>
        </span>
      </div>
    </div>
  );
}

export default Editing;
