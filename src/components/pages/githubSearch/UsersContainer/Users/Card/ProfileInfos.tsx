import { ClassNames, UserKeys } from "../../../../../../ts/constants";
import { User } from "../../../../../../types/users";

type ProfileInfosProps = Pick<User, typeof UserKeys.ID | UserKeys.LOGIN>;

function ProfileInfos({ id, login }: ProfileInfosProps) {
  return (
    <div className={ClassNames.PROFILE_INFOS}>
      <span>{id}</span>
      <span>{login}</span>
    </div>
  );
}

export default ProfileInfos;
