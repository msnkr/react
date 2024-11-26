import Navbar from "./components/Navbar";
import heroImgMobile from "./images/mobile/image-hero.jpg";
import imageInteractiveMobile from "./images/mobile/image-interactive.jpg";
import { mobileArr } from "./components/ImageArr";
import Grid from "./components/Grid";

function App() {
  return (
    <div>
      <div className="relative">
        <div>
          <Navbar />
        </div>
        <div>
          <img src={heroImgMobile} />
        </div>
      </div>
      <div>
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl uppercase border-2 border-white px-12 py-8 leading-10 font-extralight">
            Immersive experiences that deliver
          </p>
        </div>
      </div>
      <div className="mt-12 px-12">
        <div className="my-12">
          <img src={imageInteractiveMobile} />
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
      <div className="mt-12 px-12">
        <div className="my-12">
          <p className="text-4xl uppercase font-thin tracking-wider text-center">
            Our creations
          </p>
        </div>
        <div>
          <Grid arr={mobileArr} />
        </div>
      </div>
    </div>
  );
}

export default App;
