import { User } from "../../../../../../types/users";
import {
  ClassNames,
  PROFILE_AVATAR_ALT,
  UserKeys,
} from "../../../../../../ts/constants";

type AvatarProps = Pick<User, typeof UserKeys.AVATAR_URL>;

function Avatar({ avatar_url }: AvatarProps) {
  return (
    <div className={ClassNames.AVATAR}>
      <img src={avatar_url} alt={PROFILE_AVATAR_ALT} />
    </div>
  );
}

export default Avatar;
