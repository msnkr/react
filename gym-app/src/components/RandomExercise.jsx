import exercises from "../assets/exercise.json";
import ShowExerciseComponent from "./ShowExerciseComponent";
import { use, useState } from "react";

export default function RandomExercise() {
  const [modal, setModal] = useState(false);
  const [exerciseArr, setExerciseArr] = useState([]);
  const [displayExercise, setDisplayExercise] = useState("");

  const addRandomExercise = () => {
    let randomIndex = Math.floor(Math.random() * exercises.length);
    setExerciseArr((prevExercise) => {
      return [...prevExercise, exercises[randomIndex]];
    });
  };

  if (exerciseArr.length < 10) {
    addRandomExercise();
  }

  const showExercise = ({ name }) => {
    setModal((prev) => {
      return !prev;
    });
    setDisplayExercise(name);
  };

  return (
    <div>
      <div className={`${modal ? "invisible hidden" : "visible"}`}>
        {exerciseArr.map((exercise, index) => {
          return (
            <div
              key={index}
              className="mt-6 flex flex-col justify-center items-center text-center space-y-1"
            >
              <img
                src={`../public/exercise-images/${exercise.images[1]}`}
                alt={exercise.name}
                className="w-full h-[200px] object-cover rounded-md"
              />
              <p
                className="text-2xl w-[300px] hover:cursor-pointer"
                onClick={() => showExercise(exercise)}
              >
                {exercise.name}
              </p>
              <p className="capitalize text-gray-400">{exercise.level}</p>

              <p className="text-xl capitalize">{exercise.primaryMuscles}</p>
            </div>
          );
        })}
      </div>
      <div>
        <ShowExerciseComponent name={displayExercise} />
      </div>
    </div>
  );
}
