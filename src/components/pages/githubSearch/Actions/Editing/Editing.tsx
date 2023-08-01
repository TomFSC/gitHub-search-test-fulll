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
  console.log("nbOfSelectedUsers :", nbOfSelectedUsers);
  return (
    <div className="editing">
      <input type="checkbox" onChange={onChange} checked={isChecked} />
      <span>
        {nbOfSelectedUsers}{" "}
        {nbOfSelectedUsers > 1 ? "elements selected" : "element selected"}
      </span>
      <div className="actions">
        <span onClick={onDuplicate}>Duplicate</span>
        <span onClick={onDelete}>Delete</span>
      </div>
    </div>
  );
}

export default Editing;
