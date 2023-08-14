import { ChangeEventHandler, MouseEventHandler } from "react";
import { Id, User } from "./users";

export interface SearchContextValue {
  debouncedValue: string;
  users: User[] | null | [];
  isEditMode: boolean;
  handleToggleEditMode: MouseEventHandler;
  searchValue: string;
  handleChange: ChangeEventHandler;
  handleClearSearchValue: MouseEventHandler;
  usersIdsSelected: Id[];
  handleToggleAllUsers: Function;
  handleCheckOneUser: (id: Id) => void;
  handleDeleteUsers: Function;
  handleDuplicateUsers: Function;
  error: string | null;
  isMobile: boolean;
}
