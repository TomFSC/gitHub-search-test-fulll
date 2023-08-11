import SearchPage from "./components/pages/githubSearch/SearchPage";
import { SearchContextProvider } from "./context/SearchContext";

function App() {
  return (
    <div data-testid="app" className="App">
      <SearchContextProvider>
        <SearchPage />
      </SearchContextProvider>
    </div>
  );
}

export default App;
