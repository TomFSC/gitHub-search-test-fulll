import Avatar from "./Avatar";
import Checkbox from "../../../../../reusable-ui/Checkbox/Checkbox";
import ProfileInfos from "./ProfileInfos";
import Button from "../../../../../reusable-ui/Button/Button";

import { ClassNames, Labels } from "../../../../../../ts/constants";
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
    <div className={ClassNames.CARD_CONTAINER}>
      {isEditMode && (
        <Checkbox
          className={ClassNames.CARD_CHECKBOX}
          onChange={() => onChange(id as Id)}
          checked={isChecked}
        />
      )}
      <Avatar avatar_url={avatar_url} />
      <ProfileInfos id={id} login={login} />
      <Button className={ClassNames.CARD_BUTTON} label={Labels.CARD_BUTTON} />
    </div>
  );
}

export default Card;
