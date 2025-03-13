import "./App.css";
import { useState, useEffect } from "react";
import exercises from "./assets/data.json";

import SearchComponent from "./components/SearchComponent";
import RandomExercise from "./components/RandomExerciseComponent";

function App() {
  const [randomExerciseArr, setRandomExerciseArr] = useState([]);
  const [searchExercise, setSearchExercise] = useState("");
  const [searchFlag, setSearchFlag] = useState(false);

  useEffect(() => {
    for (let index = 0; index < 5; index++) {
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
    return exercise.primaryMuscles.includes(searchExercise.toLocaleLowerCase());
  });

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
          <SearchComponent searchItem={handleClick} />
        </div>
      </div>
      <div className={`${searchFlag ? "hidden invisible" : "visible block"}`}>
        <RandomExercise arr={randomExerciseArr} />
      </div>
      <div className={`${searchFlag ? "visible block" : "hidden invisible"}`}>
        {filteredExercise.map((exercise, index) => (
          <p>{exercise.name}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
