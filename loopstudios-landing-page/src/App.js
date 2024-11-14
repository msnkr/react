import Navbar from "./components/Navbar";
import Grid from "./components/Grid";
import mainImage from "./images/mobile/image-hero.jpg";
import section2Image from "./images/mobile/image-interactive.jpg";
import deepEarth from "./images/mobile/image-deep-earth.jpg";
import nightArcade from "./images/mobile/image-night-arcade.jpg";
import soccerTeam from "./images/mobile/image-soccer-team.jpg";
import theGrid from "./images/mobile/image-grid.jpg";
import upAbove from "./images/mobile/image-from-above.jpg";
import pocketBorealis from "./images/mobile/image-pocket-borealis.jpg";
import theCuriosity from "./images/mobile/image-curiosity.jpg";
import fishEye from "./images/mobile/image-fisheye.jpg";

const imageArr = [
  deepEarth,
  nightArcade,
  soccerTeam,
  theGrid,
  upAbove,
  pocketBorealis,
  theCuriosity,
  fishEye,
];

const textArr = [
  "deep earth",
  "Night arcade",
  "soccer team vr",
  "the grid",
  "from up above vr",
  "pocket borealis",
  "the curiosity",
  "make it fisheye",
];

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main-image relative -z-50">
        <img src={mainImage} />
        <div className="main-wording absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-6xl border-2 px-12 py-8 font-alata uppercase font-extralight">
            Immerseive Experiences That Deliver
          </p>
        </div>
      </div>
      <div className="section-2 px-8 mt-20">
        <div>
          <img src={section2Image} />
        </div>
        <div className="text-center">
          <p className="text-4xl uppercase mt-8">
            The leader in interactive vr
          </p>
          <p className="font-josefin tracking-wider p-8">
            Founded in 2011, Loopstudios has been producing world-class virtual
            reality projects for some of the best companies around the globe.
            Our award-winning creations have transformed businesses through
            digital experiences that bind to their brand.{" "}
          </p>
        </div>
      </div>
      <div className="section-3">
        <div>
          <p className="text-4xl uppercase text-center">Our creations</p>
        </div>
        <div>
          {imageArr.map((image, index) => (
            <Grid img={image} text={textArr[index]} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
