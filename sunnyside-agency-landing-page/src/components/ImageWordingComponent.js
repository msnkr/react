import graphicDesign from "../images/mobile/image-graphic-design.jpg";
import photography from "../images/mobile/image-photography.jpg";

function ImageWordingComponent() {
  return (
    <div className="font-barlow">
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-dark-saturated-cyan-graphic-design">
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
          <img className="z-0 " src={graphicDesign} />
        </div>
      </div>
      <div className="relative">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center text-dark-blue-photography-text">
          <p className="text-5xl z-50 font-bold font-fraunces">Photography</p>
          <p className="mt-12 text-lg px-10 font-bold tracking-wider">
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
