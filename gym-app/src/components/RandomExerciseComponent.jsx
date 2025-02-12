const RandomExercise = ({ arr }) => {
  return (
    <div>
      {arr.map((exercise, index) => {
        return (
          <div>
            <img src={`../../public/exercise-images/${exercise.images[1]}`} />
            <p>{exercise.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default RandomExercise;
