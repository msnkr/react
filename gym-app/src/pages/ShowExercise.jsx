import exercises from "../assets/data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    setWorkout(exercises[id]);
  });

  return (
    <div className="p-8 ">
      <div className="flex flex-col justify-center items-center">
        <p className="text-3xl font-semibold">{workout.name}</p>
      </div>
      <div className="capitalize">
        <p>Level: {workout.level}</p>
        <p>Force: {workout.force}</p>
        <p>Mechanic: {workout.mechanic}</p>
        <p>Equipment: {workout.equipment}</p>
        <p>Primary Muscle: {workout.primaryMuscles}</p>
        <p>Secondary Muscle: {workout.secondaryMuscles}</p>
      </div>
      <div></div>
      <div>{workout.instructions}</div>
    </div>
  );
};

export default ShowExercise;
