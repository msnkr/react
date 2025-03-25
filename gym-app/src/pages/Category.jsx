import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomExercise from "../components/RandomExerciseComponent";

import data from "../assets/data.json";

const Category = () => {
  const { id } = useParams();

  const filteredCategory = data.filter((exercise) => {
    return (
      exercise.name === id ||
      exercise.level === id ||
      exercise.force === id ||
      exercise.mechanic === id ||
      exercise.equipment === id
    );
  });

  return (
    <div>
      <Link to={"/musckles/show-categories/"}>
        <button>Home</button>
      </Link>
      <RandomExercise arr={filteredCategory} />
    </div>
  );
};

export default Category;
