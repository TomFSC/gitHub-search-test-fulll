import { useState } from "react";

import { Id, User } from "../types/users";
import {
  areAllUsersChecked,
  isIncludedInArray,
  removeById,
} from "../helpers/array";

export const useUsersIdsSelected = () => {
  const [usersIdsSelected, setUsersIdsSelected] = useState<Id[]>([]);

  const handleToggleAllUsers = (isEditMode: boolean, users: User[]) => {
    const areAllUSersChecked = areAllUsersChecked(users, usersIdsSelected);

    if (isEditMode === false) return;
    if (areAllUSersChecked) {
      setUsersIdsSelected([]);
      return;
    }
    const newUsersIdsSelected = users.map((user) => user.id);
    setUsersIdsSelected(newUsersIdsSelected);
  };

  const handleCheckOneUser = (id: Id) => {
    const isUserIdSelectedAllreadyInArray = isIncludedInArray(
      usersIdsSelected,
      id
    );

    if (isUserIdSelectedAllreadyInArray) {
      const newUsersSelected = removeById(usersIdsSelected, id);

      setUsersIdsSelected(newUsersSelected);
      return;
    }
    setUsersIdsSelected([...usersIdsSelected, id]);
  };

  const handleResetIdsSelected = () => {
    setUsersIdsSelected([]);
  };

  return {
    usersIdsSelected,
    setUsersIdsSelected,
    handleToggleAllUsers,
    handleCheckOneUser,
    handleResetIdsSelected,
  };
};
