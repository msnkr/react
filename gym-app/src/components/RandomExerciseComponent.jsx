const RandomExercise = ({ arr }) => {
  return (
    <div className="w-96 flex flex-col justify-center items-center mx-auto my-4">
      {arr.map((exercise, index) => {
        return (
          <div
            key={index}
            className="my-2 border p-4 rounded-lg shadow-lg w-80"
          >
            <img
              src={`../../public/exercise-images/${exercise.images[1]}`}
              alt="exercise-image"
              className="rounded-lg w-full h-[200px] object-cover"
            />
            <div className="space-y-2 capitalize">
              <p className="mt-2 text-xl font-semibold">{exercise.name}</p>
              <p>category: {exercise.category}</p>
              <p>level: {exercise.level}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RandomExercise;
