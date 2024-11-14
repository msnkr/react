import Navbar from "./components/Navbar";
import mainImage from "./images/mobile/image-hero.jpg";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main-image relative -z-50">
        <img src={mainImage} />
        <div className="main-wording absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-white text-6xl border-2 px-12 py-8 font-alata uppercase font-extralight">
            Immerseive Experiences That Deliver
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
