import { useEffect } from "react";
import Header from "./Header/Header";
import "./searchPage.css";
import useDebounce from "../../../hooks/useDebounce";
import Actions from "./Actions/Actions";
import SearchResult from "./SearchResult/SearchResult";
import { useUsers } from "../../../hooks/useUsers";
import { useEditPanel } from "../../../hooks/useEditPanel";
import { useSearch } from "../../../hooks/useSearch";

import { useActions } from "../../../hooks/useActions";
import { User } from "../../../types/users";

function SearchPage() {
  const { search, handleSearch } = useSearch();
  const debouncedValue = useDebounce(search);
  const { users, error, fetchUsers } = useUsers();
  const { isEditMode, handleEditMode } = useEditPanel(users as User[]);
  const { usersIdsSelected, handleToggleAllUsers, handleCheckOneUser } =
    useEditPanel(users as User[]);
  const { handleDelete, handleDuplicate } = useActions();

  useEffect(() => {
    fetchUsers(debouncedValue);
  }, [debouncedValue]);
  //utiliser context
  return (
    <div data-testid="main-container" className="container">
      <Header onClick={handleEditMode} isEditMode={isEditMode} />
      <Actions
        onCheckAll={handleToggleAllUsers}
        onDuplicate={handleDuplicate}
        onDelete={handleDelete}
        onChange={handleSearch}
        searchValue={search}
        isEditMode={isEditMode}
        users={users as User[]}
        usersIdsSelected={usersIdsSelected}
      />
      {error ? (
        <div data-testid="error-msg">
          <h1 style={{ color: "red", fontSize: 25 }}>{error}</h1>
        </div>
      ) : (
        <SearchResult
          usersIdsSelected={usersIdsSelected}
          onCheckOneUser={handleCheckOneUser}
          users={users}
          isEditMode={isEditMode}
        />
      )}
    </div>
  );
}

export default SearchPage;
