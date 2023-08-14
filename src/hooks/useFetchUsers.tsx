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
    // move into useEffect
    setUsersIdsSelected([]);
    if (searchValueDebounced === "") {
      setUsers([]);
      return;
    }
    const response = await getUsers(searchValueDebounced);
    //hasFoundZeroResult
    const isEmptyUsers = isEmptyArray(response);

    //hasExceededApiRateLimit
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
