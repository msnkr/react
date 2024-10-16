function ShowCard({ img, number, title, text }) {
  return (
    <div className="card-section">
      <div className="card grid grid-cols-3 items-end lg:items-center">
        <div className="card-image">
          <img
            className="lg:w-[400px] lg:h-[150px] lg:object-cover"
            src={img}
            alt="card-image"
          />
        </div>
        <div className="card-text ml-8 lg:space-y-0 space-y-3 col-span-2 lg:ml-2">
          <div className="card-number">
            <h1 className="text-4xl lg:text-3xl font-bold text-soft-red">
              {number}
            </h1>
          </div>
          <div className="card-heading text-very-dark-blue ">
            <h1 className="font-semibold text-xl lg:text-lg text-very-dark-blue">
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
