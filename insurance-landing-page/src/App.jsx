import navIcon from "./assets/icon-hamburger.svg";
import logo from "./assets/logo.svg";
import mobileIntro from "./assets/image-intro-mobile.jpg";
import mobilePatternLeft from "./assets/bg-pattern-intro-left-mobile.svg";
import mobilePatternRight from "./assets/bg-pattern-intro-right-mobile.svg";

function App() {
  return (
    <div className="font-fontKarla">
      <div className="navbar-section flex justify-between px-12 py-8 items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={navIcon} />
        </div>
      </div>
      <div className="hero-section">
        <img src={mobileIntro} className="w-full -z-50" />
      </div>
      <div className="humanizing-section">
        <div className="bg-dark-violet w-full h-[500px] relative">
          <img
            src={mobilePatternLeft}
            alt="pattern"
            className="absolute left-0 top-0"
          />
          <img
            src={mobilePatternRight}
            alt="pattern"
            className="absolute right-0 top-2/3"
          />
          <div className="text-white">
            <p>Humanizing your insurance.</p>
            <p>
              {" "}
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
