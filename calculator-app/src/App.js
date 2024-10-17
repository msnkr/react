// https://www.frontendmentor.io/challenges/todo-app-Su1_KokOW

import backgroundImage from "./images/bg-mobile-dark.jpg";

function App() {
  return (
    <div className="font-customFont">
      <div className="main-container">
        <div className="background-container">
          <img className="w-full" src={backgroundImage} alt="home" />
        </div>
        {/* <LogoComponent /> */}
      </div>
    </div>
  );
}

export default App;
