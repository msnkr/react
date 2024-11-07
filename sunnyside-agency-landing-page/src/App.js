import Navbar from "./components/Navbar";
import ImageHeader from "./components/ImageHeader";
import ImageComponent from "./components/ImageComponent";
import ImageWordingComponent from "./components/ImageWordingComponent";
import Testimonial from "./components/Testimonial";
import GridItems from "./components/GridItems";
import Footer from "./components/Footer";

import imageTransform from "./images/mobile/image-transform.jpg";
import imageTransformDesktop from "./images/desktop/image-transform.jpg";
import imageStandout from "./images/mobile/image-stand-out.jpg";
import imageStandoutDesktop from "./images/desktop/image-stand-out.jpg";
import emily from "./images/image-emily.jpg";
import thomas from "./images/image-thomas.jpg";
import jennie from "./images/image-jennie.jpg";

export default function App() {
  return (
    <div className="text-very-dark-desaturated-blue">
      <div className="section-1 relative">
        <Navbar />
        <div className="image-header">
          <ImageHeader />
        </div>
      </div>
      <div className="grid-item-2 xl:grid grid-cols-2">
        <div className="section-2 order-2">
          <ImageComponent image={imageTransformDesktop} />
        </div>
        <div className="section-3 p-12 xl:w-1/2 order-1 xl:flex flex-col xl:justify-center xl:items-center xl:mx-auto">
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
              <button className="text-xl font-fraunces uppercase font-bold relative">
                <span className="z-50"> Learn more</span>
                <div className="w-full h-[10px] bg-soft-yello absolute top-5 opacity-30 rounded-full -z-50"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-item-3 xl:grid grid-cols-2">
        <div className="section-4">
          <ImageComponent image={imageStandoutDesktop} />
        </div>
        <div className="section-5 p-12 xl:w-1/2 xl:flex flex-col xl:justify-center xl:items-center xl:mx-auto">
          <div className="space-y-12">
            <p className="text-5xl font-fraunces text-center font-bold">
              Stand out to the right audience
            </p>
            <div>
              <p className="mt-8 text-xl font-barlow text-center font-bold tracking-wider text-dark-grayish-blue">
                Using collaborative formula of designers, researchers,
                photographers, videographers, and copywriters, we'll build and
                extend your brand in digital places.
              </p>
            </div>
            <div className="mt-8 text-center">
              <button className="text-xl font-fraunces uppercase font-bold relative">
                <span className="z-50">Learn more</span>
                <div className="w-full h-[10px] bg-soft-red absolute top-5 opacity-40 rounded-full -z-50"></div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="section-6 relative">
        <ImageWordingComponent />
      </div>
      <div className="section-6 p-12 text-center">
        <div>
          <p className="uppercase text-grayish-blue font-fraunces text-2xl tracking-widest font-bold">
            Client testimonials
          </p>
        </div>
        <div>
          <Testimonial
            position={"Marketing Director"}
            image={emily}
            wording={
              "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit"
            }
            name={"Emily R."}
          />
          <Testimonial
            position={"Chief Operating Officer"}
            image={thomas}
            wording={
              "Sunnyside's enthusiasm coupled with their keen interest in our brand's success made it a satisfying and enjoyable experience"
            }
            name={"Thomas S."}
          />
          <Testimonial
            position={"Business Owner"}
            image={jennie}
            wording={
              "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!"
            }
            name={"Jennie F."}
          />
        </div>
      </div>
      <div className="section-7">
        <GridItems />
      </div>
      <div className="section-8 bg-footer-background">
        <Footer />
      </div>
    </div>
  );
}
