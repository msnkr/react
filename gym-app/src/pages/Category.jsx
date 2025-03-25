import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RandomExercise from "../components/RandomExerciseComponent";

import data from "../assets/data.json";

const Category = () => {
  const { id } = useParams();

  const filteredCategory = data.filter((exercise) => {
    return exercise.level === id;
  });

  return (
    <div>
      {filteredCategory.map((exercise) => (
        <div key={exercise.id}>
          <p>{exercise.name}</p>
          <p>{exercise.level}</p>
        </div>
      ))}
    </div>
  );
};

export default Category;
