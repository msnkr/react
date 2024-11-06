import Navbar from "./components/Navbar";
import ImageHeader from "./components/ImageHeader";
import ImageComponent from "./components/ImageComponent";
import ImageWordingComponent from "./components/ImageWordingComponent";
import imageTransform from "./images/mobile/image-transform.jpg";
import imageStandout from "./images/mobile/image-stand-out.jpg";
const graphicDesignImage = "./images/mobile/image-graphic-design.jpg";

export default function App() {
  return (
    <div>
      <div className="section-1 relative">
        <Navbar />
        <div className="image-header">
          <ImageHeader />
        </div>
      </div>
      <div className="section-2">
        <ImageComponent image={imageTransform} />
      </div>
      <div className="section-3 p-12">
        <div>
          <p className="text-5xl font-fraunces text-center font-bold">
            Transform your brand
          </p>
          <div>
            <p className="mt-8 text-lg font-barlow">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>
          <div className="mt-8 text-center">
            <button className="text-xl font-fraunces font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="section-4">
        <ImageComponent image={imageStandout} />
      </div>
      <div className="section-5 p-12">
        <div>
          <p className="text-5xl font-fraunces text-center font-bold">
            Stand out to the right audience
          </p>
          <div>
            <p className="mt-8 text-lg font-barlow">
              Using collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
          </div>
          <div className="mt-8 text-center">
            <button className="text-xl font-fraunces font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="section-6">
        <ImageWordingComponent image={graphicDesignImage} />
      </div>
    </div>
  );
}
