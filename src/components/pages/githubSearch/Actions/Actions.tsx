import { ChangeEventHandler, MouseEventHandler } from "react";
import "./actions.css";
import Search from "./Search/Search";
import Editing from "./Editing/Editing";

export interface ActionsProps {
  nbOfSelectedUsers: number;
  onCheckAll: ChangeEventHandler;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
  handleChange: ChangeEventHandler;
  value: string;
  isEditMode: boolean;
  isAllChecked: boolean;
}

function Actions({
  nbOfSelectedUsers,
  onCheckAll,
  onDuplicate,
  onDelete,
  handleChange,
  value,
  isEditMode,
  isAllChecked,
}: ActionsProps) {
  return (
    <div data-testid="actions-section" className="actions-section">
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
