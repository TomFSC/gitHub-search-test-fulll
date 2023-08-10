import {
  differenceBetweenArrays,
  findObjectById,
} from "../components/pages/githubSearch/helpers/array";
import { Id, User } from "../types/users";
import { useSelect } from "./useSelect";
import { useSearch } from "./useSearch";
import { useUsers } from "./useUsers";

export const useActions = () => {
  const { users, setUsers } = useUsers();
  const { setSearch } = useSearch();
  const { usersSelected, setUsersSelected, setIsAllChecked } = useSelect(
    users as User[]
  );

  const handleDuplicate = () => {
    if (!users) return;
    const duplicateItems = usersSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
    setIsAllChecked(false);
  };

  const handleDelete = () => {
    if (!users) return;
    const newUsers = differenceBetweenArrays(users, usersSelected);
    if (newUsers.length === 0) setSearch("");
    setUsers(newUsers);
    setUsersSelected([]);
    setIsAllChecked(false);
  };
  return { handleDuplicate, handleDelete };
};
