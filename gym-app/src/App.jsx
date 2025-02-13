import "./App.css";
import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisplayExercise from "./pages/DisplayExercise";
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
    <Router>
      <div>
        <div>
          <div className="begin-wording my-12 text-center px-12">
            <p className="text-4xl capitalize my-8">Welcome to my gym app</p>
            <p>
              Search an exercise by name, or by level, by muscle or by machine
            </p>
          </div>
          <div className="search-bar">
            <SearchComponent />
            <Routes>
              <Route path="/display-exercise" element={<DisplayExercise />} />
            </Routes>
          </div>
        </div>
        <div>
          <div>
            <RandomExercise arr={randomExerciseArr} />
          </div>
        </div>
      </div>
    </Router>
  );
}
export default App;
