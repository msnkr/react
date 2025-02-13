import "./App.css";
import { use, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayExercise from "./pages/DisplayExercise";
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
    <Router>
      <div>
        <div>
          <div className="begin-wording my-12 px-12">
            <p className="text-4xl capitalize my-8 text-center">
              Welcome to my gym app
            </p>
            <p>
              Search an exercise by name, by level, by muscle or by category.
            </p>
          </div>
          <div className="search-bar">
            <SearchComponent onChecked={handleSearch} />
          </div>
        </div>
        <div>
          {searchedExercises ? (
            <Routes>
              <Route path="/display-exercise" element={<DisplayExercise />} />
            </Routes>
          ) : (
            <RandomExercise arr={randomExerciseArr} />
          )}
        </div>
      </div>
    </Router>
  );
}

export default App;
