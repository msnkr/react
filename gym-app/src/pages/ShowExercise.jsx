import exercises from "../assets/data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([]);

  console.log(exercises[id]);

  return (
    <>
      <p>Hello, World!</p>
    </>
  );
};

export default ShowExercise;
