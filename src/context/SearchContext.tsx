import { PropsWithChildren, createContext, useEffect } from "react";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useUsers } from "../hooks/useUsers";
import { useEditPanel } from "../hooks/useEditPanel";

import { Id } from "../types/users";
import { SearchContextValue } from "../types/context";
import { removeByIds, findObjectById } from "../helpers/array";

export const SearchContext = createContext<SearchContextValue>({
  debouncedValue: "",
  users: [],
  isEditMode: false,
  handleEditMode: () => {},
  searchValue: "",
  handleSearch: () => {},
  usersIdsSelected: [],
  handleToggleAllUsers: () => {},
  handleCheckOneUser: () => {},
  handleDelete: () => {},
  handleDuplicate: () => {},
  error: null,
});

export function SearchContextProvider(props: PropsWithChildren) {
  const { searchValue, setSearchValue, handleSearch } = useSearch();
  const debouncedValue = useDebounce(searchValue);
  const { users, setUsers, error, fetchUsers } = useUsers();
  const {
    isEditMode,
    handleEditMode,
    usersIdsSelected,
    setUsersIdsSelected,
    handleToggleAllUsers,
    handleCheckOneUser,
  } = useEditPanel();

  useEffect(() => {
    fetchUsers(debouncedValue);
  }, [debouncedValue]);

  //deplacer handleDuplicate handleDelete ds useUsers
  const handleDuplicate = () => {
    if (!users) return;
    const duplicateItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
  };

  const handleDelete = () => {
    if (!users) return;
    const newUsers = removeByIds(users, usersIdsSelected);
    if (newUsers.length === 0) setSearchValue("");
    setUsers(newUsers);
    setUsersIdsSelected([]);
  };

  return (
    <SearchContext.Provider
      value={{
        debouncedValue,
        users,
        isEditMode,
        handleEditMode,
        searchValue,
        handleSearch,
        usersIdsSelected,
        handleToggleAllUsers,
        handleCheckOneUser,
        handleDelete,
        handleDuplicate,
        error,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
