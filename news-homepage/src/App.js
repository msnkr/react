// https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl

import heroImage from "./images/image-web-3-mobile.jpg";
import "./App.css";
import { Navbar } from "./components/navbar";
import { Headings } from "./components/Heading";
import { Wording } from "./components/Wording";
import { Button } from "./components/Button";
import { Card } from "./components/Card";
import { Cards2 } from "./components/Card2";

import cardImage1 from "./images/image-retro-pcs.jpg";
import cardImage2 from "./images/image-top-laptops.jpg";
import cardImage3 from "./images/image-gaming-growth.jpg";

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
          <h1 className="new-heading">New</h1>
          <div className="card-container">
            <Card
              propHeading={"New Hydrogen VS Electric Cars"}
              propWording={"Will hydrogen-fueled cars ever catch up to EVs? "}
            />
            <div className="card-line"></div>

            <Card
              propHeading={"The Downsides of AI Artistry"}
              propWording={
                "What are the possible adverse effects of on-demand AI image generation?"
              }
            />
            <div className="card-line"></div>

            <Card
              propHeading={"Is VC Funding Drying Up?"}
              propWording={
                "Private funding by VC firms is down 50% YOY. We take a look at what that means."
              }
            />
          </div>
        </div>
      </div>
      <div className="section-3">
        <div className="cards-2">
          <Cards2
            propNumber={"01"}
            propImage={cardImage1}
            propHeading={"Reviving Retro PCs"}
            propWording={"What happens when old PCs are given modern upgrades?"}
          />
          <Cards2
            propNumber={"02"}
            propImage={cardImage2}
            propHeading={" Top 10 Laptops of 2022"}
            propWording={"Our best picks for various needs and budgets."}
          />
          <Cards2
            propNumber={"03"}
            propImage={cardImage3}
            propHeading={"The Growth of Gaming"}
            propWording={"How the pandemic has sparked fresh opportunities."}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
