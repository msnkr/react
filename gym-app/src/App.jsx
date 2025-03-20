import "./App.css";
import { useState, useEffect } from "react";
import exercises from "./assets/data.json";

import SearchComponent from "./components/SearchComponent";
import RandomExercise from "./components/RandomExerciseComponent";

function App() {
  const [randomExerciseArr, setRandomExerciseArr] = useState([]);
  const [searchExercise, setSearchExercise] = useState("");

  useEffect(() => {
    for (let index = 0; index < 10; index++) {
      let randomIndex = Math.floor(Math.random() * exercises.length);
      setRandomExerciseArr((prev) => {
        return [...prev, exercises[randomIndex]];
      });
    }
  }, []);

  const handleClick = (e) => {
    setSearchExercise(e);
  };

  const filteredExercise = exercises.filter((exercise) => {
    const searchTerm = searchExercise.toLocaleLowerCase().trim();

    return (
      (exercise.name && exercise.name.includes(searchTerm)) ||
      (exercise.primaryMuscles &&
        exercise.primaryMuscles.includes(searchTerm)) ||
      (exercise.category && exercise.category.includes(searchTerm)) ||
      (exercise.equipment && exercise.equipment.includes(searchTerm)) ||
      (exercise.force && exercise.force.includes(searchTerm)) ||
      (exercise.level && exercise.level.includes(searchTerm)) ||
      (exercise.mechanic && exercise.mechanic.includes(searchTerm))
    );
  });

  return (
    <div>
      <div>
        <div className="begin-wording my-12 px-12 text-center">
          <p className="text-4xl capitalize my-8 text-center px-12">
            Welcome to my gym app
          </p>
          <p>
            Search an exercise by level, primary muscle, category, equipment, or
            mechanic.
          </p>
        </div>
        <div className="search-bar">
          <SearchComponent searchItem={handleClick} />
        </div>
      </div>
      <div>
        {searchExercise === "" ? (
          <div>
            <RandomExercise arr={randomExerciseArr} />
          </div>
        ) : (
          <div>
            <RandomExercise arr={filteredExercise} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
