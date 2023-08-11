import { useContext } from "react";
import { SearchContext } from "../../../context/SearchContext";

function ErrorPopup() {
  const { error } = useContext(SearchContext);

  if (!error) return null;

  return (
    <div data-testid="error-msg" className="error">
      <h1>{error}</h1>
    </div>
  );
}

export default ErrorPopup;
