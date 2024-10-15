export function Card({ propHeading, propWording }) {
  return (
    <div className="card-container">
      <h1 className="card-heading">{propHeading}</h1>
      <p className="card-wording">{propWording}</p>
    </div>
  );
}
