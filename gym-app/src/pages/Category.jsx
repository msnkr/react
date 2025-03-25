import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomExercise from "../components/RandomExerciseComponent";

import data from "../assets/data.json";

const Category = () => {
  const { id } = useParams();
  const x = id;

  const filteredCategory = data.filter((exercise) => {
    return exercise[x] === id;
  });

  return (
    <div>
      <RandomExercise arr={filteredCategory} />
    </div>
  );
};

export default Category;
