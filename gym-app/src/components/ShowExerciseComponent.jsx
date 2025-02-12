import exercises from "../assets/exercise.json";

const ShowExerciseComponent = ({ clickedName }) => {
  const data = exercises.filter((exercise) => exercise.name === clickedName);
  return (
    <div>
      <div>
        <p className="text-center my-4 text-2xl">{clickedName}</p>
      </div>
      <div>
        {data.map((exercise, index) => {
          return (
            <div className="flex flex-col justify-center items-center text-center">
              <img src={`../public/exercise-images/${exercise.images[0]}`} />
              <div className="capitalize space-y-2 my-8 px-20">
                <p>category: {exercise.category}</p>
                <p>equipment: {exercise.equipment}</p>
                <p>force: {exercise.force}</p>
                <p>Level: {exercise.level}</p>
                <p>mechanic: {exercise.mechanic}</p>
                <p>Primary muscle: {exercise.primaryMuscles}</p>
                <p>Secondary muscle: {exercise.secondaryMuscles}</p>
                <div>
                  <p>{exercise.instructions}</p>
                </div>
              </div>
              <img src={`../public/exercise-images/${exercise.images[1]}`} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowExerciseComponent;
