import { useState } from "react";

import { findObjectById, isEmptyArray, removeByIds } from "../helpers/array";
import { randomId } from "./helpers/randomId";
import { Id, User } from "../types/users";
import { EMPTY_ARRAY } from "../ts/constants";

export const useUsers = (
  handleClearSearchValue: Function,
  handleResetIdsSelected: Function
) => {
  const [users, setUsers] = useState<User[] | null | []>(EMPTY_ARRAY);

  const handleDuplicateUsers = (usersIdsSelected: Id[]) => {
    if (!users) return;
    const duplicatedItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: randomId() };
    });
    setUsers([...users, ...duplicatedItems]);
  };

  const handleDeleteUsers = (usersIdsSelected: Id[]) => {
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
