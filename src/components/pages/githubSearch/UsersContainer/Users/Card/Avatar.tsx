import { User } from "../../../../../../types/users";

type AvatarProps = Pick<User, "avatar_url">;

function Avatar({ avatar_url }: AvatarProps) {
  return (
    <div className="avatar">
      <img src={avatar_url} alt="profile-avatar" />
    </div>
  );
}

export default Avatar;
