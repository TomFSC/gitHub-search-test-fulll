function Card({ user, onChange, isChecked, isEditMode }: any) {
  const { login, avatar_url, id } = user;

  return (
    <div className="card">
      {isEditMode && (
        <input
          type="checkbox"
          onChange={() => onChange(user)}
          checked={isChecked}
        />
      )}
      <div className="avatar">
        <img src={avatar_url} alt="profile-avatar" />
      </div>
      <span>{id}</span>
      <br />
      <span>{login}</span>
      <button>View profile</button>
    </div>
  );
}

export default Card;
