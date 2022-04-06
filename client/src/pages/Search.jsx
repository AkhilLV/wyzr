import { useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchResults from "../components/SearchResults";

export default function Auth() {
  const [searchResults, setSearchResults] = useState(false);

  return (
    <div className="container">
      <SearchBar setSearchResults={setSearchResults} />

      <SearchResults searchResults={searchResults} />
    </div>
  );
}
