import { useEffect } from "react";
import Header from "./Header/Header";
import "./searchPage.css";
import useDebounce from "../../../hooks/useDebounce";
import Actions from "./Actions/Actions";
import SearchResult from "./SearchResult/SearchResult";
import { useUsers } from "../../../hooks/useUsers";
import { useEditMode } from "../../../hooks/useEditMode";
import { useSearch } from "../../../hooks/useSearch";

import { useActions } from "../../../hooks/useActions";
import { useSelect } from "../../../hooks/useSelect";
import { User } from "../../../types/users";

function SearchPage() {
  const { search, handleSearch } = useSearch();
  const debouncedValue = useDebounce(search);
  const { users, error, fetchUsers } = useUsers();
  const { isEditMode, handleEditMode } = useEditMode();
  const {
    usersSelected,
    // checkIfAllUsersSelected,
    handleToggleAllUsers,
    handleCheckOne,
  } = useSelect(users as User[]);
  const { handleDelete, handleDuplicate } = useActions();

  useEffect(() => {
    if (isEditMode) {
      handleToggleAllUsers();
    }
  }, []);

  useEffect(() => {
    fetchUsers(debouncedValue);
  }, [debouncedValue]);

  return (
    <div data-testid="main-container" className="container">
      <Header onClick={handleEditMode} isEditMode={isEditMode} />
      <Actions
        nbOfSelectedUsers={usersSelected?.length}
        onCheckAll={handleToggleAllUsers}
        onDuplicate={handleDuplicate}
        onDelete={handleDelete}
        handleChange={handleSearch}
        value={search}
        isEditMode={isEditMode}
        isAllChecked={true}
      />
      {error ? (
        <div data-testid="error-msg">
          <h1 style={{ color: "red", fontSize: 25 }}>{error}</h1>
        </div>
      ) : (
        <SearchResult
          usersSelected={usersSelected}
          onCheckOne={handleCheckOne}
          users={users}
          isEditMode={isEditMode}
        />
      )}
    </div>
  );
}

export default SearchPage;
