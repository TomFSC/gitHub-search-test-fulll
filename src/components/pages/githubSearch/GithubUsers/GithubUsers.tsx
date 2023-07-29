import { useState } from "react";
import Card from "./Card";
import "./githubUsers.css";

interface GithubUsersProps {
  users: any[] | undefined; //define user Type
  usersSelected: any;
  onCheckOne: any;
}

function GithubUsers({ users, usersSelected, onCheckOne }: GithubUsersProps) {
  if (!users) return <span>Aucun résultat...</span>;
  return (
    <div className="github-profile-container">
      {users.map((user) => (
        <Card
          key={user.id}
          user={user}
          onChange={onCheckOne}
          isChecked={usersSelected.includes(user)}
        />
      ))}
    </div>
  );
}

export default GithubUsers;
