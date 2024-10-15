// https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl

import heroImage from "./images/image-web-3-mobile.jpg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Headings } from "./components/Heading";
import { Wording } from "./components/Wording";
import { Button } from "./components/Button";

function App() {
  return (
    <div>
      <div className="navbar-section">
        <div className="logo">
          <h1 className="logo-file">W.</h1>
        </div>
        <div className="navbar">
          <Navbar />
        </div>
      </div>
      <div className="hero-section">
        <img src={heroImage} />
        <div className="hero-section-wording">
          <Headings prop={"The Bright Future of Web 3.0?"} />
          <Wording
            prop={
              "We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
            }
          />
        </div>
        <Button prop={"Read More"} />
      </div>
      <div className="section-2">
        <div>
          <h1>New</h1>
        </div>
      </div>
    </div>
  );
}

export default App;
