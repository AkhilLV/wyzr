import SearchTile from "./SearchTile";

export default function SearchResults({ searchResults }) {
  return (
    <div className="search-results">
      {searchResults ? searchResults.map((item) => (
        <SearchTile
          key={item.id}
          id={item.id}
          title={item.volumeInfo.title}
          authors={item.volumeInfo.authors}
          thumbnail={item.volumeInfo.imageLinks.smallThumbnail}
        />
      )) : null}
    </div>
  );
}
