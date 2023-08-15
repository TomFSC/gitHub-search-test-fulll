import { useContext } from "react";
import { SearchContext } from "../../../../context/SearchContext";

import { ClassNames, ERROR_MESSAGE } from "../../../../ts/constants";
import "./ErrorPopup.css";

function ErrorPopup() {
  const { error } = useContext(SearchContext);

  if (!error) return null;

  return (
    <div className={ClassNames.ERROR_MESSAGE}>
      <h1>{ERROR_MESSAGE}</h1>
    </div>
  );
}

export default ErrorPopup;
