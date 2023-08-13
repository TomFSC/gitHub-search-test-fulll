import { Dispatch, SetStateAction, useState } from "react";
import { Id, User } from "../types/users";

import { getUsers } from "../api/gitHubUsers";
import { findObjectById, isEmptyArray, removeByIds } from "../helpers/array";

export const useUsers = (
  usersIdsSelected: Id[],
  setSearchValue: Dispatch<SetStateAction<string>>,
  setUsersIdsSelected: Dispatch<SetStateAction<Id[]>>
) => {
  const [users, setUsers] = useState<User[] | null | []>([]);
  const [error, setError] = useState<null | string>(null);

  const fetchUsers = async (searchValueDebounced: string) => {
    setError(null);
    if (searchValueDebounced === "") {
      setUsers([]);
      return;
    }
    const response = await getUsers(searchValueDebounced);
    const isEmptyUsers = isEmptyArray(response);

    if (response.message) {
      setError(response.message);
      setUsers([]);
      return;
    }

    if (isEmptyUsers) {
      setUsers(null);
      return;
    }
    setUsers(response.items);
  };

  const handleDuplicateUsers = () => {
    if (!users) return;
    const duplicateItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
  };

  const handleDeleteUsers = () => {
    if (!users) return;
    const newUsers = removeByIds(users, usersIdsSelected);
    if (newUsers.length === 0) setSearchValue("");
    setUsers(newUsers);
    setUsersIdsSelected([]);
  };

  return {
    users,
    error,
    fetchUsers,
    setUsers,
    handleDuplicateUsers,
    handleDeleteUsers,
  };
};
