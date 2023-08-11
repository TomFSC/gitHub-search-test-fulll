import {
  differenceBetweenArrays,
  findObjectById,
} from "../components/pages/githubSearch/helpers/array";
import { Id, User } from "../types/users";
import { useEditPanel } from "./useEditPanel";
import { useSearch } from "./useSearch";
import { useUsers } from "./useUsers";

export const useActions = () => {
  const { users, setUsers } = useUsers();
  const { setSearch } = useSearch();
  const { usersIdsSelected, setUsersIdsSelected } = useEditPanel(
    users as User[]
  );

  const handleDuplicate = () => {
    if (!users) return;
    const duplicateItems = usersIdsSelected.map((userSelected: Id) => {
      const user = findObjectById(users, userSelected);
      return { ...user, id: crypto.randomUUID() };
    });
    setUsers([...users, ...duplicateItems]);
  };

  const handleDelete = () => {
    if (!users) return;
    const newUsers = differenceBetweenArrays(users, usersIdsSelected);
    if (newUsers.length === 0) setSearch("");
    setUsers(newUsers);
    setUsersIdsSelected([]);
  };
  return { handleDuplicate, handleDelete };
};
