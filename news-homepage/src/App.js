// https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl

import Navbar from "./components/navbar";
import HeroImage from "./images/image-web-3-mobile.jpg";
import NewSection from "./components/NewSection";

function App() {
  return (
    <div className="font-customFont">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="img-container px-4">
          <img src={HeroImage} alt="homepage" />
        </div>
        <div className="hero-heading px-8 py-2">
          <h1 className="text-5xl w-[80%] font-bold capitalize">
            The bright future of web 3.0?
          </h1>
        </div>
        <div className="hero-wording px-8 py-2 text-lg text-gray-400">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
        </div>
        <div className="hero-button px-8 py-2">
          <button className="uppercase font-lg bg-orange-600 px-8 py-2 font-bold">
            Read More
          </button>
        </div>
      </div>
      <div className="new-section">
        <div className="new">
          <NewSection
            heading={"New Hydrogen VS Electric Cars"}
            wording={"Will hydrogen-fueled cars ever catch up to EVs?"}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
