import { useState } from "react";
import "./App.css";
import exercises from "./assets/exercise.json";
import RandomExercise from "./components/RandomExercise";
import SearchBarComponent from "./components/SearchBarComponent";

function App() {
  const [currentExerciseSearch, setCurrentExerciseSearch] = useState([]);
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
        setModal(true);
      }
    }
  };
  console.log(currentExerciseSearch);
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
      <div className={`${modal ? "visible" : "invisible"} duration-500`}>
        <div className="mt-20">
          <SearchBarComponent
            onSearch={handleChange}
            onChecked={handleOnClick}
          />
        </div>
        {currentExerciseSearch.map((exercise, index) => {
          return (
            <div className="mt-20">
              <div
                key={index}
                className="mt-6 flex flex-col justify-center items-center text-center space-y-1"
              >
                <img
                  src={`../public/exercise-images/${exercise.images[1]}`}
                  alt={exercise.name}
                  className="w-full h-[200px] object-cover rounded-md"
                />
                <p className="text-2xl w-[300px]">{exercise.name}</p>
                <p className="capitalize text-gray-400">{exercise.level}</p>

                <p className="text-xl capitalize">{exercise.primaryMuscles}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
