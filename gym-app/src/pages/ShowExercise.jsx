import exercises from "../assets/data.json";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import weightIcon from "../../public/icons/weight.png";
import levelIcon from "../../public/icons/level-up.png";
import forceIcon from "../../public/icons/pull.png";

const ShowExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([null]);

  useEffect(() => {
    setWorkout(exercises[id]);
  }, [id]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-8 ">
      <div>
        <Link to={"/"}>
          <button className="border px-4 py-2 rounded-lg">Go Home</button>
        </Link>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <div className="flex justify-center items-center space-x-8">
          <img src={weightIcon} alt="weight-icon" className="w-20" />
          <p className="text-3xl font-semibold">{workout.name}</p>
        </div>
      </div>
      <div className="capitalize mt-12 space-y-4">
        <div className="flex items-center space-x-2">
          <img src={levelIcon} alt="level-icon" className="w-8" />
          <p>Level: {workout.level}</p>
        </div>
        <div className="flex items-center space-x-2">
          <img src={forceIcon} alt="level-icon" className="w-8" />
          <p>Force: {workout.force}</p>
        </div>
        <p>Mechanic: {workout.mechanic}</p>
        <p>Equipment: {workout.equipment}</p>
        <p>Primary Muscle: {workout.primaryMuscles}</p>
        <p>Secondary Muscle: </p>
        <div className="grid grid-cols-4">
          {workout.secondaryMuscles &&
            workout.secondaryMuscles.map((secondary, index) => (
              <div key={index}>
                <p>{secondary}</p>
              </div>
            ))}
        </div>
      </div>
      <div className="mt-12 p-4">
        <p>{workout.instructions}</p>
      </div>
      <div className="mt-12 space-y-6">
        {workout.images &&
          workout.images.map((image, index) => (
            <div key={index}>
              <img src={`../../public/exercise-images/${image}`} alt={""} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowExercise;
