import { PropsWithChildren, useEffect } from "react";
import { SearchContext } from "./SearchContext";
import { useMediaQuery } from "../hooks/useMediaQueries";
import { useSearch } from "../hooks/useSearch";
import { useDebounce } from "../hooks/useDebounce";
import { useUsersIdsSelected } from "../hooks/useUsersIdsSelected";
import { useEditPanel } from "../hooks/useEditPanel";
import { useUsers } from "../hooks/useUsers";
import { useFetchUsers } from "../api/hooks/useFetchUsers";
import { MOBILE_BREAKPOINT } from "../ts/constants";

export function SearchContextProvider(props: PropsWithChildren) {
  const isMobile = useMediaQuery(MOBILE_BREAKPOINT);

  const { searchValue, handleChange, handleClearSearchValue } = useSearch();
  const debouncedValue = useDebounce(searchValue);
  const {
    usersIdsSelected,
    handleToggleAllUsers,
    handleCheckOneUser,
    handleResetIdsSelected,
  } = useUsersIdsSelected();
  const { isEditMode, handleToggleEditMode } = useEditPanel();
  const { users, setUsers, handleDeleteUsers, handleDuplicateUsers } = useUsers(
    handleClearSearchValue,
    handleResetIdsSelected
  );
  const { error, fetchUsers } = useFetchUsers(setUsers, handleResetIdsSelected);

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
        isMobile,
      }}
    >
      {props.children}
    </SearchContext.Provider>
  );
}
