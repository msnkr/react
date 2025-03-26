import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import data from "../assets/data.json";

const ShowCategoryExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([null]);

  useEffect(() => {
    setWorkout(data[id]);
  }, []);

  return (
    <div>
      <div className="p-8">
        <Link to={"/musckles/show-categories/"}>
          <button className="border px-4 py-2 rounded-lg flex space-x-4 cursor-pointer items-center">
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </span>
            Back
          </button>
        </Link>
      </div>
      <div className="text-3xl text-center px-8 lg:text-4xl font-semibold">
        {workout.name}
      </div>
      <div className="mt-12 space-y-6 lg:grid grid-cols-2 ">
        {workout.images &&
          workout.images.map((image, index) => (
            <div key={index}>
              <img
                src={`/musckles/exercise-images/${image}`}
                alt={""}
                className="lg:w-full"
              />
            </div>
          ))}
      </div>
      <div className="capitalize m-4 space-y-2 lg:text-xl lg:px-20">
        <p>
          <span className="text-gray-400">Level: </span>
          {workout.level}
        </p>
        <p>
          <span className="text-gray-400">Equipment: </span>
          {workout.equipment}
        </p>
        <p>
          <span className="text-gray-400">Primary Muscle: </span>
          {workout.primaryMuscles}
        </p>
        <p>
          <span className="text-gray-400">Mechanic: </span>
          {workout.force}
        </p>
        <div>
          <span className="text-gray-400">Secondary Muscles: </span>
          {workout.secondaryMuscles &&
            workout.secondaryMuscles.map((secondary, index) => (
              <p key={index}>{secondary}</p>
            ))}
        </div>
        <div className="mt-8 mb-20">
          <p>{workout.instructions}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowCategoryExercise;
