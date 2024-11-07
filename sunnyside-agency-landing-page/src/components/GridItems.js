import milkBottleImage from "../images/mobile/image-gallery-milkbottles.jpg";
import coneImage from "../images/mobile/image-gallery-cone.jpg";
import orangeImage from "../images/mobile/image-gallery-orange.jpg";
import sugarCubesImage from "../images/mobile/image-gallery-sugar-cubes.jpg";
import milkBottleImageDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import coneImageDesktop from "../images/desktop/image-gallery-cone.jpg";
import orangeImageDesktop from "../images/desktop/image-gallery-orange.jpg";
import sugarCubesImageDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";

function GridItems() {
  return (
    <div>
      <div className="grid grid-cols-2 xl:hidden">
        <div>
          <img src={milkBottleImage} alt="Milk Bottle" />
        </div>
        <div>
          <img src={orangeImage} alt="Orange" />
        </div>
        <div>
          <img src={coneImage} alt="Ice-Cream-Cone" />
        </div>
        <div>
          <img src={sugarCubesImage} alt="Sugar-Cubes" />
        </div>
      </div>
      <div className="hidden xl:grid grid-cols-4">
        <div>
          <img src={milkBottleImageDesktop} alt="Milk Bottle" />
        </div>
        <div>
          <img src={orangeImageDesktop} alt="Orange" />
        </div>
        <div>
          <img src={coneImageDesktop} alt="Ice-Cream-Cone" />
        </div>
        <div>
          <img src={sugarCubesImageDesktop} alt="Sugar-Cubes" />
        </div>
      </div>
    </div>
  );
}

export default GridItems;
