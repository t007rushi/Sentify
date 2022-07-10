import { Route, Routes } from "react-router-dom";
import { PlayLists } from "./components";
import { Genre, Home, Login, SearchPage } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home mainContent={<PlayLists />} />} />
      <Route path="/genre" element={<Home mainContent={<Genre />} />} />
      <Route path="/search" element={<Home mainContent={<SearchPage />} />} />
    </Routes>
  );
}

export default App;
