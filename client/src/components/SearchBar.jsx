import { useState } from "react";

export default function SearchBar({ setSearchResults }) {
  const [query, setQuery] = useState("");

  const handleClick = async () => {
    const result = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
    const json = await result.json();

    console.log(json.items);
    setSearchResults(json.items);
  };

  return (
    <div>
      <input type="text" placeholder="Search for a book" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button type="button" onClick={handleClick}>Search</button>
    </div>
  );
}
