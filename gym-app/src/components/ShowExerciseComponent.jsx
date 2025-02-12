import exercises from "../assets/exercise.json";

const ShowExerciseComponent = ({ clickedName }) => {
  const data = exercises.filter((exercise) => exercise.name === clickedName);
  return (
    <div>
      <div>
        <p className="text-center my-4 text-2xl px-12">{clickedName}</p>
      </div>
      <div>
        {data.map((exercise, index) => {
          return (
            <div className="flex flex-col justify-center items-center text-center">
              <div className="space-y-2 my-8 px-12">
                <p className="capitalize">category: {exercise.category}</p>
                <p className="capitalize">equipment: {exercise.equipment}</p>
                <p className="capitalize">force: {exercise.force}</p>
                <p className="capitalize">Level: {exercise.level}</p>
                <p className="capitalize">mechanic: {exercise.mechanic}</p>
                <p className="capitalize">
                  Primary muscle: {exercise.primaryMuscles}
                </p>
                <p className="capitalize">
                  Secondary muscle:
                  {exercise.secondaryMuscles.map((secondary, index) => {
                    return <div>{exercise.secondaryMuscles[index]}</div>;
                  })}
                </p>
                <div className="mt-8">
                  <p>Instructions</p>
                  <p>{exercise.instructions}</p>
                </div>
              </div>
              <div className="space-y-2">
                <img
                  src={`../public/exercise-images/${exercise.images[0]}`}
                  className="rounded-lg"
                />
                <img
                  src={`../public/exercise-images/${exercise.images[1]}`}
                  className="rounded-lg"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowExerciseComponent;
