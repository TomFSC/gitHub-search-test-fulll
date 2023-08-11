import { ChangeEventHandler, MouseEventHandler } from "react";
import "./actions.css";
import Search from "./Search/Search";
import Editing from "./Editing/Editing";
import { Id, User } from "../../../../types/users";

export interface ActionsProps {
  onCheckAll: ChangeEventHandler;
  onDuplicate: MouseEventHandler;
  onDelete: MouseEventHandler;
  onChange: ChangeEventHandler;
  searchValue: string;
  isEditMode: boolean;
  usersIdsSelected: Id[];
  users: User[];
}

function Actions({
  onCheckAll,
  onDuplicate,
  onDelete,
  onChange,
  searchValue,
  isEditMode,
  usersIdsSelected,
  users,
}: ActionsProps) {
  const areAllUSersChecked =
    usersIdsSelected.length === users?.length && users?.length !== 0;
  return (
    <div data-testid="actions-section" className="actions-section">
      <Search onChange={onChange} value={searchValue} />

      {isEditMode && (
        <Editing
          nbOfSelectedUsers={usersIdsSelected.length}
          onChange={onCheckAll}
          onDelete={onDelete}
          onDuplicate={onDuplicate}
          isAllChecked={areAllUSersChecked}
        />
      )}
    </div>
  );
}

export default Actions;
