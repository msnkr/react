import { Link } from "react-router-dom";

const RandomExercise = ({ arr }) => {
  return (
    <div>
      {arr.map((exercise) => {
        return (
          <Link key={exercise.id} to={`${exercise.id - 1}`}>
            <div className="my-8">
              <div className="my-2">
                <img
                  src={`../../public/exercise-images/${exercise.images[1]}`}
                  alt="exercise-image"
                  className="w-full h-[300px] object-cover"
                />
              </div>
              <div className="space-y-2 capitalize px-4">
                <p>{exercise.name}</p>
                <p>{exercise.level}</p>
                <p>{exercise.equipment}</p>
                <p>{exercise.primaryMuscles}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default RandomExercise;
