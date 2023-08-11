import Header from "./Header/Header";
import Actions from "./Actions/Actions";
import UsersContainer from "./UsersContainer/UsersContainer";

import "./searchPage.css";
import ErrorPopup from "./ErrorPopup";

function SearchPage() {
  return (
    <div data-testid="main-container" className="container">
      <Header />
      <Actions />
      <UsersContainer />
      <ErrorPopup />
    </div>
  );
}

export default SearchPage;
