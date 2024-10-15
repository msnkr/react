// https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl

import logo from "./logo.svg";
import "./App.css";
import { Navbar } from "./components/navbar";
import HeroImage from "../public/images/image-web-3-desktop.jpg";

function App() {
  return (
    <div>
      <div className="section-1">
        <div className="logo">
          <h1 className="logo-file">W.</h1>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="section-2">
        <img className="section-2-img" src={HeroImage} />
      </div>
    </div>
  );
}

export default App;
