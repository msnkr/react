import Navbar from "./components/Navbar";

import imageHeader from "./images/mobile/image-header.jpg";
import imageTransform from "./images/mobile/image-transform.jpg";

export default function App() {
  return (
    <div>
      <div className="section-1 relative">
        <Navbar />
        <div className="image-header">
          <img src={imageHeader} alt="image-header" />
        </div>
      </div>
      <div className="section-2">
        <div>
          <img src={imageTransform} alt="egg-image" />
        </div>
      </div>
    </div>
  );
}
