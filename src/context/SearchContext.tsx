import { PropsWithChildren, createContext, useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useUsers } from "../hooks/useUsers";
import { useEditPanel } from "../hooks/useEditPanel";

import { SearchContextValue } from "../types/context";
import { useSelectedUsers } from "../hooks/useSelectedUsers";

export const SearchContext = createContext<SearchContextValue>({
  debouncedValue: "",
  users: [],
  isEditMode: false,
  handleEditMode: () => {},
  searchValue: "",
  handleChange: () => {},
  usersIdsSelected: [],
  handleToggleAllUsers: () => {},
  handleCheckOneUser: () => {},
  handleDeleteUsers: () => {},
  handleDuplicateUsers: () => {},
  error: null,
});

export function SearchContextProvider(props: PropsWithChildren) {
  const { searchValue, setSearchValue, handleChange } = useSearch();
  const {
    usersIdsSelected,
    setUsersIdsSelected,
    handleToggleAllUsers,
    handleCheckOneUser,
  } = useSelectedUsers();
  const debouncedValue = useDebounce(searchValue);
  const { isEditMode, handleEditMode } = useEditPanel();
  const { users, error, fetchUsers, handleDeleteUsers, handleDuplicateUsers } =
    useUsers(usersIdsSelected, setSearchValue, setUsersIdsSelected);

  useEffect(() => {
    fetchUsers(debouncedValue);
  }, [debouncedValue]);

  return (
    <SearchContext.Provider
      value={{
        debouncedValue,
        users,
        isEditMode,
        handleEditMode,
        searchValue,
        handleChange,
        usersIdsSelected,
        handleToggleAllUsers,
        handleCheckOneUser,
        handleDeleteUsers,
        handleDuplicateUsers,
        error,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
