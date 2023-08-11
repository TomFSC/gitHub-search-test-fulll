import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";
import Header from "./Header/Header";
import Actions from "./Actions/Actions";
import UsersContainer from "./UsersContainer/UsersContainer";

import "./searchPage.css";

function SearchPage() {
  const { error } = useContext(SearchContext);

  return (
    <div data-testid="main-container" className="container">
      <Header />
      <Actions />
      {error ? (
        <div data-testid="error-msg">
          <h1 style={{ color: "red", fontSize: 25 }}>{error}</h1>
        </div>
      ) : (
        <UsersContainer />
      )}
    </div>
  );
}

export default SearchPage;
