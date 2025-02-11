const DisplaySearched = ({ exerciseArr }) => {
  return (
    <div>
      {exerciseArr.map((exercise, index) => {
        return (
          <div>
            <img src={`../public/exercise-images/${exercise.images[1]}`} />
            <p>{exercise.name}</p>
            <p>{exercise.primaryMuscle}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplaySearched;
