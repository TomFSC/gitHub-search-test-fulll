import { ChangeEventHandler, MouseEventHandler } from "react";
import { Id, User } from "./users";

export interface SearchContextValue {
  debouncedValue: string;
  users: User[] | null | [];
  isEditMode: boolean;
  handleEditMode: MouseEventHandler;
  searchValue: string;
  handleSearch: ChangeEventHandler;
  usersIdsSelected: Id[];
  handleToggleAllUsers: ChangeEventHandler;
  handleCheckOneUser: (id: Id) => void;
  handleDelete: MouseEventHandler;
  handleDuplicate: MouseEventHandler;
  error: string | null;
}
