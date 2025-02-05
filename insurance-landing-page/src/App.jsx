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
      <div className="into">
        <div>
          <img src={imageIntro} className="w-full" alt="image-intro" />
        </div>
      </div>
      <div>
        <div className="bg-dark-violet w-full text-white">
          <div>
            <img src={introLeftMobile} alt="pattern" />
          </div>
          <p className="text-5xlfont-semibold font-fontDM">
            Humanizing your insurance
          </p>
          <p className="text-white">
            Get your life insurance coverage easier and faster. We blend our
            expertise and technology to help you find the plan that's right for
            you. Ensure you and your loved ones are protected.{" "}
          </p>
          <button className="">VIEW PLANS</button>
          <div>
            <img src={introRightMobile} alt="pattern" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
