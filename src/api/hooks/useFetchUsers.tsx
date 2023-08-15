import { Dispatch, SetStateAction, useState } from "react";

import { getUsers } from "../gitHubUsers";
import { isEmptyArray } from "../../helpers/array";
import { User } from "../../types/users";

export const useFetchUsers = (
  setUsers: Dispatch<SetStateAction<User[] | null | []>>,
  handleResetIdsSelected: Function
) => {
  const [error, setError] = useState<null | string>(null);

  const fetchUsers = async (searchValueDebounced: string) => {
    setError(null);
    handleResetIdsSelected();
    if (searchValueDebounced === "") {
      setUsers([]);
      return;
    }
    const response = await getUsers(searchValueDebounced);
    const hasFoundZeroResult = isEmptyArray(response);
    const hasExceededApiRateLimit = response.message;

    if (hasExceededApiRateLimit) {
      setError(response.message);
      setUsers([]);
      return;
    }

    if (hasFoundZeroResult) {
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
