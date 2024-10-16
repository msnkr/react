function NewSection({ heading, wording }) {
  return (
    <div className="bg-gray-300 p-8">
      <div className="heading">
        <h1 className="text-4xl font-semibold mb-4">New</h1>
        <div className="new-section-text">
          <div className="new-section-heading">
            <h1 className="font-bold text-2xl mb-2">{heading}</h1>
          </div>
          <div className="new-section-text">
            <p className="text-xl font-light">{wording}</p>
          </div>
        </div>
        <div className="w-full h-1 bg-black"></div>
      </div>
    </div>
  );
}

export default NewSection;
