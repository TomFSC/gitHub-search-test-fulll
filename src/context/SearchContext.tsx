import { createContext } from "react";
import { SearchContextValue } from "../types/context";

export const SearchContext = createContext<SearchContextValue>({
  debouncedValue: "",
  users: [],
  isEditMode: false,
  handleToggleEditMode: () => {},
  searchValue: "",
  handleChange: () => {},
  handleClearSearchValue: () => {},
  usersIdsSelected: [],
  handleToggleAllUsers: () => {},
  handleCheckOneUser: () => {},
  handleDeleteUsers: () => {},
  handleDuplicateUsers: () => {},
  error: null,
  isMobile: false,
});
