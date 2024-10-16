// https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl

import Navbar from "./components/navbar";
import HeroImage from "./images/image-web-3-mobile.jpg";
import HeroDesktopImage from "./images/image-web-3-desktop.jpg";
import NewSection from "./components/NewSection";
import ShowCard from "./components/CardSection";

import Card1 from "./images/image-retro-pcs.jpg";
import Card2 from "./images/image-top-laptops.jpg";
import Card3 from "./images/image-gaming-growth.jpg";

function App() {
  return (
    <div className="font-customFont lg:p-8 xl:px-[200px] xl:pt-4">
      <div className="navbar">
        <Navbar />
      </div>
      <div className="desktop-flex lg:flex lg:px-8 xl:px-18 pt-2">
        <div className="hero-section">
          <div className="img-container px-4">
            <img className="lg:hidden" src={HeroImage} alt="homepage" />
            <img
              className="hidden lg:block w-full h-[400px] object-cover"
              src={HeroDesktopImage}
              alt="homepage"
            />
          </div>
          <div className="desktop-flex lg:grid grid-cols-2 lg:mt-8">
            <div className="hero-heading px-8 py-2 mt-4 lg:cols-span-2">
              <h1 className="text-5xl w-[80%] font-bold capitalize text-very-dark-blue lg:w-full">
                The bright future of web 3.0?
              </h1>
            </div>
            <div className="desktop-flex">
              <div className="hero-wording px-8 py-2 text-lg text-dark-grayish-blue">
                <p>
                  We dive into the next evolution of the web that claims to put
                  the power of the platforms back into the hands of the people.
                  But is it really fulfilling its promise?
                </p>
              </div>
              <div className="hero-button px-8 py-2 mb-4">
                <button className="uppercase font-lg bg-soft-red px-8 py-2 font-bold text-very-dark-blue">
                  Read More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="new-section px-8 py-9 bg-very-dark-blue">
          <div className="heading">
            <h1 className="mb-4 text-4xl font-semibold text-soft-orange">
              New
            </h1>
          </div>
          <div className="new space-y-5">
            <NewSection
              heading={"New Hydrogen VS Electric Cars"}
              wording={"Will hydrogen-fueled cars ever catch up to EVs?"}
            />
            <div className="w-full h-[2px] bg-off-white"></div>
            <NewSection
              heading={"The Downsides of AI Artistry"}
              wording={
                "What are the possible adverse effects of on-demand AI image generation?"
              }
            />
            <div className="w-full h-[2px] bg-off-white"></div>
            <NewSection
              heading={"Is VC Funding Drying Up?"}
              wording={
                "Private funding by VC firms is down 50% YOY. We take a look at what that means."
              }
            />
          </div>
        </div>
      </div>
      <div className="card-section lg:px-8">
        <div className="card-list p-8 space-y-2 lg:space-y-0 lg:grid grid-cols-3 lg:space-x-8">
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
