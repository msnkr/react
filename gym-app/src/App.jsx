import { useState } from "react";
import "./App.css";
import RandomExercise from "./components/RandomExercise";
import SearchBarComponent from "./components/SearchBarComponent";

function App() {
  const [modal, setModal] = useState(false);
  const [searchBar, setSearchBar] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSearchBar(value);
  };

  const handleOnClick = () => {
    console.log(searchBar);
  };

  return (
    <div className={`${modal ? "invisible" : "visible"}`}>
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
  );
}

export default App;
