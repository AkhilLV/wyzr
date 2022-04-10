import { Routes, Route } from "react-router-dom";

import AuthPage from "./pages/Auth";
import SearchPage from "./pages/Search";
import BookPage from "./pages/Book";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/book/:id" element={<BookPage />} />
      </Routes>
    </div>
  );
}

export default App;
