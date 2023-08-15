import SearchPage from "./components/pages/githubSearch/SearchPage";
import { SearchContextProvider } from "./context/SearchContextProvider";

function App() {
  return (
    <SearchContextProvider>
      <SearchPage />
    </SearchContextProvider>
  );
}

export default App;
