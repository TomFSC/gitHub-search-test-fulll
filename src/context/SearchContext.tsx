import { PropsWithChildren, createContext } from "react";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useUsers } from "../hooks/useUsers";
import { useEditPanel } from "../hooks/useEditPanel";
import { useActions } from "../hooks/useActions";

import { User } from "../types/users";
import { SearchContextValue } from "../types/context";

export const SearchContext = createContext<SearchContextValue>({
  debouncedValue: "",
  fetchUsers: (param: string) => {},
});

export function SearchContextProvider(props: PropsWithChildren) {
  const { search, handleSearch } = useSearch();
  const debouncedValue = useDebounce(search);
  const { users, error, fetchUsers } = useUsers();
  const { isEditMode, handleEditMode } = useEditPanel(users as User[]);
  const { usersIdsSelected, handleToggleAllUsers, handleCheckOneUser } =
    useEditPanel(users as User[]);
  const { handleDelete, handleDuplicate } = useActions();

  return (
    <SearchContext.Provider value={{ debouncedValue, fetchUsers }}>
      {props.children}
    </SearchContext.Provider>
  );
}
