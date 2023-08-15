import { useState } from "react";

import {
  areAllUsersChecked,
  isIncludedInArray,
  removeById,
} from "../helpers/array";
import { Id, User } from "../types/users";
import { EMPTY_ARRAY } from "../ts/constants";

export const useUsersIdsSelected = (defaultState: Id[] | [] = EMPTY_ARRAY) => {
  const [usersIdsSelected, setUsersIdsSelected] = useState<Id[] | []>(
    defaultState
  );

  const handleToggleAllUsers = (isEditMode: boolean, users: User[]) => {
    const areAllUSersChecked = areAllUsersChecked(users, usersIdsSelected);

    if (isEditMode === false) return;
    if (areAllUSersChecked) {
      handleResetIdsSelected();
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
    setUsersIdsSelected(EMPTY_ARRAY);
  };

  return {
    usersIdsSelected,
    setUsersIdsSelected,
    handleToggleAllUsers,
    handleCheckOneUser,
    handleResetIdsSelected,
  };
};
