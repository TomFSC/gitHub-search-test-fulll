import { ChangeEventHandler, MouseEventHandler } from "react";
import { Id, User } from "./users";

export interface SearchContextValue {
  debouncedValue: string;
  users: User[] | null | [];
  isEditMode: boolean;
  handleEditMode: MouseEventHandler;
  searchValue: string;
  handleChange: ChangeEventHandler;
  usersIdsSelected: Id[];
  handleToggleAllUsers: Function;
  handleCheckOneUser: (id: Id) => void;
  handleDeleteUsers: MouseEventHandler;
  handleDuplicateUsers: MouseEventHandler;
  error: string | null;
}
