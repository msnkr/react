export function Cards2({ propNumber, propImage, propHeading, propWording }) {
  return (
    <div className="cards-2-container">
      <div className="cards-2-image">
        <img src={propImage} />
      </div>
      <div className="cards-2-wording">
        <h1 className="number">{propNumber}</h1>
        <h1 className="heading-component">{propHeading}</h1>
        <p className="wording-component">{propWording}</p>
      </div>
    </div>
  );
}
