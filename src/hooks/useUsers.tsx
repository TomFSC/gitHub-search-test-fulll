import { useState } from "react";

import { findObjectById, isEmptyArray, removeByIds } from "../helpers/array";
import { Id, User } from "../types/users";

export const useUsers = (
  usersIdsSelected: Id[],
  handleClearSearchValue: Function,
  handleResetIdsSelected: Function
) => {
  const [users, setUsers] = useState<User[] | null | []>([]);

  const handleDuplicateUsers = () => {
    if (!users) return;
    const duplicatedItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicatedItems]);
  };

  const handleDeleteUsers = () => {
    if (!users) return;
    const newUsers = removeByIds(users, usersIdsSelected);
    const isNewUsersEmpty = isEmptyArray(newUsers);

    if (isNewUsersEmpty) handleClearSearchValue();

    setUsers(newUsers);
    handleResetIdsSelected();
  };

  return {
    users,
    setUsers,
    handleDuplicateUsers,
    handleDeleteUsers,
  };
};
