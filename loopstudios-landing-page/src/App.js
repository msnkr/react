import Navbar from "./components/Navbar";
import heroImgMobile from "./images/mobile/image-hero.jpg";

function App() {
  return (
    <div>
      <div className="relative">
        <div>
          <Navbar />
        </div>
        <div>
          <img src={heroImgMobile} />
        </div>
      </div>
      <div>
        <div className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-5xl uppercase border-2 border-white px-12 py-8 leading-10 font-extralight">
            Immersive experiences that deliver
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
