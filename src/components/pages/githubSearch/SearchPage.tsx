import { useEffect, useState } from "react";
import Header from "./Header/Header";
import "./searchPage.css";
import useDebounce from "../../../hooks/useDebounce";
import Actions from "./Actions/Actions";
import SearchResult from "./SearchResult/SearchResult";
import { useUsers } from "../../../hooks/useUsers";
import { useEditMode } from "../../../hooks/useEditMode";
import { useSearch } from "../../../hooks/useSearch";
import { Id } from "../../../types/users";
import {
  differenceBetweenArrays,
  filterById,
  findObjectById,
} from "./helpers/array";

function SearchPage() {
  const { search, handleSearch, setSearch } = useSearch();
  const debouncedValue = useDebounce(search);
  const { users, error, fetchUsers, setUsers } = useUsers();
  const {
    isEditMode,
    handleEditMode,
    usersSelected,
    checkIfAllSelected,
    onCheckAll,
    onCheckOne,
    setIsAllChecked,
    setUsersSelected,
  } = useEditMode();

  const onDuplicate = () => {
    if (!users) return;
    const duplicateItems = usersSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
    setIsAllChecked(false);
  };

  const onDelete = () => {
    if (!users) return;
    const newUsers = differenceBetweenArrays(users, usersSelected);
    if (newUsers.length === 0) setSearch("");
    setUsers(newUsers);
    setUsersSelected([]);
    setIsAllChecked(false);
  };

  useEffect(() => {
    checkIfAllSelected();
  }, [usersSelected]);

  useEffect(() => {
    fetchUsers(debouncedValue);
  }, [debouncedValue]);

  return (
    <div data-testid="main-container" className="container">
      <Header onClick={handleEditMode} isEditMode={isEditMode} />
      <Actions
        nbOfSelectedUsers={usersSelected?.length}
        onCheckAll={onCheckAll}
        onDuplicate={onDuplicate}
        onDelete={onDelete}
        handleChange={handleSearch}
        value={search}
      />
      {error ? (
        <div data-testid="error-msg">
          <h1 style={{ color: "red", fontSize: 25 }}>{error}</h1>
        </div>
      ) : (
        <SearchResult
          usersSelected={usersSelected}
          onCheckOne={onCheckOne}
          users={users}
          isEditMode={isEditMode}
        />
      )}
    </div>
  );
}

export default SearchPage;
