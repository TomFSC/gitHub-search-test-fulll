import Card from "./Card";
import "./githubUsers.css";

interface GithubUsersProps {
  isEditMode: boolean;
  usersSelected: any;
  onCheckOne: any;
  users: any[] | undefined;
}

function GithubUsers({
  usersSelected,
  onCheckOne,
  users,
  isEditMode,
}: GithubUsersProps) {
  if (!users) return <span>Aucun résultat...</span>;
  return (
    <div className="github-profile-container">
      {users.map((user) => (
        <Card
          key={user.id}
          isEditMode={isEditMode}
          user={user}
          onChange={onCheckOne}
          isChecked={usersSelected.includes(user)}
        />
      ))}
    </div>
  );
}

export default GithubUsers;
