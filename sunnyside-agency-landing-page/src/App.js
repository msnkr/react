import Navbar from "./components/Navbar";

import imageHeader from "./images/mobile/image-header.jpg";

export default function App() {
  return (
    <div>
      <div className="section-1 relative">
        <Navbar />
        <div className="image-header absolute top-0">
          <img className="z-0" src={imageHeader} />
        </div>
      </div>
    </div>
  );
}
