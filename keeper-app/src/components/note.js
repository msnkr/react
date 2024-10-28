export function Notes({ title, content }) {
  return (
    <div className="note">
      <h1>{title}</h1>
      <p>{content}</p>
    </div>
  );
}
