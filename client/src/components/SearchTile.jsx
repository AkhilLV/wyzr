export default function SearchTile({ id, title }) {
  return (
    <div>
      <a href={`/book/${id}`}>{title}</a>
    </div>
  );
}
