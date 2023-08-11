import Avatar from "./Avatar";
import Checkbox from "../../../../../reusable-ui/Checkbox";
import ProfileInfos from "./ProfileInfos";
import Button from "../../../../../reusable-ui/Button";

import { Id, User } from "../../../../../../types/users";
import "./card.css";

interface CardProps {
  user: User;
  onChange: (id: Id) => void;
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
          onChange={() => onChange(id)}
          checked={isChecked}
        />
      )}
      <Avatar avatar_url={avatar_url} />
      <ProfileInfos id={id} login={login} />
      <Button className="card-btn" label="View profile" />
    </div>
  );
}

export default Card;
