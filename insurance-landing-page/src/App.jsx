import navIcon from "./assets/icon-hamburger.svg";
import logo from "./assets/logo.svg";
import mobileIntro from "./assets/image-intro-mobile.jpg";
import mobilePatternLeft from "./assets/bg-pattern-intro-left-mobile.svg";
import mobilePatternRight from "./assets/bg-pattern-intro-right-mobile.svg";

import snappyProcess from "./assets/icon-snappy-process.svg";
import affordablePrices from "./assets/icon-affordable-prices.svg";
import peopleFirst from "./assets/icon-people-first.svg";
import howWeWorkMobile from "./assets/bg-pattern-how-we-work-mobile.svg";

import footerMobile from "./assets/bg-pattern-footer-mobile.svg";
import facebookLogo from "./assets/icon-facebook.svg";
import pinterestLogo from "./assets/icon-pinterest.svg";
import instagramLogo from "./assets/icon-instagram.svg";
import twitterLogo from "./assets/icon-twitter.svg";

function App() {
  return (
    <div className="font-fontKarla mb-40">
      <div className="navbar-section flex justify-between px-12 py-8 items-center">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <img src={navIcon} className="cursor-pointer" />
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
      <div className="different-section text-lg">
        <div className="text-center mt-40">
          <p className="text-5xl font-fontDM">We're different</p>
        </div>
        <div className="card flex flex-col justify-center items-center text-center mt-12">
          <img src={snappyProcess} alt="snappy" />
          <div className="mt-8 space-y-4">
            <p className="text-3xl font-fontDM">Snappy Process</p>
            <p className="w-3/4 mx-auto text-grayish-blue">
              Our application process can be completed in minutes, not hours.
              Don’t get stuck filling in tedious forms.
            </p>
          </div>
        </div>
        <div className="card flex flex-col justify-center items-center text-center mt-12">
          <img src={affordablePrices} alt="afordable" />
          <div className="mt-8 space-y-4">
            <p className="text-3xl font-fontDM">Affordable Prices</p>
            <p className="w-3/4 mx-auto text-grayish-blue">
              We don’t want you worrying about high monthly costs. Our prices
              may be low, but we still offer the best coverage possible.
            </p>
          </div>
        </div>
        <div className="card flex flex-col justify-center items-center text-center mt-12">
          <img src={peopleFirst} alt="people" />
          <div className="mt-8 space-y-4">
            <p className="text-3xl font-fontDM">People First</p>
            <p className="w-3/4 mx-auto text-grayish-blue">
              Our plans aren’t full of conditions and clauses to prevent
              payouts. We make sure you’re covered when you need it.
            </p>
          </div>
        </div>
      </div>
      <div className="find-out-section relative mt-20 p-8">
        <div className="bg-dark-violet text-white relative h-[400px]">
          <div className="flex flex-col justify-center items-center">
            <p className="text-5xl font-fontDM text-center mt-20 z-50 mb-10">
              Find out more about how we work
            </p>
            <button className="border-2 px-8 py-2 mt-4 uppercase">
              how we work
            </button>
          </div>
          <img
            src={howWeWorkMobile}
            className="absolute bottom-0 right-0 h-full object-cover"
          />
        </div>
      </div>
      <div className="footer-section mt-20 flex flex-col justify-center items-center relative">
        <div>
          <img src={footerMobile} />
        </div>
        <div className="flex flex-col justify-center items-center space-y-8 absolute bottom-0">
          <img src={logo} />
          <div className="flex space-x-4">
            <img src={facebookLogo} className="w-8" />
            <img src={twitterLogo} className="w-8" />
            <img src={pinterestLogo} className="w-8" />
            <img src={instagramLogo} className="w-8" />
          </div>
        </div>
      </div>
      <div className="footer-2 relative flex flex-col justify-center items-center mt-20 text-center uppercase font-bold">
        <div>
          <p className="my-8 text-gray-400">Our Company</p>
          <div className="space-y-4">
            <p>How we work</p>
            <p>Why insure?</p>
            <p>check price</p>
            <p>reviews</p>
          </div>
        </div>
        <div>
          <p className="my-8 text-gray-400">help me</p>
          <div className="space-y-4">
            <p>faq</p>
            <p>terms of use</p>
            <p>privacy policy</p>
            <p>cookies</p>
          </div>
        </div>
        <div>
          <p className="my-8 text-gray-400">contact</p>
          <div className="space-y-4">
            <p>sales</p>
            <p>support</p>
            <p>live chat</p>
          </div>
        </div>
        <div>
          <p className="my-8 text-gray-400">others</p>
          <div className="space-y-4">
            <p>careers</p>
            <p>press</p>
            <p>licenses</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
