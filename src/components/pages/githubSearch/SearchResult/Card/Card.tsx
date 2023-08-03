import Checkbox from "../../../../reusable-ui/Checkbox";
import { User } from "../../SearchPage";
import Avatar from "./Avatar";
import CardBtn from "./CardBtn";
import ProfileInfos from "./ProfileInfos";
import "./card.css";

interface CardProps {
  user: User;
  onChange: (user: User) => void;
  isChecked: boolean;
  isEditMode: boolean;
}

function Card({ user, onChange, isChecked, isEditMode }: CardProps) {
  const { login, avatar_url, id } = user;

  return (
    <div className="card-container">
      {isEditMode && (
        <Checkbox
          className="card-checkbox"
          onChange={() => onChange(user)}
          checked={isChecked}
        />
      )}
      <Avatar avatar_url={avatar_url} />
      <ProfileInfos id={id} login={login} />
      <CardBtn className="card-btn" label="View profile" />
    </div>
  );
}

export default Card;
