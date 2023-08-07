import { Id, User } from "../../../../../types/users";
import Card from "../Card/Card";
import "./users.css";

interface UsersProps {
  isEditMode: boolean;
  usersSelected: Id[];
  onChange: (id: Id) => void;
  users: User[] | undefined;
}

function Users({ usersSelected, onChange, users, isEditMode }: UsersProps) {
  return (
    <div className="users">
      {users?.map((user, index) => (
        <Card
          key={index}
          isEditMode={isEditMode}
          user={user}
          onChange={onChange}
          isChecked={usersSelected.includes(user.id)}
        />
      ))}
    </div>
  );
}

export default Users;
