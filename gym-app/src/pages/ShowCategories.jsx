import data from "../assets/data.json";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ShowCategories = () => {
  const [categories, setCategories] = useState({
    force: [],
    level: [],
    mechanic: [],
    equipment: [],
    primaryMuscles: [],
  });

  useEffect(() => {
    const uniqueCategories = {
      force: new Set(),
      level: new Set(),
      mechanic: new Set(),
      equipment: new Set(),
      primaryMuscles: new Set(),
    };

    data.forEach((exercise) => {
      uniqueCategories.force.add(exercise.force);
      uniqueCategories.level.add(exercise.level);
      uniqueCategories.mechanic.add(exercise.mechanic);
      uniqueCategories.equipment.add(exercise.equipment);
      uniqueCategories.primaryMuscles.add(exercise.primaryMuscles);
    });

    setCategories({
      force: Array.from(uniqueCategories.force),
      level: Array.from(uniqueCategories.level),
      mechanic: Array.from(uniqueCategories.mechanic),
      equipment: Array.from(uniqueCategories.equipment),
      primaryMuscles: Array.from(uniqueCategories.primaryMuscles),
    });
  }, []);

  return (
    <div className="capitalize space-y-12 p-8">
      <Link to={"/musckles/"}>
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
          Back
        </button>
      </Link>
      <div className="mt-8">
        <p className="text-4xl font-semibold text-gray-400 mb-8">Level</p>
        <div className="grid grid-cols-2 space-y-2">
          {categories.level.map((x, index) => (
            <Link key={index} to={`${x}`}>
              <p>{x}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-400 mb-8">force</p>
        <div className="grid grid-cols-2 space-y-2">
          {categories.force.map((x, index) => (
            <Link key={index} to={`${x}`}>
              <p>{x}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-400 mb-8">mechanic</p>
        <div className="grid grid-cols-2 space-y-2">
          {categories.mechanic.map((x, index) => (
            <Link key={index} to={`${x}`}>
              <p>{x}</p>
            </Link>
          ))}
        </div>
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-400 mb-8">equipment</p>
        <div className="grid grid-cols-2 space-y-2">
          {categories.equipment.map((x, index) => (
            <Link key={index} to={`${x}`}>
              <p>{x}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShowCategories;
