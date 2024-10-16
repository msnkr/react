// https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl

import Navbar from "./components/navbar";
import HeroImage from "./images/image-web-3-mobile.jpg";
import NewSection from "./components/NewSection";
import ShowCard from "./components/CardSection";

import Card1 from "./images/image-retro-pcs.jpg";
import Card2 from "./images/image-top-laptops.jpg";
import Card3 from "./images/image-gaming-growth.jpg";

function App() {
  return (
    <div className="font-customFont">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="hero-section">
        <div className="img-container px-4">
          <img src={HeroImage} alt="homepage" />
        </div>
        <div className="hero-heading px-8 py-2">
          <h1 className="text-5xl w-[80%] font-bold capitalize">
            The bright future of web 3.0?
          </h1>
        </div>
        <div className="hero-wording px-8 py-2 text-lg text-gray-400">
          <p>
            We dive into the next evolution of the web that claims to put the
            power of the platforms back into the hands of the people. But is it
            really fulfilling its promise?
          </p>
        </div>
        <div className="hero-button px-8 py-2">
          <button className="uppercase font-lg bg-orange-600 px-8 py-2 font-bold">
            Read More
          </button>
        </div>
      </div>
      <div className="new-section p-8 bg-gray-300">
        <div className="heading">
          <h1 className="mb-4 text-4xl font-semibold">New</h1>
        </div>
        <div className="new space-y-5">
          <NewSection
            heading={"New Hydrogen VS Electric Cars"}
            wording={"Will hydrogen-fueled cars ever catch up to EVs?"}
          />
          <div className="w-full h-[2px] bg-black"></div>
          <NewSection
            heading={"The Downsides of AI Artistry"}
            wording={
              "What are the possible adverse effects of on-demand AI image generation?"
            }
          />
          <div className="w-full h-[2px] bg-black"></div>
          <NewSection
            heading={"Is VC Funding Drying Up?"}
            wording={
              "Private funding by VC firms is down 50% YOY. We take a look at what that means."
            }
          />
        </div>
      </div>
      <div className="card-section">
        <div className="card-list p-8 space-y-2">
          <ShowCard
            img={Card1}
            number={"01"}
            title={"Reviving Retro PCs"}
            text={"What happens when old PCs are given modern upgrades?"}
          />
          <ShowCard
            img={Card2}
            number={"02"}
            title={"Top 10 Laptops of 2022"}
            text={"Our best picks for various needs and budgets."}
          />
          <ShowCard
            img={Card3}
            number={"03"}
            title={"The Growth of Gaming"}
            text={"How the pandemic has sparked fresh opportunities."}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
