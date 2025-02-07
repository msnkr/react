import exercises from "../assets/exercise.json";

export default function RandomExercise() {
  let exerciseArr = [];

  for (let index = 0; index < 5; index++) {
    let randomIndex = Math.floor(Math.random() * exercises.length);
    exerciseArr.push(exercises[randomIndex]);
  }

  return (
    <div>
      {exerciseArr.map((element, index) => {
        return (
          <div key={index}>
            <p>{element.name}</p>
            <p>{element.primaryMuscles}</p>
            <p>{element.level}</p>
          </div>
        );
      })}
    </div>
  );
}
