import { use, useState } from "react";

const DisplaySearched = ({ exerciseArr }) => {
  return (
    <div>
      {exerciseArr.map((exercise, index) => {
        return (
          <div
            key={index}
            className="flex flex-col justify-center items-center text-center my-4"
          >
            <img
              src={`../public/exercise-images/${exercise.images[1]}`}
              className="w-90% h-[200px] object-cover rounded-md my-4"
            />
            <p className="text-2xl w-[200px] my-2">{exercise.name}</p>
            <p className="capitalize">
              primary muscle: {exercise.primaryMuscles}
            </p>
            <p className="capitalize px-[200px]">
              {exercise.secondaryMuscles.length !== 0
                ? `secondary muscle: ${exercise.secondaryMuscles}`
                : ""}
            </p>
            <p className="capitalize">equipment: {exercise.equipment}</p>
          </div>
        );
      })}
    </div>
  );
};

export default DisplaySearched;
