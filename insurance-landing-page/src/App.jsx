import navIcon from "./assets/icon-hamburger.svg";
import logo from "./assets/logo.svg";
import imageIntro from "./assets/image-intro-mobile.jpg";
import introLeftMobile from "./assets/bg-pattern-intro-left-mobile.svg";
import introRightMobile from "./assets/bg-pattern-intro-right-mobile.svg";
import snappyProcess from "./assets/icon-snappy-process.svg";
import affordablePrices from "./assets/icon-affordable-prices.svg";
import peopleFirst from "./assets/icon-people-first.svg";
import findOutMorePatternMobile from "./assets/bg-pattern-how-we-work-mobile.svg";
import footerMobile from "./assets/bg-pattern-footer-mobile.svg";

import facebookIcon from "./assets/icon-facebook.svg";
import twitterIcon from "./assets/icon-twitter.svg";
import pinterestIcon from "./assets/icon-pinterest.svg";
import instagramIcon from "./assets/icon-instagram.svg";

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
      <div>
        <div className="border border-black mt-[100px] w-1/2 mx-auto"></div>
        <div className="text-center">
          <p className="text-5xl font-fontDM mt-[50px]">We're different</p>
          <div className="card-container">
            <div className="mt-20 flex flex-col items-center justify-center">
              <img src={snappyProcess} alt="snappy-process" />
              <p className="mt-12 text-4xl font-fontDM">Snappy Process</p>
              <p className="mt-4 text-lg px-8">
                Our application process can be completed in minutes, not hours.
                Don't get stuck filling in tedious forms.
              </p>
            </div>
            <div className="mt-20 flex flex-col items-center justify-center">
              <img src={affordablePrices} alt="snappy-process" />
              <p className="mt-12 text-4xl font-fontDM">Snappy Process</p>
              <p className="mt-4 text-lg px-8">
                Our application process can be completed in minutes, not hours.
                Don't get stuck filling in tedious forms.
              </p>
            </div>
            <div className="mt-20 flex flex-col items-center justify-center">
              <img src={peopleFirst} alt="people-first" />
              <p className="mt-12 text-4xl font-fontDM">People first</p>
              <p className="mt-4 text-lg px-8">
                Our plans aren't full of conditions and clauses to prevent
                payouts. We make sure your're covered when you need it.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-8">
        <div className="bg-dark-violet h-[350px] mt-20 relative flex flex-col justify-center items-center text-center">
          <img
            className="absolute top-0 right-0"
            src={findOutMorePatternMobile}
            alt="pattern"
          />
          <div className="text-white z-50">
            <p className="text-6xl font-fontDM">
              Find out more about how we work
            </p>
            <button className="border px-8 py-4 mt-8">HOW WE WORK</button>
          </div>
        </div>
      </div>
      <div className="footer-section mt-20">
        <div className="flex flex-col justify-center items-center relative">
          <img src={footerMobile} className="w-full absolute" />
          <img src={logo} className="w-[200px] z-50" />
          <div className="flex z-50 mt-12 space-x-4">
            <img src={facebookIcon} className="w-10" />
            <img src={twitterIcon} className="w-10" />
            <img src={pinterestIcon} className="w-10" />
            <img src={instagramIcon} className="w-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
