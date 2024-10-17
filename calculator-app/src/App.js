// https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW

import backgroundImage from "./images/bg-mobile-dark.jpg";
import LogoComponent from "./components/LogoComponent";
import CreateTask from "./components/CreateTask";
import CurrentTasks from "./components/CurrentTasks";

function App() {
  return (
    <div>
      <div className="main-container font-customFont">
        <div className="background-container">
          <img className="w-full" src={backgroundImage} alt="home" />
        </div>
        <div className="logo-container">
          <LogoComponent />
        </div>
        <div className="create-task-container">
          <CreateTask />
        </div>
        <div className="current-tasks mt-[100px] text-center flex flex-col justify-center bg-very-dark-desaturated-blue p-4 w-3/4 mx-auto rounded-xl pb-8 space-y-4">
          <CurrentTasks prop={"get bepsi"} />
        </div>
      </div>
    </div>
  );
}

export default App;
