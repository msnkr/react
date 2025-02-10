import exercises from "../assets/exercise.json";
import { use, useState } from "react";

export default function RandomExercise() {
  const [exerciseArr, setExerciseArr] = useState([]);

  const addRandomExercise = () => {
    let randomIndex = Math.floor(Math.random() * exercises.length);
    setExerciseArr((prevExercise) => {
      return [...prevExercise, exercises[randomIndex]];
    });
  };
  if (exerciseArr.length < 10) {
    addRandomExercise();
  }
  return (
    <div>
      <div>
        {exerciseArr.map((exercise, index) => {
          return (
            <div key={index} className="mt-12">
              <img
                src={`../public/exercise-images/${exercise.images[0]}`}
                alt={exercise.name}
                className="w-full h-[200px] object-cover"
              />
              <p className="text-2xl">{exercise.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
