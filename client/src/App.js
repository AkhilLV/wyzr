/* eslint-disable react/jsx-filename-extension */
import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import AuthPage from "./pages/Auth";
import SearchPage from "./pages/Search";
import BookPage from "./pages/Book";

function App() {
  const navigate = useNavigate();

  const [user, setUser] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const res = await fetch("http://localhost:4000/auth/google/success", {
        credentials: "include",
      });
      if (res.status === 400) return console.log("auth_failed");

      const json = await res.json();
      setUser(json);
    };
    getUser();
  }, []);

  return (
    <div className="App">
      <Routes>

        <Route path="/" element={user ? navigate("/search") : <AuthPage />} />

        <Route path="/search" element={user ? <SearchPage /> : navigate("/")} />

        <Route path="/book/:id" element={user ? <BookPage /> : navigate("/")} />

      </Routes>
    </div>
  );
}

export default App;

// <Route
// path="/login"
// element={user ? <Navigate to="/" /> : <Login />}
// />
