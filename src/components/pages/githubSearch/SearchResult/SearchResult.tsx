import { Id, User } from "../../../../types/users";
import EmptyResult from "./EmptyResult/EmptyResult";
import Users from "./Users/Users";
import "./searchResult.css";

interface SearchResultProps {
  isEditMode: boolean;
  usersIdsSelected: Id[];
  onCheckOneUser: (id: number | string) => void;
  users: User[] | undefined;
}

function SearchResult({
  usersIdsSelected,
  onCheckOneUser,
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
          onCheckOneUser={onCheckOneUser}
          usersIdsSelected={usersIdsSelected}
        />
      )}
    </div>
  );
}

export default SearchResult;
