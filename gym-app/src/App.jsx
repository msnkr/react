import "./App.css";
import { use, useState } from "react";
import exercises from "./assets/exercise.json";

import SearchComponent from "./components/SearchComponent";
import RandomExercise from "./components/RandomExerciseComponent";

function App() {
  const [randomExerciseArr, setRandomExerciseArr] = useState([]);
  const [searchedExercises, setSearchedExercises] = useState(false);

  const getRandomExercise = () => {
    const randomIndex = Math.floor(Math.random() * exercises.length);
    setRandomExerciseArr((prev) => {
      return [...prev, exercises[randomIndex]];
    });
  };

  if (randomExerciseArr.length < 10) {
    getRandomExercise();
  }

  const handleSearch = (x) => {
    setSearchedExercises(true);
  };

  return (
    <div>
      <div>
        <div className="begin-wording my-12 px-12">
          <p className="text-4xl capitalize my-8 text-center">
            Welcome to my gym app
          </p>
          <p>Search an exercise by name, by level, by muscle or by category.</p>
        </div>
        <div className="search-bar">
          <SearchComponent onChecked={handleSearch} />
        </div>
      </div>
      <div>
        <RandomExercise arr={randomExerciseArr} />
      </div>
    </div>
  );
}

export default App;
