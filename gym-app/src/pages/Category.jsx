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
      <div className="p-8">
        <Link to={"/musckles/show-categories/"}>
          <button className="border px-4 py-2 rounded-lg flex space-x-4 cursor-pointer items-center">
            <span className="mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
            </span>
            Categories
          </button>
        </Link>
      </div>
      <RandomExercise arr={filteredCategory} />
    </div>
  );
};

export default Category;
