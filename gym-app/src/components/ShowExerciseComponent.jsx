import exercises from "../assets/exercise.json";

const ShowExerciseComponent = ({ name }) => {
  return (
    <div>
      <div>
        <p>{name}</p>
      </div>
    </div>
  );
};

export default ShowExerciseComponent;
