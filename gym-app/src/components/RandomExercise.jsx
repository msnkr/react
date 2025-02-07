import exercises from "../assets/exercise.json";
import { use, useState } from "react";

export default function RandomExercise() {
  const [exerciseArr, setExerciseArr] = useState([]);

  for (let index = 0; index < 5; index++) {
    let randomIndex = Math.floor(Math.random() * exercises.length);
  }

  console.log(exerciseArr);
  return (
    <div>
      <div></div>
    </div>
  );
}
