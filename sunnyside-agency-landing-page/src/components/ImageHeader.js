import imageHeader from "../images/mobile/image-header.jpg";
import imageHeaderDesktop from "../images/desktop/image-header.jpg";
import arrowIcon from "../images/icon-arrow-down.svg";

function ImageHeader() {
  return (
    <div>
      <div className="absolute top-1/2 -translate-y-1/3 left-1/2 -translate-x-1/2 text-center xl:top-1/3">
        <p className="text-6xl uppercase text-white font-bold font-fraunces tracking-widest leading-tight">
          We are creatives
        </p>
        <img
          className="mx-auto mt-4 w-[40px] h-[200px] xl:mt-[100px]"
          src={arrowIcon}
          alt="icon"
        />
      </div>
      <div>
        <img
          className="xl:hidden w-full h-[700px] object-cover object-[95%_100%]"
          src={imageHeader}
          alt="image-header"
        />
        <img
          className="hidden xl:block w-full "
          src={imageHeaderDesktop}
          alt="image-header"
        />
      </div>
    </div>
  );
}

export default ImageHeader;
