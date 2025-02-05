import navIcon from "./assets/icon-hamburger.svg";
import logo from "./assets/logo.svg";
import imageIntro from "./assets/image-intro-mobile.jpg";
import introLeftMobile from "./assets/bg-pattern-intro-left-mobile.svg";
import introRightMobile from "./assets/bg-pattern-intro-right-mobile.svg";

function App() {
  return (
    <div className="font-fontKarla">
      <div className="navbar-container flex justify-between px-12 py-8 items-center">
        <div>
          <img src={logo} alt="logo-icon" />
        </div>
        <div>
          <img src={navIcon} alt="hamburger-icon" />
        </div>
      </div>
      <div className="intro">
        <div>
          <img src={imageIntro} className="w-full" alt="image-intro" />
        </div>
      </div>
      <div>
        <div className="bg-dark-violet w-full text-white relative h-[500px] flex flex-col justify-center items-center">
          <div className="absolute top-0 left-0">
            <img src={introLeftMobile} alt="pattern" />
          </div>
          <div className="px-8 flex flex-col items-center justify-center z-50 text-center">
            <p className="font-fontDM text-6xl mb-8">
              Humanizing your insurance
            </p>
            <p className="text-white  text-lg">
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that's right
              for you. Ensure you and your loved ones are protected.{" "}
            </p>
          </div>
          <button className="border-2 px-8 py-4 mt-8">VIEW PLANS</button>
          <div className="absolute top-2/3 right-0">
            <img src={introRightMobile} alt="pattern" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
