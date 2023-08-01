import { User } from "../SearchPage";
import Card from "./Card";
import "./users.css";

interface UsersProps {
  isEditMode: boolean;
  usersSelected: User[];
  onCheckOne: (user: User) => void;
  users: User[] | undefined;
}

function Users({ usersSelected, onCheckOne, users, isEditMode }: UsersProps) {
  if (!users || users.length === 0) return <span>Aucun résultat...</span>;
  return (
    <div className="github-profile-container">
      {users.map((user, index) => (
        <Card
          key={index}
          isEditMode={isEditMode}
          user={user}
          onChange={onCheckOne}
          isChecked={usersSelected.includes(user)}
        />
      ))}
    </div>
  );
}

export default Users;
