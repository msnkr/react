import graphicDesign from "../images/mobile/image-graphic-design.jpg";
import photography from "../images/mobile/image-photography.jpg";
import graphicDesignDesktop from "../images/desktop/image-graphic-design.jpg";
import photographyDesktop from "../images/desktop/image-photography.jpg";

function ImageWordingComponent() {
  return (
    <div className="font-barlow xl:grid grid-cols-2">
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-dark-saturated-cyan-graphic-design xl:px-60">
          <p className="text-5xl z-50 font-bold font-fraunces">
            Graphic Design
          </p>
          <p className="mt-12 text-lg px-10 font-bold tracking-wider">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention
          </p>
        </div>
        <div>
          <img className="z-0 xl:hidden" src={graphicDesign} />
        </div>
        <div>
          <img
            className="z-0 hidden xl:block w-full"
            src={graphicDesignDesktop}
          />
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-dark-blue-photography-text xl:px-60">
          <p className="text-5xl z-50 font-bold font-fraunces">Photography</p>
          <p className="mt-12 text-lg px-10 font-bold tracking-wider">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image
          </p>
        </div>
        <div>
          <img className="xl:hidden" src={photography} />
        </div>
        <div>
          <img className="hidden xl:block w-full" src={photographyDesktop} />
        </div>
      </div>
    </div>
  );
}

export default ImageWordingComponent;
