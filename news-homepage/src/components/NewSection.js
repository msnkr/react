function NewSection({ heading, wording }) {
  return (
    <div className="">
      <div className="new-section-text">
        <div className="new-section-heading">
          <h1 className="font-bold text-2xl mb-2">{heading}</h1>
        </div>
        <div className="new-section-text">
          <p className="text-xl font-light">{wording}</p>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
