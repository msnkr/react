import graphicDesign from "../images/mobile/image-graphic-design.jpg";
import photography from "../images/mobile/image-photography.jpg";

function ImageWordingComponent() {
  return (
    <div>
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-dark-saturated-cyan-graphic-design">
          <p className="text-5xl z-50 font-fraunces font-bold">
            Graphic Design
          </p>
          <p className="mt-12 text-lg font-fraunces px-10 font-semibold">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients'
            attention
          </p>
        </div>
        <div>
          <img className="z-0 " src={graphicDesign} />
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-dark-blue-photography-text">
          <p className="text-5xl z-50 font-fraunces font-bold">Photography</p>
          <p className="mt-12 text-lg font-fraunces px-10 font-semibold">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image
          </p>
        </div>
        <div>
          <img src={photography} />
        </div>
      </div>
    </div>
  );
}

export default ImageWordingComponent;
