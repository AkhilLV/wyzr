import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

import SearchTile from "../components/SearchTile";

export default function Auth() {
  const { id } = useParams();
  const [bookData, setBookData] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const result = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
      const json = await result.json();

      setBookData(json);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Link to="/search">Back</Link>
      {bookData
        ? (
          <SearchTile
            key={bookData.id}
            id={bookData.id}
            title={bookData.volumeInfo.title || ""}
            authors={bookData.volumeInfo.authors || []}
            thumbnail={bookData.volumeInfo.imageLinks.smallThumbnail || ""}
          />
        ) : null}
    </div>
  );
}
