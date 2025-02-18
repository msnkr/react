import navIcon from "./assets/icon-hamburger.svg";
import logo from "./assets/logo.svg";
import mobileIntro from "./assets/image-intro-mobile.jpg";
import mobilePatternLeft from "./assets/bg-pattern-intro-left-mobile.svg";
import mobilePatternRight from "./assets/bg-pattern-intro-right-mobile.svg";

import snappyProcess from "./assets/icon-snappy-process.svg";
import affordablePrices from "./assets/icon-affordable-prices.svg";
import peopleFirst from "./assets/icon-people-first.svg";

function App() {
  return (
    <div className="font-fontKarla mb-40">
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
        <div className="bg-dark-violet w-full h-[450px] relative">
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
          <div className="text-white flex flex-col justify-center items-center text-center px-12 py-12">
            <p className="text-5xl py-4 font-fontDM">
              Humanizing your insurance.
            </p>
            <p className="py-2">
              {" "}
              Get your life insurance coverage easier and faster. We blend our
              expertise and technology to help you find the plan that’s right
              for you. Ensure you and your loved ones are protected.{" "}
            </p>
            <button className="border px-3 py-2 mt-4 uppercase">
              View Plans
            </button>
          </div>
        </div>
      </div>
      <div className="different-section">
        <div className="text-center mt-40">
          <p className="text-5xl font-fontDM">We're different</p>
        </div>
        <div className="card flex flex-col justify-center items-center text-center mt-20">
          <img src={snappyProcess} alt="snappy" />
          <div className="mt-8 space-y-8">
            <p className="text-4xl font-fontDM">Snappy Process</p>
            <p className="w-3/4 mx-auto">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
        </div>
        <div className="card flex flex-col justify-center items-center text-center mt-12">
          <img src={affordablePrices} alt="afordable" />
          <div className="mt-8 space-y-8">
            <p className="text-4xl font-fontDM">Affordable Prices</p>
            <p className="w-3/4 mx-auto">
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
        </div>
        <div className="card flex flex-col justify-center items-center text-center mt-12">
          <img src={peopleFirst} alt="people" />
          <div className="mt-8 space-y-8">
            <p className="text-4xl font-fontDM">People First</p>
            <p className="w-3/4 mx-auto">
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
