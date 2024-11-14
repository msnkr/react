import Navbar from "./components/Navbar";
import mainImage from "./images/mobile/image-hero.jpg";

function App() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div className="main-image">
        <img src={mainImage} />
      </div>
    </div>
  );
}

export default App;
