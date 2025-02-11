import { useState } from "react";
import "./App.css";
import exercises from "./assets/exercise.json";
import RandomExercise from "./components/RandomExercise";
import SearchBarComponent from "./components/SearchBarComponent";
import DisplaySearched from "./components/DisplaySearched.jsx";

function App() {
  const [currentExerciseSearch, setCurrentExerciseSearch] = useState([]);
  const [currentSearch, setCurrentSearch] = useState("");
  const [modal, setModal] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchBar(value);
  };

  const handleOnClick = () => {
    if (searchBar !== "") {
      if (searchBar.toLowerCase() === "beginner") {
        const currentExercise = exercises.filter(
          (exercise) => exercise.level === "beginner"
        );
        setCurrentExerciseSearch(currentExercise);
        setCurrentSearch(searchBar);
        setModal(true);
      }
    }
  };
  return (
    <div>
      <div className={`${modal ? "invisible hidden" : "visible"} duration-500`}>
        <div className="flex flex-col justify-center items-center text-center mt-20">
          <p className="text-xl font-semibold">Hi</p>
          <p className="text-5xl font-semibold w-2/3">Welcome to my gym app</p>
          <p className="text-xl mt-8">Completely free of charge</p>
        </div>
        <SearchBarComponent onSearch={handleChange} onChecked={handleOnClick} />
        <div className="mt-8 flex flex-col justify-center items-center">
          <div>
            <RandomExercise />
          </div>
        </div>
      </div>
      <div>
        <div>
          <SearchBarComponent
            onSearch={handleChange}
            onChecked={handleOnClick}
          />
        </div>
        <div className="mt-8">
          <div>
            <p className="text-xl text-center capitalize">
              {currentSearch} exercises
            </p>
          </div>
          <div>
            <DisplaySearched exerciseArr={currentExerciseSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
