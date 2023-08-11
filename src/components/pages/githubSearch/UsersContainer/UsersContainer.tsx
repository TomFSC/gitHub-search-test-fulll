import { Id, User } from "../../../../types/users";
import UnknownUsers from "./UnknownUsers/UnknownUsers";
import Users from "./Users/Users";
import "./usersContainer.css";

interface UsersContainerProps {
  isEditMode: boolean;
  usersIdsSelected: Id[];
  onCheckOneUser: (id: number | string) => void;
  users: User[] | undefined;
}

function UsersContainer({
  usersIdsSelected,
  onCheckOneUser,
  users,
  isEditMode,
}: UsersContainerProps) {
  return (
    <div data-testid="users-container" className="users-container">
      {users === undefined ? (
        <UnknownUsers />
      ) : (
        <Users
          users={users}
          isEditMode={isEditMode}
          onCheckOneUser={onCheckOneUser}
          usersIdsSelected={usersIdsSelected}
        />
      )}
    </div>
  );
}

export default UsersContainer;
