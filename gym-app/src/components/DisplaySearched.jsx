const DisplaySearched = ({ exerciseArr }) => {
  return (
    <div>
      {exerciseArr.map((exercise, index) => {
        return (
          <div>
            <p>{exercise.name}</p>
            <img src={`../public/exercise-images/${exercise.images[1]}`} />
          </div>
        );
      })}
    </div>
  );
};

export default DisplaySearched;
