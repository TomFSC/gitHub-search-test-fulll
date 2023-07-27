import "./githubUsers.css";

interface GithubUsersProps {
  users: any[] | undefined; //define user Type
}

function GithubUsers({ users }: GithubUsersProps) {
  if (!users) return <span>Aucun résultat...</span>;
  return (
    <div className="github-profile-container">
      {users.map(({ avatar_url, login, id }) => (
        <div key={login} className="card">
          <input type="checkbox" />
          <div className="avatar">
            <img src={avatar_url} alt="profile-avatar" />
          </div>
          <span>{id}</span>
          <br />
          <span>{login}</span>
          <button>View profile</button>
        </div>
      ))}
    </div>
  );
}

export default GithubUsers;
