import Header from "./Header/Header";
import Actions from "./Actions/Actions";
import UsersContainer from "./UsersContainer/UsersContainer";
import ErrorPopup from "./ErrorPopup/ErrorPopup";

import { ClassNames } from "../../../ts/constants";
import "./searchPage.css";

function SearchPage() {
  return (
    <div className={ClassNames.MAIN_CONTAINER}>
      <Header />
      <Actions />
      <UsersContainer />
      <ErrorPopup />
    </div>
  );
}

export default SearchPage;
