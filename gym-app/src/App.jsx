import "./App.css";
import { useState } from "react";
import exercises from "./assets/exercise.json";

import SearchComponent from "./components/SearchComponent";
import RandomExercise from "./components/RandomExerciseComponent";

function App() {
  const [randomExerciseArr, setRandomExerciseArr] = useState([]);

  const getRandomExercise = () => {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    setRandomExerciseArr((prev) => {
      return [...prev, exercises[randomIndex]];
    });
  };

  if (randomExerciseArr.length < 10) {
    getRandomExercise();
  }

  return (
    <div>
      <div>
        <div className="begin-wording">
          <p>Welcome to my gym app</p>
          <p>
            Search an exercise by name, or by level, by muscle or by machine
          </p>
        </div>
        <div className="search-bar">
          <SearchComponent />
        </div>
      </div>
      <div>
        <div>
          <RandomExercise arr={randomExerciseArr} />
        </div>
      </div>
    </div>
  );
}
export default App;
