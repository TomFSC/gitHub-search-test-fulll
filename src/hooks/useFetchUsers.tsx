import { Dispatch, SetStateAction, useState } from "react";

import { getUsers } from "../api/gitHubUsers";
import { isEmptyArray } from "../helpers/array";
import { Id, User } from "../types/users";

export const useFetchUsers = (
  setUsers: Dispatch<SetStateAction<User[] | null | []>>,
  setUsersIdsSelected: Dispatch<SetStateAction<Id[] | []>>
) => {
  const [error, setError] = useState<null | string>(null);

  const fetchUsers = async (searchValueDebounced: string) => {
    setError(null);
    setUsersIdsSelected([]);
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

  return {
    error,
    fetchUsers,
  };
};
