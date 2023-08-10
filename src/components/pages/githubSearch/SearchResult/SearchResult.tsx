import { Id, User } from "../../../../types/users";
import EmptyResult from "./EmptyResult/EmptyResult";
import Users from "./Users/Users";
import "./searchResult.css";

interface SearchResultProps {
  isEditMode: boolean;
  usersSelected: Id[];
  onCheckOne: (id: number | string) => void;
  users: User[] | undefined;
}

function SearchResult({
  usersSelected,
  onCheckOne,
  users,
  isEditMode,
}: SearchResultProps) {
  return (
    <div data-testid="result" className="search-result">
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
