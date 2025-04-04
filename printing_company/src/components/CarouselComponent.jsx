import { useState } from "react";
import images from "./images";

import chevronRight from "../assets/chevron-right-icon.svg";
import chevronLeft from "../assets/chevron-left-icon.svg";

const CarouselComponent = () => {
  const [imageState, setImageState] = useState(0);

  const handleNext = () => {
    if (imageState !== images.length - 1) {
      setImageState(imageState + 1);
    } else {
      setImageState(0);
    }
  };

  const handlePrev = () => {
    if (imageState !== 0) {
      setImageState(imageState - 1);
    } else {
      setImageState(0);
    }
  };

  return (
    <div className="carousel relative">
      <div>
        <img
          className="w-full h-[400px] lg:h-dvh object-cover"
          src={images[imageState]}
        />
        <div
          className="absolute top-1/2 left-8 cursor-pointer"
          onClick={handlePrev}
        >
          <img className="w-20" src={chevronLeft} alt="left-icon" />
        </div>
        <div
          className="absolute top-1/2 right-8 cursor-pointer"
          onClick={handleNext}
        >
          <img className="w-20" src={chevronRight} alt="right-icon" />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
