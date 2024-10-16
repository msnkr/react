function ShowCard({ img, number, title, text }) {
  return (
    <div className="card-section p-8">
      <div className="card flex">
        <div className="card-image">
          <img src={img} alt="card-image" />
        </div>
        <div className="card-text">
          <div className="card-number">
            <h1>{number}</h1>
          </div>
          <div className="card-heading">
            <h1>{title}</h1>
          </div>
          <div className="card-text">
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
