import { useState } from "react";

export default function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const json = await res.json();

    setSearchResults(json.items);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Search for a book" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="submit">Search</button>
      </form>
    </div>
  );
}
