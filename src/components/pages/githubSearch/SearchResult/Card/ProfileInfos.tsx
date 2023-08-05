import { User } from "../../SearchPage";

type ProfileInfosProps = Pick<User, "id" | "login">;

function ProfileInfos({ id, login }: ProfileInfosProps) {
  return (
    <div className="infos">
      <span className="id">{id}</span>
      <span>{login}</span>
    </div>
  );
}

export default ProfileInfos;
