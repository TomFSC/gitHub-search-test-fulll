import { useState } from "react";
import { User } from "../types/users";
import { getUsers } from "../api/gitHubUsers";

export const useUsers = () => {
  const [users, setUsers] = useState<User[] | undefined | []>([]);
  const [error, setError] = useState<null | string>(null);

  const fetchUsers = async (param: string) => {
    if (param === "") {
      setUsers([]);
      return;
    }
    const response = await getUsers(param);
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

  return {
    users,
    error,
    fetchUsers,
    setUsers,
  };
};
