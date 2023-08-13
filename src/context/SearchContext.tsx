import { PropsWithChildren, createContext, useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useUsers } from "../hooks/useUsers";
import { useEditPanel } from "../hooks/useEditPanel";

import { SearchContextValue } from "../types/context";
import { useSelectedUsers } from "../hooks/useSelectedUsers";
import { useFetchUsers } from "../hooks/useFetchUsers";

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
});

export function SearchContextProvider(props: PropsWithChildren) {
  const { searchValue, setSearchValue, handleChange, handleClearSearchValue } =
    useSearch();
  const debouncedValue = useDebounce(searchValue);
  const {
    usersIdsSelected,
    setUsersIdsSelected,
    handleToggleAllUsers,
    handleCheckOneUser,
  } = useSelectedUsers();
  const { isEditMode, handleToggleEditMode } = useEditPanel();
  const { users, setUsers, handleDeleteUsers, handleDuplicateUsers } = useUsers(
    usersIdsSelected,
    setSearchValue,
    setUsersIdsSelected
  );
  const { error, fetchUsers } = useFetchUsers(setUsers);

  useEffect(() => {
    fetchUsers(debouncedValue);
  }, [debouncedValue]);

  return (
    <SearchContext.Provider
      value={{
        debouncedValue,
        users,
        isEditMode,
        handleToggleEditMode,
        searchValue,
        handleChange,
        handleClearSearchValue,
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
