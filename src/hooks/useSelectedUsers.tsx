import { useState } from "react";

import { Id, User } from "../types/users";
import { removeById } from "../helpers/array";

//useUsersIdsSelected
export const useSelectedUsers = () => {
  const [usersIdsSelected, setUsersIdsSelected] = useState<Id[]>([]);

  const handleToggleAllUsers = (isEditMode: boolean, users: User[]) => {
    //@TODO: should compare one by one in function
    const areAllUSersChecked =
      usersIdsSelected.length === users?.length && users?.length !== 0;
    if (isEditMode === false) return;
    if (areAllUSersChecked) {
      setUsersIdsSelected([]);
      return;
    }
    const newUsersIdsSelected = users.map((user) => user.id);
    setUsersIdsSelected(newUsersIdsSelected);
  };

  const handleCheckOneUser = (id: Id) => {
    //use isIncludedInArray
    const isUserIdSelectedAllreadyInArray = usersIdsSelected.includes(id);

    if (isUserIdSelectedAllreadyInArray) {
      const newUsersSelected = removeById(usersIdsSelected, id);

      setUsersIdsSelected(newUsersSelected);
      return;
    }
    setUsersIdsSelected([...usersIdsSelected, id]);
  };

  //create reset idsSelected

  return {
    handleToggleAllUsers,
    handleCheckOneUser,
    usersIdsSelected,
    setUsersIdsSelected,
  };
};
