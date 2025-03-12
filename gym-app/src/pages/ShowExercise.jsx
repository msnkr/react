import exercises from "../assets/data.json";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const ShowExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([]);

  useEffect(() => {
    setWorkout(exercises[id]);
  });

  return <div></div>;
};

export default ShowExercise;
