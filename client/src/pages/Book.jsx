import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
      {bookData ? <div>{bookData.volumeInfo.title}</div> : null}
    </div>
  );
}
