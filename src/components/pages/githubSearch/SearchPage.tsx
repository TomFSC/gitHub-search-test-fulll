import { ChangeEvent, useEffect, useState } from "react";
import Header from "./Header/Header";
import "./searchPage.css";
import useDebounce from "../../../hooks/useDebounce";
import Actions from "./Actions/Actions";
import {
  differenceBetweenArrays,
  filterById,
  findObjectById,
} from "./helpers/array";
import { Id, User } from "../../../types/users";
import SearchResult from "./SearchResult/SearchResult";

function SearchPage() {
  const [users, setUsers] = useState<User[] | undefined | []>([]);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [userSearched, setUserSearched] = useState<string>("");
  const [usersSelected, setUsersSelected] = useState<Id[]>([]);
  const [isAllChecked, setIsAllChecked] = useState<boolean>(false);
  const [error, setError] = useState<null | string>(null);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event?.target;
    setUserSearched(value);
  };

  const onCheckAll = () => {
    if (!users) return;
    if (isAllChecked) {
      setUsersSelected([]);
      setIsAllChecked(!isAllChecked);
      return;
    }
    const newArray = users.map((user) => {
      return user.id;
    });
    setUsersSelected(newArray);
    setIsAllChecked(!isAllChecked);
  };

  const debouncedValue = useDebounce(userSearched);

  const checkIfAllSelected = () => {
    setIsAllChecked(
      usersSelected.length === users?.length && users?.length !== 0
    );
  };

  useEffect(() => {
    checkIfAllSelected();
  }, [usersSelected]);

  const getUsers = async () => {
    setError(null);
    if (userSearched === "") {
      setUsers([]);
      return;
    }
    const datas = await fetch(
      `https://api.github.com/search/users?q=${debouncedValue}`,
      {
        method: "GET",
      }
    );
    const response = await datas.json();
    if (response.message) {
      setError(response.message);
      setUsers([]);
      return;
    }
    if (response.items.length === 0) {
      setUsers(undefined);
      return;
    }
    setUsers(response.items);
  };

  useEffect(() => {
    getUsers();
  }, [debouncedValue]);

  const onCheckOne = (id: Id) => {
    if (usersSelected.includes(id)) {
      const newUsersSelected = filterById(usersSelected, id);

      setUsersSelected(newUsersSelected);
      return;
    }
    setUsersSelected([...usersSelected, id]);
    setIsAllChecked(false);
  };

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
    if (newUsers.length === 0) setUserSearched("");
    setUsers(newUsers);
    setUsersSelected([]);
    setIsAllChecked(false);
  };

  return (
    <div data-testid="main-container" className="container">
      <Header setIsEditMode={setIsEditMode} isEditMode={isEditMode} />
      <Actions
        isEditMode={isEditMode}
        nbOfSelectedUsers={usersSelected?.length}
        handleChange={handleChange}
        onCheckAll={onCheckAll}
        isAllChecked={isAllChecked}
        value={userSearched}
        onDuplicate={onDuplicate}
        onDelete={onDelete}
      />
      {error ? (
        <div>
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
