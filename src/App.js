import { Route, Routes } from "react-router-dom";
import { PlayLists } from "./components";
import { Genre, Home, Login, SearchPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route
        path="/home"
        element={
          <Home>
            <PlayLists />
          </Home>
        }
      />
      <Route
        path="/genre"
        element={
          <Home>
            <Genre />
          </Home>
        }
      />
      <Route
        path="/search"
        element={
          <Home>
            <SearchPage />
          </Home>
        }
      />
    </Routes>
  );
}

export default App;
