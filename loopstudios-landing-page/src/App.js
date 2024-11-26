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
        <div>
          <p>Hello, World!</p>
        </div>
      </div>
    </div>
  );
}

export default App;
