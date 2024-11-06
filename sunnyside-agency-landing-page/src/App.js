import Navbar from "./components/Navbar";
import ImageHeader from "./components/ImageHeader";
import ImageComponent from "./components/ImageComponent";
import ImageWordingComponent from "./components/ImageWordingComponent";
import Testimonial from "./components/Testimonial";

import imageTransform from "./images/mobile/image-transform.jpg";
import imageStandout from "./images/mobile/image-stand-out.jpg";

export default function App() {
  return (
    <div className="text-very-dark-desaturated-blue">
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
        <div className="space-y-12">
          <p className="text-5xl font-fraunces text-center font-bold">
            Transform your brand
          </p>
          <div>
            <p className="mt-8 text-xl font-barlow text-center">
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>
          <div className="mt-8 text-center">
            <button className="text-xl font-fraunces uppercase font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="section-4">
        <ImageComponent image={imageStandout} />
      </div>
      <div className="section-5 p-12">
        <div className="space-y-12">
          <p className="text-5xl font-fraunces text-center font-bold">
            Stand out to the right audience
          </p>
          <div>
            <p className="mt-8 text-xl font-barlow text-center">
              Using collaborative formula of designers, researchers,
              photographers, videographers, and copywriters, we'll build and
              extend your brand in digital places.
            </p>
          </div>
          <div className="mt-8 text-center">
            <button className="text-xl font-fraunces uppercase font-bold">
              Learn more
            </button>
          </div>
        </div>
      </div>
      <div className="section-6 relative">
        <ImageWordingComponent />
      </div>
      <div className="section-6 p-12 text-center">
        <div>
          <p className="uppercase font-barlow text-2xl tracking-wider font-bold">
            Client testimonials
          </p>
        </div>
        <div>
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
