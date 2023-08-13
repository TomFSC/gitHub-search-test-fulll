import SearchPage from "./components/pages/githubSearch/SearchPage";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <SearchContextProvider>
      <SearchPage />
    </SearchContextProvider>
  );
}

export default App;
