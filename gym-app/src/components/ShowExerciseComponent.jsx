import exercises from "../assets/exercise.json";

const ShowExerciseComponent = ({ clickedName }) => {
  const data = exercises.filter((exercise) => exercise.name === clickedName);
  return (
    <div>
      <div>
        <p>{clickedName}</p>
      </div>
      <div>
        {data.map((exercise, index) => {
          return (
            <div>
              <img src={`../public/exercise-images/${exercise.images[0]}`} />
              <img src={`../public/exercise-images/${exercise.images[1]}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowExerciseComponent;
