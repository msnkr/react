// https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW

import backgroundImage from "./images/bg-mobile-dark.jpg";
import LogoComponent from "./components/LogoComponent";
import CreateTask from "./components/CreateTask";

function App() {
  return (
    <div>
      <div className="main-container">
        <div className="background-container">
          <img className="w-full" src={backgroundImage} alt="home" />
        </div>
        <div className="logo-container">
          <LogoComponent />
        </div>
        <div className="create-task-container">
          <CreateTask />
        </div>
      </div>
    </div>
  );
}

export default App;
