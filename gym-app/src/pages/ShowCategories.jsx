import data from "../assets/data.json";
import { useEffect, useState } from "react";

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
    <div className="capitalize space-y-12">
      <div>
        <p className="text-4xl font-semibold text-gray-400">Level</p>
        {categories.level.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-400">force</p>
        {categories.force.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-400">mechanic</p>
        {categories.mechanic.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
      <div>
        <p className="text-4xl font-semibold text-gray-400">equipment</p>
        {categories.equipment.map((x, index) => (
          <p key={index}>{x}</p>
        ))}
      </div>
    </div>
  );
};

export default ShowCategories;
