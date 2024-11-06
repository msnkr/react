import Navbar from "./components/Navbar";
import ImageHeader from "./components/ImageHeader";
import imageTransform from "./images/mobile/image-transform.jpg";
import imageStandout from "./images/mobile/image-stand-out.jpg";

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
        <div>
          <img src={imageTransform} alt="egg-image" />
        </div>
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
        <div>
          <div>
            <img src={imageStandout} alt="stand-out" />
          </div>
        </div>
      </div>
    </div>
  );
}
