import Checkbox from "../../../../reusable-ui/Checkbox";
import { User } from "../../SearchPage";
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
    <div className="card">
      {isEditMode && (
        <Checkbox
          className="card-checkbox"
          onChange={() => onChange(user)}
          checked={isChecked}
        />
      )}
      <div className="avatar">
        <img src={avatar_url} alt="profile-avatar" />
      </div>
      <div className="infos">
        <span>{id}</span>
        <br />
        <span>{login}</span>
      </div>
      <button className="profile-btn">View profile</button>
    </div>
  );
}

export default Card;
