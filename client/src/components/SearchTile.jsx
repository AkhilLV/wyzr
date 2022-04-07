import { Link } from "react-router-dom";

export default function SearchTile({
  id, title, authors = [], thumbnail,
}) {
  return (
    <div className="searchTile">
      <img src={thumbnail} alt={title} />
      <h3><Link to={`/book/${id}`}>{title}</Link></h3>
      <p>Authors:</p>
      {authors.map((author) => <p>{author}</p>)}
    </div>
  );
}
