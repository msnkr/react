import exercises from "../assets/data.json";
import { useParams } from "react-router-dom";

const FilteredPage = ({ search }) => {
  const filteredExercise = exercises.filter((exercise) => {
    const searchTerm = search.toLocaleLowerCase();
    return (
      (exercise.primaryMuscles &&
        exercise.primaryMuscles.includes(searchTerm)) ||
      (exercise.category && exercise.category.includes(searchTerm)) ||
      (exercise.equipment && exercise.equipment.includes(searchTerm)) ||
      (exercise.force && exercise.force.includes(searchTerm)) ||
      (exercise.level && exercise.level.includes(searchTerm)) ||
      (exercise.mechanic && exercise.mechanic.includes(searchTerm))
    );
  });
};

export default FilteredPage;
