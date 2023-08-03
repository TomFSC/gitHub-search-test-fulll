import { ChangeEventHandler, MouseEventHandler } from "react";
import "./editing.css";

interface EditingProps {
  nbOfSelectedUsers: number;
  onChange: ChangeEventHandler;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
  isChecked: boolean;
}

function Editing({
  nbOfSelectedUsers,
  onChange,
  onDelete,
  onDuplicate,
  isChecked,
}: EditingProps) {
  return (
    <div className="editing">
      <div className="check-all">
        <input type="checkbox" onChange={onChange} checked={isChecked} />
        <span>
          {nbOfSelectedUsers}{" "}
          {nbOfSelectedUsers > 1 ? "elements selected" : "element selected"}
        </span>
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
