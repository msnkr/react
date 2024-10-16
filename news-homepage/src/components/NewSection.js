function NewSection({ heading, wording }) {
  return (
    <div className="">
      <div className="new-section-text">
        <div className="new-section-heading">
          <h1 className="font-bold text-2xl mb-2 text-off-white">{heading}</h1>
        </div>
        <div className="new-section-text">
          <p className="font-light text-off-white">{wording}</p>
        </div>
      </div>
    </div>
  );
}

export default NewSection;
