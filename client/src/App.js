/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AuthPage from "./pages/Auth";
import SearchPage from "./pages/Search";
import BookPage from "./pages/Book";

function App() {
  // const navigate = useNavigate();

  const [user, setUser] = useState(false);

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={<AuthPage setUser={setUser} />} />

        <Route path="/search" element={<SearchPage />} />

        <Route path="/book/:id" element={<BookPage />} />

      </Routes>
    </div>
  );
}

export default App;

// <Route
// path="/login"
// element={user ? <Navigate to="/" /> : <Login />}
// />
