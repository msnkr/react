import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import heroImgMobile from "./images/mobile/image-hero.jpg";
import imageInteractiveMobile from "./images/mobile/image-interactive.jpg";
import { mobileArr, wordingArr } from "./components/ImageArr";
import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <div className="relative navbar">
        <div>
          <Navbar />
        </div>
        <div>
          <img src={heroImgMobile} alt="hero-image" />
        </div>
      </div>
      <div className="hero-text">
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl uppercase border-2 border-white px-12 py-8 leading-10 font-extralight">
            Immersive experiences that deliver
          </p>
        </div>
      </div>
      <div className="leader-section mt-12 px-12">
        <div className="my-12">
          <img src={imageInteractiveMobile} alt="leader-image" />
        </div>
        <div>
          <p className="text-4xl uppercase font-thin tracking-wider text-center">
            The leader in interactive vr
          </p>
        </div>
        <div className="mt-8 text-center font-medium">
          <p>
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.
          </p>
        </div>
      </div>
      <div className="grid-items mt-12 px-12">
        <div className="my-12">
          <p className="text-4xl uppercase font-thin tracking-wider text-center">
            Our creations
          </p>
        </div>
        <div>
          <Grid arr={mobileArr} wordingArr={wordingArr} />
        </div>
        <div className="text-center my-8">
          <button className="text-xl uppercase border-2 border-black px-8 py-2">
            See all
          </button>
        </div>
      </div>
      <div className="footer bg-black mt-12 p-12">
        <Footer />
      </div>
    </div>
  );
}

export default App;
