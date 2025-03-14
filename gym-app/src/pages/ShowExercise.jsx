import exercises from "../assets/data.json";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import weightIcon from "../../public/icons/weight.png";
import levelIcon from "../../public/icons/level-up.png";
import forceIcon from "../../public/icons/pull.png";
import categoryIcon from "../../public/icons/category.png";
import equipmentIcon from "../../public/icons/weight.png";

const ShowExercise = () => {
  const { id } = useParams();
  const [workout, setWorkout] = useState([null]);

  useEffect(() => {
    setWorkout(exercises[id]);
  }, [id]);

  if (!workout) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="p-8">
        <Link to={"/"}>
          <button className="border px-4 py-2 rounded-lg">Go Home</button>
        </Link>
      </div>

      <div className="mt-12 space-y-6">
        {workout.images &&
          workout.images.map((image, index) => (
            <div key={index}>
              <img src={`../../public/exercise-images/${image}`} alt={""} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default ShowExercise;
