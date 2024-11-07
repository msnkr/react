import milkBottleImage from "../images/mobile/image-gallery-milkbottles.jpg";
import coneImage from "../images/mobile/image-gallery-cone.jpg";
import orangeImage from "../images/mobile/image-gallery-orange.jpg";
import sugarCubesImage from "../images/mobile/image-gallery-sugar-cubes.jpg";

function GridItems() {
  return (
    <div className="grid grid-cols-2">
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
  );
}

export default GridItems;
