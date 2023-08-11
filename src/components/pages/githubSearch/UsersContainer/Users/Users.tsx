import { Id, User } from "../../../../../types/users";
import Card from "./Card/Card";
import "./users.css";

interface UsersProps {
  isEditMode: boolean;
  usersIdsSelected: Id[];
  onCheckOneUser: (id: Id) => void;
  users: User[] | undefined;
}

function Users({
  usersIdsSelected,
  onCheckOneUser,
  users,
  isEditMode,
}: UsersProps) {
  return (
    <div data-testid="users" className="users">
      {users?.map((user, index) => (
        <Card
          data-testid="card"
          key={index}
          isEditMode={isEditMode}
          user={user}
          onChange={onCheckOneUser}
          isChecked={usersIdsSelected.includes(user.id)}
        />
      ))}
    </div>
  );
}

export default Users;
