import { User } from "../SearchPage";
import EmptyResult from "./EmptyResult/EmptyResult";
import Users from "./Users/Users";
import "./searchResult.css";

interface SearchResultProps {
  isEditMode: boolean;
  usersSelected: User[];
  onCheckOne: (user: User) => void;
  users: User[] | undefined;
}

function SearchResult({
  usersSelected,
  onCheckOne,
  users,
  isEditMode,
}: SearchResultProps) {
  if (users?.length === 0) return null;
  return (
    <div className="search-result">
      {users === undefined ? (
        <EmptyResult />
      ) : (
        <Users
          users={users}
          isEditMode={isEditMode}
          onChange={onCheckOne}
          usersSelected={usersSelected}
        />
      )}
    </div>
  );
}

export default SearchResult;
