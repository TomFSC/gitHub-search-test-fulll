import { ChangeEventHandler, MouseEventHandler } from "react";
import "./actions.css";
import Search from "./Search/Search";
import Editing from "./Editing/Editing";

interface ActionsProps {
  isEditMode: boolean;
  nbOfSelectedUsers: number;
  handleChange: ChangeEventHandler;
  onCheckAll: ChangeEventHandler;
  isChecked: boolean;
  value: string;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
}

function Actions({
  isEditMode,
  nbOfSelectedUsers,
  handleChange,
  onCheckAll,
  isChecked,
  value,
  onDuplicate,
  onDelete,
}: ActionsProps) {
  return (
    <div className="search-section">
      <Search handleChange={handleChange} value={value} />

      {isEditMode && (
        <Editing
          nbOfSelectedUsers={nbOfSelectedUsers}
          onChange={onCheckAll}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          isChecked={isChecked}
        />
      )}
    </div>
  );
}

export default Actions;
