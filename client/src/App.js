/* eslint-disable react/jsx-filename-extension */
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import AuthPage from "./pages/Auth";
import SearchPage from "./pages/Search";
import BookPage from "./pages/Book";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="App">

        <Routes>

          <Route path="/" element={<AuthPage setIsLoggedIn={setIsLoggedIn} />} />

          <Route path="/search" element={<SearchPage isLoggedIn={isLoggedIn} />} />

          <Route path="/book/:id" element={<BookPage isLoggedIn={isLoggedIn} />} />

        </Routes>

      </div>
    </Router>
  );
}

export default App;
