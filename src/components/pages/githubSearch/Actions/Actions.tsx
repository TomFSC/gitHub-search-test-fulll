import { ChangeEventHandler, MouseEventHandler } from "react";
import "./actions.css";
import Search from "./Search/Search";
import Editing from "./Editing/Editing";

interface ActionsProps {
  isEditMode: boolean;
  nbOfSelectedUsers: number;
  handleChange: ChangeEventHandler;
  onCheckAll: ChangeEventHandler;
  isAllChecked: boolean;
  value: string;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
}

function Actions({
  isEditMode,
  nbOfSelectedUsers,
  handleChange,
  onCheckAll,
  isAllChecked,
  value,
  onDuplicate,
  onDelete,
}: ActionsProps) {
  return (
    <div className="actions-section">
      <Search handleChange={handleChange} value={value} />

      {isEditMode && (
        <Editing
          nbOfSelectedUsers={nbOfSelectedUsers}
          onChange={onCheckAll}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          isAllChecked={isAllChecked}
        />
      )}
    </div>
  );
}

export default Actions;
