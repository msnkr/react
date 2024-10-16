function ShowCard({ img, number, title, text }) {
  return (
    <div className="card-section">
      <div className="card flex items-end">
        <div className="card-image">
          <img src={img} alt="card-image" />
        </div>
        <div className="card-text ml-8 space-y-3">
          <div className="card-number">
            <h1 className="text-4xl font-bold text-soft-red">{number}</h1>
          </div>
          <div className="card-heading text-very-dark-blue">
            <h1 className="font-semibold text-xl text-very-dark-blue">
              {title}
            </h1>
          </div>
          <div className="card-text">
            <p className="text-dark-grayish-blue">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowCard;
